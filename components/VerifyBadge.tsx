import type { VerifyStatus } from "@/data/verify";
import { VERIFY_LABEL } from "@/data/verify";

export default function VerifyBadge({ status }: { status: VerifyStatus }) {
  if (status === "geprueft") return null;

  return (
    <span
      className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
      style={{
        background: "var(--amber-light)",
        color: "var(--amber-dark)",
        letterSpacing: "0.06em",
      }}
    >
      {VERIFY_LABEL.pruefen}
    </span>
  );
}
