import { Inbox } from "lucide-react";

interface Props {
  title: string;
  description?: string;
}

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
        <Inbox className="h-8 w-8 text-slate-300" aria-hidden="true" />
      </div>
      <h3 className="text-slate-600 font-medium">{title}</h3>
      {description && <p className="text-slate-400 text-sm mt-2 max-w-xs">{description}</p>}
    </div>
  );
}
