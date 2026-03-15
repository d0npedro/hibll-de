import Link from "next/link";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-slate-800 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm"
          aria-label="hibll.de – Startseite"
        >
          <Heart className="h-5 w-5 text-blue-500" aria-hidden="true" />
          <span className="text-lg">hibll.de</span>
        </Link>
        <nav aria-label="Hauptnavigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            <li>
              <Link
                href="/merkliste"
                className="text-sm text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              >
                Merkliste
              </Link>
            </li>
            <li>
              <Link
                href="/sos"
                className="text-sm bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2"
              >
                Soforthilfe
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
