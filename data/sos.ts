export interface SosItem {
  title: string;
  action: string;
  description?: string;
}

export const SOFORTHILFE: SosItem[] = [
  { title: "Notruf 112 – Akute Gefahr", action: "tel:112", description: "Bei lebensbedrohlichen Situationen sofort anrufen" },
  { title: "Hilfetelefon Gewalt gegen Frauen – 08000 116 016", action: "tel:08000116016", description: "Kostenlos, anonym, 24/7" },
  { title: "Krisentelefon – 0800 111 0 111", action: "tel:08001110111", description: "Telefonseelsorge, kostenlos, 24/7" },
  { title: "Online-Beratung", action: "https://onlineberatung.telefonseelsorge.de", description: "Anonym und kostenlos" }
];
