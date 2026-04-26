import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Select Group (Pty) Ltd | Civil & Structural Engineering Consultants",
  description: "Select Group is a premier Consulting Civil and Structural Engineering firm based in Nelspruit, Mpumalanga. Registered with ECSA and NHBRC, providing professional engineering solutions across Mpumalanga, KwaZulu-Natal, Gauteng, and Limpopo.",
  keywords: "civil engineering, structural engineering, consulting engineer, ECSA registered, Nelspruit, Mpumalanga, engineering consultancy, Select Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--warm-cream)]">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
