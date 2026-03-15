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
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-4 font-semibold text-sm transition-colors focus-visible:outline-4 focus-visible:outline-red-400 focus-visible:outline-offset-2"
        aria-label="Soforthilfe öffnen"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        <span>Soforthilfe</span>
      </button>
      <SoforthilfeDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
