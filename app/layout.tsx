import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoforthilfeButton from "@/components/SoforthilfeButton";

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
    <html lang="de">
      <body className="min-h-screen bg-slate-50 flex flex-col">
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
