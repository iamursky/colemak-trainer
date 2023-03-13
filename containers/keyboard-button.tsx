import type { FC } from "react";

import { Button } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { useMemo } from "react";
import { useGlobalState } from "@/state";

export type TKeyboardButtonProps = {
  className?: string;
  keyboardKey?: string;
};

export const KeyboardButton: FC<TKeyboardButtonProps> = ({ className, keyboardKey }) => {
  const { classes, cx } = useStyles();
  const { state } = useGlobalState();

  const highlighted = useMemo(() => {
    if (!keyboardKey) return false;
    return isHighlighted(keyboardKey, state.key);
  }, [keyboardKey, state.key]);

  // prettier-ignore
  const buttonClassName = cx(classes.button, {
    [classes.hidden]: typeof keyboardKey !== "string",
  }, className);

  // prettier-ignore
  const shadowClassName = cx(classes.shadow, {
    [classes.shadow_active]: isKeyDown(state.keyStates, state.key),
    [classes.hidden]: typeof keyboardKey !== "string",
  });

  return (
    <div aria-hidden="true" className={shadowClassName}>
      <Button
        type="button"
        variant={highlighted ? "filled" : "outline"}
        className={buttonClassName}
      >
        {keyboardKey?.toUpperCase()}
      </Button>
    </div>
  );
};

function isHighlighted(keyboardKey: string, activeKey: string) {
  return keyboardKey.toLowerCase() === activeKey.toLowerCase();
}

function isKeyDown(keyStates: Record<string, boolean>, key: string) {
  return keyStates[key] || keyStates[key.toUpperCase()];
}

const useStyles = createStyles(() => ({
  button: {
    position: "relative",
    width: "48px",
    height: "48px",
    padding: 0,
  },

  shadow: {
    position: "relative",
    width: "48px",
    height: "56px",
  },

  shadow_active: {
    top: "4px",
    height: "52px",
  },

  hidden: {
    opacity: 0,
  },
}));
