# AGENTS.md – hibll.de

Dieses Dokument beschreibt Produktzweck, UX-Prinzipien, technische Konventionen und Ton für KI-gestützte Entwicklungsarbeit an hibll.de.

## Produktzweck

hibll.de hilft Menschen in Deutschland in besonderen Lebenslagen. Die App bietet:
- Kategorisierte Hilfsthemen (Gesundheit, Gewalt, Schulden, etc.)
- Schritt-für-Schritt-Flows mit persistenter Checkliste
- Hotlines und Beratungsangebote
- Soforthilfe-Funktion
- Persönliche Merkliste

## UX-Prinzipien

1. **Praktisch zuerst**: Was kann ich jetzt tun? → Immer zuerst beantworten
2. **Keine Überforderung**: Kurze Texte, klare Schritte, keine langen Erklärungen
3. **Mobil first**: Die mobile Erfahrung ist primär
4. **Keine Dark Patterns**: Keine manipulative Dringlichkeit, keine Verwirrung
5. **Sofort nützlich**: Jede Seite muss unmittelbar helfen

## Tone of Voice

- Ruhig, vertrauensvoll, klar
- Direkte Ansprache: "du" (Kleinschreibung)
- Kurze Sätze
- Keine Amtssprache
- Empathisch ohne emotional überfordern
- Beispiel: "Du bist nicht allein. Wir zeigen dir konkrete Schritte."

## Barrierefreiheit (nicht verhandelbar)

- WCAG 2.1 Level AA
- Semantisches HTML, korrekte Überschriftenstruktur
- Tastaturnavigation vollständig
- Sichtbare Fokus-Zustände
- ARIA-Labels für alle interaktiven Elemente
- Ausreichende Farbkontraste
- Keine icon-only Buttons ohne Label
- Drawer/Dialog: Escape schließt, Fokus wird verwaltet

## Dateikonventionen

```
app/              → Next.js App Router (Seiten)
components/       → Wiederverwendbare React-Komponenten
data/             → Statische Daten (TypeScript-Exporte)
lib/              → Utilities (storage.ts, etc.)
```

## Sprachregeln

- **Alle sichtbaren UI-Texte: Deutsch**
- Code, Kommentare, Variablen, Dateinamen: Englisch
- Keine maschinelle Übersetzung – echtes Deutsch verwenden

## State & Persistenz

- Ausschließlich localStorage
- Kein Backend, kein Auth, keine Analytics
- localStorage-Zugriff immer mit try/catch und `typeof window !== "undefined"` absichern

## Commit-Stil

Klare, professionelle Commit-Messages auf Englisch:
- `feat: add flow page with checklist persistence`
- `fix: handle SSR localStorage access`
- `polish: improve mobile spacing and focus states`
