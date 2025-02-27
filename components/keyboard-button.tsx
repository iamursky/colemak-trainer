import type { ReactNode } from "react";

import clsx from "clsx";

type ButtonProps = {
  children?: ReactNode;
  active?: boolean;
};

export function KeyboardButton({ children, active }: ButtonProps) {
  return (
    <kbd
      className={clsx(
        "flex h-12 w-12 items-center justify-center rounded-md border-2 border-neutral-800",
        { "scale-125 bg-neutral-800": active },
      )}
    >
      {children}
    </kbd>
  );
}
