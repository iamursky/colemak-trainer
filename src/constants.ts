import type { TTrainerLayout, TTrainerLayoutMatrix } from "./types";

export const LAYOUTS: TTrainerLayout[] = ["colemak-dh", "qwerty"];

export const LAYOUTS_LABELS: Record<TTrainerLayout, string> = {
  "colemak-dh": "Colemak Mod-DH",
  qwerty: "QWERTY",
};

export const LAYOUTS_MATRICES: Record<TTrainerLayout, TTrainerLayoutMatrix> = {
  "colemak-dh": [
    ["q", "w", "f", "p", "b", "a", "r", "s", "t", "g", "z", "x", "c", "d", "v"],
    ["j", "l", "u", "y", "", "m", "n", "e", "i", "o", "k", "h", ",", ".", ""],
  ],
  qwerty: [
    ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"],
    ["y", "u", "i", "o", "p", "h", "j", "k", "l", "", "n", "m", ",", ".", ""],
  ],
};
