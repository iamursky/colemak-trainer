import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { GitHub } from "@/components/github";

export const metadata: Metadata = {
  title: "Colemak Mod-DH Trainer",
  description: "Free open source Colemak-DH typing trainer",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-100">
        <GitHub repoUrl="https://github.com/iamursky/colemak-trainer" />
        {children}
      </body>
    </html>
  );
}
