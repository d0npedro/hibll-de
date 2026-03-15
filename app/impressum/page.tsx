export const metadata = {
  title: "Impressum – hibll.de",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Impressum</h1>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-sm text-amber-800">
        <strong>Hinweis für Betreiber:</strong> Dieses Impressum ist ein Platzhalter. Bitte trage hier die echten Angaben des Betreibers ein und lass das Impressum rechtlich prüfen.
      </div>

      <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Angaben gemäß § 5 TMG</h2>
          <p>[Name des Betreibers]<br />
          [Straße und Hausnummer]<br />
          [PLZ und Ort]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Kontakt</h2>
          <p>E-Mail: [E-Mail-Adresse eintragen]<br />
          Telefon: [Telefonnummer eintragen]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>[Name und Anschrift der verantwortlichen Person – hier eintragen]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr.
            Diese Website ersetzt keine professionelle Rechts-, Medizin- oder Sozialberatung.
          </p>
        </section>
      </div>
    </div>
  );
}
