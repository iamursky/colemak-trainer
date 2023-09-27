import type { Metadata } from "next/types";

import { Trainer } from "@/components/trainer";
import { generateWord } from "@/lib/generator";

export const metadata: Metadata = {
  title: "Colemak Mod-DH Trainer",
  description: "Free open source Colemak-DH typing trainer",
};

export default function Page() {
  const initialWord = generateWord();

  return <Trainer initialWord={initialWord} />;
}
