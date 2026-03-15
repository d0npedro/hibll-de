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
      <nav
        aria-label="Brotkrümel"
        className="flex items-center gap-1.5 text-xs mb-8 flex-wrap"
        style={{ color: "var(--forest-400)" }}
      >
        <Link href="/" className="crumb-link">Startseite</Link>
        {category && (
          <>
            <span aria-hidden="true" style={{ color: "var(--forest-300)" }}>/</span>
            <Link href={`/kategorie/${category.slug}`} className="crumb-link">
              {category.title}
            </Link>
          </>
        )}
        <span aria-hidden="true" style={{ color: "var(--forest-300)" }}>/</span>
        <span style={{ color: "var(--forest-600)" }}>{flow.title}</span>
      </nav>

      <header className="mb-8">
        <h1
          className="text-2xl sm:text-3xl font-semibold leading-tight mb-3"
          style={{ color: "var(--forest-900)" }}
        >
          {flow.title}
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--forest-500)" }}>
          {flow.description}
        </p>
      </header>

      <FlowClient flow={flow} />
    </div>
  );
}
