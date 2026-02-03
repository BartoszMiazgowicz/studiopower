import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Power Performance | Studio Treningowe Zielonka",
  description: "Kameralne studio treningowe w Zielonce. Treningi personalne, medyczne, przygotowanie motoryczne sportowców, zajęcia grupowe fitness i wsparcie dietetyczne. Profesjonalna kadra, indywidualne podejście.",
  keywords: "trening personalny, trening medyczny, fitness, siłownia, Zielonka, przygotowanie motoryczne, dietetyka, rehabilitacja",
  openGraph: {
    title: "Power Performance | Studio Treningowe Zielonka",
    description: "Kameralne studio treningowe w Zielonce. Treningi personalne, medyczne, przygotowanie motoryczne sportowców.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
