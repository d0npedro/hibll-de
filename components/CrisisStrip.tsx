import { Phone } from "lucide-react";
import Link from "next/link";

export default function CrisisStrip() {
  return (
    <aside
      className="rounded-2xl px-4 py-4"
      style={{
        background: "var(--cream-50)",
        border: "1.5px solid var(--forest-200)",
      }}
      aria-label="Wenn es jetzt gefährlich ist"
    >
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: "var(--forest-500)", letterSpacing: "0.07em" }}
      >
        Wenn es jetzt gefährlich ist
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <a
          href="tel:112"
          className="inline-flex items-center justify-center gap-2 min-h-11 px-4 rounded-xl text-sm font-semibold"
          style={{ background: "var(--sos)", color: "#fff" }}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          112 Lebensgefahr
        </a>
        <a
          href="tel:110"
          className="inline-flex items-center justify-center gap-2 min-h-11 px-4 rounded-xl text-sm font-semibold"
          style={{
            background: "var(--forest-100)",
            color: "var(--forest-800)",
            border: "1.5px solid var(--forest-200)",
          }}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          110 Polizei
        </a>
        <Link
          href="/sos"
          className="inline-flex items-center justify-center min-h-11 px-4 rounded-xl text-sm font-medium"
          style={{ color: "var(--forest-700)" }}
        >
          Weitere Soforthilfe
        </Link>
      </div>
    </aside>
  );
}
