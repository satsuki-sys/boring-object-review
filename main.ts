// One-line review of the most boring everyday object: the doorstop.
// Writes the entry to /output/entry.txt (program/v1).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The doorstop has held this door open for ten years with perfect attendance and no name, which makes it the hardest-working employee in the building and the only one nobody can name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${[...entry].length} characters to /output/entry.txt`);
