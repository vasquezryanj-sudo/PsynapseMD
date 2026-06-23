import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PsynapseMD — AI-Assisted Clinical Documentation for Interventional Psychiatry",
  description:
    "Dictate your session. Get a structured, payer-ready note. Move straight to authorization support. Built for interventional psychiatry clinics and individual clinicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-[#F7F6F2] text-[#111827] antialiased font-[family-name:var(--font-inter)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
