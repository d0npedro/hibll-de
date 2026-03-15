"use client";
import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { FLOWS } from "@/data/flows";
import Link from "next/link";

interface SearchResult {
  title: string;
  href: string;
  type: "Kategorie" | "Weg";
  match: string;
}

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = useMemo<SearchResult[]>(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
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

    return out;
  }, [query]);

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
            className="search-input"
            aria-label="Suchbegriff eingeben"
            aria-autocomplete="list"
            aria-controls={results.length > 0 ? "search-results" : undefined}
            aria-expanded={results.length > 0}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2"
              style={{
                color: "var(--forest-400)",
                ["--tw-ring-color" as string]: "var(--amber)",
              }}
              aria-label="Suche löschen"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>

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
          {results.map((result) => (
            <li key={result.href} role="option" aria-selected={false}>
              <Link
                href={result.href}
                onClick={() => setQuery("")}
                className="search-result-item flex flex-col gap-0.5 px-4 py-3 border-b last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
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
                <span className="text-xs line-clamp-1 pl-14" style={{ color: "var(--forest-500)" }}>
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
