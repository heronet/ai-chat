import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/context/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shakespeare AI",
  description: "Talk to Shakespeare with this AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("dark antialiased h-full", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
