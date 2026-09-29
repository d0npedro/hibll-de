"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <h1
        className="text-2xl sm:text-3xl font-semibold mb-3"
        style={{ color: "var(--forest-900)" }}
      >
        Etwas ist schiefgelaufen.
      </h1>
      <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--forest-500)" }}>
        Die Seite hat einen Fehler. Du kannst es noch einmal versuchen oder zur Übersicht zurück.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center min-h-11 px-5 rounded-xl text-sm font-semibold"
          style={{ background: "var(--forest-700)", color: "#fff" }}
        >
          Nochmal versuchen
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-11 px-5 rounded-xl text-sm font-semibold"
          style={{
            background: "var(--forest-100)",
            color: "var(--forest-800)",
          }}
        >
          Zur Übersicht
        </Link>
      </div>
    </div>
  );
}
