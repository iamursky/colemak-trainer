import type { MantineTheme } from "@mantine/core";

import { createStyles, Text } from "@mantine/core";
import { useEffect } from "react";
import { useTraining } from "@/states/training";

export default function Trainer() {
  const { classes } = useStyles();
  const training = useTraining();

  useEffect(() => {
    document.addEventListener("keypress", training.handleKeyPress);
    return () => document.removeEventListener("keypress", training.handleKeyPress);
  });

  return (
    <Text className={classes.text}>
      {training.chars.map((char, index) => (
        <Text
          key={`${char}@${index}`}
          className={classes.char}
          sx={(theme) => ({ color: getCharColor(index, training.index, theme) })}
        >
          {char}
        </Text>
      ))}
    </Text>
  );
}

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
