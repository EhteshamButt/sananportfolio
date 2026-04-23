import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sannan Renderz | Professional Video Editor & Motion Designer",
  description:
    "Professional Video Editor & Motion Designer specializing in cinematic edits, motion graphics, and viral content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-[#05050f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
