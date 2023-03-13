import type { FC } from "react";

import { createStyles } from "@mantine/core";
import { KeyboardButton } from "@/containers/keyboard-button";
import { useEffect } from "react";
import { useGlobalState } from "@/state";

export type TKeyboardProps = {
  className?: string;
};

export const Keyboard: FC<TKeyboardProps> = ({ className }) => {
  const { handleKeyDown, handleKeyUp } = useGlobalState();
  const { classes, cx } = useStyles();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className={cx(classes.keyboard, className)}>
      <div className={classes.left}>
        <KeyboardButton keyboardKey="Q" />
        <KeyboardButton keyboardKey="W" />
        <KeyboardButton keyboardKey="F" />
        <KeyboardButton keyboardKey="P" />
        <KeyboardButton keyboardKey="B" />

        <KeyboardButton keyboardKey="A" />
        <KeyboardButton keyboardKey="R" />
        <KeyboardButton keyboardKey="S" />
        <KeyboardButton keyboardKey="T" />
        <KeyboardButton keyboardKey="G" />

        <KeyboardButton keyboardKey="Z" />
        <KeyboardButton keyboardKey="X" />
        <KeyboardButton keyboardKey="C" />
        <KeyboardButton keyboardKey="D" />
        <KeyboardButton keyboardKey="V" />
      </div>

      <div className={classes.right}>
        <KeyboardButton keyboardKey="J" />
        <KeyboardButton keyboardKey="L" />
        <KeyboardButton keyboardKey="U" />
        <KeyboardButton keyboardKey="Y" />
        <KeyboardButton />

        <KeyboardButton keyboardKey="M" />
        <KeyboardButton keyboardKey="N" />
        <KeyboardButton keyboardKey="E" />
        <KeyboardButton keyboardKey="I" />
        <KeyboardButton keyboardKey="O" />

        <KeyboardButton keyboardKey="K" />
        <KeyboardButton keyboardKey="H" />
        <KeyboardButton keyboardKey="," />
        <KeyboardButton keyboardKey="." />
        <KeyboardButton />
      </div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  keyboard: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "64px",
  },

  left: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "8px",
  },

  right: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "8px",
  },
}));
