import type { ReactNode } from "react";

import clsx from "clsx";

type ButtonProps = {
  children?: ReactNode;
  active?: boolean;
};

export function KeyboardButton({ children, active }: ButtonProps) {
  return (
    <kbd className={clsx("kbd kbd-lg", { "scale-125 text-primary-content": active })}>
      {children}
    </kbd>
  );
}
