import type { Locale } from "@/content/help"

export type RegioPublication = {
  title: string
  description: string
  logo: string
}

export type RegioPartner = {
  name: string
  url: string
  description: string
  publications: RegioPublication[]
}

export type RegioRegion = {
  id: string
  name: string
  coverage: string
  status: "available" | "coming-soon"
  partners?: RegioPartner[]
  comingSoonNote?: string
}

type RegioRegionsContent = {
  expandLabel: string
  availableLabel: string
  comingSoonLabel: string
  regions: RegioRegion[]
}

const LOGO = (file: string) => `/regio-ads/${file}`

const content: Record<Locale, RegioRegionsContent> = {
  en: {
    expandLabel: "All publications",
    availableLabel: "Available now",
    comingSoonLabel: "Coming soon",
    regions: [
      {
        id: "south",
        name: "South",
        coverage: "Baden-Württemberg, Bavaria, parts of Hesse",
        status: "available",
        partners: [
          {
            name: "Haas Media Group",
            url: "https://www.haas-mediengruppe.de/",
            description:
              "A leading regional media company in southwestern Germany, publishing established daily and local newspapers across the Rhine-Neckar and Bergstrasse regions.",
            publications: [
              {
                title: "Mannheimer Morgen",
                description:
                  "Daily newspaper for the Rhine-Neckar metropolitan region and greater Mannheim area.",
                logo: LOGO("mannheimer-morgen.png"),
              },
              {
                title: "Schwetzinger Zeitung / Hockenheimer Tageszeitung",
                description:
                  "Local newspapers serving the Schwetzingen and Hockenheim region south of Mannheim.",
                logo: LOGO("schwetzinger-hockenheimer.png"),
              },
              {
                title: "Bergsträßer Anzeiger",
                description:
                  "Regional daily covering the Bergstrasse district in southern Hesse.",
                logo: LOGO("bergstrasser-anzeiger.png"),
              },
              {
                title: "Südhessen Morgen",
                description:
                  "Regional newspaper for southern Hesse, reaching local audiences across the region.",
                logo: LOGO("suedhessen-morgen.png"),
              },
            ],
          },
          {
            name: "Augsburger Media Group",
            url: "https://www.mediengruppe-pd.de/",
            description:
              "A major Bavarian and Swabian media group publishing leading regional dailies across southern Bavaria, Franconia, and the Lake Constance region.",
            publications: [
              {
                title: "Augsburger Allgemeine",
                description:
                  "Leading daily newspaper for Augsburg and the Swabia region.",
                logo: LOGO("augsburger-allgemeine.png"),
              },
              {
                title: "Allgäuer Zeitung",
                description:
                  "Regional daily for the Allgäu region in southwestern Bavaria.",
                logo: LOGO("allgaeuer-zeitung.png"),
              },
              {
                title: "Main-Post",
                description:
                  "Daily newspaper for Lower Franconia, based in Würzburg.",
                logo: LOGO("mainpost.png"),
              },
              {
                title: "Fränkische Nachrichten",
                description:
                  "Daily newspaper for the Tauberfranken region around Wertheim.",
                logo: LOGO("fraenkische-nachrichten.png"),
              },
              {
                title: "Südkurier",
                description:
                  "Regional daily covering the Lake Constance area and Upper Rhine region.",
                logo: LOGO("suedkurier.png"),
              },
            ],
          },
        ],
      },
      {
        id: "north",
        name: "North",
        coverage: "Northern Germany",
        status: "coming-soon",
        comingSoonNote:
          "Partner and publication details for Region North will be updated when this region launches.",
      },
      {
        id: "east",
        name: "East",
        coverage: "Eastern Germany",
        status: "coming-soon",
        comingSoonNote:
          "Partner and publication details for Region East will be updated when this region launches.",
      },
      {
        id: "west",
        name: "West",
        coverage: "Western Germany",
        status: "coming-soon",
        comingSoonNote:
          "Partner and publication details for Region West will be updated when this region launches.",
      },
    ],
  },
  de: {
    expandLabel: "Alle Publikationen",
    availableLabel: "Jetzt verfügbar",
    comingSoonLabel: "Demnächst",
    regions: [
      {
        id: "south",
        name: "Süd",
        coverage: "Baden-Württemberg, Bayern, Teile Hessens",
        status: "available",
        partners: [
          {
            name: "Haas Mediengruppe",
            url: "https://www.haas-mediengruppe.de/",
            description:
              "Eines der führenden regionalen Medienunternehmen in Südwestdeutschland mit etablierten Tages- und Lokalzeitungen in der Region Rhein-Neckar und an der Bergstraße.",
            publications: [
              {
                title: "Mannheimer Morgen",
                description:
                  "Tageszeitung für die Metropolregion Rhein-Neckar und das Großraum Mannheim.",
                logo: LOGO("mannheimer-morgen.png"),
              },
              {
                title: "Schwetzinger Zeitung / Hockenheimer Tageszeitung",
                description:
                  "Lokalzeitungen für die Region Schwetzingen und Hockenheim südlich von Mannheim.",
                logo: LOGO("schwetzinger-hockenheimer.png"),
              },
              {
                title: "Bergsträßer Anzeiger",
                description:
                  "Regionale Tageszeitung für den Kreis Bergstraße in Südhessen.",
                logo: LOGO("bergstrasser-anzeiger.png"),
              },
              {
                title: "Südhessen Morgen",
                description:
                  "Regionale Zeitung für Südhessen mit lokaler Reichweite in der gesamten Region.",
                logo: LOGO("suedhessen-morgen.png"),
              },
            ],
          },
          {
            name: "Augsburger Mediengruppe",
            url: "https://www.mediengruppe-pd.de/",
            description:
              "Eine der führenden Mediengruppen in Bayern und Schwaben mit regionalen Tageszeitungen in Südbayern, Franken und am Bodensee.",
            publications: [
              {
                title: "Augsburger Allgemeine",
                description:
                  "Führende Tageszeitung für Augsburg und die Region Schwaben.",
                logo: LOGO("augsburger-allgemeine.png"),
              },
              {
                title: "Allgäuer Zeitung",
                description:
                  "Regionale Tageszeitung für das Allgäu in Südwestbayern.",
                logo: LOGO("allgaeuer-zeitung.png"),
              },
              {
                title: "Main-Post",
                description:
                  "Tageszeitung für Unterfranken mit Sitz in Würzburg.",
                logo: LOGO("mainpost.png"),
              },
              {
                title: "Fränkische Nachrichten",
                description:
                  "Tageszeitung für die Region Tauberfranken um Wertheim.",
                logo: LOGO("fraenkische-nachrichten.png"),
              },
              {
                title: "Südkurier",
                description:
                  "Regionale Tageszeitung für den Bodenseeraum und die obere Rheinregion.",
                logo: LOGO("suedkurier.png"),
              },
            ],
          },
        ],
      },
      {
        id: "north",
        name: "Nord",
        coverage: "Norddeutschland",
        status: "coming-soon",
        comingSoonNote:
          "Informationen zu Partnern und Publikationen für Region Nord werden mit dem Regionsstart aktualisiert.",
      },
      {
        id: "east",
        name: "Ost",
        coverage: "Ostdeutschland",
        status: "coming-soon",
        comingSoonNote:
          "Informationen zu Partnern und Publikationen für Region Ost werden mit dem Regionsstart aktualisiert.",
      },
      {
        id: "west",
        name: "West",
        coverage: "Westdeutschland",
        status: "coming-soon",
        comingSoonNote:
          "Informationen zu Partnern und Publikationen für Region West werden mit dem Regionsstart aktualisiert.",
      },
    ],
  },
}

export function getRegioRegionsContent(locale: Locale): RegioRegionsContent {
  return content[locale]
}
