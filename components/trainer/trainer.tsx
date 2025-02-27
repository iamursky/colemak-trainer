"use client";

import { FC, HTMLProps, useEffect, useState } from "react";

import { generateWord } from "./utils";
import { TrainerKeyboard } from "./trainer-keyboard";
import { TrainerWord } from "./trainer-word";
import clsx from "clsx";

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
  });

  return (
    <div className={clsx("flex flex-col items-center justify-center", className)} {...props}>
      <TrainerWord word={word} index={index} className="mb-16 text-4xl" />
      <TrainerKeyboard word={word} index={index} />
    </div>
  );
};
