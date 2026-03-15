"use client";
import { useState, useEffect } from "react";
import { getChecklist } from "@/lib/storage";
import StepCard from "@/components/StepCard";
import type { Flow } from "@/data/flows";

interface Props {
  flow: Flow;
}

export default function FlowClient({ flow }: Props) {
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const allSteps = flow.sections.flatMap((s) => s.steps);
    const checklist = getChecklist();
    const done = allSteps.filter((s) => checklist[`${flow.slug}__${s.id}`]).length;
    setTotal(allSteps.length);
    setProgress(done);
  }, [flow]);

  const pct = total > 0 ? Math.round((progress / total) * 100) : 0;

  return (
    <div>
      {/* Progress bar */}
      <div
        className="mb-8 p-4 rounded-xl animate-fade-up"
        style={{
          background: "var(--forest-50)",
          border: "1.5px solid var(--forest-200)",
        }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--forest-700)" }}
          >
            Dein Fortschritt
          </span>
          <span
            className="text-sm font-medium tabular-nums"
            style={{ color: "var(--forest-500)" }}
          >
            {progress} von {total} erledigt
          </span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: "var(--forest-200)" }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Fortschritt: ${pct} Prozent`}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${pct}%`,
              background: pct === 100 ? "var(--forest-600)" : "var(--amber)",
            }}
          />
        </div>
        {pct === 100 && (
          <p className="text-xs mt-2 font-medium" style={{ color: "var(--forest-600)" }}>
            Alle Schritte erledigt. Gut gemacht.
          </p>
        )}
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {flow.sections.map((section, si) => (
          <section key={section.id} className="animate-fade-up" style={{ animationDelay: `${si * 0.1}s` }}>
            <h2
              className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2.5"
              style={{
                color: "var(--forest-500)",
                letterSpacing: "0.08em",
              }}
            >
              <span
                className="inline-block w-1 h-4 rounded-full"
                style={{ background: "var(--amber)" }}
                aria-hidden="true"
              />
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.steps.map((step) => (
                <StepCard key={step.id} step={step} flowSlug={flow.slug} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
