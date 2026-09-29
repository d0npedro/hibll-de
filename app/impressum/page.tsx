import LegalPlaceholder from "@/components/LegalPlaceholder";
import OrientationNote from "@/components/OrientationNote";

export const metadata = {
  title: "Impressum – hibll.de",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3" style={{ color: "var(--forest-900)" }}>
        Impressum
      </h1>
      <div className="mb-6">
        <OrientationNote compact />
      </div>

      <LegalPlaceholder>
        <strong>Platzhalter.</strong> Hier stehen noch keine Betreiberangaben.
        Vor einem öffentlichen Betrieb müssen echte Angaben eingetragen und rechtlich geprüft werden.
        Wir füllen das nicht mit erfundenen Daten.
      </LegalPlaceholder>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--forest-700)" }}>
        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            [Name des Betreibers]<br />
            [Straße und Hausnummer]<br />
            [PLZ und Ort]
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Kontakt
          </h2>
          <p>
            E-Mail: [E-Mail-Adresse eintragen]<br />
            Telefon: [Telefonnummer eintragen]
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>[Name und Anschrift der verantwortlichen Person – hier eintragen]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt zusammengestellt.
            Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr.
            Diese Website ersetzt keine professionelle Rechts-, Medizin- oder Sozialberatung.
          </p>
        </section>
      </div>
    </div>
  );
}
