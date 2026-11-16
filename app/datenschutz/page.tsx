import LegalPlaceholder from "@/components/LegalPlaceholder";
import OrientationNote from "@/components/OrientationNote";

export const metadata = {
  title: "Datenschutz – hibll.de",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3" style={{ color: "var(--forest-900)" }}>
        Datenschutzerklärung
      </h1>
      <div className="mb-6">
        <OrientationNote compact />
      </div>

      <LegalPlaceholder>
        <strong>Hinweis:</strong> Bei den hier dargestellten Diensten handelt es sich um <strong>fiktive Angebote</strong>. Wir befinden uns in der Entwicklung; Kunden- oder Gästedaten werden derzeit nicht verarbeitet.
        Hosting-Angaben und Verantwortliche bleiben leer, bis der Mensch sie einträgt.
      </LegalPlaceholder>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--forest-700)" }}>
        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            1. Verantwortliche Stelle
          </h2>
          <p>Peter Henrichs, Fronhofstraße 21, 50354 Hürth, Deutschland. E-Mail: <a href="mailto:peter.henrichs@web.de">peter.henrichs@web.de</a></p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            2. Verarbeitete Daten
          </h2>
          <p>
            Diese Website speichert keine personenbezogenen Daten auf einem eigenen Server.
            Merkliste und Fortschritt liegen nur im lokalen Speicher deines Browsers (localStorage)
            und verlassen dein Gerät nicht.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            3. Hosting und Server-Logs
          </h2>
          <p>Hosting: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Ein Auftragsverarbeitungsvertrag ist für den Produktivbetrieb abzuschließen.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            4. Externe Links
          </h2>
          <p>
            Diese Website enthält Links zu externen Angeboten. Für deren Inhalte sind deren Betreiber verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--forest-800)" }}>
            5. Deine Rechte
          </h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung und Löschung.
            Lokale Daten kannst du über die Browser-Einstellungen löschen.
          </p>
        </section>
      </div>
    </div>
  );
}
