import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { FLOWS } from "@/data/flows";
import { OFFERS } from "@/data/offers";
import HelpCard from "@/components/HelpCard";
import HotlineCard from "@/components/HotlineCard";
import OrientationNote from "@/components/OrientationNote";
import EmptyState from "@/components/EmptyState";

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
        className="back-link inline-flex items-center gap-1.5 text-sm font-medium mb-8 min-h-11 focus-visible:outline-none"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
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
          className="text-sm leading-relaxed italic mb-4"
          style={{
            color: "var(--forest-600)",
            fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
          }}
        >
          {category.blurb}
        </p>
        <OrientationNote compact />
      </header>

      {flows.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--forest-500)", letterSpacing: "0.08em" }}
          >
            Was du jetzt tun kannst
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
            Hilfsangebote
          </h2>
          <div className="space-y-3">
            {offers.map((offer) => (
              <HotlineCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      )}

      {flows.length === 0 && offers.length === 0 && (
        <EmptyState
          title="Für dieses Thema fehlen noch geprüfte Inhalte."
          description="Wir erfinden keine Schritte. Nutze die Soforthilfe, wenn du jetzt jemanden brauchst."
          actionHref="/sos"
          actionLabel="Zur Soforthilfe"
        />
      )}

      {flows.length === 0 && offers.length > 0 && (
        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--forest-500)" }}>
          Einen Schritt-für-Schritt-Weg gibt es hier noch nicht. Die Einstiege oben sind vorhanden – unsichere sind mit „Stand prüfen“ gekennzeichnet.
        </p>
      )}
    </div>
  );
}
