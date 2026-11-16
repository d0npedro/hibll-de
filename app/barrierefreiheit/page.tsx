import LegalPlaceholder from "@/components/LegalPlaceholder";

export const metadata = {
  title: "Barrierefreiheitserklärung – hibll.de",
};

export default function BarrierefreiheitPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3" style={{ color: "var(--forest-900)" }}>
        Barrierefreiheitserklärung
      </h1>

      <LegalPlaceholder>
        <strong>Hinweis:</strong> Diese Website befindet sich im Aufbau. Eine systematische Barrierefreiheitsprüfung steht noch aus; diese Erklärung wird vor einem öffentlichen Betrieb ergänzt.
        Kontakt für Barriere-Meldungen bleibt leer, bis echte Daten vorliegen.
      </LegalPlaceholder>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--forest-700)" }}>
        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Unser Anspruch
          </h2>
          <p>
            hibll.de soll für möglichst viele Menschen nutzbar sein.
            Wir orientieren uns an WCAG 2.1 Level AA.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Umgesetzte Maßnahmen
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Semantisches HTML und Überschriftenstruktur</li>
            <li>Skip-Link zum Inhalt</li>
            <li>Sichtbare Fokus-Zustände</li>
            <li>Tastaturbedienung</li>
            <li>Touch-Ziele mindestens 44 Pixel</li>
            <li>Respekt für reduzierte Bewegung</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Bekannte Einschränkungen
          </h2>
          <p>Bekannte Einschränkungen werden hier ergänzt, sobald die Prüfung vorliegt.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Feedback und Kontakt
          </h2>
          <p>
            Wenn du eine Barriere findest: <a href="mailto:peter.henrichs@web.de">peter.henrichs@web.de</a>
          </p>
        </section>
      </div>
    </div>
  );
}
