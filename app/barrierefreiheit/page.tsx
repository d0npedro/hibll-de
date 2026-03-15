export const metadata = {
  title: "Barrierefreiheitserklärung – hibll.de",
};

export default function BarrierefreiheitPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Barrierefreiheitserklärung</h1>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-sm text-amber-800">
        <strong>Hinweis für Betreiber:</strong> Diese Erklärung ist ein Platzhalter und muss vor dem produktiven Betrieb geprüft und ggf. angepasst werden.
      </div>

      <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Unser Anspruch</h2>
          <p>
            hibll.de ist darauf ausgelegt, für möglichst viele Menschen zugänglich zu sein –
            unabhängig von körperlichen oder technischen Einschränkungen.
            Wir orientieren uns dabei an den WCAG 2.1 Richtlinien (Level AA).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Umgesetzte Maßnahmen</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Semantisches HTML und korrekte Überschriftenstruktur</li>
            <li>Ausreichende Farbkontraste</li>
            <li>Vollständige Tastaturnavigation</li>
            <li>Sichtbare Fokus-Zustände</li>
            <li>ARIA-Labels für interaktive Elemente</li>
            <li>Schriftgröße und Abstände für gute Lesbarkeit</li>
            <li>Respektierung der Betriebssystem-Einstellung für reduzierte Bewegung</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Bekannte Einschränkungen</h2>
          <p>[Bekannte Einschränkungen hier eintragen, falls vorhanden]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Feedback und Kontakt</h2>
          <p>
            Wenn du Barrieren auf dieser Website feststellst, melde dich bitte unter:
            [Kontakt-E-Mail eintragen]
          </p>
        </section>
      </div>
    </div>
  );
}
