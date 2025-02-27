import type { FC, HTMLProps } from "react";

import clsx from "clsx";

export type TTrainerWordProps = HTMLProps<HTMLParagraphElement> & {
  word: string;
  index: number;
};

export const TrainerWord: FC<TTrainerWordProps> = ({ word, index, className, ...props }) => (
  <p className={clsx("flex", className)} {...props}>
    {Array.from(word).map((char, i) => (
      <span key={`${char}@${i}`} className={clsx({ "text-neutral-700": index > i })}>
        {char}
      </span>
    ))}
  </p>
);
