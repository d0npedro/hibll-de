import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            hibll.de – Hilfe in besonderen Lebenslagen
          </p>
          <nav aria-label="Footer-Navigation">
            <ul className="flex flex-wrap justify-center gap-4">
              <li>
                <Link href="/datenschutz" className="text-sm text-slate-500 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-sm text-slate-500 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/barrierefreiheit" className="text-sm text-slate-500 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm">
                  Barrierefreiheit
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
