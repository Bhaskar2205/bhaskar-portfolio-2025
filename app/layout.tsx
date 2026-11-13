import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "./components/Reveal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

const description =
  "Bhaskar Mamoria is a Product Consultant focused on product strategy, go-to-market and AI products. He led product for Plateo AI, founded Pink City Blog (100+ campaigns, 50+ events), and shipped enterprise software at Nagarro and Infoobjects.";

export const metadata: Metadata = {
  title: "Bhaskar Mamoria · Product Consultant",
  description,
  keywords: [
    "Product Consultant",
    "Product Manager",
    "Product Marketing",
    "Technical Product Consultant",
    "Product Strategy",
    "Go-to-market",
    "B2B SaaS",
    "AI products",
    "Bhaskar Mamoria",
  ],
  openGraph: {
    title: "Bhaskar Mamoria · Product Consultant",
    description,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Bhaskar Mamoria · Product Consultant",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e13" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
