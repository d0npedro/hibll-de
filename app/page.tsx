import SearchBox from "@/components/SearchBox";
import CategoryCard from "@/components/CategoryCard";
import HelpCard from "@/components/HelpCard";
import { CATEGORIES } from "@/data/categories";
import { FLOWS } from "@/data/flows";

export default function HomePage() {
  const popularFlows = FLOWS.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 px-4 pt-12 pb-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-600 text-sm font-medium mb-3 tracking-wide uppercase">
            Du bist nicht allein
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight mb-4">
            Wie können wir dir heute helfen?
          </h1>
          <p className="text-slate-600 text-base mb-8 max-w-lg mx-auto">
            Wir zeigen dir konkrete nächste Schritte – egal, wie schwierig die Situation gerade ist.
          </p>
          <SearchBox />
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-10 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold text-slate-700 mb-5">
          Welches Thema beschäftigt dich?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Popular flows */}
      <section className="px-4 py-8 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold text-slate-700 mb-5">
          Beliebte Wege
        </h2>
        <div className="space-y-3">
          {popularFlows.map((flow) => (
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

      {/* Reassurance */}
      <section className="px-4 py-10">
        <div className="max-w-2xl mx-auto bg-blue-50 border border-blue-100 rounded-3xl p-6 sm:p-8 text-center">
          <p className="text-blue-800 font-semibold text-lg mb-2">
            Du bist nicht allein.
          </p>
          <p className="text-blue-600 text-sm leading-relaxed">
            Diese Seite bietet dir einen ruhigen Überblick und konkrete erste Schritte.
            Kein Fachchinesisch. Keine Überforderung. Nur das, was jetzt wichtig ist.
          </p>
        </div>
      </section>
    </div>
  );
}
