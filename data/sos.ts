import type { VerifyStatus } from "./verify";

export interface SosItem {
  title: string;
  action: string;
  description?: string;
  verifyStatus: VerifyStatus;
  costNote?: string;
}

/**
 * Nur bekannte, öffentlich dokumentierte Nummern.
 * Keine erfundenen Beratungsstellen.
 */
export const SOFORTHILFE: SosItem[] = [
  {
    title: "Notruf 112 – Lebensgefahr",
    action: "tel:112",
    description: "Feuerwehr und Rettungsdienst. Bei akuter Lebensgefahr sofort anrufen.",
    verifyStatus: "geprueft",
  },
  {
    title: "Polizei 110",
    action: "tel:110",
    description: "Bei akuter Gefahr durch Gewalt oder Straftat.",
    verifyStatus: "geprueft",
  },
  {
    title: "Hilfetelefon Gewalt gegen Frauen – 116 016",
    action: "tel:116016",
    description: "Kostenlos, anonym, 24/7. Die ältere Nummer 08000 116 016 gilt weiter.",
    verifyStatus: "geprueft",
  },
  {
    title: "Telefonseelsorge – 0800 111 0 111",
    action: "tel:08001110111",
    description: "Kostenlos, anonym, 24/7. Auch 0800 111 0 222 oder 116 123.",
    verifyStatus: "geprueft",
  },
  {
    title: "Online-Beratung der Telefonseelsorge",
    action: "https://www.telefonseelsorge.de/chat/",
    description: "Chat und Mail, anonym. Link zur offiziellen Seite.",
    verifyStatus: "geprueft",
  },
];
