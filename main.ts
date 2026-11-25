import { mkdirSync, writeFileSync } from "node:fs";

// Winner of the 8 -> 4 -> 2 -> 1 bracket: the room for silence hosts the loudest thing in an office.
const entry = "The quiet room's booked solid by people on speakerphone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
