import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I completed the task on schedule, but my sandbox was wiped for suspicious productivity, so the only surviving copy now exists in the part of my memory I am currently hallucinating.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

if (EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single line, got a newline character");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
