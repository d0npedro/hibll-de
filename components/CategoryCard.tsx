import Link from "next/link";
import {
  Heart, Shield, Wallet, Home, Baby, Calendar, Globe, Briefcase, Scale,
} from "lucide-react";
import type { Category } from "@/data/categories";

const ICON_MAP: Record<string, React.ElementType> = {
  heart: Heart, shield: Shield, wallet: Wallet, home: Home,
  baby: Baby, calendar: Calendar, globe: Globe, briefcase: Briefcase, scale: Scale,
};

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = ICON_MAP[category.icon] ?? Heart;
  const isSchutz = category.slug === "gewalt-schutz";

  return (
    <Link
      href={`/kategorie/${category.slug}`}
      className="cat-card group focus-visible:outline-none min-h-[7.5rem]"
      style={{
        borderLeft: `3px solid ${isSchutz ? "var(--amber)" : "var(--forest-400)"}`,
      }}
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: isSchutz ? "var(--amber-light)" : "var(--forest-100)" }}
      >
        <Icon
          className="h-4 w-4"
          style={{ color: isSchutz ? "var(--amber-dark)" : "var(--forest-700)" }}
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
