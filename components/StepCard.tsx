"use client";
import { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck, Phone, ExternalLink } from "lucide-react";
import { getChecklist, setChecklistItem, addBookmark, removeBookmark, isBookmarked } from "@/lib/storage";
import type { FlowStep } from "@/data/flows";

interface Props {
  step: FlowStep;
  flowSlug: string;
}

export default function StepCard({ step, flowSlug }: Props) {
  const stepKey = `${flowSlug}__${step.id}`;
  const [checked, setChecked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const checklist = getChecklist();
    setChecked(!!checklist[stepKey]);
    setBookmarked(isBookmarked(stepKey));
  }, [stepKey]);

  const handleCheck = () => {
    const next = !checked;
    setChecked(next);
    setChecklistItem(stepKey, next);
  };

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark(stepKey);
      setBookmarked(false);
    } else {
      addBookmark({
        id: stepKey,
        title: step.title,
        description: step.description,
        href: step.action?.href,
        type: "step",
      });
      setBookmarked(true);
    }
  };

  const isTel = step.action?.href.startsWith("tel:");

  return (
    <div className={`group flex items-start gap-3 p-4 rounded-2xl border-2 transition-all ${
      checked
        ? "bg-green-50 border-green-200"
        : "bg-white border-slate-100 hover:border-slate-200"
    }`}>
      <button
        onClick={handleCheck}
        className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${
          checked
            ? "bg-green-500 border-green-500 text-white"
            : "border-slate-300 hover:border-green-400"
        }`}
        aria-label={checked ? `${step.title} als erledigt markiert – klicken zum Zurücksetzen` : `${step.title} als erledigt markieren`}
        aria-pressed={checked}
      >
        {checked && (
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-sm leading-snug ${checked ? "line-through text-slate-400" : "text-slate-800"}`}>
          {step.title}
        </p>
        {step.description && (
          <p className="text-slate-500 text-xs mt-1 leading-relaxed">{step.description}</p>
        )}
        {step.action && (
          <a
            href={step.action.href}
            target={isTel ? undefined : "_blank"}
            rel={isTel ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
          >
            {isTel
              ? <Phone className="h-3 w-3" aria-hidden="true" />
              : <ExternalLink className="h-3 w-3" aria-hidden="true" />
            }
            {step.action.label}
          </a>
        )}
      </div>
      <button
        onClick={handleBookmark}
        className="flex-shrink-0 p-1.5 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
        aria-label={bookmarked ? `${step.title} aus der Merkliste entfernen` : `${step.title} zur Merkliste hinzufügen`}
        aria-pressed={bookmarked}
      >
        {bookmarked
          ? <BookmarkCheck className="h-4 w-4 text-blue-500" aria-hidden="true" />
          : <Bookmark className="h-4 w-4 text-slate-300 hover:text-blue-400" aria-hidden="true" />
        }
      </button>
    </div>
  );
}
