import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { FLOWS } from "@/data/flows";
import { OFFERS } from "@/data/offers";
import HelpCard from "@/components/HelpCard";
import HotlineCard from "@/components/HotlineCard";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function KategoriePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const flows = FLOWS.filter((f) => f.categorySlug === slug);
  const offers = OFFERS.filter((o) => o.categorySlug === slug);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="back-link inline-flex items-center gap-1.5 text-xs font-medium mb-8 focus-visible:outline-none"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Zurück zur Übersicht
      </Link>

      <header className="mb-8">
        <h1
          className="text-2xl sm:text-3xl font-semibold leading-tight mb-3"
          style={{ color: "var(--forest-900)" }}
        >
          {category.title}
        </h1>
        <p
          className="text-sm leading-relaxed italic"
          style={{
            color: "var(--forest-600)",
            fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
          }}
        >
          Du bist nicht allein. Hier sind erste Schritte und Hilfsangebote.
        </p>
      </header>

      {flows.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--forest-500)", letterSpacing: "0.08em" }}
          >
            Schritt-für-Schritt-Wege
          </h2>
          <div className="space-y-3">
            {flows.map((flow) => (
              <HelpCard
                key={flow.slug}
                title={flow.title}
                description={flow.description}
                href={`/flow/${flow.slug}`}
                tag="Schritt-für-Schritt"
              />
            ))}
          </div>
        </section>
      )}

      {offers.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--forest-500)", letterSpacing: "0.08em" }}
          >
            Hilfsangebote &amp; Hotlines
          </h2>
          <div className="space-y-3">
            {offers.map((offer) => (
              <HotlineCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      )}

      {flows.length === 0 && offers.length === 0 && (
        <div className="text-center py-16">
          <p className="text-sm" style={{ color: "var(--forest-500)" }}>
            Für dieses Thema werden gerade Inhalte vorbereitet.
          </p>
          <p className="text-xs mt-2" style={{ color: "var(--forest-400)" }}>
            Nutze den Button „Soforthilfe" für sofortige Unterstützung.
          </p>
        </div>
      )}
    </div>
  );
}
