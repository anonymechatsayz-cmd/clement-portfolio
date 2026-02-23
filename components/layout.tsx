import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Clément Franjou — Développeur Web Freelance Paris | Sites Next.js Performants",
  description: "Développeur web freelance spécialisé Next.js pour PME en Île-de-France. Sites performants qui convertissent, livrés en 7 jours. De 490€ à 1290€. Lighthouse 95+ garanti.",
  keywords: [
    "développeur web Paris",
    "freelance Next.js",
    "site web PME",
    "création site rapide",
    "développeur Île-de-France",
    "site web artisan",
    "site web restaurant",
    "site performant",
    "Clément Franjou"
  ],
  authors: [{ name: "Clément Franjou" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://clementfranjou.fr",
    title: "Clément Franjou — Sites Web Qui Convertissent",
    description: "Développeur web freelance Paris. Next.js, livraison 7 jours, résultats garantis.",
    siteName: "Clément Franjou Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clément Franjou — Développeur Web Freelance",
    description: "Sites web performants pour PME. Next.js, conversion optimisée, livraison rapide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
