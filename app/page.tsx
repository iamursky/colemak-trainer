import { generateWord, Trainer } from "@/components/trainer";

export default function Home() {
  const initialWord = generateWord();

  return (
    <div className="flex h-dvh w-screen flex-col items-center justify-center">
      <Trainer initialWord={initialWord} />
    </div>
  );
}
