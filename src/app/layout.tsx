import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import SideNav from "@/components/SideNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juan Carlos Carpio Cámara — IA para Negocios, Formación y Automatización",
  description:
    "Especialista en Inteligencia Artificial aplicada a negocios. Ponente, formador y consultor en automatización con IA. Descubre cómo la IA puede transformar tu empresa.",
  keywords: [
    "inteligencia artificial",
    "IA para negocios",
    "automatización",
    "formación IA",
    "ponente IA",
    "Juan Carlos Carpio",
    "Awakate",
    "consultoría IA",
  ],
  authors: [{ name: "Juan Carlos Carpio Cámara" }],
  openGraph: {
    title: "Juan Carlos Carpio Cámara — IA para Negocios",
    description:
      "Especialista en IA aplicada a negocios. Ponente, formador y consultor en automatización.",
    url: "https://awakate.com/cv",
    siteName: "CV Interactivo — Juan Carlos Carpio",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://awakate.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <SideNav />
        {children}
      </body>
    </html>
  );
}
