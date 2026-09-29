"use client";
import { useEffect, useRef } from "react";
import { X, Phone, ExternalLink } from "lucide-react";
import { SOFORTHILFE } from "@/data/sos";
import VerifyBadge from "./VerifyBadge";
import OrientationNote from "./OrientationNote";

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
      <div
        className="absolute inset-0 backdrop-blur-sm animate-fade-in"
        style={{ background: "rgba(10,26,19,0.6)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="relative w-full sm:max-w-md max-h-[88vh] overflow-y-auto animate-slide-up"
        style={{
          background: "var(--cream-50)",
          borderRadius: "1.5rem 1.5rem 0 0",
          boxShadow: "0 -8px 48px rgba(10,26,19,0.25)",
        }}
      >
        <div className="flex justify-center pt-3 pb-1 sm:hidden" aria-hidden="true">
          <div className="w-10 h-1 rounded-full" style={{ background: "var(--forest-300)" }} />
        </div>

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
              className="drawer-close min-h-11 min-w-11 inline-flex items-center justify-center rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              style={{ ["--tw-ring-offset-color" as string]: "var(--sos)" }}
              aria-label="Schließen"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
            Du bist nicht allein. Hier sind sofort erreichbare Wege.
          </p>
        </div>

        <div className="p-4 space-y-2.5">
          {SOFORTHILFE.map((item) => {
            const isTel = item.action.startsWith("tel:");
            return (
              <a
                key={item.title}
                href={item.action}
                target={isTel ? undefined : "_blank"}
                rel={isTel ? undefined : "noopener noreferrer"}
                className="card-sos flex items-center gap-4 p-4 min-h-16"
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--sos-light)" }}
                >
                  {isTel
                    ? <Phone className="h-4 w-4" style={{ color: "var(--sos)" }} aria-hidden="true" />
                    : <ExternalLink className="h-4 w-4" style={{ color: "var(--sos)" }} aria-hidden="true" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="font-semibold text-sm leading-snug" style={{ color: "var(--forest-900)" }}>
                      {item.title}
                    </div>
                    <VerifyBadge status={item.verifyStatus} />
                  </div>
                  {item.description && (
                    <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--forest-500)" }}>
                      {item.description}
                    </div>
                  )}
                  {item.costNote && (
                    <div className="text-xs mt-1" style={{ color: "var(--amber-dark)" }}>
                      {item.costNote}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className="px-4 pb-8">
          <OrientationNote compact />
        </div>
      </div>
    </div>
  );
}
