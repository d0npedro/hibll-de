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
      className="group flex items-start gap-4 p-4 bg-white border-2 border-slate-100 hover:border-blue-300 rounded-2xl shadow-sm hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
    >
      <div className="flex-1 min-w-0">
        {tag && (
          <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mb-2">
            {tag}
          </span>
        )}
        <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{description}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" aria-hidden="true" />
    </Link>
  );
}
