import type { FC, HTMLProps } from "react";

import clsx from "clsx";

type TTrainerKeyboardButtonProps = HTMLProps<HTMLElement> & {
  active?: boolean;
  character?: string;
};

export const TrainerKeyboardButton: FC<TTrainerKeyboardButtonProps> = ({ active, character }) => (
  <kbd
    className={clsx(
      "flex h-12 w-12 items-center justify-center rounded-md border-2 border-neutral-800 text-neutral-100",
      { "scale-125 bg-neutral-800": active },
    )}
  >
    {character}
  </kbd>
);
