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
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Zurück
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-3">{category.title}</h1>
        <p className="text-slate-600 leading-relaxed">
          Du bist nicht allein. Hier sind erste Schritte und Hilfsangebote.
        </p>
      </header>

      {flows.length > 0 && (
        <section className="mb-8">
          <h2 className="text-base font-semibold text-slate-700 mb-4">Schritt-für-Schritt-Wege</h2>
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
          <h2 className="text-base font-semibold text-slate-700 mb-4">Hilfsangebote & Hotlines</h2>
          <div className="space-y-3">
            {offers.map((offer) => (
              <HotlineCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      )}

      {flows.length === 0 && offers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">Für dieses Thema werden gerade Inhalte vorbereitet.</p>
          <p className="text-slate-400 text-sm mt-2">
            Nutze den Button „Soforthilfe" für sofortige Unterstützung.
          </p>
        </div>
      )}
    </div>
  );
}
