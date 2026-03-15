export interface Offer {
  id: string;
  categorySlug: string;
  title: string;
  type: "hotline" | "beratung" | "onlineberatung" | "notfall";
  action: string;
  hint: string;
  openingHours?: string;
}

export const OFFERS: Offer[] = [
  { id: "telefonseelsorge-ev", categorySlug: "gesundheit-psyche", title: "Telefonseelsorge evangelisch – 0800 111 0 111", type: "hotline", action: "tel:08001110111", hint: "Kostenlos, anonym, 24/7", openingHours: "24/7" },
  { id: "telefonseelsorge-kath", categorySlug: "gesundheit-psyche", title: "Telefonseelsorge katholisch – 0800 111 0 222", type: "hotline", action: "tel:08001110222", hint: "Kostenlos, anonym, 24/7", openingHours: "24/7" },
  { id: "sucht-hotline", categorySlug: "gesundheit-psyche", title: "Sucht & Drogen Hotline – 01806 313031", type: "hotline", action: "tel:01806313031", hint: "Mo–So 0-24 Uhr", openingHours: "Mo–So 0–24 Uhr" },
  { id: "hilfetelefon-frauen", categorySlug: "gewalt-schutz", title: "Hilfetelefon Gewalt gegen Frauen – 08000 116 016", type: "hotline", action: "tel:08000116016", hint: "Kostenlos, anonym, mehrsprachig, 24/7", openingHours: "24/7" },
  { id: "maenner-hotline", categorySlug: "gewalt-schutz", title: "Männer-Beratungshotline – 0800 123 9900", type: "hotline", action: "tel:08001239900", hint: "Kostenlos, Mo–Do 8–20 Uhr", openingHours: "Mo–Do 8–20 Uhr" },
  { id: "schuldnerberatung-online", categorySlug: "finanzen-schulden", title: "Online-Schuldnerberatung Caritas", type: "onlineberatung", action: "https://www.caritas.de/hilfeundberatung/onlineberatung/schuldnerberatung", hint: "Kostenlos, anonym", openingHours: "Jederzeit" },
  { id: "verbraucherzentrale", categorySlug: "finanzen-schulden", title: "Verbraucherzentrale – Schuldenberatung", type: "beratung", action: "https://www.verbraucherzentrale.de", hint: "Beratung in allen Bundesländern", openingHours: "Mo–Fr 9–17 Uhr" },
  { id: "bahnhofsmission", categorySlug: "wohnen", title: "Bahnhofsmission – sofortige Hilfe", type: "notfall", action: "https://www.bahnhofsmission.de", hint: "An den meisten großen Bahnhöfen", openingHours: "Täglich" },
  { id: "obdachlosenhilfe", categorySlug: "wohnen", title: "Caritas Obdachlosenhilfe", type: "beratung", action: "https://www.caritas.de", hint: "Beratung und Unterstützung", openingHours: "Mo–Fr 8–18 Uhr" },
  { id: "pro-familia", categorySlug: "familie", title: "pro familia – Beratung", type: "beratung", action: "https://www.profamilia.de", hint: "Schwangerschaft, Familienplanung, Recht", openingHours: "Mo–Fr 9–17 Uhr" },
  { id: "diakonie-pflege", categorySlug: "alter-pflege", title: "Diakonie – Pflegeberatung", type: "beratung", action: "https://www.diakonie.de", hint: "Pflegeberatung und Unterstützung", openingHours: "Mo–Fr 9–17 Uhr" },
  { id: "bamf-migration", categorySlug: "migration", title: "BAMF – Migrationsberatung", type: "beratung", action: "https://www.bamf.de", hint: "Aufenthalt, Asyl, Integration", openingHours: "Mo–Fr 9–15 Uhr" },
  { id: "arbeitsagentur", categorySlug: "arbeit", title: "Bundesagentur für Arbeit", type: "beratung", action: "tel:08004555500", hint: "Kostenlos, Mo–Fr 8–18 Uhr", openingHours: "Mo–Fr 8–18 Uhr" },
  { id: "weisser-ring", categorySlug: "justiz", title: "Weisser Ring – Opferhilfe – 116 006", type: "hotline", action: "tel:116006", hint: "Kostenlos, Mo–So 7–22 Uhr", openingHours: "Mo–So 7–22 Uhr" },
];
