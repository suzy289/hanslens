import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { SITE } from "@/config/site";
import { dictionaries } from "@/i18n/dictionaries";
import { Providers } from "@/components/Providers";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — Portfolio`,
  description: `${dictionaries.fr.metaDescription} · ${dictionaries.en.metaDescription}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="font-sans min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
