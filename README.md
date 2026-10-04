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

## Features

- 🎯 **Intuitiver Flow**: Kategorien → Leitfäden → konkrete Schritte
- 💾 **Lokale Persistenz**: Fortschritt und Lesezeichen nur im Browser (datenschutzfreundlich)
- 📱 **Responsive Design**: Optimiert für Mobile und Desktop
- ♿ **Barrierefreiheit**: ARIA-Labels, semantische HTML, Keyboard Navigation
- 🔐 **Datenschutz**: Keine Server-Logs, keine Tracking, keine Cookies
- 🌍 **Mehrsprachig vorbereitet**: Struktur für weitere Sprachen ausgelegt

## Struktur

```
app/             # Next.js App Router Seiten
components/      # Wiederverwendbare React-Komponenten (StepCard, CategoryCard, etc.)
data/            # Statische Datendateien (Kategorien, Flows, Angebote)
lib/             # Utilities (localStorage mit Safe-Wrappers, etc.)
```

## Bekannte Verbesserungen

### Storage & Events (v1.1)
- ✅ `addBookmark()` und `removeBookmark()` dispatchen jetzt "hibll-bookmarks" Event
- ✅ Merkliste-Seite aktualisiert sich live, wenn Lesezeichen hinzugefügt/entfernt werden
- ✅ Keine manuellen Seite-Aktualisierungen mehr nötig

## Testing

Für lokale manuelle Tests:

```bash
npm run dev
# Browser auf http://localhost:3000
# 1. Eine Kategorie auswählen
# 2. Ein Leitfaden öffnen
# 3. Schritte abhaken → Progress bar sollte sich bewegen
# 4. Schritt mit Lesezeichen → zu /merkliste navigieren
# 5. Neues Lesezeichen sollte sofort sichtbar sein
# 6. Lesezeichen löschen → sollte sofort verschwinden
```

Keine automatisierten Tests vorhanden (statischer, dateibasierter Content).

## Deployment Notes

**Vor der ersten Produktion:**

1. Alle `verifyStatus: "pruefen"` Links in `/data/flows.ts` mit aktuellen Quellen ersetzen
2. Impressum, Datenschutz, Barrierefreiheit vollständig ausfüllen
3. Notfallnummern (tel: Links) auf aktuelle Gültigkeit prüfen
4. Mit Verbraucherzentralen / Hilfsorganisationen Links abstimmen
5. Regelmäßige (monatliche) Link-Audits einplanen

## Git & Commit History

- Hauptbranch: `main`
- Deployment: Vercel recommended (Next.js native support)
- Keine Secrets in `.env` oder `node_modules/` committet
