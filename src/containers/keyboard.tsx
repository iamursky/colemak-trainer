import type { FC } from "react";

import { createStyles } from "@mantine/core";
import { KeyboardButton } from "@/containers/keyboard-button";
import { useEffect } from "react";
import { useKeyboard } from "@/states/keyboard";

export type TKeyboardProps = {
  className?: string;
};

export const Keyboard: FC<TKeyboardProps> = ({ className }) => {
  const { classes, cx } = useStyles();
  const keyboard = useKeyboard();

  useEffect(() => {
    document.addEventListener("keydown", keyboard.handleKeyDown);
    document.addEventListener("keyup", keyboard.handleKeyUp);

    return () => {
      document.removeEventListener("keydown", keyboard.handleKeyDown);
      document.removeEventListener("keyup", keyboard.handleKeyUp);
    };
  });

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
        <KeyboardButton />
      </div>

      <div className={classes.right}>
        <KeyboardButton keyboardKey="J" />
        <KeyboardButton keyboardKey="L" />
        <KeyboardButton keyboardKey="U" />
        <KeyboardButton keyboardKey="Y" />
        <KeyboardButton keyboardKey="K" />

        <KeyboardButton keyboardKey="M" />
        <KeyboardButton keyboardKey="N" />
        <KeyboardButton keyboardKey="E" />
        <KeyboardButton keyboardKey="I" />
        <KeyboardButton keyboardKey="O" />

        <KeyboardButton />
        <KeyboardButton keyboardKey="H" />
        <KeyboardButton keyboardKey="," />
        <KeyboardButton keyboardKey="." />
        <KeyboardButton keyboardKey="V" />
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
