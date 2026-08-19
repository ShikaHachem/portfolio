import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Spline_Sans_Mono } from "next/font/google";
import { Chrome } from "@/components/chrome";
import "./globals.css";

const fontSans = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const fontMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Maha — Portfolio",
    template: "%s — Maha",
  },
  description:
    "Film Analyst and Assistant Director exploring the art of storytelling through cinema.",
  openGraph: {
    title: "Maha — Portfolio",
    description:
      "Film Analyst and Assistant Director exploring the art of storytelling through cinema.",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}
      >
        <Chrome />
        <main style={{ padding: "46px 0 34px 0" }}>{children}</main>
      </body>
    </html>
  );
}
