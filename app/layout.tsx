import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Archon | Cat\u00e1logo de Impress\u00e3o 3D",
  description:
    "Molde de site para vender produtos de impress\u00e3o 3D com cole\u00e7\u00f5es, cat\u00e1logo e chamadas comerciais claras.",
  openGraph: {
    title: "Archon | Cat\u00e1logo de Impress\u00e3o 3D",
    description:
      "Molde de site para vender produtos de impress\u00e3o 3D com cole\u00e7\u00f5es, cat\u00e1logo e chamadas comerciais claras.",
    images: ["/archon-brand-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archon | Cat\u00e1logo de Impress\u00e3o 3D",
    description:
      "Molde de site para vender produtos de impress\u00e3o 3D com cole\u00e7\u00f5es, cat\u00e1logo e chamadas comerciais claras.",
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
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
