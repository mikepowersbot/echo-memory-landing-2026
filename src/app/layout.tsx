import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Echo Memory | Preserve Your Digital Echo",
  description: "Quietly preserve your meaningful digital moments into elegant time capsules you can revisit or pass on, without surveillance or data mining.",
  keywords: ["digital legacy", "memory preservation", "time capsule", "privacy", "digital memories"],
  authors: [{ name: "Echo Memory" }],
  openGraph: {
    title: "Echo Memory | Preserve Your Digital Echo",
    description: "Quietly preserve your meaningful digital moments into elegant time capsules you can revisit or pass on.",
    type: "website",
    locale: "en_US",
    siteName: "Echo Memory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} font-secondary`}>
        {children}
      </body>
    </html>
  );
}