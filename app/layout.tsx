import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Archon | Impressão 3D em Bauru-SP",
  description:
    "Impressão 3D, prototipagem, maquetes e soluções criativas com atendimento pelo Agente Hermes no WhatsApp.",
  openGraph: {
    title: "Archon | Toda Criação Tem Uma Origem",
    description:
      "Impressão 3D, prototipagem, maquetes e soluções criativas em Bauru-SP.",
    images: ["/archon-brand-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archon | Toda Criação Tem Uma Origem",
    description:
      "Impressão 3D, prototipagem, maquetes e soluções criativas em Bauru-SP.",
    images: ["/archon-brand-preview.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
