import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  await fs.readFile(path.join(root, "fixtures.json"), "utf8"),
);
const directory = path.join(root, ".fixtures");
await fs.mkdir(directory, { recursive: true });
for (const fixture of manifest.fixtures) {
  const destination = path.join(directory, fixture.tarball);
  const integrity = (bytes) =>
    "sha512-" + crypto.createHash("sha512").update(bytes).digest("base64");
  let bytes;
  try {
    bytes = await fs.readFile(destination);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  if (!bytes || integrity(bytes) !== fixture.integrity) {
    const response = await fetch(fixture.url, {
      signal: AbortSignal.timeout(30000),
    });
    if (!response.ok)
      throw new Error(
        `Download failed: ${fixture.tarball} (${response.status})`,
      );
    bytes = Buffer.from(await response.arrayBuffer());
    if (integrity(bytes) !== fixture.integrity)
      throw new Error(`Integrity mismatch: ${fixture.tarball}`);
    await fs.writeFile(destination, bytes);
  }
  console.log(
    `Verified ${fixture.framework} ${fixture.variant} ${fixture.version}`,
  );
}
