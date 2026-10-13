import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";
import * as babel from "@babel/core";
import transformTypescript from "@babel/plugin-transform-typescript";
import vueJsx from "@vue/babel-plugin-jsx";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [reactRepo, vueRepo, commonRepo] = process.argv.slice(2);
if (!reactRepo || !vueRepo || !commonRepo)
  throw new Error(
    "Usage: npm run build:fixtures -- <react-repo> <vue-next-repo> <common-repo>",
  );
const baseline = "f307a332775af54e3797b4b9c80d48ebcda8e5bb";
const frameworks = [
  {
    framework: "react",
    repo: reactRepo,
    sha: "d31df33c40a774d435fd00580f72d99f4d271cf0",
    model: "tree-v1",
    fix: "d4f2e934bc5ff97e4198cc9ddeadbbc4b75010a8",
    entry: "tree/Tree.tsx",
    external: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "lodash-es",
      "tdesign-icons-react",
      "react-transition-group",
    ],
  },
  {
    framework: "vue-next",
    repo: vueRepo,
    sha: "9005d97748a73eb02b5667e5f25a5ad3f3c1a65c",
    model: "tree",
    fix: "2d5d75f7373854b8590f9e1ef2e5fe8467350f9c",
    entry: "tree/tree.tsx",
    external: ["vue", "lodash-es", "tdesign-icons-vue-next"],
  },
];
const output = path.join(root, ".fixtures");
fs.mkdirSync(output, { recursive: true });
const temporary = fs.realpathSync(
  fs.mkdtempSync(path.join(os.tmpdir(), "tree-ab-fixtures-")),
);
const archive = (repo, sha, destination, files) => {
  fs.mkdirSync(destination, { recursive: true });
  const bytes = execFileSync("git", ["-C", repo, "archive", sha, ...files], {
    maxBuffer: 128 * 1024 * 1024,
  });
  execFileSync("tar", ["-xf", "-", "-C", destination], { input: bytes });
};
const sha256 = (bytes) =>
  crypto.createHash("sha256").update(bytes).digest("hex");
function inventory(directory, prefix = "") {
  const files = {};
  for (const name of fs.readdirSync(directory).sort()) {
    const relative = path.posix.join(prefix, name);
    const full = path.join(directory, name);
    if (fs.statSync(full).isDirectory())
      Object.assign(files, inventory(full, relative));
    else files[relative] = sha256(fs.readFileSync(full));
  }
  return files;
}
const manifest = {
  release: "tree-ab-deps-v1",
  baselineCommon: baseline,
  distributionCommit: "2dbefcbfb645572d00994638e70f34ba11244ba1",
  fixtures: [],
};
try {
  for (const framework of frameworks) {
    framework.external.push(
      "classnames",
      "mitt",
      "dayjs",
      "hoist-non-react-statics",
      "@popperjs/core",
      "react-fast-compare",
      "raf",
    );
    const allowedChanges = [
      `js/${framework.model}/tree-node.ts`,
      `js/${framework.model}/tree-store.ts`,
    ];
    let beforeSource;
    for (const variant of ["before", "after"]) {
      const source = path.join(temporary, framework.framework, variant);
      archive(
        framework.repo,
        framework.sha,
        source,
        framework.framework === "vue-next"
          ? ["packages/components", "packages/shared"]
          : ["packages/components"],
      );
      const common = path.join(source, "packages/common");
      archive(commonRepo, baseline, common, ["js", "style"]);
      // Apply exactly these two fixed files; all other common code stays at the baseline.
      if (variant === "after")
        archive(commonRepo, framework.fix, common, allowedChanges);
      const sourceFiles = inventory(source);
      const differences =
        variant === "after"
          ? [
              ...new Set([
                ...Object.keys(beforeSource),
                ...Object.keys(sourceFiles),
              ]),
            ]
              .filter((file) => beforeSource[file] !== sourceFiles[file])
              .sort()
          : [];
      if (variant === "before") beforeSource = sourceFiles;
      else if (
        JSON.stringify(differences) !==
        JSON.stringify(
          allowedChanges.map((file) => `packages/common/${file}`).sort(),
        )
      )
        throw new Error(`Unexpected A/B source differences: ${differences}`);
      const provenance = {
        framework: framework.framework,
        variant,
        componentCommit: framework.sha,
        baselineCommon: baseline,
        fixCommit: framework.fix,
        changedSourceFiles: differences,
        sourceFileCount: Object.keys(sourceFiles).length,
        sourceInventorySha256: sha256(JSON.stringify(sourceFiles)),
        buildTools: { esbuild: esbuild.version, babel: babel.version },
      };
      fs.symlinkSync(
        path.join(root, "node_modules"),
        path.join(source, "node_modules"),
        "dir",
      );
      const packageDirectory = path.join(
        temporary,
        "packages",
        `${framework.framework}-${variant}`,
      );
      fs.mkdirSync(packageDirectory, { recursive: true });
      const packageJson = {
        name: `@tdesign-tree-ab/${framework.framework}`,
        version: `0.0.0-${(variant === "before" ? baseline : framework.fix).slice(0, 8)}`,
        description:
          "Frozen real TDesign Tree component for a controlled common-fix A/B comparison",
        type: "module",
        main: "./index.js",
        exports: "./index.js",
        license: "MIT",
        peerDependencies: Object.fromEntries(
          framework.external
            .filter((name) => name !== "react/jsx-runtime")
            .map((name) => [name, "*"]),
        ),
        repository: "https://github.com/RSS1102/tdesign-tree-disabled-ab",
      };
      const plugins = [
        {
          name: "frozen-source",
          setup(build) {
            build.onResolve({ filter: /^@tdesign\/common-js\// }, (args) => {
              const file = path.join(
                common,
                "js",
                args.path.slice("@tdesign/common-js/".length),
              );
              for (const extension of ["", ".ts", "/index.ts"])
                if (
                  fs.existsSync(file + extension) &&
                  fs.statSync(file + extension).isFile()
                )
                  return { path: file + extension };
              throw new Error(`Unresolved common import: ${args.path}`);
            });
            build.onResolve(
              {
                filter:
                  /^@tdesign\/(shared-hooks|shared-utils|components|common-style)(\/|$)/,
              },
              (args) => {
                const aliases = {
                  "@tdesign/shared-hooks": path.join(
                    source,
                    "packages/shared/hooks",
                  ),
                  "@tdesign/shared-utils": path.join(
                    source,
                    "packages/shared/utils",
                  ),
                  "@tdesign/components": path.join(
                    source,
                    "packages/components",
                  ),
                  "@tdesign/common-style": path.join(common, "style"),
                };
                const alias = Object.keys(aliases).find(
                  (name) =>
                    args.path === name || args.path.startsWith(name + "/"),
                );
                const file = aliases[alias] + args.path.slice(alias.length);
                for (const extension of [
                  "",
                  ".ts",
                  ".tsx",
                  "/index.ts",
                  "/index.tsx",
                ])
                  if (
                    fs.existsSync(file + extension) &&
                    fs.statSync(file + extension).isFile()
                  )
                    return { path: file + extension };
                throw new Error(`Unresolved workspace import: ${args.path}`);
              },
            );
            build.onLoad({ filter: /\.less$/ }, () => ({
              contents: "",
              loader: "js",
            }));
            if (framework.framework === "vue-next")
              build.onLoad({ filter: /\.[jt]sx$/ }, async (args) => {
                const result = await babel.transformAsync(
                  fs.readFileSync(args.path, "utf8"),
                  {
                    filename: args.path,
                    babelrc: false,
                    configFile: false,
                    plugins: [
                      [
                        transformTypescript,
                        { isTSX: true, allExtensions: true },
                      ],
                      [vueJsx, { mergeProps: false }],
                    ],
                  },
                );
                return {
                  contents: result.code,
                  loader: "js",
                  resolveDir: path.dirname(args.path),
                };
              });
          },
        },
      ];
      const result = await esbuild.build({
        absWorkingDir: source,
        entryPoints: [
          path.join(source, "packages/components", framework.entry),
        ],
        outfile: path.join(packageDirectory, "index.js"),
        bundle: true,
        format: "esm",
        platform: "browser",
        external: framework.external,
        jsx: "transform",
        tsconfigRaw: {},
        define: { __VERSION__: JSON.stringify("AB-source") },
        plugins,
        metafile: true,
      });
      // Confirm identical build inputs, including bundled third-party modules, within each pair.
      const inputs = Object.fromEntries(
        Object.keys(result.metafile.inputs)
          .sort()
          .map((file) => [
            fs
              .realpathSync(path.resolve(source, file))
              .startsWith(source + path.sep)
              ? path.relative(
                  source,
                  fs.realpathSync(path.resolve(source, file)),
                )
              : fs.realpathSync(path.resolve(source, file)),
            sha256(fs.readFileSync(path.resolve(source, file))),
          ]),
      );
      if (variant === "before") framework.beforeInputs = inputs;
      else {
        const inputDifferences = [
          ...new Set([
            ...Object.keys(framework.beforeInputs),
            ...Object.keys(inputs),
          ]),
        ]
          .filter((file) => framework.beforeInputs[file] !== inputs[file])
          .sort();
        if (JSON.stringify(inputDifferences) !== JSON.stringify(differences))
          throw new Error(
            `Unexpected bundled-input differences: ${inputDifferences}`,
          );
      }
      fs.writeFileSync(
        path.join(packageDirectory, "package.json"),
        JSON.stringify(packageJson, null, 2) + "\n",
      );
      fs.writeFileSync(
        path.join(packageDirectory, "provenance.json"),
        JSON.stringify(provenance, null, 2) + "\n",
      );
      fs.copyFileSync(
        path.join(root, "LICENSE"),
        path.join(packageDirectory, "LICENSE"),
      );
      const packed = JSON.parse(
        execFileSync("npm", ["pack", "--json", "--pack-destination", output], {
          cwd: packageDirectory,
          encoding: "utf8",
          env: {
            ...process.env,
            npm_config_cache: path.join(temporary, "npm-cache"),
          },
        }),
      )[0];
      manifest.fixtures.push({
        ...provenance,
        packageName: packageJson.name,
        version: packageJson.version,
        tarball: packed.filename,
        integrity: packed.integrity,
        url: `https://cdn.jsdelivr.net/gh/RSS1102/tdesign-tree-disabled-ab@${manifest.distributionCommit}/${packed.filename}`,
      });
      console.log(`${framework.framework} ${variant}: ${packed.filename}`);
    }
  }
  fs.writeFileSync(
    path.join(root, "fixtures.json"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
  console.log(
    "Verified: each A/B source and build-input pair differs in exactly the two common fix files.",
  );
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
