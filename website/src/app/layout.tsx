import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Explotur Quilleco | El Refugio donde la Naturaleza te Enseña a Respirar",
  description: "Cabañas, senderos y naturaleza viva en el corazón de Quilleco. Un refugio en el Biobío creado para desconectar la mente y despertar los sentidos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAFAF9] text-[#333333] selection:bg-[#273E32] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
