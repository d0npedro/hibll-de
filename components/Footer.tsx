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
      <div className="max-w-4xl mx-auto px-4 py-8">
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
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {[
                { href: "/datenschutz", label: "Datenschutz" },
                { href: "/impressum", label: "Impressum" },
                { href: "/barrierefreiheit", label: "Barrierefreiheit" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
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
