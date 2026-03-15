export const metadata = {
  title: "Datenschutz – hibll.de",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Datenschutzerklärung</h1>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-sm text-amber-800">
        <strong>Hinweis für Betreiber:</strong> Diese Seite ist ein Muster-Platzhalter. Bitte ersetze diesen Text vor dem produktiven Betrieb durch eine rechtlich geprüfte Datenschutzerklärung.
      </div>

      <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">1. Verantwortliche Stelle</h2>
          <p>[Name und Anschrift des Betreibers – hier eintragen]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">2. Verarbeitete Daten</h2>
          <p>
            Diese Website speichert keine personenbezogenen Daten auf einem Server.
            Alle Nutzerinformationen (Merkliste, Fortschritt) werden ausschließlich im lokalen Speicher
            deines Browsers (localStorage) gespeichert und verlassen dein Gerät nicht.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">3. Hosting und Server-Logs</h2>
          <p>[Angaben zum Hosting-Anbieter und serverseitiger Datenverarbeitung – hier eintragen]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">4. Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Angeboten (z. B. Beratungsstellen, Hotlines).
            Für die Inhalte verlinkter Seiten sind deren Betreiber verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">5. Deine Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner Daten.
            Da alle Daten lokal in deinem Browser gespeichert werden, kannst du sie jederzeit
            über die Browser-Einstellungen löschen.
          </p>
        </section>
      </div>
    </div>
  );
}
