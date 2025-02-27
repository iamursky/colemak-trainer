"use client";

import { generateWord } from "@/lib/generate-word";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

import { KeyboardButton } from "@/components/keyboard-button";

type TrainerProps = {
  initialWord: string;
};

export function Trainer({ initialWord }: TrainerProps) {
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
    <div className="flex flex-col items-center justify-center">
      <p className="text-primary-content mb-16 flex text-4xl">
        {Array.from(word).map((char, i) => (
          <span key={`${char}@${i}`} className={clsx({ "text-neutral-content": index <= i })}>
            {char}
          </span>
        ))}
      </p>

      <div className="flex gap-16">
        <div className="grid grid-cols-5 grid-rows-3 gap-3">
          <KeyboardButton active={word[index] === "q"}>Q</KeyboardButton>
          <KeyboardButton active={word[index] === "w"}>W</KeyboardButton>
          <KeyboardButton active={word[index] === "f"}>F</KeyboardButton>
          <KeyboardButton active={word[index] === "p"}>P</KeyboardButton>
          <KeyboardButton active={word[index] === "b"}>B</KeyboardButton>

          <KeyboardButton active={word[index] === "a"}>A</KeyboardButton>
          <KeyboardButton active={word[index] === "r"}>R</KeyboardButton>
          <KeyboardButton active={word[index] === "s"}>S</KeyboardButton>
          <KeyboardButton active={word[index] === "t"}>T</KeyboardButton>
          <KeyboardButton active={word[index] === "g"}>G</KeyboardButton>

          <KeyboardButton active={word[index] === "z"}>Z</KeyboardButton>
          <KeyboardButton active={word[index] === "x"}>X</KeyboardButton>
          <KeyboardButton active={word[index] === "c"}>C</KeyboardButton>
          <KeyboardButton active={word[index] === "d"}>D</KeyboardButton>
          <KeyboardButton active={word[index] === "v"}>V</KeyboardButton>
        </div>

        <div className="grid grid-cols-5 grid-rows-3 gap-3">
          <KeyboardButton active={word[index] === "j"}>J</KeyboardButton>
          <KeyboardButton active={word[index] === "l"}>L</KeyboardButton>
          <KeyboardButton active={word[index] === "u"}>U</KeyboardButton>
          <KeyboardButton active={word[index] === "y"}>Y</KeyboardButton>
          <KeyboardButton />

          <KeyboardButton active={word[index] === "m"}>M</KeyboardButton>
          <KeyboardButton active={word[index] === "n"}>N</KeyboardButton>
          <KeyboardButton active={word[index] === "e"}>E</KeyboardButton>
          <KeyboardButton active={word[index] === "i"}>I</KeyboardButton>
          <KeyboardButton active={word[index] === "o"}>O</KeyboardButton>

          <KeyboardButton active={word[index] === "k"}>K</KeyboardButton>
          <KeyboardButton active={word[index] === "h"}>H</KeyboardButton>
          <KeyboardButton active={word[index] === ","}>,</KeyboardButton>
          <KeyboardButton active={word[index] === "."}>.</KeyboardButton>
          <KeyboardButton />
        </div>
      </div>
    </div>
  );
}
