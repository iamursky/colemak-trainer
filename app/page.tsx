import { Trainer } from "@/components/trainer";
import { generateWord } from "@/lib/generate-word";

export default function Home() {
  const initialWord = generateWord();

  return <Trainer initialWord={initialWord} />;
}
