import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYRON Software",
  description:
    "Premium multi-product SaaS software ecosystem for workforce control, marketing, maintenance, cost control, construction, farming and recruitment.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
