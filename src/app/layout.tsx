import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import type { Metadata } from "next";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Library App",
  description:
    "A simple library application built with Next.js, Tailwind CSS, and Flask.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-neutral-950 text-neutral-200 selection:bg-blue-500/30`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
