import { createStyles } from "@mantine/core";
import { Keyboard } from "@/containers/keyboard";
import dynamic from "next/dynamic";

const Trainer = dynamic({
  loader: () => import("@/containers/trainer"),
  ssr: false,
});

export default function Page() {
  const { classes } = useStyles();

  return (
    <div className={classes.content}>
      <Trainer />
      <Keyboard className={classes.keyboard} />
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  content: {
    width: "100vw",
    height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  keyboard: {
    marginTop: theme.spacing.lg * 4,
  },
}));
