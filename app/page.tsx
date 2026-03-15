import SearchBox from "@/components/SearchBox";
import CategoryCard from "@/components/CategoryCard";
import HelpCard from "@/components/HelpCard";
import { CATEGORIES } from "@/data/categories";
import { FLOWS } from "@/data/flows";

export default function HomePage() {
  const popularFlows = FLOWS.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pt-14 pb-12">
        {/* Decorative background shapes */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: "var(--forest-200)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-10 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "var(--amber-light)" }}
        />

        <div className="relative max-w-2xl mx-auto text-center">
          <p
            className="animate-fade-up text-sm font-medium italic mb-4 inline-flex items-center gap-2"
            style={{
              color: "var(--forest-600)",
              fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
            }}
          >
            <span
              className="inline-block w-4 h-px"
              style={{ background: "var(--forest-400)" }}
              aria-hidden="true"
            />
            Du bist nicht allein
            <span
              className="inline-block w-4 h-px"
              style={{ background: "var(--forest-400)" }}
              aria-hidden="true"
            />
          </p>

          <h1
            className="animate-fade-up delay-100 text-4xl sm:text-5xl font-semibold leading-tight mb-5"
            style={{ color: "var(--forest-900)" }}
          >
            Wie können wir dir
            <br />
            <span
              className="italic font-normal"
              style={{ color: "var(--forest-600)" }}
            >
              heute helfen?
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 text-base leading-relaxed mb-10 max-w-md mx-auto"
            style={{ color: "var(--forest-600)" }}
          >
            Wir zeigen dir konkrete nächste Schritte – egal, wie schwierig
            die Situation gerade ist.
          </p>

          <div className="animate-fade-up delay-300">
            <SearchBox />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px" style={{ background: "var(--forest-150)" }} />
      </div>

      {/* ── Categories ── */}
      <section className="px-4 py-10 max-w-4xl mx-auto">
        <div className="flex items-baseline gap-3 mb-6">
          <h2
            className="text-xl font-semibold"
            style={{ color: "var(--forest-800)" }}
          >
            Welches Thema beschäftigt dich?
          </h2>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              background: "var(--forest-100)",
              color: "var(--forest-600)",
            }}
          >
            {CATEGORIES.length} Themen
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.slug}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular flows ── */}
      <section
        className="px-4 py-10"
        style={{ background: "var(--forest-50)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xl font-semibold mb-6"
            style={{ color: "var(--forest-800)" }}
          >
            Beliebte Wege
          </h2>
          <div className="space-y-3">
            {popularFlows.map((flow, i) => (
              <div
                key={flow.slug}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <HelpCard
                  title={flow.title}
                  description={flow.description}
                  href={`/flow/${flow.slug}`}
                  tag="Schritt-für-Schritt"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reassurance ── */}
      <section className="px-4 py-12">
        <div className="max-w-xl mx-auto text-center">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5"
            style={{ background: "var(--forest-100)" }}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2C6 2 2 6 2 11C2 16 6 20 11 20C16 20 20 16 20 11C20 6 16 2 11 2Z" fill="var(--forest-200)"/>
              <path d="M11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18" stroke="var(--forest-600)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M11 18C14.9 18 18 14.9 18 11" stroke="var(--forest-400)" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="11" cy="11" r="1.5" fill="var(--forest-600)"/>
            </svg>
          </div>
          <p
            className="text-xl font-semibold mb-3"
            style={{
              color: "var(--forest-800)",
              fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
            }}
          >
            Du bist nicht allein.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--forest-500)" }}>
            Diese Seite gibt dir einen ruhigen Überblick und konkrete erste Schritte.
            Kein Fachjargon. Keine Überforderung. Nur das, was jetzt wichtig ist.
          </p>
        </div>
      </section>
    </div>
  );
}
