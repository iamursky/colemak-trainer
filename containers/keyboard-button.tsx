import { Button } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { memo, useMemo } from "react";

interface IKeyboardButtonProps {
  className?: string;
  keyboardKey?: string;
  active?: boolean;
}

export const KeyboardButton = memo<IKeyboardButtonProps>(
  // eslint-disable-next-line
  function MemoizedKeyboardButton({ className, keyboardKey, active }) {
    const { classes, cx } = useStyles();

    const isEmpty = useMemo(() => {
      return typeof keyboardKey !== "string";
    }, [keyboardKey]);

    // prettier-ignore
    const buttonClassName = useMemo(() => cx(classes.button, {
      [classes.hidden]: isEmpty,
    }, className), [className, isEmpty]);

    // prettier-ignore
    const shadowClassName = useMemo(() => cx(classes.shadow, {
      [classes.shadow_active]: active,
      [classes.hidden]: isEmpty,
    }), [active, isEmpty]);

    return (
      <div aria-hidden="true" className={shadowClassName}>
        <Button type="button" variant={active ? "filled" : "outline"} className={buttonClassName}>
          {keyboardKey?.toUpperCase()}
        </Button>
      </div>
    );
  }
);

const useStyles = createStyles(() => ({
  button: {
    position: "relative",
    width: "48px",
    height: "48px",
    padding: 0,
    margin: 0,
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
