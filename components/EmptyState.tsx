import { Bookmark } from "lucide-react";

interface Props {
  title: string;
  description?: string;
}

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: "var(--forest-100)" }}
        aria-hidden="true"
      >
        <Bookmark className="h-7 w-7" style={{ color: "var(--forest-400)" }} />
      </div>
      <h3
        className="font-semibold text-base"
        style={{
          color: "var(--forest-700)",
          fontFamily: "var(--font-lora, 'Lora'), Georgia, serif",
        }}
      >
        {title}
      </h3>
      {description && (
        <p className="text-sm mt-2 max-w-xs leading-relaxed" style={{ color: "var(--forest-500)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
