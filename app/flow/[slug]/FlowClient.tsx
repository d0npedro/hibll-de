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
      {/* Progress */}
      <div className="mb-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-700">Dein Fortschritt</span>
          <span className="text-sm text-blue-600">{progress} von {total} erledigt</span>
        </div>
        <div
          className="h-2 bg-blue-100 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Fortschritt: ${pct}%`}
        >
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {flow.sections.map((section) => (
          <section key={section.id}>
            <h2 className="text-base font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" aria-hidden="true" />
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
