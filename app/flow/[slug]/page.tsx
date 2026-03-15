import { notFound } from "next/navigation";
import Link from "next/link";
import { FLOWS } from "@/data/flows";
import { CATEGORIES } from "@/data/categories";
import FlowClient from "./FlowClient";

export function generateStaticParams() {
  return FLOWS.map((f) => ({ slug: f.slug }));
}

export default async function FlowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const flow = FLOWS.find((f) => f.slug === slug);
  if (!flow) notFound();

  const category = CATEGORIES.find((c) => c.slug === flow.categorySlug);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <nav aria-label="Brotkrümel" className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
        <Link href="/" className="hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm">
          Startseite
        </Link>
        {category && (
          <>
            <span aria-hidden="true">/</span>
            <Link href={`/kategorie/${category.slug}`} className="hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm">
              {category.title}
            </Link>
          </>
        )}
        <span aria-hidden="true">/</span>
        <span className="text-slate-700">{flow.title}</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-3">{flow.title}</h1>
        <p className="text-slate-600 leading-relaxed">{flow.description}</p>
      </header>

      <FlowClient flow={flow} />
    </div>
  );
}
