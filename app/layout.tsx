import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICT500 | Ardo Rianda - Self Portfolio",
  description: "Critical & Creative Thinking Portfolio - CDCS2403A",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${manrope.variable} antialiased bg-[#050505] text-[#ededed] cursor-none`}
      >
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
