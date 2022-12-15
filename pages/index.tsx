import { LoadingOverlay } from "@mantine/core";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const TrainingPage = dynamic({
  loader: () => import("@/pages/training"),
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<LoadingOverlay visible />}>
      <TrainingPage />
    </Suspense>
  );
}
