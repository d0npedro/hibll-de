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
        <strong>Hinweis:</strong> Bei den hier dargestellten Diensten handelt es sich um
        <strong>fiktive Angebote</strong>. Wir befinden uns in der Entwicklung; es werden derzeit
        keine Leistungen verkauft. Die Website ist ein Prototyp.
      </LegalPlaceholder>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--forest-700)" }}>
        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Peter Henrichs<br />
            Fronhofstraße 21<br />
            50354 Hürth<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Kontakt
          </h2>
          <p>
            E-Mail: <a href="mailto:peter.henrichs@web.de">peter.henrichs@web.de</a><br />
            Telefon: nicht angegeben
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            Verantwortlich für journalistisch-redaktionelle Inhalte
          </h2>
          <p>
            Peter Henrichs, Anschrift wie oben – sofern Inhalte nach § 18 Abs. 2 MStV
            redaktionell gestaltet werden.
          </p>
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
