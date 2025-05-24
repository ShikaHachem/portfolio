import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getResumeData } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { i18n } from "../../next-i18next.config";
import { createTranslation } from "next-i18next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata({ params }: { params: { lang: string } }) {
  // Ensure 'resume' namespace is loaded, and correct language is used.
  const { t } = await createTranslation( params.lang || i18n.defaultLocale, 'resume');
  const DATA = getResumeData(t);

  return {
    metadataBase: new URL(DATA.url),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
      title: `${DATA.name}`,
      description: DATA.description,
      url: DATA.url,
      siteName: `${DATA.name}`,
      locale: params.lang === 'fr' ? 'fr_FR' : 'en_US', // Adjust locale based on lang
      type: "website",
    },
    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang || i18n.defaultLocale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
