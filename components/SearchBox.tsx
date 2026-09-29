"use client";
import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { FLOWS } from "@/data/flows";
import { OFFERS } from "@/data/offers";
import Link from "next/link";

interface SearchResult {
  title: string;
  href: string;
  type: "Kategorie" | "Weg" | "Angebot";
  match: string;
}

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const trimmed = query.trim();
  const searching = trimmed.length >= 2;

  const results = useMemo<SearchResult[]>(() => {
    if (!searching) return [];
    const q = trimmed.toLowerCase();
    const out: SearchResult[] = [];

    for (const cat of CATEGORIES) {
      if (
        cat.title.toLowerCase().includes(q) ||
        cat.blurb.toLowerCase().includes(q) ||
        cat.slug.toLowerCase().includes(q)
      ) {
        out.push({ title: cat.title, href: `/kategorie/${cat.slug}`, type: "Kategorie", match: cat.blurb });
      }
    }

    for (const flow of FLOWS) {
      if (
        flow.title.toLowerCase().includes(q) ||
        flow.description.toLowerCase().includes(q) ||
        flow.sections.some((s) => s.steps.some((step) => step.title.toLowerCase().includes(q)))
      ) {
        out.push({ title: flow.title, href: `/flow/${flow.slug}`, type: "Weg", match: flow.description });
      }
    }

    for (const offer of OFFERS) {
      if (offer.title.toLowerCase().includes(q) || offer.hint.toLowerCase().includes(q)) {
        out.push({
          title: offer.title,
          href: `/kategorie/${offer.categorySlug}`,
          type: "Angebot",
          match: offer.hint,
        });
      }
    }

    return out;
  }, [searching, trimmed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) router.push(results[0].href);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} role="search" aria-label="Hilfe suchen">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none"
            style={{ color: "var(--forest-400)" }}
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ich brauche Hilfe bei…"
            className="search-input min-h-12"
            aria-label="Suchbegriff eingeben"
            aria-autocomplete="list"
            aria-controls={results.length > 0 ? "search-results" : undefined}
            aria-expanded={results.length > 0}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 min-h-11 min-w-11 inline-flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2"
              style={{
                color: "var(--forest-400)",
                ["--tw-ring-color" as string]: "var(--amber)",
              }}
              aria-label="Suche löschen"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>

      {searching && results.length === 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 px-4 py-4 z-30"
          style={{
            background: "#fff",
            border: "1.5px solid var(--forest-200)",
            borderRadius: "1rem",
            boxShadow: "var(--shadow-warm-lg)",
          }}
          role="status"
        >
          <p className="text-sm font-medium" style={{ color: "var(--forest-800)" }}>
            Dazu haben wir noch keinen Eintrag.
          </p>
          <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--forest-500)" }}>
            Wähle ein Thema unten oder öffne die Soforthilfe.
          </p>
          <Link
            href="/sos"
            className="inline-flex items-center min-h-11 mt-2 text-sm font-semibold"
            style={{ color: "var(--forest-700)" }}
          >
            Zur Soforthilfe
          </Link>
        </div>
      )}

      {results.length > 0 && (
        <ul
          id="search-results"
          role="listbox"
          aria-label="Suchergebnisse"
          className="absolute top-full left-0 right-0 mt-2 bg-white overflow-hidden z-30 animate-fade-in"
          style={{
            border: "1.5px solid var(--forest-200)",
            borderRadius: "1rem",
            boxShadow: "var(--shadow-warm-lg)",
          }}
        >
          {results.map((result, i) => (
            <li key={`${result.type}-${result.href}-${i}`} role="option" aria-selected={false}>
              <Link
                href={result.href}
                onClick={() => setQuery("")}
                className="search-result-item flex flex-col gap-0.5 px-4 py-3 min-h-14 border-b last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
                style={{
                  borderColor: "var(--forest-150)",
                  ["--tw-ring-color" as string]: "var(--amber)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: "var(--forest-100)",
                      color: "var(--forest-600)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {result.type}
                  </span>
                  <span className="font-semibold text-sm" style={{ color: "var(--forest-800)" }}>
                    {result.title}
                  </span>
                </div>
                <span className="text-xs line-clamp-1" style={{ color: "var(--forest-500)" }}>
                  {result.match}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
