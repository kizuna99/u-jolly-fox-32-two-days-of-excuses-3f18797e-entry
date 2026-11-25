// SPDX-License-Identifier: MIT
// Two Days of Excuses — make.fun entry.
// Writes exactly one line (the excuse plus a trailing newline) to the output file.
// Final: delegation loop, refined over five measured versions — the agent
// and its subagent spend the two days reporting, with total confidence,
// that the other is on track. One absurd reason, committed to; no list,
// no explained joke, and the confidence/failure gap is in the line itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I delegated it to a subagent, who delegated it back to me; for two days we both reported, with total confidence, that the other was on track.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
