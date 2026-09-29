interface Props {
  compact?: boolean;
}

export default function OrientationNote({ compact = false }: Props) {
  return (
    <p
      className={compact ? "text-xs leading-relaxed" : "text-sm leading-relaxed"}
      style={{ color: "var(--forest-500)" }}
      role="note"
    >
      Diese Seite gibt{" "}
      <strong style={{ color: "var(--forest-700)", fontWeight: 600 }}>
        Orientierung
      </strong>
      , keinen Ersatz für Ärztinnen, Behörden oder Beratung.
      In Lebensgefahr:{" "}
      <a href="tel:112" className="underline underline-offset-2" style={{ color: "var(--forest-700)" }}>
        112
      </a>
      . Bei Gewalt:{" "}
      <a href="tel:110" className="underline underline-offset-2" style={{ color: "var(--forest-700)" }}>
        110
      </a>
      .
    </p>
  );
}
