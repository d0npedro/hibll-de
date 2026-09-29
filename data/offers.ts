import type { VerifyStatus } from "./verify";

export interface Offer {
  id: string;
  categorySlug: string;
  title: string;
  type: "hotline" | "beratung" | "onlineberatung" | "notfall";
  action: string;
  hint: string;
  openingHours?: string;
  verifyStatus: VerifyStatus;
  costNote?: string;
}

export const OFFERS: Offer[] = [
  {
    id: "telefonseelsorge-ev",
    categorySlug: "gesundheit-psyche",
    title: "Telefonseelsorge – 0800 111 0 111",
    type: "hotline",
    action: "tel:08001110111",
    hint: "Kostenlos, anonym. Auch 0800 111 0 222 und 116 123.",
    openingHours: "24/7",
    verifyStatus: "geprueft",
  },
  {
    id: "telefonseelsorge-kath",
    categorySlug: "gesundheit-psyche",
    title: "Telefonseelsorge – 0800 111 0 222",
    type: "hotline",
    action: "tel:08001110222",
    hint: "Kostenlos, anonym. Gleiches Netz, zweite Nummer.",
    openingHours: "24/7",
    verifyStatus: "geprueft",
  },
  {
    id: "sucht-hotline",
    categorySlug: "gesundheit-psyche",
    title: "Sucht & Drogen Hotline – 01806 313031",
    type: "hotline",
    action: "tel:01806313031",
    hint: "Bundesweite Hotline. Nicht kostenlos.",
    openingHours: "Mo–So 0–24 Uhr",
    verifyStatus: "geprueft",
    costNote: "0,20 € pro Anruf (Festnetz und Mobilfunk, Stand prüfen)",
  },
  {
    id: "hilfetelefon-frauen",
    categorySlug: "gewalt-schutz",
    title: "Hilfetelefon Gewalt gegen Frauen – 116 016",
    type: "hotline",
    action: "tel:116016",
    hint: "Kostenlos, anonym, mehrsprachig. Auch 08000 116 016.",
    openingHours: "24/7",
    verifyStatus: "geprueft",
  },
  {
    id: "maenner-hotline",
    categorySlug: "gewalt-schutz",
    title: "Hilfe für Jungen und Männer – 0800 123 9900",
    type: "hotline",
    action: "tel:08001239900",
    hint: "Nummer und Zeiten bitte vor dem Anruf prüfen.",
    openingHours: undefined,
    verifyStatus: "pruefen",
  },
  {
    id: "schuldnerberatung-online",
    categorySlug: "finanzen-schulden",
    title: "Online-Schuldnerberatung Caritas",
    type: "onlineberatung",
    action: "https://www.caritas.de/hilfeundberatung/onlineberatung/schuldnerberatung",
    hint: "Kostenlose Online-Beratung. Link-Stand bitte prüfen.",
    verifyStatus: "pruefen",
  },
  {
    id: "verbraucherzentrale",
    categorySlug: "finanzen-schulden",
    title: "Verbraucherzentrale",
    type: "beratung",
    action: "https://www.verbraucherzentrale.de",
    hint: "Einstieg zur Suche nach Beratung vor Ort. Keine festen Zeiten hier.",
    verifyStatus: "pruefen",
  },
  {
    id: "bahnhofsmission",
    categorySlug: "wohnen",
    title: "Bahnhofsmission",
    type: "notfall",
    action: "https://www.bahnhofsmission.de",
    hint: "Hilfe an vielen Bahnhöfen. Öffnungszeiten vor Ort prüfen.",
    verifyStatus: "pruefen",
  },
  {
    id: "obdachlosenhilfe",
    categorySlug: "wohnen",
    title: "Caritas – Einstieg Obdachlosenhilfe",
    type: "beratung",
    action: "https://www.caritas.de",
    hint: "Allgemeine Trägerseite, kein konkreter Standort. Vor Ort nachfragen.",
    verifyStatus: "pruefen",
  },
  {
    id: "pro-familia",
    categorySlug: "familie",
    title: "pro familia",
    type: "beratung",
    action: "https://www.profamilia.de",
    hint: "Schwangerschaft und Familienplanung. Stelle und Zeiten vor Ort prüfen.",
    verifyStatus: "pruefen",
  },
  {
    id: "diakonie-pflege",
    categorySlug: "alter-pflege",
    title: "Diakonie – Einstieg Pflege",
    type: "beratung",
    action: "https://www.diakonie.de",
    hint: "Allgemeine Trägerseite. Konkrete Pflegeberatung vor Ort suchen.",
    verifyStatus: "pruefen",
  },
  {
    id: "bamf-migration",
    categorySlug: "migration",
    title: "BAMF – Migrationsberatung",
    type: "beratung",
    action: "https://www.bamf.de",
    hint: "Behördliche Einstiegsseite. Kein Ersatz für eine Beratungsstelle vor Ort.",
    verifyStatus: "pruefen",
  },
  {
    id: "arbeitsagentur",
    categorySlug: "arbeit",
    title: "Bundesagentur für Arbeit – 0800 4 5555 00",
    type: "beratung",
    action: "tel:08004555500",
    hint: "Kostenlos für Privatpersonen.",
    openingHours: "Mo–Fr 8–18 Uhr",
    verifyStatus: "geprueft",
  },
  {
    id: "weisser-ring",
    categorySlug: "justiz",
    title: "Weisser Ring – Opfer-Telefon 116 006",
    type: "hotline",
    action: "tel:116006",
    hint: "Kostenlos, anonym. Für Menschen nach einer Straftat.",
    openingHours: "Täglich 7–22 Uhr",
    verifyStatus: "geprueft",
  },
];
