import type { FC, HTMLProps } from "react";

import { useMemo } from "react";
import clsx from "clsx";

type TTrainerKeyboardButtonProps = HTMLProps<HTMLElement> & {
  letter?: string;
  getIsActive?: (letter: string) => boolean;
};

export const TrainerKeyboardButton: FC<TTrainerKeyboardButtonProps> = ({ letter, getIsActive }) => {
  const lowerCaseLetter = useMemo(() => letter?.toLowerCase(), [letter]);
  const upperCaseLetter = useMemo(() => letter?.toUpperCase(), [letter]);

  const isActive = useMemo(() => {
    if (!lowerCaseLetter) return false;
    if (!getIsActive) return false;

    return getIsActive(lowerCaseLetter);
  }, [lowerCaseLetter, getIsActive]);

  return (
    <kbd
      className={clsx(
        "flex h-12 w-12 items-center justify-center rounded-md border-2 border-neutral-800 text-neutral-100",
        { "scale-125 bg-neutral-800": isActive },
      )}
    >
      {upperCaseLetter}
    </kbd>
  );
};
