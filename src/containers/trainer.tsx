import type { FC } from "react";
import type { MantineTheme } from "@mantine/core";

import { createStyles, Text } from "@mantine/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import randomWords from "random-words";

export const Trainer: FC = () => {
  const { classes, cx } = useStyles();

  const [started, setStarted] = useState<boolean>(false);
  const [currentChar, setCurrentChar] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const textArray = useMemo(() => Array.from(text), [text]);

  const reset = useCallback(() => {
    setText(randomWords({ exactly: 1 }).join(" "));
    setCurrentIndex(0);
  }, []);

  // prettier-ignore
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      setCurrentIndex(0);
      return setStarted(false);
    }
    
    if (!started) setStarted(true);
    if (currentChar !== event.key) return;

    setCurrentIndex((index) => Math.min(index + 1, text.length));
  }, [started, currentChar, text.length]);

  useEffect(() => {
    setCurrentChar(text[currentIndex]);
    if (currentIndex >= text.length) reset();
  }, [text, currentIndex, reset]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <Text className={classes.text}>
      {textArray.map((char, index) => (
        <Text
          key={`${char}@${index}`}
          className={classes.char}
          sx={(theme) => ({ color: getCharColor(index, currentIndex, theme) })}
        >
          {char}
        </Text>
      ))}
    </Text>
  );
};

const useStyles = createStyles((theme) => ({
  text: {
    display: "flex",
    marginBottom: "8px",
  },

  char: {
    fontSize: 32,
    fontWeight: 600,
  },
}));

function getCharColor(index: number, currentIndex: number, theme: MantineTheme): string {
  switch (theme.colorScheme) {
    default:
    case "light":
      return index < currentIndex ? theme.colors.gray[5] : theme.colors.gray[7];

    case "dark":
      return index < currentIndex ? theme.colors.gray[8] : theme.white;
  }
}
