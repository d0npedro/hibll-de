import Link from "next/link";
import {
  Heart, Shield, Wallet, Home, Baby, Calendar, Globe, Briefcase, Scale,
} from "lucide-react";
import type { Category } from "@/data/categories";

const ICON_MAP: Record<string, React.ElementType> = {
  heart: Heart, shield: Shield, wallet: Wallet, home: Home,
  baby: Baby, calendar: Calendar, globe: Globe, briefcase: Briefcase, scale: Scale,
};

const ACCENT_MAP: Record<string, { border: string; iconBg: string; iconColor: string }> = {
  heart:     { border: "#e8857a", iconBg: "#fdf0ee", iconColor: "#c05a52" },
  shield:    { border: "#d4845a", iconBg: "#fef3ec", iconColor: "#b8622e" },
  wallet:    { border: "#c8a83a", iconBg: "#fdf8ec", iconColor: "#9e7e1e" },
  home:      { border: "#4e7d62", iconBg: "#eef7f0", iconColor: "#2d5443" },
  baby:      { border: "#c87ab0", iconBg: "#fdf0f9", iconColor: "#a0508c" },
  calendar:  { border: "#7a7ec8", iconBg: "#f0f0fd", iconColor: "#4e52a0" },
  globe:     { border: "#4a9e9e", iconBg: "#eef7f7", iconColor: "#2d7070" },
  briefcase: { border: "#5a86c8", iconBg: "#eef3fd", iconColor: "#2e5ea0" },
  scale:     { border: "#7a7a9e", iconBg: "#f2f2f9", iconColor: "#505078" },
};

const DEFAULT_ACCENT = { border: "var(--forest-400)", iconBg: "var(--forest-100)", iconColor: "var(--forest-700)" };

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = ICON_MAP[category.icon] ?? Heart;
  const accent = ACCENT_MAP[category.icon] ?? DEFAULT_ACCENT;

  return (
    <Link
      href={`/kategorie/${category.slug}`}
      className="cat-card group focus-visible:outline-none"
      style={{
        borderLeft: `3px solid ${accent.border}`,
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: accent.iconBg }}
      >
        <Icon
          className="h-4 w-4 transition-transform group-hover:scale-110"
          style={{ color: accent.iconColor }}
          aria-hidden="true"
        />
      </div>
      <div>
        <h3
          className="font-semibold text-sm leading-snug mb-1"
          style={{
            color: "var(--forest-800)",
            fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
          }}
        >
          {category.title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "var(--forest-500)" }}>
          {category.blurb}
        </p>
      </div>
    </Link>
  );
}
