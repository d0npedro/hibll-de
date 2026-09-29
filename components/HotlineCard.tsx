import { Phone, ExternalLink, Clock } from "lucide-react";
import type { Offer } from "@/data/offers";
import VerifyBadge from "./VerifyBadge";

export default function HotlineCard({ offer }: { offer: Offer }) {
  const isTel = offer.action.startsWith("tel:");

  return (
    <a
      href={offer.action}
      target={isTel ? undefined : "_blank"}
      rel={isTel ? undefined : "noopener noreferrer"}
      className="card-hotline group flex items-start gap-4 p-4 min-h-[4.5rem] focus-visible:outline-none"
    >
      <div
        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: "var(--forest-100)" }}
      >
        {isTel
          ? <Phone className="h-4 w-4" style={{ color: "var(--forest-600)" }} aria-hidden="true" />
          : <ExternalLink className="h-4 w-4" style={{ color: "var(--forest-600)" }} aria-hidden="true" />
        }
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <div
            className="font-semibold text-sm leading-snug"
            style={{
              color: "var(--forest-800)",
              fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
            }}
          >
            {offer.title}
          </div>
          <VerifyBadge status={offer.verifyStatus} />
        </div>
        <div className="text-xs leading-relaxed" style={{ color: "var(--forest-500)" }}>{offer.hint}</div>
        {offer.costNote && (
          <div className="text-xs mt-1" style={{ color: "var(--amber-dark)" }}>
            {offer.costNote}
          </div>
        )}
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
