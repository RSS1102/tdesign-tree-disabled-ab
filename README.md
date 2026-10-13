# React / Vue Next Tree A/B comparison

Switch between React (`tree-v1`) and Vue Next (`tree`). Each framework displays before/after controlled Tree components for `all`, `parentFirst` and `onlyLeaf`. The data, CSS and shared runtime dependencies are identical. Vue Next is shown by default.

## Fixed dependencies

The demo imports four dependencies instead of committing compiled component bundles:

| Dependency | Fixed package version | Component source | Common model |
|---|---|---|---|
| `react-tree-before` | `0.0.0-f307a332` | React `d31df33c` | Baseline `f307a332`, `tree-v1` |
| `react-tree-after` | `0.0.0-d4f2e934` | Same React source | Same baseline, two fixed files from `d4f2e934` |
| `vue-next-tree-before` | `0.0.0-f307a332` | Vue Next `9005d977` | Baseline `f307a332`, `tree` |
| `vue-next-tree-after` | `0.0.0-2d5d75f7` | Same Vue Next source | Same baseline, two fixed files from `2d5d75f7` |

These are **Tree-only sandbox fixture packages built from real TDesign source**, not official npm releases. They contain the real Tree, Checkbox and controlled-value code. Their package names are `@tdesign-tree-ab/react` and `@tdesign-tree-ab/vue-next`; `package.json` installs each version under a distinct dependency name using `file:.fixtures/*.tgz` dependencies.

Assets: [fixed dependency commit `2dbefcbf`](https://github.com/RSS1102/tdesign-tree-disabled-ab/tree/2dbefcbfb645572d00994638e70f34ba11244ba1). The same bytes are also archived in [tree-ab-deps-v1](https://github.com/RSS1102/tdesign-tree-disabled-ab/releases/tag/tree-ab-deps-v1). The setup script downloads the exact asset bytes from a CDN URL pinned to that commit, verifies SHA-512, and then runs `npm ci`. WebContainer npm downloads of external tarballs reset connections; its native fetch works. `fixtures.json` pins the download URLs and SHA-512 integrity; `package-lock.json` pins the local tarball paths, package versions and the same integrity. Shared React, Vue, icons and utility packages are also pinned to exact versions. There are no install scripts in the fixture packages.

## Only the common fix differs

For each framework, the builder archives the **same component commit** and the **same baseline common commit** twice. For B, it replaces only:

- React: `js/tree-v1/tree-node.ts`, `js/tree-v1/tree-store.ts`.
- Vue Next: `js/tree/tree-node.ts`, `js/tree/tree-store.ts`.

It compares every source-file hash and every bundled-input hash, and rejects any other difference. All other common files, framework code and shared styles remain unchanged. The resulting package bytes were reproduced identically in two builds.

Full commits, source inventory hashes, changed files, package versions and integrity are in `fixtures.json`. Each installed package also contains `provenance.json`. `.fixtures` is generated, ignored by Git, and never committed on the main branch. The original four large `src/*before.js` / `src/*after.js` files have been removed.

## Run and verify

```sh
npm run setup
npm run dev
npm test
npm run build
```

`npm test` runs 22 real controlled-component tests: 11 React and 11 Vue Next. Both suites reproduce the original problem in A, then verify parent checking/cancellation, enabled children deriving partial/full selection, and explicitly selected disabled values in B.

To rebuild dependency assets, use local checkouts containing the exact commits recorded above:

```sh
npm run build:fixtures -- /path/to/tdesign-react /path/to/tdesign-vue-next /path/to/tdesign-common
```

This produces `.fixtures/*.tgz` and updates the provenance manifest; it does not modify the input repositories. Dependency assets are fixed: future package changes must use a new asset commit, release tag and locked integrity values.

## Expected behavior

P has enabled children A/B and disabled, unchecked D. Click P, or select A and then B:

| Mode | A: P stays half selected | B: P becomes fully selected |
|---|---|---|
| all | `["A","B"]` | `["P","A","B"]` |
| parentFirst | `["A","B"]` | `["P"]` |
| onlyLeaf | `["A","B"]` | `["A","B"]` |

Each real `onChange` result is immediately fed back as `value`. Click P again to cancel; D remains disabled and unchecked. Use reset before another sequence.

Common fix: [#2732](https://github.com/Tencent/tdesign-common/pull/2732), React integration: [#4423](https://github.com/Tencent/tdesign-react/pull/4423), Vue Next integration: [#6999](https://github.com/Tencent/tdesign-vue-next/pull/6999).

TDesign source is distributed under the MIT license; see LICENSE.
