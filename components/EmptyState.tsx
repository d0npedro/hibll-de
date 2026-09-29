import Link from "next/link";
import { Bookmark } from "lucide-react";

interface Props {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}

export default function EmptyState({ title, description, actionHref, actionLabel }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: "var(--forest-100)" }}
        aria-hidden="true"
      >
        <Bookmark className="h-7 w-7" style={{ color: "var(--forest-400)" }} />
      </div>
      <h2
        className="font-semibold text-base"
        style={{
          color: "var(--forest-700)",
          fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
        }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm mt-2 max-w-xs leading-relaxed" style={{ color: "var(--forest-500)" }}>
          {description}
        </p>
      )}
      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="mt-5 inline-flex items-center justify-center min-h-11 px-5 rounded-xl text-sm font-semibold"
          style={{ background: "var(--forest-700)", color: "#fff" }}
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
