import type { FC } from "react";

import { Button } from "@mantine/core";
import { createStyles } from "@mantine/core";

export type TKeyboardButtonProps = {
  active?: boolean;
  className?: string;
  keyboardKey?: string;
};

export const KeyboardButton: FC<TKeyboardButtonProps> = ({ active, className, keyboardKey }) => {
  const { classes, cx } = useStyles();

  // prettier-ignore
  const buttonClassName = cx(classes.button, {
    [classes.hidden]: typeof keyboardKey !== "string",
  }, className);

  // prettier-ignore
  const shadowClassName = cx(classes.shadow, {
    [classes.shadow_active]: active,
    [classes.hidden]: typeof keyboardKey !== "string",
  });

  return (
    <div aria-hidden="true" className={shadowClassName}>
      <Button type="button" variant="outline" className={buttonClassName}>
        {keyboardKey?.toUpperCase()}
      </Button>
    </div>
  );
};

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
