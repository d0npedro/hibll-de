import { Phone, ExternalLink } from "lucide-react";
import { SOFORTHILFE } from "@/data/sos";
import VerifyBadge from "@/components/VerifyBadge";
import OrientationNote from "@/components/OrientationNote";

export const metadata = {
  title: "Soforthilfe – hibll.de",
  description: "Sofort erreichbare Nummern bei akuter Gefahr. Orientierung, kein Ersatz der Institution.",
};

export default function SosPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <header className="mb-8">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: "var(--sos-light)" }}
          aria-hidden="true"
        >
          <Phone className="h-7 w-7" style={{ color: "var(--sos)" }} />
        </div>
        <h1
          className="text-2xl sm:text-3xl font-semibold mb-3"
          style={{ color: "var(--forest-900)" }}
        >
          Soforthilfe
        </h1>
        <p
          className="text-sm leading-relaxed italic mb-4"
          style={{
            color: "var(--forest-600)",
            fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
          }}
        >
          Du bist nicht allein. Hier sind sofort erreichbare Wege.
        </p>
        <OrientationNote />
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
              className="card-sos flex items-center gap-4 p-5 min-h-16"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--sos-light)" }}
              >
                {isTel
                  ? <Phone className="h-5 w-5" style={{ color: "var(--sos)" }} aria-hidden="true" />
                  : <ExternalLink className="h-5 w-5" style={{ color: "var(--sos)" }} aria-hidden="true" />
                }
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <div
                    className="font-semibold text-sm leading-snug"
                    style={{
                      color: "var(--forest-900)",
                      fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
                    }}
                  >
                    {item.title}
                  </div>
                  <VerifyBadge status={item.verifyStatus} />
                </div>
                {item.description && (
                  <div className="text-xs mt-1 leading-relaxed" style={{ color: "var(--forest-500)" }}>
                    {item.description}
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <p className="text-xs text-center mt-8 leading-relaxed" style={{ color: "var(--forest-400)" }}>
        112, 110 und die hier genannten 0800-/116-Nummern sind kostenlos.
        Andere Angebote können Kosten haben – das steht am Eintrag.
      </p>
    </div>
  );
}
