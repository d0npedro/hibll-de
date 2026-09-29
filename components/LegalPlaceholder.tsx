interface Props {
  children: React.ReactNode;
}

export default function LegalPlaceholder({ children }: Props) {
  return (
    <div
      className="rounded-2xl p-4 mb-8 text-sm leading-relaxed"
      style={{
        background: "var(--amber-light)",
        border: "1.5px solid var(--cream-300)",
        color: "var(--amber-dark)",
      }}
      role="note"
    >
      {children}
    </div>
  );
}
