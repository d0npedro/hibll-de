import { Phone, ExternalLink, Clock } from "lucide-react";
import type { Offer } from "@/data/offers";

export default function HotlineCard({ offer }: { offer: Offer }) {
  const isTel = offer.action.startsWith("tel:");

  return (
    <a
      href={offer.action}
      target={isTel ? undefined : "_blank"}
      rel={isTel ? undefined : "noopener noreferrer"}
      className="card-hotline group flex items-start gap-4 p-4 focus-visible:outline-none"
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: "var(--forest-100)" }}
      >
        {isTel
          ? <Phone className="h-4 w-4 transition-transform group-hover:scale-110" style={{ color: "var(--forest-600)" }} aria-hidden="true" />
          : <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" style={{ color: "var(--forest-600)" }} aria-hidden="true" />
        }
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="font-semibold text-sm leading-snug mb-1"
          style={{
            color: "var(--forest-800)",
            fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
          }}
        >
          {offer.title}
        </div>
        <div className="text-xs" style={{ color: "var(--forest-500)" }}>{offer.hint}</div>
        {offer.openingHours && (
          <div className="flex items-center gap-1 mt-1.5">
            <Clock className="h-3 w-3 flex-shrink-0" style={{ color: "var(--forest-400)" }} aria-hidden="true" />
            <span className="text-xs" style={{ color: "var(--forest-400)" }}>{offer.openingHours}</span>
          </div>
        )}
      </div>
    </a>
  );
}
