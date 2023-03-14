import type { FC } from "react";
import type { MantineTheme } from "@mantine/core";

import { createStyles, px, Text } from "@mantine/core";
import { useEffect } from "react";
import { useGlobalState } from "@/state";

export const Trainer: FC = () => {
  const { classes } = useStyles();
  const { state, handleKeyPress } = useGlobalState();

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <Text className={classes.text}>
      {state.chars.map((char, index) => (
        <Text
          key={`${char}@${index}`}
          className={classes.char}
          sx={(theme) => ({ color: getCharColor(index, state.index, theme) })}
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
    marginBottom: px(64),
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
