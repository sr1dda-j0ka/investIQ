import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarketMind AI",
  description: "AI-powered stock research platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}