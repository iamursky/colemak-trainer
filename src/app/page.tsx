import { generateWord } from "@/utils";
import { Trainer } from "@/components/trainer";

export default function HomePage() {
  const initialWord = generateWord();

  return (
    <div className="flex h-dvh w-screen flex-col items-center justify-center">
      <Trainer initialWord={initialWord} />
    </div>
  );
}
