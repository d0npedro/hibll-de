import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoforthilfeButton from "@/components/SoforthilfeButton";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "hibll.de – Hilfe in besonderen Lebenslagen",
  description: "Du bist nicht allein. Konkrete Hilfe und nächste Schritte in schwierigen Lebenssituationen.",
  openGraph: {
    title: "hibll.de – Hilfe in besonderen Lebenslagen",
    description: "Du bist nicht allein. Konkrete Hilfe und nächste Schritte in schwierigen Lebenssituationen.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${lora.variable} ${nunitoSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <SoforthilfeButton />
      </body>
    </html>
  );
}
