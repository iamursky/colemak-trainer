"use client";

import type { FC, HTMLProps } from "react";

import { clsx } from "clsx";
import { useEffect, useState } from "react";

import { generateWord } from "@/utils/generateWord";

export type TTrainerProps = HTMLProps<HTMLDivElement> & {
  initialWord: string;
};

export const Trainer: FC<TTrainerProps> = ({ initialWord, className, ...props }) => {
  const [word, setWord] = useState<string>(initialWord);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key !== word[index]) return;

      const nextIndex = index + 1;

      if (nextIndex === word.length) {
        setIndex(0);
        setWord(generateWord());
      } else setIndex(nextIndex);
    }

    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [word, index]);

  return (
    <div className={clsx("flex flex-col items-center justify-center", className)} {...props}>
      <p className="mb-16 flex text-4xl text-neutral-100">
        {Array.from(word).map((char, i) => (
          <span key={`${char}@${i}`} className={clsx({ "text-neutral-700": index > i })}>
            {char}
          </span>
        ))}
      </p>

      <div className="flex gap-16">
        {LAYOUT_MATRIX.map((hand, handIndex) => (
          <div key={handIndex} className="grid grid-cols-5 grid-rows-3 gap-3">
            {hand.map((letter) => (
              <kbd
                key={letter}
                className={clsx(
                  "flex h-12 w-12 items-center justify-center rounded-md border-2 border-neutral-800 text-neutral-100 uppercase",
                  { "scale-125 bg-neutral-800": isLetterActive(letter, word, index) },
                )}
              >
                {letter}
              </kbd>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

function isLetterActive(letter: string, word: string, index: number) {
  return word[index] === letter;
}

const LAYOUT_MATRIX = [
  ["q", "w", "f", "p", "b", "a", "r", "s", "t", "g", "z", "x", "c", "d", "v"] as const,
  ["j", "l", "u", "y", "", "m", "n", "e", "i", "o", "k", "h", ",", ".", ""] as const,
] as const;
