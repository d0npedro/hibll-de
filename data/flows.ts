export interface FlowAction {
  label: string;
  href: string;
}

export interface FlowStep {
  id: string;
  title: string;
  description?: string;
  action?: FlowAction;
}

export interface FlowSection {
  id: string;
  title: string;
  steps: FlowStep[];
}

export interface Flow {
  id: string;
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  sections: FlowSection[];
}

export const FLOWS: Flow[] = [
  {
    id: "trauer-elternteil",
    slug: "trauer-elternteil",
    title: "Wenn ein Elternteil verstirbt",
    description: "Schritt für Schritt durch die erste Zeit. Du musst das nicht alleine organisieren.",
    categorySlug: "gesundheit-psyche",
    sections: [
      {
        id: "heute",
        title: "Heute",
        steps: [
          { id: "arzt-todesfeststellung", title: "Arzt / Todesfeststellung klären", description: "Ein Arzt muss den Tod feststellen und den Totenschein ausstellen.", action: { label: "Ärztlichen Bereitschaftsdienst anrufen", href: "tel:116117" } },
          { id: "vertrauensperson", title: "Vertrauensperson informieren", description: "Ruf jetzt jemanden an, dem du vertraust. Du solltest nicht alleine sein." },
          { id: "kinder-haustiere", title: "Kinder / Haustiere versorgen", description: "Sorge dafür, dass Kinder und Haustiere betreut sind." },
          { id: "dokumente-sichern", title: "Wichtige Dokumente sichern", description: "Personalausweis, Versicherungsunterlagen, Testament, Sparbücher – an einem sicheren Ort zusammenlegen." },
        ],
      },
      {
        id: "naechste-tage",
        title: "Nächste Tage",
        steps: [
          { id: "bestatter", title: "Bestatter beauftragen", description: "Ein Bestatter übernimmt viele Formalitäten. Du kannst mehrere anfragen und vergleichen." },
          { id: "sterbeurkunde", title: "Sterbeurkunde beantragen (Standesamt)", description: "Die Sterbeurkunde brauchst du für fast alle weiteren Schritte. Der Bestatter hilft oft dabei.", action: { label: "Standesamt suchen", href: "https://www.bund.de/Service/Behoerdenfinder/" } },
          { id: "arbeitgeber", title: "Arbeitgeber / Schule informieren", description: "Informiere deinen Arbeitgeber über den Todesfall. Du hast Anspruch auf bezahlte Freistellung." },
          { id: "bank-konten", title: "Bank / Konten sichern", description: "Informiere die Bank. Gemeinschaftskonten laufen weiter, Einzelkonten werden gesperrt." },
        ],
      },
      {
        id: "naechste-wochen",
        title: "Nächste Wochen",
        steps: [
          { id: "rentenversicherung", title: "Rentenversicherung / Krankenkasse informieren", description: "Witwen- und Waisenrente beantragen. Die Krankenkasse des Verstorbenen informieren.", action: { label: "Deutsche Rentenversicherung", href: "tel:08009999555" } },
          { id: "erbschein-notar", title: "Erbschein / Notar", description: "Falls kein Testament vorliegt, kläre mit einem Notar die Erbfolge.", action: { label: "Notarsuche", href: "https://www.notar.de" } },
          { id: "vertraege-abos", title: "Verträge & Abos kündigen", description: "Telefon, Internet, Strom, Zeitungen, Streaming – Verträge prüfen und kündigen oder ummelden." },
          { id: "digitale-konten", title: "Digitale Konten & Profile", description: "E-Mail, soziale Netzwerke, Online-Shops – prüfen, welche Konten existieren und wie sie verwaltet werden." },
          { id: "trauerberatung", title: "Trauerberatung / Selbsthilfe", description: "Professionelle Trauerbegleitung kann sehr helfen. Es ist keine Schwäche, Hilfe anzunehmen.", action: { label: "Trauerbegleitung finden", href: "https://www.kata-ev.de" } },
        ],
      },
    ],
  },
  {
    id: "schulden-erste-schritte",
    slug: "schulden-erste-schritte",
    title: "Schulden – erste Schritte",
    description: "Wenn die Schulden sich anhäufen: Hier sind konkrete erste Schritte, damit es nicht schlimmer wird.",
    categorySlug: "finanzen-schulden",
    sections: [
      {
        id: "sofort",
        title: "Sofort",
        steps: [
          { id: "panik-stopp", title: "Durchatmen – du bist nicht allein", description: "Überschuldung ist in Deutschland sehr verbreitet. Es gibt kostenlose Hilfe, die diskret ist." },
          { id: "post-oeffnen", title: "Alle Post öffnen und sortieren", description: "Briefe von Gläubigern, Mahnungen, Pfändungsbeschlüsse – alles aufbewahren, nichts wegwerfen." },
          { id: "schuldnerberatung-suchen", title: "Kostenlose Schuldnerberatung aufsuchen", description: "Schuldnerberatungsstellen helfen kostenlos und vertraulich.", action: { label: "Beratungsstelle finden", href: "https://www.caritas.de/hilfeundberatung/onlineberatung/schuldnerberatung" } },
        ],
      },
      {
        id: "erste-woche",
        title: "Erste Woche",
        steps: [
          { id: "einnahmen-ausgaben", title: "Einnahmen und Ausgaben aufschreiben", description: "Ein einfacher Überblick hilft, Prioritäten zu setzen." },
          { id: "wichtige-schulden-zuerst", title: "Wichtige Schulden zuerst", description: "Miete, Strom, Krankenversicherung – diese Schulden haben Vorrang, da sonst existenzielle Folgen drohen." },
          { id: "pfaendung-pruefen", title: "Pfändungsschutz prüfen", description: "Ein Pfändungsschutzkonto (P-Konto) schützt dein Existenzminimum.", action: { label: "Infos zum P-Konto", href: "https://www.verbraucherzentrale.de/wissen/geld-versicherungen/sparen-und-anlegen/pfaendungsschutzkonto-so-schuetzen-sie-ihr-konto-vor-pfaendungen-7695" } },
        ],
      },
      {
        id: "naechste-schritte",
        title: "Nächste Schritte",
        steps: [
          { id: "privatinsolvenz", title: "Privatinsolvenz als Option prüfen", description: "Privatinsolvenz ist kein Versagen. Nach 3 Jahren kann ein schuldenfreier Neustart möglich sein." },
          { id: "sozialhilfe", title: "Sozialhilfe / Grundsicherung prüfen", description: "Prüfe, ob du Anspruch auf staatliche Unterstützung hast.", action: { label: "Bürgergeld-Infos", href: "https://www.arbeitsagentur.de/finanzielle-hilfen/buergergeld" } },
        ],
      },
    ],
  },
  {
    id: "gewalt-schutz",
    slug: "gewalt-sicherheit",
    title: "Sicherheit bei Gewalt in der Beziehung",
    description: "Wenn du in einer Situation lebst, die sich nicht sicher anfühlt. Du hast Recht auf Schutz.",
    categorySlug: "gewalt-schutz",
    sections: [
      {
        id: "jetzt",
        title: "Jetzt – wenn Gefahr besteht",
        steps: [
          { id: "notruf", title: "Bei akuter Gefahr: Polizei 110 anrufen", description: "Die Polizei kann sofort helfen und die gewaltausübende Person der Wohnung verweisen.", action: { label: "Polizei 110", href: "tel:110" } },
          { id: "hilfetelefon", title: "Hilfetelefon Gewalt gegen Frauen – 08000 116 016", description: "Kostenlos, anonym, 24/7, in vielen Sprachen.", action: { label: "Jetzt anrufen", href: "tel:08000116016" } },
          { id: "frauenhaus", title: "Frauenhaus als sofortigen Schutzort finden", description: "Frauenhäuser nehmen Frauen und ihre Kinder sofort und anonym auf.", action: { label: "Frauenhaus finden", href: "https://www.frauenhauskoordinierung.de" } },
        ],
      },
      {
        id: "sicherheitsplan",
        title: "Sicherheitsplan erstellen",
        steps: [
          { id: "notfalltasche", title: "Notfalltasche packen", description: "Personalausweis, Bargeld, Kleidung, wichtige Dokumente – für den Fall, dass du schnell gehen musst." },
          { id: "vertrauensperson", title: "Vertrauensperson einweihen", description: "Jemand sollte wissen, was passiert und wie er dir helfen kann." },
          { id: "handy-sicher", title: "Handy absichern", description: "Passwort ändern, Verlauf löschen, sichere Apps nutzen. Beachte, wer auf dein Handy Zugriff haben könnte." },
        ],
      },
      {
        id: "rechtlich",
        title: "Rechtliche Schritte",
        steps: [
          { id: "anzeige", title: "Anzeige erstatten", description: "Du kannst Anzeige erstatten. Das ist eine wichtige Dokumentation, auch wenn du dir noch nicht sicher bist." },
          { id: "gewaltschutzgesetz", title: "Gewaltschutzgesetz nutzen", description: "Das Gewaltschutzgesetz ermöglicht ein gerichtliches Kontaktverbot. Ein Anwalt oder eine Beratungsstelle kann helfen.", action: { label: "Rechtliche Beratung", href: "https://www.weisser-ring.de" } },
          { id: "opferhilfe", title: "Opferhilfe kontaktieren", description: "Weisser Ring und andere Organisationen bieten kostenlose Unterstützung.", action: { label: "Weisser Ring", href: "tel:116006" } },
        ],
      },
    ],
  },
];
