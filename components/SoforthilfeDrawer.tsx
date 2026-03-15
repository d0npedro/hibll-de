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
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-red-500 text-white px-6 pt-6 pb-4 rounded-t-3xl sm:rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 id="sos-title" className="text-xl font-bold">Soforthilfe</h2>
            <button
              ref={closeRef}
              onClick={onClose}
              className="p-2 rounded-full hover:bg-red-600 transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              aria-label="Schließen"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <p className="text-red-100 text-sm mt-1">
            Du bist nicht allein. Sofort erreichbare Hilfe:
          </p>
        </div>
        <div className="p-4 space-y-3">
          {SOFORTHILFE.map((item) => {
            const isTel = item.action.startsWith("tel:");
            return (
              <a
                key={item.title}
                href={item.action}
                target={isTel ? undefined : "_blank"}
                rel={isTel ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-2xl transition-colors group focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  {isTel
                    ? <Phone className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    : <ExternalLink className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-slate-800 text-sm leading-snug">{item.title}</div>
                  {item.description && (
                    <div className="text-slate-500 text-xs mt-0.5">{item.description}</div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
        <div className="px-4 pb-6">
          <p className="text-xs text-slate-400 text-center">
            Alle Nummern sind kostenlos oder von Festnetz günstig erreichbar
          </p>
        </div>
      </div>
    </div>
  );
}
