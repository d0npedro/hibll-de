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
    <div
      className="flex items-start gap-3 p-4 rounded-xl transition-all duration-200"
      style={checked
        ? { background: "var(--forest-50)", border: "1.5px solid var(--forest-200)" }
        : { background: "#ffffff", border: "1.5px solid var(--forest-200)", boxShadow: "var(--shadow-warm-sm)" }
      }
    >
      {/* Checkbox */}
      <button
        onClick={handleCheck}
        className={`check-btn${checked ? " is-checked" : ""}`}
        aria-label={
          checked
            ? `${step.title} als erledigt markiert – klicken zum Zurücksetzen`
            : `${step.title} als erledigt markieren`
        }
        aria-pressed={checked}
      >
        {checked && (
          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className="font-medium text-sm leading-snug"
          style={checked
            ? { textDecoration: "line-through", color: "var(--forest-400)" }
            : { color: "var(--forest-800)" }
          }
        >
          {step.title}
        </p>
        {step.description && !checked && (
          <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--forest-500)" }}>
            {step.description}
          </p>
        )}
        {step.action && !checked && (
          <a
            href={step.action.href}
            target={isTel ? undefined : "_blank"}
            rel={isTel ? undefined : "noopener noreferrer"}
            className="step-action"
          >
            {isTel
              ? <Phone className="h-3 w-3" aria-hidden="true" />
              : <ExternalLink className="h-3 w-3" aria-hidden="true" />
            }
            {step.action.label}
          </a>
        )}
      </div>

      {/* Bookmark */}
      <button
        onClick={handleBookmark}
        className={`bookmark-btn${bookmarked ? " is-active" : ""}`}
        aria-label={bookmarked ? `${step.title} aus der Merkliste entfernen` : `${step.title} zur Merkliste hinzufügen`}
        aria-pressed={bookmarked}
      >
        {bookmarked
          ? <BookmarkCheck className="h-4 w-4" aria-hidden="true" />
          : <Bookmark className="h-4 w-4" aria-hidden="true" />
        }
      </button>
    </div>
  );
}
