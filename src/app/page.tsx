import { Trainer } from "@/components/trainer";
import { generateWord } from "@/utils/generateWord";

export default function HomePage() {
  const initialWord = generateWord();

  return (
    <div className="flex h-dvh w-screen flex-col items-center justify-center">
      <Trainer initialWord={initialWord} />
    </div>
  );
}
