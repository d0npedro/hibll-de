import { Phone, ExternalLink, Clock } from "lucide-react";
import type { Offer } from "@/data/offers";

export default function HotlineCard({ offer }: { offer: Offer }) {
  const isTel = offer.action.startsWith("tel:");
  return (
    <a
      href={offer.action}
      target={isTel ? undefined : "_blank"}
      rel={isTel ? undefined : "noopener noreferrer"}
      className="flex items-start gap-4 p-4 bg-white border-2 border-slate-100 hover:border-green-300 rounded-2xl shadow-sm hover:shadow-md transition-all group focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
    >
      <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
        {isTel
          ? <Phone className="h-5 w-5 text-green-600" aria-hidden="true" />
          : <ExternalLink className="h-5 w-5 text-green-600" aria-hidden="true" />
        }
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-green-700 transition-colors">
          {offer.title}
        </div>
        <div className="text-slate-500 text-xs mt-1">{offer.hint}</div>
        {offer.openingHours && (
          <div className="flex items-center gap-1 mt-1">
            <Clock className="h-3 w-3 text-slate-400" aria-hidden="true" />
            <span className="text-slate-400 text-xs">{offer.openingHours}</span>
          </div>
        )}
      </div>
    </a>
  );
}
