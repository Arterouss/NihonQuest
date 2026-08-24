import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NihonQuest — Belajar Bahasa Jepang",
    template: "%s | NihonQuest",
  },
  description:
    "Platform belajar bahasa Jepang terlengkap. Pelajari Hiragana, Katakana, Kanji, Kosakata, Tata Bahasa, dan persiapkan diri untuk JLPT N5 hingga N1.",
  keywords: ["belajar bahasa jepang", "JLPT", "hiragana", "katakana", "kanji", "nihongo", "nihonquest"],
  openGraph: {
    title: "NihonQuest — Belajar Bahasa Jepang",
    description: "Platform belajar bahasa Jepang terlengkap dari N5 hingga N1.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "NihonQuest",
    description: "Belajar Bahasa Jepang Secara Interaktif",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={plusJakarta.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
