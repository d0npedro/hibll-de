import { Phone, ExternalLink } from "lucide-react";
import { SOFORTHILFE } from "@/data/sos";

export const metadata = {
  title: "Soforthilfe – hibll.de",
  description: "Sofortige Hilfe bei akuten Krisen. Kostenlose Hotlines und Online-Beratung.",
};

export default function SosPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
          <Phone className="h-6 w-6 text-red-500" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Soforthilfe</h1>
        <p className="text-slate-600 leading-relaxed">
          Du bist nicht allein. Hier sind sofort erreichbare Angebote.
        </p>
      </header>

      <div className="space-y-3">
        {SOFORTHILFE.map((item) => {
          const isTel = item.action.startsWith("tel:");
          return (
            <a
              key={item.title}
              href={item.action}
              target={isTel ? undefined : "_blank"}
              rel={isTel ? undefined : "noopener noreferrer"}
              className="flex items-center gap-4 p-5 bg-white border-2 border-slate-100 hover:border-red-200 rounded-2xl shadow-sm hover:shadow-md transition-all group focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                {isTel
                  ? <Phone className="h-6 w-6 text-red-500" aria-hidden="true" />
                  : <ExternalLink className="h-6 w-6 text-red-500" aria-hidden="true" />
                }
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-red-700 transition-colors">
                  {item.title}
                </div>
                {item.description && (
                  <div className="text-slate-500 text-xs mt-1">{item.description}</div>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <p className="text-xs text-slate-400 text-center mt-8">
        Alle genannten Nummern sind kostenlos oder vom Festnetz günstig erreichbar.
      </p>
    </div>
  );
}
