import { createStyles } from "@mantine/core";
import { Keyboard } from "@/containers/keyboard";
import { Trainer } from "@/containers/trainer";
import { createState } from "@/state";

export async function getStaticProps() {
  return { props: { initialGlobalState: createState() } };
}

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
    marginTop: parseInt(theme.spacing.lg, 10) * 4,
  },
}));
