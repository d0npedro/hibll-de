export interface Category {
  slug: string;
  title: string;
  blurb: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { slug: "gesundheit-psyche", title: "Gesundheit & Psyche", blurb: "Mit jemandem sprechen. Erste Schritte für die Seele.", icon: "heart" },
  { slug: "gewalt-schutz", title: "Gewalt & Schutz", blurb: "Sicher bleiben. Anonym Hilfe holen.", icon: "shield" },
  { slug: "finanzen-schulden", title: "Finanzen & Schulden", blurb: "Post sortieren. Kostenlose Beratung finden.", icon: "wallet" },
  { slug: "wohnen", title: "Wohnen & Obdachlosigkeit", blurb: "Heute einen Ort finden. Danach weitersehen.", icon: "home" },
  { slug: "familie", title: "Schwangerschaft & Familie", blurb: "Beratung finden. Leistungen klären.", icon: "baby" },
  { slug: "alter-pflege", title: "Alter & Pflege", blurb: "Pflege klären. Entlastung suchen.", icon: "calendar" },
  { slug: "migration", title: "Migration & Ankommen", blurb: "Aufenthalt, Sprache, Arbeit – den nächsten Schritt.", icon: "globe" },
  { slug: "arbeit", title: "Arbeit & Ausbildung", blurb: "Arbeitslosigkeit, Bewerbung, Umschulung.", icon: "briefcase" },
  { slug: "justiz", title: "Justiz & Haftumfeld", blurb: "Unterstützung für Betroffene und Angehörige.", icon: "scale" },
];
