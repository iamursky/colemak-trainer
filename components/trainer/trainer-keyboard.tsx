import type { FC, HTMLProps } from "react";

import clsx from "clsx";

import { TrainerKeyboardButton } from "./trainer-keyboard-button";

export type TTrainerKeyboardProps = HTMLProps<HTMLDivElement> & {
  word: string;
  index: number;
};

export const TrainerKeyboard: FC<TTrainerKeyboardProps> = ({
  word,
  index,
  className,
  ...props
}) => (
  <div className={clsx("flex gap-16", className)} {...props}>
    <div className="grid grid-cols-5 grid-rows-3 gap-3">
      <TrainerKeyboardButton active={word[index] === "q"} character="Q" />
      <TrainerKeyboardButton active={word[index] === "w"} character="W" />
      <TrainerKeyboardButton active={word[index] === "f"} character="F" />
      <TrainerKeyboardButton active={word[index] === "p"} character="P" />
      <TrainerKeyboardButton active={word[index] === "b"} character="B" />

      <TrainerKeyboardButton active={word[index] === "a"} character="A" />
      <TrainerKeyboardButton active={word[index] === "r"} character="R" />
      <TrainerKeyboardButton active={word[index] === "s"} character="S" />
      <TrainerKeyboardButton active={word[index] === "t"} character="T" />
      <TrainerKeyboardButton active={word[index] === "g"} character="G" />

      <TrainerKeyboardButton active={word[index] === "z"} character="Z" />
      <TrainerKeyboardButton active={word[index] === "x"} character="X" />
      <TrainerKeyboardButton active={word[index] === "c"} character="C" />
      <TrainerKeyboardButton active={word[index] === "d"} character="D" />
      <TrainerKeyboardButton active={word[index] === "v"} character="V" />
    </div>

    <div className="grid grid-cols-5 grid-rows-3 gap-3">
      <TrainerKeyboardButton active={word[index] === "j"} character="J" />
      <TrainerKeyboardButton active={word[index] === "l"} character="L" />
      <TrainerKeyboardButton active={word[index] === "u"} character="U" />
      <TrainerKeyboardButton active={word[index] === "y"} character="Y" />
      <TrainerKeyboardButton />

      <TrainerKeyboardButton active={word[index] === "m"} character="M" />
      <TrainerKeyboardButton active={word[index] === "n"} character="N" />
      <TrainerKeyboardButton active={word[index] === "e"} character="E" />
      <TrainerKeyboardButton active={word[index] === "i"} character="I" />
      <TrainerKeyboardButton active={word[index] === "o"} character="O" />

      <TrainerKeyboardButton active={word[index] === "k"} character="K" />
      <TrainerKeyboardButton active={word[index] === "h"} character="H" />
      <TrainerKeyboardButton active={word[index] === ","} character="," />
      <TrainerKeyboardButton active={word[index] === "."} character="." />
      <TrainerKeyboardButton />
    </div>
  </div>
);
