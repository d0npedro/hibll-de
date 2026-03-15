import Link from "next/link";
import { Bookmark, Phone } from "lucide-react";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40"
      style={{ background: "var(--forest-800)", borderBottom: "1px solid var(--forest-700)" }}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between" style={{ height: "3.75rem" }}>
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 rounded-sm"
          style={{ ["--tw-ring-color" as string]: "var(--amber)" }}
          aria-label="hibll.de – Startseite"
        >
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
            style={{ background: "var(--forest-600)" }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 1C7 1 2 3.5 2 8C2 10.5 4.5 12 7 12C9.5 12 12 10.5 12 8C12 3.5 7 1 7 1Z"
                fill="rgba(255,255,255,0.85)"
              />
              <line x1="7" y1="12" x2="7" y2="13" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="flex flex-col leading-none">
            <span
              className="font-semibold tracking-tight text-base transition-colors group-hover:text-white"
              style={{
                fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
                color: "var(--cream-100)",
              }}
            >
              hibll.de
            </span>
            <span
              className="text-[10px] font-normal hidden sm:block"
              style={{ color: "var(--forest-400)", letterSpacing: "0.03em" }}
            >
              Hilfe in besonderen Lebenslagen
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav aria-label="Hauptnavigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            <li>
              <Link
                href="/merkliste"
                className="nav-link-warm flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg focus-visible:outline-none focus-visible:ring-2"
                style={{ ["--tw-ring-color" as string]: "var(--amber)" }}
              >
                <Bookmark className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Merkliste</span>
              </Link>
            </li>
            <li>
              <Link
                href="/sos"
                className="sos-nav-btn flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg font-semibold focus-visible:outline-none focus-visible:ring-2"
                style={{
                  letterSpacing: "0.01em",
                  ["--tw-ring-color" as string]: "var(--amber)",
                }}
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Soforthilfe</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
