import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export default function HelpCard({ title, description, href, tag }: Props) {
  return (
    <Link
      href={href}
      className="card-link card-link-left group flex items-start gap-4 p-4 sm:p-5 focus-visible:outline-none"
    >
      <div className="flex-1 min-w-0">
        {tag && (
          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2"
            style={{
              background: "var(--forest-100)",
              color: "var(--forest-600)",
              letterSpacing: "0.07em",
            }}
          >
            {tag}
          </span>
        )}
        <h3
          className="font-semibold text-sm leading-snug mb-1"
          style={{
            color: "var(--forest-800)",
            fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
          }}
        >
          {title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "var(--forest-500)" }}>
          {description}
        </p>
      </div>

      <div
        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
        style={{ background: "var(--forest-50)" }}
        aria-hidden="true"
      >
        <ArrowRight className="h-3.5 w-3.5" style={{ color: "var(--forest-500)" }} />
      </div>
    </Link>
  );
}
