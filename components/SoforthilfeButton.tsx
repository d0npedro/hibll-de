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
        className="sos-float-btn fixed z-50 flex items-center gap-2 font-semibold text-sm text-white rounded-full min-h-12"
        style={{
          paddingInline: "1.125rem",
          paddingBlock: "0.75rem",
          right: "max(1rem, env(safe-area-inset-right))",
          bottom: "max(1.5rem, env(safe-area-inset-bottom))",
          boxShadow: "0 4px 16px rgba(176,58,46,0.28)",
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
