import type { Metadata } from "next";
import { Audiowide, Cal_Sans, Golos_Text } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

const golostext = Golos_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-golos-text",
});

const calsans = Cal_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cal-sans",
});

export const metadata: Metadata = {
  title: "Auréa",
  description: "A Interior Design Company made for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${audiowide.variable} ${golostext.variable} ${calsans.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
