import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Quantum Sensors Lab | Nazarbayev University",
  description:
    "We develop cryogenic measurement platforms for exploring 2D materials, superconducting device physics, and biochip integration."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
