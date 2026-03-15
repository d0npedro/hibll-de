import Link from "next/link";
import { Heart, Shield, Wallet, Home, Baby, Calendar, Globe, Briefcase, Scale } from "lucide-react";
import type { Category } from "@/data/categories";

const ICON_MAP: Record<string, React.ElementType> = {
  heart: Heart,
  shield: Shield,
  wallet: Wallet,
  home: Home,
  baby: Baby,
  calendar: Calendar,
  globe: Globe,
  briefcase: Briefcase,
  scale: Scale,
};

const COLOR_MAP: Record<string, { bg: string; icon: string; border: string }> = {
  heart: { bg: "bg-rose-50", icon: "text-rose-500", border: "hover:border-rose-300" },
  shield: { bg: "bg-orange-50", icon: "text-orange-500", border: "hover:border-orange-300" },
  wallet: { bg: "bg-amber-50", icon: "text-amber-500", border: "hover:border-amber-300" },
  home: { bg: "bg-sky-50", icon: "text-sky-500", border: "hover:border-sky-300" },
  baby: { bg: "bg-pink-50", icon: "text-pink-500", border: "hover:border-pink-300" },
  calendar: { bg: "bg-purple-50", icon: "text-purple-500", border: "hover:border-purple-300" },
  globe: { bg: "bg-teal-50", icon: "text-teal-500", border: "hover:border-teal-300" },
  briefcase: { bg: "bg-blue-50", icon: "text-blue-500", border: "hover:border-blue-300" },
  scale: { bg: "bg-indigo-50", icon: "text-indigo-500", border: "hover:border-indigo-300" },
};

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = ICON_MAP[category.icon] ?? Heart;
  const colors = COLOR_MAP[category.icon] ?? { bg: "bg-slate-50", icon: "text-slate-500", border: "hover:border-slate-300" };

  return (
    <Link
      href={`/kategorie/${category.slug}`}
      className={`group flex flex-col gap-3 p-4 bg-white border-2 border-slate-100 ${colors.border} rounded-2xl shadow-sm hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2`}
    >
      <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center`}>
        <Icon className={`h-5 w-5 ${colors.icon}`} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-blue-700 transition-colors">
          {category.title}
        </h3>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{category.blurb}</p>
      </div>
    </Link>
  );
}
