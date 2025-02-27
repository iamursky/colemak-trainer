import type { ReactNode } from "react";

import clsx from "clsx";

import { Button } from "@/components/ui/button";

type ButtonProps = {
  children?: ReactNode;
  active?: boolean;
};

export function KeyboardButton({ children, active }: ButtonProps) {
  return (
    <Button size="icon" className={clsx({ "scale-125": active })}>
      {children}
    </Button>
  );
}
