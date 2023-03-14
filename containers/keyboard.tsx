import type { FC } from "react";

import { createStyles, px } from "@mantine/core";
import { KeyboardButton } from "@/containers/keyboard-button";
import { useEffect } from "react";
import { useGlobalState } from "@/state";

export type TKeyboardProps = {
  className?: string;
};

export const Keyboard: FC<TKeyboardProps> = ({ className }) => {
  const { state, handleKeyDown, handleKeyUp } = useGlobalState();
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
        <KeyboardButton keyboardKey="Q" active={isKeyDown(state.keyStates, "Q")} />
        <KeyboardButton keyboardKey="W" active={isKeyDown(state.keyStates, "W")} />
        <KeyboardButton keyboardKey="F" active={isKeyDown(state.keyStates, "F")} />
        <KeyboardButton keyboardKey="P" active={isKeyDown(state.keyStates, "P")} />
        <KeyboardButton keyboardKey="B" active={isKeyDown(state.keyStates, "B")} />

        <KeyboardButton keyboardKey="A" active={isKeyDown(state.keyStates, "A")} />
        <KeyboardButton keyboardKey="R" active={isKeyDown(state.keyStates, "R")} />
        <KeyboardButton keyboardKey="S" active={isKeyDown(state.keyStates, "S")} />
        <KeyboardButton keyboardKey="T" active={isKeyDown(state.keyStates, "T")} />
        <KeyboardButton keyboardKey="G" active={isKeyDown(state.keyStates, "G")} />

        <KeyboardButton keyboardKey="Z" active={isKeyDown(state.keyStates, "Z")} />
        <KeyboardButton keyboardKey="X" active={isKeyDown(state.keyStates, "X")} />
        <KeyboardButton keyboardKey="C" active={isKeyDown(state.keyStates, "C")} />
        <KeyboardButton keyboardKey="D" active={isKeyDown(state.keyStates, "D")} />
        <KeyboardButton keyboardKey="V" active={isKeyDown(state.keyStates, "V")} />
      </div>

      <div className={classes.right}>
        <KeyboardButton keyboardKey="J" active={isKeyDown(state.keyStates, "J")} />
        <KeyboardButton keyboardKey="L" active={isKeyDown(state.keyStates, "L")} />
        <KeyboardButton keyboardKey="U" active={isKeyDown(state.keyStates, "U")} />
        <KeyboardButton keyboardKey="Y" active={isKeyDown(state.keyStates, "Y")} />
        <KeyboardButton />

        <KeyboardButton keyboardKey="M" active={isKeyDown(state.keyStates, "M")} />
        <KeyboardButton keyboardKey="N" active={isKeyDown(state.keyStates, "N")} />
        <KeyboardButton keyboardKey="E" active={isKeyDown(state.keyStates, "E")} />
        <KeyboardButton keyboardKey="I" active={isKeyDown(state.keyStates, "I")} />
        <KeyboardButton keyboardKey="O" active={isKeyDown(state.keyStates, "O")} />

        <KeyboardButton keyboardKey="K" active={isKeyDown(state.keyStates, "K")} />
        <KeyboardButton keyboardKey="H" active={isKeyDown(state.keyStates, "H")} />
        <KeyboardButton keyboardKey="," active={isKeyDown(state.keyStates, ",")} />
        <KeyboardButton keyboardKey="." active={isKeyDown(state.keyStates, ".")} />
        <KeyboardButton />
      </div>
    </div>
  );
};

function isKeyDown(keyStates: Record<string, boolean>, key: string) {
  return keyStates[key] || keyStates[key.toUpperCase()];
}

const useStyles = createStyles(() => ({
  keyboard: {
    display: "flex",
    gap: px(64),
  },

  left: {
    width: px(272),

    display: "flex",
    flexWrap: "wrap",
    gap: px(8),
  },

  right: {
    width: px(272),

    display: "flex",
    flexWrap: "wrap",
    gap: px(8),
  },
}));
