import { createState } from "@/state";
import { useEffect } from "react";
import { useGlobalState } from "@/state";
import { KeyboardButton } from "@/components/keyboard-button";
import cx from "classnames";

import classes from "styles/index.module.css";

export default function Page() {
  const { state, handleKeyDown, handleKeyUp, handleKeyPress } = useGlobalState();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className={classes.content}>
      <p className={cx("uk-text-lead uk-text-muted", classes.text)}>
        {state.chars.map((char, index) => (
          <span
            key={`${char}@${index}`}
            className={cx({ "uk-text-secondary": state.index <= index })}
          >
            {char}
          </span>
        ))}
      </p>

      <div className={classes.keyboard}>
        <div className={classes.keyboard__left}>
          <KeyboardButton keyboardKey="Q" active={state.key === "q"} />
          <KeyboardButton keyboardKey="W" active={state.key === "w"} />
          <KeyboardButton keyboardKey="F" active={state.key === "f"} />
          <KeyboardButton keyboardKey="P" active={state.key === "p"} />
          <KeyboardButton keyboardKey="B" active={state.key === "b"} />

          <KeyboardButton keyboardKey="A" active={state.key === "a"} />
          <KeyboardButton keyboardKey="R" active={state.key === "r"} />
          <KeyboardButton keyboardKey="S" active={state.key === "s"} />
          <KeyboardButton keyboardKey="T" active={state.key === "t"} />
          <KeyboardButton keyboardKey="G" active={state.key === "g"} />

          <KeyboardButton keyboardKey="Z" active={state.key === "z"} />
          <KeyboardButton keyboardKey="X" active={state.key === "x"} />
          <KeyboardButton keyboardKey="C" active={state.key === "c"} />
          <KeyboardButton keyboardKey="D" active={state.key === "d"} />
          <KeyboardButton keyboardKey="V" active={state.key === "v"} />
        </div>

        <div className={classes.keyboard__right}>
          <KeyboardButton keyboardKey="J" active={state.key === "j"} />
          <KeyboardButton keyboardKey="L" active={state.key === "l"} />
          <KeyboardButton keyboardKey="U" active={state.key === "u"} />
          <KeyboardButton keyboardKey="Y" active={state.key === "y"} />
          <KeyboardButton />

          <KeyboardButton keyboardKey="M" active={state.key === "m"} />
          <KeyboardButton keyboardKey="N" active={state.key === "n"} />
          <KeyboardButton keyboardKey="E" active={state.key === "e"} />
          <KeyboardButton keyboardKey="I" active={state.key === "i"} />
          <KeyboardButton keyboardKey="O" active={state.key === "o"} />

          <KeyboardButton keyboardKey="K" active={state.key === "k"} />
          <KeyboardButton keyboardKey="H" active={state.key === "h"} />
          <KeyboardButton keyboardKey="," active={state.key === ","} />
          <KeyboardButton keyboardKey="." active={state.key === "."} />
          <KeyboardButton />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { initialGlobalState: createState() } };
}
