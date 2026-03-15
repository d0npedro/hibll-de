"use client";
import { useEffect, useRef } from "react";
import { X, Phone, ExternalLink } from "lucide-react";
import { SOFORTHILFE } from "@/data/sos";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SoforthilfeDrawer({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sos-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm animate-fade-in"
        style={{ background: "rgba(10,26,19,0.6)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative w-full sm:max-w-md max-h-[88vh] overflow-y-auto animate-slide-up"
        style={{
          background: "var(--cream-50)",
          borderRadius: "1.5rem 1.5rem 0 0",
          boxShadow: "0 -8px 48px rgba(10,26,19,0.25)",
        }}
      >
        {/* Drag handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden" aria-hidden="true">
          <div className="w-10 h-1 rounded-full" style={{ background: "var(--forest-300)" }} />
        </div>

        {/* Header */}
        <div
          className="sticky top-0 px-6 pt-5 pb-4"
          style={{
            background: "var(--sos)",
            borderRadius: "1.5rem 1.5rem 0 0",
          }}
        >
          <div className="flex items-center justify-between mb-1">
            <h2
              id="sos-title"
              className="text-xl font-semibold text-white"
              style={{ fontFamily: "var(--font-lora, 'Lora'), Georgia, serif" }}
            >
              Soforthilfe
            </h2>
            <button
              ref={closeRef}
              onClick={onClose}
              className="drawer-close p-2 rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              style={{ ["--tw-ring-offset-color" as string]: "var(--sos)" }}
              aria-label="Schließen"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
            Du bist nicht allein. Sofort erreichbare Hilfe:
          </p>
        </div>

        {/* Items */}
        <div className="p-4 space-y-2.5">
          {SOFORTHILFE.map((item, i) => {
            const isTel = item.action.startsWith("tel:");
            return (
              <a
                key={item.title}
                href={item.action}
                target={isTel ? undefined : "_blank"}
                rel={isTel ? undefined : "noopener noreferrer"}
                className="card-sos flex items-center gap-4 p-4 animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--sos-light)" }}
                >
                  {isTel
                    ? <Phone className="h-4 w-4" style={{ color: "var(--sos)" }} aria-hidden="true" />
                    : <ExternalLink className="h-4 w-4" style={{ color: "var(--sos)" }} aria-hidden="true" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm leading-snug" style={{ color: "var(--forest-900)" }}>
                    {item.title}
                  </div>
                  {item.description && (
                    <div className="text-xs mt-0.5" style={{ color: "var(--forest-500)" }}>
                      {item.description}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className="px-4 pb-8 text-center">
          <p className="text-xs" style={{ color: "var(--forest-400)" }}>
            Alle Nummern sind kostenlos oder günstig erreichbar
          </p>
        </div>
      </div>
    </div>
  );
}
