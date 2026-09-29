"use client";
import { useState, useEffect } from "react";
import { Trash2, ExternalLink, Phone } from "lucide-react";
import { getBookmarks, removeBookmark, type BookmarkItem } from "@/lib/storage";
import EmptyState from "@/components/EmptyState";

export default function MerklistePage() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setBookmarks(getBookmarks());
    setLoaded(true);
  }, []);

  const handleRemove = (id: string) => {
    removeBookmark(id);
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1
          className="text-2xl sm:text-3xl font-semibold mb-2"
          style={{ color: "var(--forest-900)" }}
        >
          Deine Merkliste
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--forest-500)" }}>
          Gespeicherte Schritte bleiben nur in diesem Browser.
        </p>
      </header>

      {!loaded ? (
        <p className="text-sm" style={{ color: "var(--forest-400)" }}>
          Merkliste wird geladen…
        </p>
      ) : bookmarks.length === 0 ? (
        <EmptyState
          title="Noch nichts gespeichert."
          description="Beim Lesezeichen an einem Schritt landet er hier. Du kannst jederzeit wieder löschen."
          actionHref="/"
          actionLabel="Thema wählen"
        />
      ) : (
        <ul className="space-y-3">
          {bookmarks.map((item) => {
            const isTel = item.href?.startsWith("tel:");
            return (
              <li
                key={item.id}
                className="flex items-start gap-3 p-4 rounded-2xl"
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--forest-200)",
                  boxShadow: "var(--shadow-warm-sm)",
                }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm" style={{ color: "var(--forest-800)" }}>
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--forest-500)" }}>
                      {item.description}
                    </p>
                  )}
                  {item.href && (
                    <a
                      href={item.href}
                      target={isTel ? undefined : "_blank"}
                      rel={isTel ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center gap-1 mt-2 min-h-11 text-sm font-semibold"
                      style={{ color: "var(--forest-700)" }}
                    >
                      {isTel ? <Phone className="h-3.5 w-3.5" aria-hidden="true" /> : <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                      {isTel ? "Anrufen" : "Link öffnen"}
                    </a>
                  )}
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="flex-shrink-0 min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg"
                  style={{ color: "var(--forest-400)" }}
                  aria-label={`${item.title} aus der Merkliste entfernen`}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
