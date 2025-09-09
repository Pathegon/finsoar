import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finsoar - Finance Newsletter Coming Soon | Market Intelligence & Analysis",
  description: "A curated finance newsletter designed to cut through market noise and deliver actionable intelligence. Professional insights for the modern investor. Launching Q1 2025.",
  keywords: "finance newsletter, market analysis, investment insights, financial news, stock market, trading, investment strategy",
  authors: [{ name: "Finsoar" }],
  creator: "Finsoar",
  publisher: "Finsoar",
  openGraph: {
    title: "Finsoar - Finance Newsletter Coming Soon",
    description: "A curated finance newsletter designed to cut through market noise and deliver actionable intelligence. Professional insights for the modern investor.",
    url: "https://finsoar.com",
    siteName: "Finsoar",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finsoar - Finance Newsletter Coming Soon",
    description: "A curated finance newsletter designed to cut through market noise and deliver actionable intelligence. Professional insights for the modern investor.",
    creator: "@finsoar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://finsoar.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
