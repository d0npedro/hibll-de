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
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Deine Merkliste</h1>
        <p className="text-slate-500">Gespeicherte Schritte und Angebote</p>
      </header>

      {!loaded ? null : bookmarks.length === 0 ? (
        <EmptyState
          title="Du hast noch nichts gespeichert."
          description="Klicke auf das Lesezeichen-Symbol bei einem Schritt, um ihn hier zu speichern."
        />
      ) : (
        <ul className="space-y-3">
          {bookmarks.map((item) => {
            const isTel = item.href?.startsWith("tel:");
            return (
              <li key={item.id} className="flex items-start gap-3 p-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                  {item.description && (
                    <p className="text-slate-500 text-xs mt-1">{item.description}</p>
                  )}
                  {item.href && (
                    <a
                      href={item.href}
                      target={isTel ? undefined : "_blank"}
                      rel={isTel ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm"
                    >
                      {isTel ? <Phone className="h-3 w-3" aria-hidden="true" /> : <ExternalLink className="h-3 w-3" aria-hidden="true" />}
                      {isTel ? "Anrufen" : "Link öffnen"}
                    </a>
                  )}
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="flex-shrink-0 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2"
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
