import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        background: "var(--forest-900)",
        borderTop: "1px solid var(--forest-800)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="mb-6 max-w-lg">
          <p className="text-xs leading-relaxed" style={{ color: "var(--forest-400)" }}>
            Diese Seite gibt Orientierung, keinen Ersatz für Ärztinnen, Behörden oder Beratung.
            In Lebensgefahr: 112. Bei Gewalt: 110.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <p
              className="text-sm font-medium"
              style={{
                color: "var(--forest-300)",
                fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
              }}
            >
              hibll.de
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--forest-500)" }}>
              Hilfe in besonderen Lebenslagen
            </p>
          </div>

          <nav aria-label="Footer-Navigation">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {[
                { href: "/datenschutz", label: "Datenschutz" },
                { href: "/impressum", label: "Impressum" },
                { href: "/barrierefreiheit", label: "Barrierefreiheit" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link inline-flex min-h-11 items-center">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
