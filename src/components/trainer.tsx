"use client";

import type { FC, HTMLProps } from "react";
import type { TTrainerLayout } from "@/types";

import { generateWord } from "@/utils";
import { LAYOUTS_MATRICES } from "@/constants";
import { TrainerKeyboardButton } from "@/components/trainer-keyboard-button";
import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

export type TTrainerProps = HTMLProps<HTMLDivElement> & {
  initialWord: string;
  layout: TTrainerLayout;
};

export const Trainer: FC<TTrainerProps> = ({ initialWord, layout, className, ...props }) => {
  const layoutMatrix = useMemo(() => LAYOUTS_MATRICES[layout], [layout]);

  const [word, setWord] = useState<string>(initialWord);
  const [index, setIndex] = useState<number>(0);

  const getIsActive = useCallback((letter: string) => word[index] === letter, [word, index]);

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
      <p className="mb-16 flex text-4xl text-neutral-100">
        {Array.from(word).map((char, i) => (
          <span key={`${char}@${i}`} className={clsx({ "text-neutral-700": index > i })}>
            {char}
          </span>
        ))}
      </p>

      <div className="flex gap-16">
        {layoutMatrix.map((hand, handIndex) => (
          <div key={handIndex} className="grid grid-cols-5 grid-rows-3 gap-3">
            {hand.map((key, keyIndex) => (
              <TrainerKeyboardButton
                letter={key}
                getIsActive={getIsActive}
                key={`${key}-${handIndex}-${keyIndex}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
