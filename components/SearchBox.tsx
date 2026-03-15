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
        flow.sections.some(s => s.steps.some(step => step.title.toLowerCase().includes(q)))
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
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ich brauche Hilfe bei…"
            className="w-full pl-12 pr-12 py-4 text-base bg-white border-2 border-slate-200 focus:border-blue-400 rounded-2xl outline-none transition-colors placeholder:text-slate-400 shadow-sm"
            aria-label="Suchbegriff eingeben"
            aria-autocomplete="list"
            aria-controls={results.length > 0 ? "search-results" : undefined}
            aria-expanded={results.length > 0}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-1"
              aria-label="Suche löschen"
            >
              <X className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
      {results.length > 0 && (
        <ul
          id="search-results"
          role="listbox"
          aria-label="Suchergebnisse"
          className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-2xl shadow-lg overflow-hidden z-30"
        >
          {results.map((result) => (
            <li key={result.href} role="option" aria-selected={false}>
              <Link
                href={result.href}
                onClick={() => setQuery("")}
                className="flex flex-col gap-0.5 px-4 py-3 hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-0 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-0"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {result.type}
                  </span>
                  <span className="font-medium text-sm text-slate-800">{result.title}</span>
                </div>
                <span className="text-xs text-slate-500 line-clamp-1">{result.match}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
