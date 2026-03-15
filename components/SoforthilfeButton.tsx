"use client";
import { useState } from "react";
import { Phone } from "lucide-react";
import SoforthilfeDrawer from "./SoforthilfeDrawer";

export default function SoforthilfeButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="sos-float-btn animate-sos-pulse fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center gap-2 font-semibold text-sm text-white rounded-full"
        style={{
          paddingInline: "1.125rem",
          paddingBlock: "0.75rem",
          boxShadow: "0 4px 20px rgba(176,58,46,0.4)",
        }}
        aria-label="Soforthilfe öffnen"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        <span>Soforthilfe</span>
      </button>
      <SoforthilfeDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
