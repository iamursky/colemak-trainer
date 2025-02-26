import { GitHub } from "@/components/github";
import "./globals.css";

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GitHub repoUrl="https://github.com/iamursky/colemak-trainer" />
        {children}
        </body>
    </html>
  );
}
