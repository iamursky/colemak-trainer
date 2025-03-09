import type { TTrainerLayout } from "@/types";

import { generateWord } from "@/utils";
import { LAYOUTS } from "@/constants";
import { Trainer } from "@/components/trainer";
import { use } from "react";

type THomePageProps = {
  searchParams: Promise<THomePageSearchParams>;
};

type THomePageSearchParams = {
  layout?: TTrainerLayout;
};

export default function HomePage(props: THomePageProps) {
  const initialWord = generateWord();

  let { layout } = use<THomePageSearchParams>(props.searchParams);
  layout = layout && LAYOUTS.includes(layout) ? layout : "colemak-dh";

  return (
    <div className="flex h-dvh w-screen flex-col items-center justify-center">
      <Trainer initialWord={initialWord} layout={layout} />
    </div>
  );
}
