import type { FC } from "react";

import { createStyles } from "@mantine/core";
import { KeyboardButton } from "@/components/keyboard-button";
import { useEffect, useState } from "react";

export type TKeyboardProps = {
  className?: string;
};

export const Keyboard: FC<TKeyboardProps> = ({ className }) => {
  const { classes, cx } = useStyles();

  const [keyStates, setKeyStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyStates((states) => ({ ...states, [e.key]: true }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeyStates((states) => ({ ...states, [e.key]: false }));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <div className={cx(classes.keyboard, className)}>
      <div className={classes.left}>
        <KeyboardButton keyboardKey="Q" active={isKeyDown(keyStates, "q")} />
        <KeyboardButton keyboardKey="W" active={isKeyDown(keyStates, "w")} />
        <KeyboardButton keyboardKey="F" active={isKeyDown(keyStates, "f")} />
        <KeyboardButton keyboardKey="P" active={isKeyDown(keyStates, "p")} />
        <KeyboardButton keyboardKey="B" active={isKeyDown(keyStates, "b")} />

        <KeyboardButton keyboardKey="A" active={isKeyDown(keyStates, "a")} />
        <KeyboardButton keyboardKey="R" active={isKeyDown(keyStates, "r")} />
        <KeyboardButton keyboardKey="S" active={isKeyDown(keyStates, "s")} />
        <KeyboardButton keyboardKey="T" active={isKeyDown(keyStates, "t")} />
        <KeyboardButton keyboardKey="G" active={isKeyDown(keyStates, "g")} />

        <KeyboardButton keyboardKey="Z" active={isKeyDown(keyStates, "z")} />
        <KeyboardButton keyboardKey="X" active={isKeyDown(keyStates, "x")} />
        <KeyboardButton keyboardKey="C" active={isKeyDown(keyStates, "c")} />
        <KeyboardButton keyboardKey="D" active={isKeyDown(keyStates, "d")} />
        <KeyboardButton />
      </div>

      <div className={classes.right}>
        <KeyboardButton keyboardKey="J" active={isKeyDown(keyStates, "j")} />
        <KeyboardButton keyboardKey="L" active={isKeyDown(keyStates, "l")} />
        <KeyboardButton keyboardKey="U" active={isKeyDown(keyStates, "u")} />
        <KeyboardButton keyboardKey="Y" active={isKeyDown(keyStates, "y")} />
        <KeyboardButton keyboardKey="K" active={isKeyDown(keyStates, "k")} />

        <KeyboardButton keyboardKey="M" active={isKeyDown(keyStates, "m")} />
        <KeyboardButton keyboardKey="N" active={isKeyDown(keyStates, "n")} />
        <KeyboardButton keyboardKey="E" active={isKeyDown(keyStates, "e")} />
        <KeyboardButton keyboardKey="I" active={isKeyDown(keyStates, "i")} />
        <KeyboardButton keyboardKey="O" active={isKeyDown(keyStates, "o")} />

        <KeyboardButton />
        <KeyboardButton keyboardKey="H" active={isKeyDown(keyStates, "h")} />
        <KeyboardButton keyboardKey="," active={isKeyDown(keyStates, ",")} />
        <KeyboardButton keyboardKey="." active={isKeyDown(keyStates, ".")} />
        <KeyboardButton keyboardKey="V" active={isKeyDown(keyStates, "v")} />
      </div>
    </div>
  );
};

function isKeyDown(keyStates: Record<string, boolean>, key: string) {
  return keyStates[key] || keyStates[key.toUpperCase()];
}

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
