# hibll.de – Hilfe in besonderen Lebenslagen

Eine ruhige, empathische Webanwendung für Menschen in Deutschland, die in schwierigen Lebenssituationen konkrete nächste Schritte und Hilfsangebote suchen.

## Produktversprechen

> Du bist nicht allein. Wir zeigen dir konkrete Schritte.

## Tech-Stack

- **Framework:** Next.js 16 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v4
- **Komponenten:** shadcn/ui + lucide-react
- **State/Persistenz:** localStorage (kein Backend, kein Auth)

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Build & Deploy

```bash
npm run build     # Produktions-Build
npm start         # Produktions-Server lokal

# Deploy zu Vercel (empfohlen):
vercel deploy --prod
```

## Hinweise für Betreiber

**Vor dem produktiven Betrieb unbedingt:**

1. **Impressum** (`/impressum`): Echte Betreiberangaben eintragen
2. **Datenschutz** (`/datenschutz`): Rechtlich geprüfte Datenschutzerklärung ergänzen
3. **Barrierefreiheit** (`/barrierefreiheit`): Erklärung vervollständigen
4. **Notfallnummern prüfen**: Alle `tel:` Links auf Aktualität prüfen
5. **Externe Links**: Alle Links auf externe Beratungsstellen regelmäßig prüfen
6. **Kein echtes Backend**: Alle Daten sind statisch. Für echte Inhalte CMS integrieren.

## Struktur

```
app/             # Next.js App Router Seiten
components/      # Wiederverwendbare React-Komponenten
data/            # Statische Datendateien (Kategorien, Flows, Angebote)
lib/             # Utilities (localStorage, etc.)
```
