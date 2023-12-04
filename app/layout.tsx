import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans_Thai({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Popular Vote",
  description: "Presented by Job Innovation Dept.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
