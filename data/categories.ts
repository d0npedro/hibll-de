export interface Category {
  slug: string;
  title: string;
  blurb: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { slug: "gesundheit-psyche", title: "Gesundheit & Psyche", blurb: "Krise, Sucht, HIV, erste Hilfe für die Seele.", icon: "heart" },
  { slug: "gewalt-schutz", title: "Gewalt & Schutz", blurb: "Sicher bleiben, Schutz bekommen, anonym sprechen.", icon: "shield" },
  { slug: "finanzen-schulden", title: "Finanzen & Schulden", blurb: "Schulden ordnen, Beratung finden, erste Schritte.", icon: "wallet" },
  { slug: "wohnen", title: "Wohnen & Obdachlosigkeit", blurb: "Akut übernachten, Wege zurück in die Wohnung.", icon: "home" },
  { slug: "familie", title: "Schwangerschaft & Familie", blurb: "Beratung, Leistungen, rechtliche Fragen.", icon: "baby" },
  { slug: "alter-pflege", title: "Alter & Pflege", blurb: "Pflege zu Hause, Pflegegrad, Entlastung.", icon: "calendar" },
  { slug: "migration", title: "Migration & Ankommen", blurb: "Aufenthalt, Sprache, Arbeit – erste Schritte.", icon: "globe" },
  { slug: "arbeit", title: "Arbeit & Ausbildung", blurb: "Arbeitslosigkeit, Bewerbung, Umschulung.", icon: "briefcase" },
  { slug: "justiz", title: "Justiz & Haftumfeld", blurb: "Unterstützung für Betroffene & Angehörige.", icon: "scale" }
];
