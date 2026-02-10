import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"], display: "swap" });


export const metadata = {
  title: "Bhaskar Mamoria | Full Stack Developer",
  description:
    "Portfolio of Bhaskar Mamoria - Full Stack Developer specializing in React, Node.js and GenAI integrations.",
  keywords: "React Developer, Node Developer, Portfolio, GenAI Developer",
  openGraph: {
    title: "Bhaskar Mamoria Portfolio",
    description: "Professional portfolio showcasing projects and experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
