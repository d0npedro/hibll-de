import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <h1
        className="text-2xl sm:text-3xl font-semibold mb-3"
        style={{ color: "var(--forest-900)" }}
      >
        Diese Seite gibt es nicht.
      </h1>
      <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--forest-500)" }}>
        Der Link führt ins Leere. Du kannst zur Übersicht zurück oder die Soforthilfe nutzen.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-11 px-5 rounded-xl text-sm font-semibold"
          style={{ background: "var(--forest-700)", color: "#fff" }}
        >
          Zur Übersicht
        </Link>
        <Link
          href="/sos"
          className="inline-flex items-center justify-center min-h-11 px-5 rounded-xl text-sm font-semibold"
          style={{
            background: "var(--sos-light)",
            color: "var(--sos-dark)",
          }}
        >
          Soforthilfe
        </Link>
      </div>
    </div>
  );
}
