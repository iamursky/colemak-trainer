import { useMemo } from "react";
import cx from "classnames";

import classes from "./keyboard-button.module.css";

interface IKeyboardButtonProps {
  active?: boolean;
  keyboardKey?: string;
}

export function KeyboardButton({ active, keyboardKey }: IKeyboardButtonProps) {
  const isEmpty = useMemo(() => {
    return typeof keyboardKey !== "string";
  }, [keyboardKey]);

  // prettier-ignore
  const buttonClassName = useMemo(() => cx("uk-button", {
    "uk-button-primary": active,
    "uk-button-default": !active,
    [classes.button_hidden]: isEmpty
  }, classes.button), [active, isEmpty]);

  return (
    <button type="button" className={buttonClassName} aria-hidden={isEmpty}>
      {keyboardKey?.toUpperCase()}
    </button>
  );
}
