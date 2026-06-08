export type Locale = "de" | "en"

export type Product = {
  slug: string
  name: string
  description: string
  accentColor: string
  iconKey: "send" | "users" | "video" | "megaphone" | "presseportal"
}

export type Category = {
  productSlug: string
  slug: string
  name: string
}

export type Article = {
  productSlug: string
  categorySlug: string
  slug: string
  title: string
  lead: string
  updatedAt: string
  tags: string[]
  locale: Locale
  machineTranslated?: boolean
  body: string
}

export const products: Product[] = [
  {
    slug: "distributions",
    name: "Distributions",
    description:
      "OTS, ots-international and multi-channel distribution — reach journalists and audiences across Germany and beyond.",
    accentColor: "#1856F5",
    iconKey: "send",
  },
  {
    slug: "relations",
    name: "Relations",
    description:
      "zimpel media database and contact management for targeted PR outreach.",
    accentColor: "#1856F5",
    iconKey: "users",
  },
  {
    slug: "voices",
    name: "Voices",
    description:
      "Video production, podcasts and audio newsrooms for brand storytelling.",
    accentColor: "#1856F5",
    iconKey: "video",
  },
  {
    slug: "native-advertising",
    name: "Native Advertising",
    description:
      "Guaranteed placement in editorial environments on leading newspaper and magazine sites — standalone or with ots.",
    accentColor: "#1856F5",
    iconKey: "megaphone",
  },
  {
    slug: "presseportal",
    name: "Presseportal",
    description:
      "Your professional newsroom on Germany’s widest-reaching PR portal — visibility, SEO and diverse PR content.",
    accentColor: "#0B6B5C",
    iconKey: "presseportal",
  },
]

export const categories: Category[] = [
  { productSlug: "distributions", slug: "getting-started", name: "Getting started" },
  { productSlug: "distributions", slug: "channels", name: "Channels & delivery" },
  { productSlug: "distributions", slug: "monitoring", name: "ARGUS Monitoring" },
  { productSlug: "relations", slug: "contacts", name: "Media contacts" },
  { productSlug: "relations", slug: "zimpel", name: "zimpel database" },
  { productSlug: "relations", slug: "billing", name: "Account & billing" },
  { productSlug: "voices", slug: "podcasts", name: "Podcasts & audio" },
  { productSlug: "voices", slug: "studio", name: "Studio workflow" },
  { productSlug: "native-advertising", slug: "getting-started", name: "Getting started" },
  { productSlug: "native-advertising", slug: "booking", name: "Booking & bundles" },
  { productSlug: "presseportal", slug: "getting-started", name: "Getting started" },
  { productSlug: "presseportal", slug: "newsroom", name: "Your newsroom" },
  { productSlug: "presseportal", slug: "visibility", name: "Reach & SEO" },
]

const deBodies = {
  distributionChannels: `## Überblick

news aktuell verteilt Ihre Pressemitteilungen über das PR-Verbreitungsnetzwerk **ots** — von gezielter Ausspielung in Redaktionssystemen über das Presseportal bis zur internationalen Reichweite mit **ots-international**.

Jede Buchung nutzt mindestens die **Nationale** Verbreitung. Weitere Kanäle — International, Fach- oder Regionalmedien — können Sie als Add-ons hinzufügen.

\`\`\`cards
National|dpa-Verbreitung in deutschen Redaktionssystemen und auf dem Presseportal.|included
International|Weltweite Reichweite über ots-international und Partneragenturen.|addon
Fachmedien|Branchenspezifische Verteiler für IT, Gesundheit, Finanzen und mehr.|addon
Regional|Lokale und regionale Medien für geo-fokussierte Kampagnen.|addon
\`\`\`

## Nationale Verbreitung

Der **OTS** (Originaltextservice) ist der Kernkanal für strukturierte Unternehmensnachrichten in Deutschland. Nach Freigabe erscheint Ihre Meldung in journalistischen Redaktionssystemen und in Ihrem Newsroom auf dem **Presseportal**.

\`\`\`callout
**Timing zählt**

Planen Sie die nationale Verbreitung idealerweise vor 14:00 Uhr, damit Ihre Meldung noch am selben Tag im dpa-Newsticker erscheinen kann.
\`\`\`

## Internationale Verbreitung

Mit **ots-international** erreichen Sie Zielgruppen weltweit — mit Übersetzung, länderspezifischer Beratung und einem starken Partnernetzwerk (dpa, AP, AFP, ANSA u. a.).

## Kanäle kombinieren

National ist in jeder Buchung enthalten. Internationale, Fach- und Regionalkanäle ergänzen Sie nach Bedarf.

\`\`\`callout
**Highlight Add-on**

Buchen Sie **Highlight**, um Ihre Meldung prominent auf Startseite und in der App des Presseportals zu platzieren.
\`\`\`

| Kanal | Warum | Status |
|-------|-------|--------|
| **National (dpa)** | Kernreichweite in deutschen Redaktionssystemen | ✓ Standard |
| **Presseportal** | Automatisch mit ots — eigener Newsroom | ✓ Automatisch |
| **International** | Zielregionen weltweit | + Add-on |
| **Fachmedien** | Branchen- und Themenspezifisch | + Add-on |
| **Regional** | Lokale Medienlandschaft | + Add-on |

\`\`\`callout-neutral
**Frist für Änderungen**

Kanäle können bis zur finalen Freigabe im Buchungsassistenten angepasst werden. Danach ist eine Nachbuchung nur über den Support möglich.
\`\`\`

## Kanäle zur Buchung hinzufügen

\`\`\`steps
Melden Sie sich in **my news aktuell** an und öffnen Sie Ihre Buchung.
Gehen Sie zu **Distribution** im Buchungsassistenten.
Wählen Sie **Kanäle hinzufügen** und markieren Sie National, International, Fach- oder Regional.
Bestätigen Sie die Auswahl in der **Buchungsübersicht** vor dem Checkout.
\`\`\`

## OTS — Das PR-Verbreitungsnetzwerk

Der OTS (Originaltextservice) ist der Kernkanal für strukturierte Unternehmensnachrichten in Deutschland. Nach Freigabe erscheint Ihre Meldung in journalistischen Redaktionssystemen.

### So funktioniert die Verbreitung

- **Gezielte Verbreitung** Ihrer Pressemitteilungen an relevante Medien
- Via **Newsticker der Deutschen Presse-Agentur (dpa)** direkt in die Redaktionssysteme aller relevanten Medien
- **Starkes Partnernetzwerk** aus Nachrichtenagenturen, Newsportalen und Online-Medien

### Formatierungstipps

- Nutzen Sie eine klare Überschrift (max. 120 Zeichen)
- Lead-Absatz mit den wichtigsten Fakten
- Ansprechpartner und Bildmaterial angeben

## Globale Reichweite

Reichweite und Sichtbarkeit für Ihre Pressemitteilungen sind unsere Spezialität. Egal, ob Sie Ihren Content regional veröffentlichen wollen oder eine internationale Kampagne planen: Mit dem Verbreitungsnetzwerk ots erreichen Sie zuverlässig Ihre individuellen Zielgruppen in nahezu allen Ländern und Sprachen.

## Presseportal

Durch eine Verbreitung via ots wird Ihre Pressemitteilung auch in Ihrem eigenen Newsroom im **Presseportal** veröffentlicht. Mit durchschnittlich Millionen Aufrufen im Monat gehört es zu den wichtigsten PR-Portalen Deutschlands und ist eine verlässliche Recherchequelle für Journalistinnen und Journalisten.

## Multimedia-Content

Eine Pressemeldung besteht in erster Linie aus Text. Ergänzen Sie **Bilder, Grafiken, Videos, Audiodateien oder Fachdokumente**, verstärken Sie Ihre Botschaft und geben Sie den Leserinnen und Lesern noch mehr an die Hand. Bei Bedarf unterstützen wir Sie bei der multimedialen Content-Produktion.

## Analytics

Unser **Analytics** bietet Einblicke über den Erfolg Ihrer Verbreitung:

- Zugriffe aus Online-Medien, in denen Ihr Content gespielt wird
- Branchenvergleich
- Export der Zugriffsdaten in gängigen Formaten für Ihr eigenes Reporting

## ots-international

Mit **ots-international** bringen Sie Ihre Inhalte weltweit zu Ihren Zielgruppen.

### Leistungen

- Verbreitung Ihres Pressematerials in **individuell zusammenstellbare Zielregionen**
- **Professionelle Unterstützung** bei jedem Schritt
- **Starkes Partnernetzwerk** u.a. dpa, AP, pa, belga, ANSA, AFP, APA, KEYSTONE-SDA

### Unser weltweites Netzwerk

Westeuropa · Osteuropa · Europa · Nordamerika · Lateinamerika/Südamerika · Naher Osten · Asien & Australien · Afrika

### Mit unserer Expertise zum internationalen Kommunikationserfolg

- Beratung bei der Anpassung Ihrer Kommunikation an **länderspezifische Anforderungen** — von kulturellen Gepflogenheiten bis hin zu Zeitzonen
- **Volle Flexibilität:** Ob ein einzelnes Land, ein ganzer Kontinent oder die ganze Welt — Sie entscheiden
- **Professionelle Übersetzung** Ihres Pressetextes in die jeweilige Landessprache — in der Regel innerhalb von 48 Stunden
- **Investor Network:** Zugang zu weltweit führenden Recherche-Plattformen für Investoren
- Zielgerichtete und wirkungsvolle Ausspielung über internationale Partneragenturen — global wie regional

## Add-ons

Erweitern Sie Ihre ots-Verbreitung mit optionalen Zusatzleistungen:

### Native Ads

Garantierte Platzierung auf den Websites hochwertiger Partnermedien wie der **Süddeutschen Zeitung** oder dem **Hamburger Abendblatt**. Durch die direkte Nachbarschaft zu redaktionellen Inhalten profitieren Sie von deren Ansehen, Reichweite und Auffindbarkeit in Suchmaschinen.

### ots-Textcheck

Fehlerfreie Texte sind sowohl für Redaktionen als auch für Suchmaschinen von großer Bedeutung. Der ots-Textcheck prüft Ihren Content nach dem **Vier-Augen-Prinzip** auf korrekte Grammatik und Rechtschreibung.

### Bild, Audio, Video & PDF

Fügen Sie Ihrer Meldung ein Bild, eine Audio- oder Videodatei oder ein PDF hinzu und erhöhen Sie Ihre Sichtbarkeit bei Ihren Zielgruppen.

### Button

Leiten Sie Leserinnen und Leser direkt zu Ihrer Seite, zu Ihrem Event oder zu weiteren Informationen. Der Button mit Ihrem individuellen Text lässt sich einfach in Ihre Meldung integrieren.

### Fach- und Regionalmedien

Hochwertige Fach- und Regionalverteiler für bestimmte Branchen (z. B. IT) oder internationale Medienhäuser — einfach Ihrer Buchung hinzufügen.

### Highlight

Prominente Veröffentlichung Ihrer Meldung auf der **Startseite und in der App** des Presseportals für zusätzliche Sichtbarkeit.

### dpa-Agenda

Die **dpa-Agenda** der Deutschen Presse-Agentur ist die größte Terminplattform für Medienschaffende. Mit diesem Add-on sichern Sie sich einen Eintrag und die damit verbundene Sichtbarkeit bei Journalistinnen und Journalisten.

### ots-Monitoring by ARGUS

Professionelles Medienmonitoring aus **über 5 Millionen Medienquellen** mit relevanten Kennzahlen und Clippings — in Zusammenarbeit mit ARGUS DATA INSIGHTS.

### ots Display Ads

Programmatische Ausspielung Ihrer ots-Meldungen auf **über 11.000 Digital Out-of-Home-Screens** der Plattform Framen — bundesweit z. B. in Coworking-Spaces, Fitness-Studios, Hotels oder Fast-Food-Restaurants.

## PR-Basic-Paket

Der ideale Einstieg: Verbreitung via ots, Add-On Bild und Monitoring durch ARGUS in einem Paket.

| Bestandteil | Vorteil |
|-------------|---------|
| Verbreitung via ots | Direkt in Redaktionssysteme, hohe Sichtbarkeit durchs Presseportal |
| Add-On „Bild“ | Mehr Aufmerksamkeit, Aufwertung Ihres Inhalts |
| Monitoring by ARGUS | Nachvollziehbare Erfolgsmessung, alle wichtigen KPIs, inklusive Clippings |

**Preisvorteil:** 1.175 EUR statt 1.465 EUR — Sie sparen 290 EUR gegenüber der Einzelbuchung.`,

  argusMonitoring: `## Was ist ARGUS?

ARGUS ist das Medienbeobachtungs-Add-on von news aktuell. Es ergänzt Ihre Distribution um Echtzeit-Monitoring in Print, Online, Radio und TV.

\`\`\`callout
**Tipp**

Kombinieren Sie ARGUS mit einer ots-Verbreitung, um Reichweite und Medienresonanz in einem Report zu vergleichen.
\`\`\`

## Aktivierung

\`\`\`steps
Öffnen Sie Ihr Distributions-Dashboard.
Wählen Sie **Monitoring hinzufügen**.
Definieren Sie Suchbegriffe und Ausschlüsse.
\`\`\`

## Clippings & Alerts

### Tägliche Digest-Mails

Erhalten Sie eine Zusammenfassung aller Treffer — filterbar nach Medium und Relevanz.

### Export

Clippings lassen sich als PDF oder Excel exportieren für interne Reports.`,

  otsBasics: `## Ihre erste OTS-Meldung

Willkommen bei news aktuell Distributions. Dieser Leitfaden führt Sie durch die Erstellung und Freigabe einer OTS-Pressemitteilung.

## Account-Zugang

Nach Vertragsabschluss erhalten Sie Zugangsdaten für das Kundenportal. Aktivieren Sie optional Zwei-Faktor-Authentifizierung.

## Freigabeprozess

Meldungen durchlaufen bei Bedarf einen internen Freigabe-Workflow, bevor sie an die Leitungen gehen.`,

  presseportalSeo: `## Sichtbarkeit im Presseportal

Ihre Meldung erscheint auf presseportal.de mit eigenständiger URL — ideal für Suchmaschinen und Social Sharing.

## Metadaten

Pflegen Sie Meta-Titel, Beschreibung und Open-Graph-Bild für optimale Klickraten.`,

  searchContacts: `## Medienkontakte finden

In zimpel durchsuchen Sie über eine Million journalistische Kontakte nach Medium, Ressort und Region.

## Suchfilter

- **Mediumstyp:** Tageszeitung, Fachpresse, Online, Radio/TV
- **Ressort:** Wirtschaft, Politik, Lokales
- **Geo:** PLZ, Bundesland, DACH

## Listen speichern

Speichern Sie Suchergebnisse als dynamische oder statische Listen für Kampagnen.`,

  zimpelIntro: `## zimpel im Überblick

zimpel ist die Medien-Datenbank von news aktuell Relations — die zentrale Quelle für aktuelle Kontaktdaten deutscher Medien.

## Datenqualität

Redaktionelle Teams pflegen Kontakte täglich. Veraltete Einträge werden markiert oder archiviert.

## Integration

Exportieren Sie Listen nach CSV oder verbinden Sie zimpel mit Ihrem CRM über die API (Enterprise).`,

  invoicesBilling: `## Rechnungen & Abrechnung

Alle Rechnungen finden Sie unter **Mein Konto → Abrechnung**.

## Zahlungsarten

Wir unterstützen Lastschrift, Überweisung und auf Anfrage Rechnungskauf für Bestandskunden.

## Steuerliche Angaben

Hinterlegen Sie USt-IdNr. und Rechnungsadresse vor dem ersten Buchungsmonat.`,

  voicesGettingStarted: `## Einstieg in Voices

Voices verbindet Podcast-Produktion, Audio-Newsrooms und gesponserte Inhalte in einer Plattform.

## Erstes Projekt anlegen

1. Wählen Sie Format: Interview, Newsflash oder Serie
2. Laden Sie Briefing und Skript hoch
3. Buchen Sie Sprecher:in und Schnitt

## Weitere Formate

Für redaktionell eingebettete Markeninhalte auf Medienportalen siehe **Native Advertising**.`,

  nativeAdsBundles: `## Native Ads Bundles

Native Ads platzieren Ihre Botschaft im redaktionellen Umfeld von Partnermedien — transparent gekennzeichnet.

## Paketgrößen

| Paket | Reichweite | Laufzeit |
|-------|------------|----------|
| S | 50k Impressions | 2 Wochen |
| M | 200k Impressions | 4 Wochen |
| L | 500k+ | individuell |

## Freigabe & Brand Safety

Alle Creatives durchlaufen eine redaktionelle Prüfung vor Live-Schaltung.`,

  podcastWorkflow: `## Podcast-Workflow

Von der Idee bis zum veröffentlichten Feed — so strukturieren Teams ihre Voices-Produktion.

## Phasen

### Pre-Production

Briefing, Gästekoordination, Skript-Freigabe.

### Production

Aufnahme im Studio oder Remote mit professionellem Setup.

### Post-Production

Schnitt, Intro/Outro, Kapitelmarken und Hosting.`,

  studioBooking: `## Studio buchen

Das news aktuell Studio in Hamburg bietet Aufnahmeräume mit ISDN, Riverside-Integration und Technik-Support.

## Verfügbarkeit

Slots sind Mo–Fr 8–20 Uhr buchbar. Stornierung bis 24h vor Termin kostenfrei.`,

  nativeAdvertisingOverview: `## Native Advertising im Überblick

Mit Native Ads platzieren Sie Ihre Inhalte im redaktionellen Umfeld etablierter Zeitungs- und Magazin-Websites — design- und stilgerecht an die jeweilige Plattform angepasst.

## Vorteile

- **Garantierte Platzierung** mit hoher Sichtbarkeit
- **Direkt neben redaktionellem Content** auf Portalen mit hoher Reichweite
- **Bessere Auffindbarkeit** in Suchmaschinen durch das Vertrauen etablierter Medienhäuser

## Buchungsoptionen

- **Einzelbuchung** bei deutschen Medienpartnern (z. B. Süddeutsche Zeitung, Tagesspiegel, WAZ)
- **Kombination mit ots-Verbreitung** inkl. zusätzlicher Reichweite über den dpa-Ticker und Content-Partner

## Bundles

DE-Bundles (S, M, L) und DACH-Bundles ermöglichen Mehrfachbuchungen mit Preisvorteil — nur in Verbindung mit einer ots-Verbreitung buchbar.

Weitere Details zu Paketgrößen und Freigabe finden Sie unter **Booking & bundles**.`,

  presseportalOverview: `## Presseportal im Überblick

Presseportal ist das reichweitenstärkste PR-Portal der dpa-Tochter news aktuell — Ihre professionelle Newsroom-Lösung für alle PR-Inhalte.

## Reichweite

- Millionen Aufrufe pro Monat
- Tausende Unternehmen mit eigenem Newsroom
- Beliebte Recherchequelle für Medienprofis und Zielgruppen

## Ihr Newsroom

Bei Verbreitung via **ots** wird Ihre Pressemitteilung automatisch in Ihrem persönlichen Newsroom auf Presseportal veröffentlicht — sortiert nach Thema oder Unternehmen.

## Inhalte & Formate

Veröffentlichen Sie klassische Pressemitteilungen sowie Inhalte mit **Audio, Bildern, Grafiken oder Videos** für maximale Aufmerksamkeit.

## Sichtbarkeit

Presseportal stärkt Ihre **SEO-Präsenz** in Google, AMP und Social Media und erreicht Redaktionen, Fachblogs, Influencer und interessierte Leserinnen und Leser.`,

  regioAds: `## Überblick

Regio Ads ist ein Add-on zu Ihrer Standard-ots-Verbreitung, das Ihren Content mit garantierten Platzierungen im redaktionellen Umfeld regionaler Medienportale in Deutschland ausspielt — vollständig nachverfolgbar in Analytics.

Während ots Ihre Meldung national verbreitet, ergänzt Regio Ads eine gezielte regionale Ebene: Ihr Content erreicht lokale Zielgruppen in der oder den Regionen Ihrer Wahl — mit einer garantierten Mindestanzahl an Platzierungen und vollständiger Auswertung in Analytics.

Regio Ads ist ausschließlich als Add-on zu einer ots-Verbreitung verfügbar und kann direkt in der App gebucht werden.

## So funktioniert es

\`\`\`steps
Buchen Sie Ihre ots-Verbreitung wie gewohnt in der App.
Fügen Sie Regio Ads hinzu und wählen Sie eine oder mehrere Regionen.
Ihr Content — Text, Bild, Video oder Audio — wird im redaktionellen Umfeld unserer regionalen Medienpartner-Portale platziert.
Platzierungen sind als Werbung klar gekennzeichnet — für volle Transparenz.
Nach der Veröffentlichung erscheinen Ihre Platzierungen in Analytics und zeigen genau, wo und wie oft Ihr Content platziert wurde.
Alle platzierten Inhalte werden langfristig in Suchmaschinen indexiert und archiviert.
\`\`\`

## Was Sie erhalten

\`\`\`feature-cards
Garantierte Platzierungen|Mindestens 10 verifizierte Platzierungen pro gebuchter Region
Reporting|Alle Platzierungen in Ihrem Analytics-Dashboard
Multimedia|Text, Bild, Video, Audio
Redaktionelles Umfeld|Platzierungen auf etablierten regionalen Nachrichtenportalen
Langfristige Archivierung|Ihr Content wird indexiert und in Suchmaschinen bewahrt
Festpreis|Keine Auktionsmechanik, keine versteckten Kosten, volle Budgetplanbarkeit
Einfache Buchung|Direkt zu jeder ots-Buchung in der App hinzufügbar
\`\`\`

## Regionen & Partner

Deutschland ist in vier Regionen unterteilt. Sie können eine Region, beliebige Kombinationen oder alle vier buchen. Zum Start ist nur Region Süd buchbar — die übrigen Regionen werden schrittweise ergänzt.

\`\`\`regio-regions
\`\`\`

## Preise

Alle Preise kommen zusätzlich zu Ihrer Standard-ots-Verbreitungsgebühr. Standard-ots-Rabatte gelten (einschließlich Budgetrabatten bis zu 20 %).

### Regio Ads — Einzelbuchung

| Abdeckung | Garantierte Platzierungen | Preis |
|-----------|---------------------------|-------|
| 1 Region | Min. 10 pro Region | EUR 590 |
| 2 Regionen | Min. 10 pro Region | EUR 1.120 (5 % Bundle-Rabatt) |
| 3 Regionen | Min. 10 pro Region | EUR 1.650 (7 % Bundle-Rabatt) |
| Alle 4 Regionen | Min. 10 pro Region | EUR 2.120 (10 % Bundle-Rabatt) |

### Regio Ads + Native Ads — Kombinationen

| Paket | Preis |
|-------|-------|
| 1 Region + Native Ads Kategorie 1 | EUR 930 |
| 1 Region + Native Ads Kategorie 2 | EUR 1.120 (5 % Rabatt) |
| 1 Region + Bundle S | EUR 2.740 (5 % Rabatt) |
| 1 Region + Bundle M | EUR 3.610 (7 % Rabatt) |
| 1 Region + Bundle L | EUR 4.070 (10 % Rabatt) |

## Für wen ist das geeignet?

Regio Ads ist die richtige Wahl, wenn Sie:

- regionale Stories, Events oder Kampagnen mit gezielter lokaler Reichweite veröffentlichen
- ein Unternehmen mit regionalen Niederlassungen, Vertriebsnetzen oder lokalen Zielgruppen betreiben
- ein Verband oder eine Organisation mit regionaler Relevanz sind
- nationale ots-Reichweite mit gezielter regionaler Tiefe in einer einzigen Buchung kombinieren möchten

## Häufig gestellte Fragen

\`\`\`faq
Kann ich Regio Ads ohne Standard-ots-Verbreitung buchen?|Nein. Regio Ads ist ausschließlich als Add-on zu einer Standard-ots-Pressemitteilungsverbreitung verfügbar.
Wo sehe ich, dass mein Content platziert wurde?|Jede Platzierung ist in Ihrem Analytics-Dashboard dokumentiert. Mindestens 10 Platzierungen pro gebuchter Region sind garantiert und einzeln aufgeführt.
Welche Content-Formate werden unterstützt?|Text, Bild, Video und Audio können über Regio Ads verbreitet werden.
Sind die Platzierungen als Werbung gekennzeichnet?|Ja. Entsprechend Presse- und Redaktionsstandards sind alle Platzierungen im redaktionellen Umfeld unserer Partnerportale transparent als Anzeigen gekennzeichnet.
Ist der Preis fest oder leistungsabhängig?|Der Preis ist vollständig fest. Es gibt keine Auktionen, keine variablen Kosten und kein Budgetrisiko. Sie wissen genau, was Sie zahlen und was Sie erhalten.
Wann werden die Regionen Nord, Ost und West verfügbar?|Diese Regionen werden nach dem initialen Start in Region Süd schrittweise ausgerollt. Halten Sie Ausschau nach Ankündigungen in der App.
\`\`\``,

  crmExport: `## CRM-Export

Exportieren Sie zimpel-Listen für Salesforce, HubSpot oder CSV-Import in Ihr internes System.

## Felder

Name, Medium, Ressort, E-Mail, Telefon, letzte Aktualisierung.`,
}

const enBodies: Record<string, string> = {
  "distribution-channels-explained": `## Overview

news aktuell distributes your press releases through the **ots** PR distribution network — from targeted delivery into editorial systems and Presseportal to international reach with **ots-international**.

Every booking includes **National** distribution. You can add **International**, **Specialist**, or **Regional** channels as optional add-ons.

\`\`\`cards
National|dpa distribution into German editorial systems and Presseportal.|included
International|Worldwide reach via ots-international and partner agencies.|addon
Specialist|Trade and vertical media for targeted industry audiences.|addon
Regional|Local and regional outlets for geo-focused campaigns.|addon
\`\`\`

## National distribution

**OTS** is the core channel for structured corporate news in Germany. After approval, your release appears in editorial systems and in your newsroom on **Presseportal**.

\`\`\`callout
**Timing matters**

Schedule national distribution before 14:00 CET where possible so your release can still enter the dpa news ticker the same day.
\`\`\`

## International distribution

With **ots-international**, you reach audiences worldwide — including translation, country-specific advice, and a strong partner network (dpa, AP, AFP, ANSA, and more).

## Combining channels

National is included in every booking. Add international, specialist, or regional channels when you need extra reach.

\`\`\`callout
**Highlight add-on**

Book **Highlight** to place your release prominently on the Presseportal homepage and in the app.
\`\`\`

| Channel | Why | Status |
|---------|-----|--------|
| **National (dpa)** | Core reach in German editorial systems | ✓ Default |
| **Presseportal** | Published automatically with ots — your newsroom | ✓ Automatic |
| **International** | Customisable target regions worldwide | + Add-on |
| **Specialist** | Trade and vertical media | + Add-on |
| **Regional** | Local media landscape | + Add-on |

\`\`\`callout-neutral
**Deadline for changes**

You can adjust channels in the booking wizard until final approval. After that, contact support to add channels.
\`\`\`

## How to add channels to a booking

\`\`\`steps
Log in to **my news aktuell** and open your booking.
Go to **Distribution** in the booking wizard.
Select **Add channels** and choose National, International, Specialist, or Regional.
Confirm your selection in the **Booking summary** before checkout.
\`\`\`

## OTS — PR distribution network

OTS is the core channel for structured corporate news in Germany. After approval, your release appears in editorial systems.

### How distribution works

- **Targeted distribution** of your press releases to relevant media
- Via the **Deutsche Presse-Agentur (dpa) news ticker** directly into the editorial systems of all relevant media outlets
- **Extensive partner network** of news agencies, news portals and online media

### Formatting tips

- Use a clear headline (max. 120 characters)
- Lead paragraph with key facts
- Include contacts and image assets

## Global reach

Reach and visibility for your press releases is what we specialise in. Whether you want your content distributed regionally or you are planning an international campaign, the ots distribution network allows you to reliably reach your individual target groups in almost all countries and languages.

## Presseportal

Distributing through ots gets your press release published in your own newsroom at **Presseportal**. With millions of visits per month, Presseportal is among the largest PR portals in Germany and a reliable research source for journalists.

## Multimedia content

A press release primarily consists of text. Adding **images, graphics, videos, audio files and/or specialised documents** reinforces your message and gives your readers even more information to work with. If you need assistance with multimedia, we can help you.

## Analytics

Our **Analytics** gives you insight into your distribution success:

- Hits from online media that show where your content is playing
- Industry comparison
- Export access data in common formats for your own reporting

## ots-international

With **ots-international**, you deliver your content to audiences worldwide.

### What you get

- Distribution of your press material to **customisable target regions**
- **Professional support** every step of the way
- **Strong partner network** including dpa, AP, pa, belga, ANSA, AFP, APA, KEYSTONE-SDA

### Our global network

Western Europe · Eastern Europe · Europe · North America · Latin America/South America · Middle East · Asia & Australia · Africa

### Achieving successful international communication

- Advice on tailoring your communications to **country-specific requirements** — from cultural peculiarities to time zones
- **Full flexibility:** Whether a single country, an entire continent or the whole world — you decide
- **Professional translation** of your press release into the respective national language — usually within 48 hours
- **Investor Network:** Access to the world's leading research platforms for investors
- Targeted and effective delivery through international partner agencies — globally and regionally

## Add-ons

Extend your ots distribution with optional extras:

### Native Ads

Guaranteed placement on the websites of premium media partners such as **Süddeutsche Zeitung** and **Hamburger Abendblatt**. The direct proximity to editorial content lets you profit from the partner's reputation, reach and ranking on search engines.

### ots-Textcheck

Error-free texts are critical for both editors and search engines. Your content is reviewed for correct grammar and spelling by **two different people** to ensure only flawless messages are published.

### Images, audios, videos & PDFs

Include an image, audio or video file, or a PDF in your message and make your content more visible among your target groups.

### Button

Direct readers to your page, event or to further information. The button with your individual text can be easily integrated into your message.

### Specialist and regional media

High-end specialist and regional distributors for specific trade media (e.g. IT) or international media houses — easily add to your booking.

### Highlight

Prominent placement of your message on the **homepage and app** of Presseportal for additional visibility.

### dpa-Agenda

**dpa-Agenda** from Deutsche Presse-Agentur is the largest appointment platform for media professionals. This add-on lets you secure entry and associated visibility among journalists.

### ots-Monitoring by ARGUS

Professional media monitoring from **over five million sources** along with key figures and clippings — together with our partner ARGUS DATA INSIGHTS.

### ots Display Ads

Display your ots messages programmatically on **over 11,000 Digital Out-of-Home screens** on the Framen platform — nationwide, e.g. in co-working spaces, gyms, hotels or fast food restaurants.

## PR Basic Package

The ideal starter: distribution via ots, media file add-on and monitoring by ARGUS in one package.

| Component | Benefit |
|-----------|---------|
| Distribution via ots | Directly into editorial systems, high visibility through Presseportal |
| "Media File" add-on | More attention, upgrades your content |
| Monitoring by ARGUS | Traceable success measurement, all major KPIs monitored, clippings included |

**Savings:** EUR 1,175 instead of EUR 1,465 — save EUR 290 compared with booking each separately.`,

  "argus-monitoring": `## What is ARGUS?

ARGUS is the media monitoring add-on from news aktuell. It complements distribution with real-time tracking across print, online, radio and TV.

\`\`\`callout
**Tip**

Pair ARGUS with an ots distribution to compare reach and media pickup in one report.
\`\`\`

## Activation

\`\`\`steps
Open your Distributions dashboard.
Select **Add monitoring**.
Define keywords and exclusions.
\`\`\`

## Clippings & alerts

### Daily digest emails

Receive a summary of all matches — filterable by medium and relevance.`,

  "getting-started-with-voices": `## Getting started with Voices

Voices connects podcast production, audio newsrooms and sponsored content on one platform.

## Create your first project

1. Choose format: interview, newsflash or series
2. Upload briefing and script
3. Book voice talent and editing

## More formats

For editorially embedded brand content on media portals, see **Native Advertising**.`,

  "native-ads-bundles": `## Native Ads bundles

Native Ads place your message in the editorial environment of partner media — clearly labelled.

## Package sizes

| Package | Reach | Duration |
|---------|-------|----------|
| S | 50k impressions | 2 weeks |
| M | 200k impressions | 4 weeks |
| L | 500k+ | custom |

## Approval & brand safety

All creatives go through editorial review before going live.`,

  "searching-media-contacts": `## Finding media contacts

In zimpel you search over a million journalistic contacts by medium, desk and region.

## Search filters

- **Medium type:** daily, trade, online, radio/TV
- **Desk:** business, politics, local
- **Geo:** postal code, state, DACH

## Saving lists

Save results as dynamic or static lists for campaigns.`,

  "invoices-billing": `## Invoices & billing

All invoices are under **My account → Billing**.

## Payment methods

We support direct debit, bank transfer and invoice purchase for existing clients on request.`,

  "native-advertising-overview": `## Native Advertising overview

Native Ads place your content in the editorial environment of established newspaper and magazine websites — adapted in design and style to each platform.

## Benefits

- **Guaranteed placement** with high visibility
- **Directly adjacent to editorial content** on high-reach partner portals
- **Improved findability** in search engines through trusted media brands

## Booking options

- **Single booking** with German media partners (e.g. Süddeutsche Zeitung, Tagesspiegel, WAZ)
- **Combined with ots distribution** including extra reach via the dpa ticker and content partners

## Bundles

DE bundles (S, M, L) and DACH bundles let you book multiple portals at a discount — only available with an ots distribution.

See **Booking & bundles** for package sizes and approval workflows.`,

  "presseportal-overview": `## Presseportal overview

Presseportal is the highest-reach PR portal from dpa subsidiary news aktuell — your professional newsroom for all PR content.

## Reach

- Millions of page views per month
- Thousands of companies with their own newsroom
- A trusted research source for media professionals and target audiences

## Your newsroom

When you distribute via **ots**, your press release is published automatically in your personal newsroom on Presseportal — organised by topic or company.

## Content & formats

Publish classic press releases as well as content with **audio, images, graphics or videos** for maximum attention.

## Visibility

Presseportal strengthens your **SEO presence** on Google, AMP and social media and reaches newsrooms, trade blogs, influencers and interested readers.`,

  "regio-ads": `## Overview

Regio Ads is an add-on to your standard ots distribution that gives your content guaranteed placement in the editorial environment of regional media portals across Germany.

While ots delivers your release nationally, Regio Ads adds a targeted regional layer — your content reaches local audiences in the region(s) you choose, with a minimum number of placements guaranteed and fully reported in Analytics.

Regio Ads is exclusively available as an add-on to an ots distribution and can be booked directly in the app.

## How it works

\`\`\`steps
Book your ots distribution as usual in the app.
Add Regio Ads and select one or more regions.
Your content — text, image, video, or audio — is placed within the editorial environment of our regional media partner portals.
Placements are clearly labelled as advertisements for full transparency.
After publication, your placements appear in Analytics, showing exactly where and how often your content was placed.
All placed content is indexed and archived long-term in search engines.
\`\`\`

## What you get

\`\`\`feature-cards
Guaranteed placements|Minimum 10 verified placements per booked region
Reporting|All placements listed in your Analytics dashboard
Multimedia|Text, image, video, audio
Editorial environment|Placements within established regional news portals
Long-term archiving|Your content is indexed and preserved in search engines
Fixed price|No auction mechanics, no hidden costs, full budget predictability
Simple booking|Add directly to any ots booking in the app
\`\`\`

## Regions & partners

Germany is divided into four regions. You can book one region, any combination, or all four. At launch, only Region South is bookable — the remaining regions will be added in stages.

\`\`\`regio-regions
\`\`\`

## Pricing

All prices are in addition to your standard ots distribution fee. Standard ots discounts apply (including budget discounts, up to 20%).

### Regio Ads — standalone

| Coverage | Guaranteed placements | Price |
|----------|----------------------|-------|
| 1 region | Min. 10 per region | EUR 590 |
| 2 regions | Min. 10 per region | EUR 1,120 (5% bundle discount) |
| 3 regions | Min. 10 per region | EUR 1,650 (7% bundle discount) |
| All 4 regions | Min. 10 per region | EUR 2,120 (10% bundle discount) |

### Regio Ads + Native Ads — combinations

| Package | Price |
|---------|-------|
| 1 Region + Native Ads Category 1 | EUR 930 |
| 1 Region + Native Ads Category 2 | EUR 1,120 (5% discount) |
| 1 Region + Bundle S | EUR 2,740 (5% discount) |
| 1 Region + Bundle M | EUR 3,610 (7% discount) |
| 1 Region + Bundle L | EUR 4,070 (10% discount) |

## Who is this for?

Regio Ads is the right choice if you:

- Have regional stories, events, or campaigns that need targeted local coverage
- Run a business with regional branches, distribution networks, or local audiences
- Are an association or organisation with regional relevance
- Want to combine national ots reach with targeted regional depth in a single booking

## Frequently asked questions

\`\`\`faq
Can I book Regio Ads without a standard ots distribution?|No. Regio Ads is exclusively available as an add-on to a standard ots press release distribution.
How do I know my content was placed?|Every placement is documented in your Analytics dashboard. At least 10 placements per booked region are guaranteed and individually listed.
What content formats are supported?|Text, image, video, and audio content can all be distributed via Regio Ads.
Are the placements labelled as advertising?|Yes. In line with press and editorial standards, all placements are transparently marked as advertisements within the editorial environment of our partner portals.
Is the price fixed or does it depend on performance?|The price is fully fixed. There are no auctions, no variable costs, and no budget risk. You know exactly what you pay and what you receive.
When will the North, East, and West regions be available?|These regions are being rolled out in stages following the initial South launch. Stay tuned for announcements in the app.
\`\`\``,
}

export const articles: Article[] = [
  {
    productSlug: "distributions",
    categorySlug: "channels",
    slug: "distribution-channels-explained",
    title: "Distribution channels explained",
    lead: "Understand ots, Presseportal, ots-international and add-ons — from dpa distribution in Germany to worldwide PR reach.",
    updatedAt: "2026-06-02",
    tags: ["OTS", "Presseportal", "ots-international", "channels", "add-ons"],
    locale: "de",
    body: deBodies.distributionChannels,
  },
  {
    productSlug: "distributions",
    categorySlug: "channels",
    slug: "distribution-channels-explained",
    title: "Distribution channels explained",
    lead: "Understand ots, Presseportal, ots-international and add-ons — from dpa distribution in Germany to worldwide PR reach.",
    updatedAt: "2026-06-02",
    tags: ["OTS", "Presseportal", "ots-international", "channels", "add-ons"],
    locale: "en",
    body: enBodies["distribution-channels-explained"],
  },
  {
    productSlug: "distributions",
    categorySlug: "channels",
    slug: "regio-ads",
    title: "Regio Ads",
    lead: "Target your press release to specific regions of Germany with guaranteed placements in established local media portals — trackable in Analytics.",
    updatedAt: "2026-06-08",
    tags: ["Regio Ads", "OTS", "add-on", "regional", "Analytics"],
    locale: "de",
    body: deBodies.regioAds,
  },
  {
    productSlug: "distributions",
    categorySlug: "channels",
    slug: "regio-ads",
    title: "Regio Ads",
    lead: "Target your press release to specific regions of Germany with guaranteed placements in established local media portals — trackable in Analytics.",
    updatedAt: "2026-06-08",
    tags: ["Regio Ads", "OTS", "add-on", "regional", "Analytics"],
    locale: "en",
    body: enBodies["regio-ads"],
  },
  {
    productSlug: "distributions",
    categorySlug: "monitoring",
    slug: "argus-monitoring",
    title: "ARGUS Monitoring",
    lead: "Add media monitoring to your distribution — clippings, alerts and exports in one place.",
    updatedAt: "2026-01-08",
    tags: ["ARGUS", "monitoring", "clippings"],
    locale: "de",
    body: deBodies.argusMonitoring,
  },
  {
    productSlug: "distributions",
    categorySlug: "monitoring",
    slug: "argus-monitoring",
    title: "ARGUS Monitoring",
    lead: "Add media monitoring to your distribution — clippings, alerts and exports in one place.",
    updatedAt: "2026-01-08",
    tags: ["ARGUS", "monitoring", "clippings"],
    locale: "en",
    machineTranslated: true,
    body: enBodies["argus-monitoring"],
  },
  {
    productSlug: "distributions",
    categorySlug: "getting-started",
    slug: "first-ots-release",
    title: "Ihre erste OTS-Meldung",
    lead: "Schritt für Schritt zur veröffentlichten Pressemitteilung im Originaltextservice.",
    updatedAt: "2025-09-20",
    tags: ["OTS", "onboarding"],
    locale: "de",
    body: deBodies.otsBasics,
  },
  {
    productSlug: "distributions",
    categorySlug: "getting-started",
    slug: "portal-seo",
    title: "Presseportal & SEO",
    lead: "Optimieren Sie Metadaten und Social Previews für maximale Sichtbarkeit.",
    updatedAt: "2025-10-05",
    tags: ["Presseportal", "SEO"],
    locale: "de",
    body: deBodies.presseportalSeo,
  },
  {
    productSlug: "relations",
    categorySlug: "contacts",
    slug: "searching-media-contacts",
    title: "Medienkontakte suchen",
    lead: "Filter, Listen und Best Practices für die Recherche in zimpel.",
    updatedAt: "2025-12-01",
    tags: ["zimpel", "search", "contacts"],
    locale: "de",
    body: deBodies.searchContacts,
  },
  {
    productSlug: "relations",
    categorySlug: "contacts",
    slug: "searching-media-contacts",
    title: "Searching media contacts",
    lead: "Filters, lists and best practices for research in zimpel.",
    updatedAt: "2025-12-01",
    tags: ["zimpel", "search", "contacts"],
    locale: "en",
    machineTranslated: true,
    body: enBodies["searching-media-contacts"],
  },
  {
    productSlug: "relations",
    categorySlug: "zimpel",
    slug: "zimpel-overview",
    title: "zimpel im Überblick",
    lead: "Die Medien-Datenbank von news aktuell Relations — Datenqualität und Integration.",
    updatedAt: "2025-08-14",
    tags: ["zimpel", "database"],
    locale: "de",
    body: deBodies.zimpelIntro,
  },
  {
    productSlug: "relations",
    categorySlug: "zimpel",
    slug: "crm-export",
    title: "CRM-Export",
    lead: "Listen aus zimpel in Salesforce, HubSpot oder CSV exportieren.",
    updatedAt: "2025-07-22",
    tags: ["export", "CRM", "API"],
    locale: "de",
    body: deBodies.crmExport,
  },
  {
    productSlug: "relations",
    categorySlug: "billing",
    slug: "invoices-billing",
    title: "Rechnungen & Abrechnung",
    lead: "Rechnungen einsehen, Zahlungsarten und steuerliche Angaben verwalten.",
    updatedAt: "2026-02-15",
    tags: ["billing", "invoices"],
    locale: "de",
    body: deBodies.invoicesBilling,
  },
  {
    productSlug: "relations",
    categorySlug: "billing",
    slug: "invoices-billing",
    title: "Invoices & billing",
    lead: "View invoices, payment methods and manage tax details.",
    updatedAt: "2026-02-15",
    tags: ["billing", "invoices"],
    locale: "en",
    machineTranslated: true,
    body: enBodies["invoices-billing"],
  },
  {
    productSlug: "voices",
    categorySlug: "podcasts",
    slug: "getting-started-with-voices",
    title: "Getting started with Voices",
    lead: "Podcast-Produktion, Audio-Newsrooms und erste Schritte auf der Plattform.",
    updatedAt: "2026-01-20",
    tags: ["Voices", "onboarding", "podcast"],
    locale: "de",
    body: deBodies.voicesGettingStarted,
  },
  {
    productSlug: "voices",
    categorySlug: "podcasts",
    slug: "getting-started-with-voices",
    title: "Getting started with Voices",
    lead: "Podcast production, audio newsrooms and first steps on the platform.",
    updatedAt: "2026-01-20",
    tags: ["Voices", "onboarding", "podcast"],
    locale: "en",
    machineTranslated: true,
    body: enBodies["getting-started-with-voices"],
  },
  {
    productSlug: "native-advertising",
    categorySlug: "getting-started",
    slug: "native-advertising-overview",
    title: "Native Advertising overview",
    lead: "Garantierte Platzierung im redaktionellen Umfeld — Einzelbuchung, ots-Kombination und Bundles.",
    updatedAt: "2026-06-02",
    tags: ["Native Ads", "overview", "placement"],
    locale: "de",
    body: deBodies.nativeAdvertisingOverview,
  },
  {
    productSlug: "native-advertising",
    categorySlug: "getting-started",
    slug: "native-advertising-overview",
    title: "Native Advertising overview",
    lead: "Guaranteed placement in editorial environments — single booking, ots combo and bundles.",
    updatedAt: "2026-06-02",
    tags: ["Native Ads", "overview", "placement"],
    locale: "en",
    machineTranslated: true,
    body: enBodies["native-advertising-overview"],
  },
  {
    productSlug: "native-advertising",
    categorySlug: "booking",
    slug: "native-ads-bundles",
    title: "Native Ads bundles",
    lead: "Paketgrößen, Reichweite und Freigabeprozesse für gesponserte Inhalte.",
    updatedAt: "2025-11-28",
    tags: ["Native Ads", "bundles"],
    locale: "de",
    body: deBodies.nativeAdsBundles,
  },
  {
    productSlug: "native-advertising",
    categorySlug: "booking",
    slug: "native-ads-bundles",
    title: "Native Ads bundles",
    lead: "Package sizes, reach and approval workflows for sponsored content.",
    updatedAt: "2025-11-28",
    tags: ["Native Ads", "bundles"],
    locale: "en",
    machineTranslated: true,
    body: enBodies["native-ads-bundles"],
  },
  {
    productSlug: "presseportal",
    categorySlug: "getting-started",
    slug: "presseportal-overview",
    title: "Presseportal overview",
    lead: "Ihr Newsroom auf Deutschlands reichweitenstärkstem PR-Portal — Reichweite, Formate und SEO.",
    updatedAt: "2026-06-02",
    tags: ["Presseportal", "newsroom", "SEO"],
    locale: "de",
    body: deBodies.presseportalOverview,
  },
  {
    productSlug: "presseportal",
    categorySlug: "getting-started",
    slug: "presseportal-overview",
    title: "Presseportal overview",
    lead: "Your newsroom on Germany’s highest-reach PR portal — reach, formats and SEO.",
    updatedAt: "2026-06-02",
    tags: ["Presseportal", "newsroom", "SEO"],
    locale: "en",
    machineTranslated: true,
    body: enBodies["presseportal-overview"],
  },
  {
    productSlug: "voices",
    categorySlug: "podcasts",
    slug: "podcast-workflow",
    title: "Podcast-Workflow",
    lead: "Von Pre-Production bis Hosting — Phasen und Verantwortlichkeiten.",
    updatedAt: "2025-10-18",
    tags: ["workflow", "production"],
    locale: "de",
    body: deBodies.podcastWorkflow,
  },
  {
    productSlug: "voices",
    categorySlug: "studio",
    slug: "studio-booking",
    title: "Studio buchen",
    lead: "Termine, Ausstattung und Stornierung im Hamburg Studio.",
    updatedAt: "2025-12-10",
    tags: ["studio", "booking"],
    locale: "de",
    body: deBodies.studioBooking,
  },
]

export const popularSearchChips = [
  "Regio Ads",
  "Distribution channels explained",
  "Presseportal overview",
  "Native Advertising overview",
  "ARGUS Monitoring",
  "Searching media contacts",
  "Getting started with Voices",
  "Native Ads bundles",
  "Invoices & billing",
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getCategory(productSlug: string, categorySlug: string): Category | undefined {
  return categories.find((c) => c.productSlug === productSlug && c.slug === categorySlug)
}

export function getArticle(
  productSlug: string,
  categorySlug: string,
  articleSlug: string,
  locale: Locale = "de"
): Article | undefined {
  return articles.find(
    (a) =>
      a.productSlug === productSlug &&
      a.categorySlug === categorySlug &&
      a.slug === articleSlug &&
      a.locale === locale
  )
}

export function getArticleWithFallback(
  productSlug: string,
  categorySlug: string,
  articleSlug: string,
  locale: Locale
): Article | undefined {
  return (
    getArticle(productSlug, categorySlug, articleSlug, locale) ??
    getArticle(productSlug, categorySlug, articleSlug, "de")
  )
}

export function getSiblingArticles(
  productSlug: string,
  categorySlug: string,
  locale: Locale
): Article[] {
  const seen = new Set<string>()
  const siblings: Article[] = []
  for (const article of articles) {
    if (article.productSlug !== productSlug || article.categorySlug !== categorySlug) continue
    if (article.locale !== locale) continue
    if (seen.has(article.slug)) continue
    seen.add(article.slug)
    siblings.push(article)
  }
  return siblings.sort((a, b) => a.title.localeCompare(b.title))
}

export function articleExists(
  productSlug: string,
  categorySlug: string,
  articleSlug: string
): boolean {
  return articles.some(
    (a) =>
      a.productSlug === productSlug &&
      a.categorySlug === categorySlug &&
      a.slug === articleSlug
  )
}

export function getCategoriesForProduct(productSlug: string): Category[] {
  return categories.filter((c) => c.productSlug === productSlug)
}

export function getFirstArticleInCategory(
  productSlug: string,
  categorySlug: string,
  locale: Locale
): Article | undefined {
  return (
    articles.find(
      (a) =>
        a.productSlug === productSlug &&
        a.categorySlug === categorySlug &&
        a.locale === locale
    ) ??
    articles.find(
      (a) => a.productSlug === productSlug && a.categorySlug === categorySlug
    )
  )
}

export function getRelatedArticles(article: Article, limit = 4): Article[] {
  const seen = new Set<string>()
  const related: Article[] = []

  for (const candidate of articles) {
    if (candidate.productSlug !== article.productSlug) continue
    if (candidate.slug === article.slug) continue
    if (candidate.locale !== article.locale) continue
    if (seen.has(candidate.slug)) continue
    seen.add(candidate.slug)
    related.push(candidate)
    if (related.length >= limit) break
  }

  return related
}

export function getFeaturedArticles(locale: Locale = "de"): Article[] {
  const slugs = [
    "distribution-channels-explained",
    "presseportal-overview",
    "native-advertising-overview",
    "regio-ads",
    "argus-monitoring",
    "getting-started-with-voices",
  ]
  return slugs
    .map((slug) => {
      const article = articles.find((a) => a.slug === slug && a.locale === locale)
      return article
    })
    .filter((a): a is Article => Boolean(a))
}

export type HelpTopicIconKey =
  | "send"
  | "mail"
  | "credit-card"
  | "bar-chart"
  | "presseportal"
  | "user-plus"
  | "users"
  | "badge-check"
  | "radio"
  | "image"
  | "plug"
  | "shield"
  | "megaphone"
  | "line-chart"
  | "file-text"

export type HelpTopic = {
  slug: string
  name: Record<Locale, string>
  description: Record<Locale, string>
  searchQuery: string
  iconKey: HelpTopicIconKey
}

export const helpTopics: HelpTopic[] = [
  {
    slug: "distribution",
    name: { de: "Distribution", en: "Distribution" },
    description: {
      de: "OTS, Kanäle, ots-international und Add-ons",
      en: "OTS, channels, ots-international and add-ons",
    },
    searchQuery: "distribution OTS",
    iconKey: "send",
  },
  {
    slug: "emails",
    name: { de: "E-Mails", en: "Emails" },
    description: {
      de: "Benachrichtigungen, Digest-Mails und Freigabe-E-Mails",
      en: "Notifications, digest emails and approval messages",
    },
    searchQuery: "email notifications",
    iconKey: "mail",
  },
  {
    slug: "billing",
    name: { de: "Abrechnung", en: "Billing" },
    description: {
      de: "Rechnungen, Zahlungsarten und Verträge",
      en: "Invoices, payment methods and contracts",
    },
    searchQuery: "billing invoices",
    iconKey: "credit-card",
  },
  {
    slug: "reporting",
    name: { de: "Reporting", en: "Reporting" },
    description: {
      de: "Analytics, Exporte und Erfolgsmessung",
      en: "Analytics, exports and performance reporting",
    },
    searchQuery: "analytics reporting export",
    iconKey: "bar-chart",
  },
  {
    slug: "newsrooms",
    name: { de: "Newsrooms", en: "Newsrooms" },
    description: {
      de: "Presseportal, SEO und Newsroom-Inhalte",
      en: "Presseportal, SEO and newsroom content",
    },
    searchQuery: "newsroom Presseportal",
    iconKey: "presseportal",
  },
  {
    slug: "registration",
    name: { de: "Registrierung", en: "Registration process" },
    description: {
      de: "Konto anlegen, Freischaltung und erste Schritte",
      en: "Create an account, activation and onboarding",
    },
    searchQuery: "registration onboarding account",
    iconKey: "user-plus",
  },
  {
    slug: "user-management",
    name: { de: "Nutzerverwaltung", en: "User management" },
    description: {
      de: "Rollen, Berechtigungen und Team-Zugänge",
      en: "Roles, permissions and team access",
    },
    searchQuery: "user management roles permissions",
    iconKey: "users",
  },
  {
    slug: "dpa-id",
    name: { de: "dpa-ID", en: "dpa ID" },
    description: {
      de: "dpa-Kennung, Agenda und Agentur-Anbindung",
      en: "dpa identifier, agenda and agency linkage",
    },
    searchQuery: "dpa ID agenda",
    iconKey: "badge-check",
  },
  {
    slug: "monitoring",
    name: { de: "Monitoring", en: "Monitoring" },
    description: {
      de: "ARGUS, Clippings und Medienbeobachtung",
      en: "ARGUS, clippings and media monitoring",
    },
    searchQuery: "ARGUS monitoring clippings",
    iconKey: "radio",
  },
  {
    slug: "multimedia",
    name: { de: "Multimedia", en: "Multimedia" },
    description: {
      de: "Bilder, Video, Audio und Anhänge in Meldungen",
      en: "Images, video, audio and attachments in releases",
    },
    searchQuery: "multimedia images video",
    iconKey: "image",
  },
  {
    slug: "integrations",
    name: { de: "Integrationen", en: "Integrations" },
    description: {
      de: "CRM-Export, API und Drittsysteme",
      en: "CRM export, API and third-party systems",
    },
    searchQuery: "CRM export API integration",
    iconKey: "plug",
  },
  {
    slug: "security",
    name: { de: "Sicherheit", en: "Security" },
    description: {
      de: "Login, SSO und Kontoschutz",
      en: "Login, SSO and account protection",
    },
    searchQuery: "security login SSO",
    iconKey: "shield",
  },
  {
    slug: "native-ads",
    name: { de: "Native Advertising", en: "Native Advertising" },
    description: {
      de: "Buchung, Bundles und Freigabe",
      en: "Booking, bundles and approval",
    },
    searchQuery: "Native Advertising bundles",
    iconKey: "megaphone",
  },
  {
    slug: "press-releases",
    name: { de: "Pressemitteilungen", en: "Press releases" },
    description: {
      de: "Erstellen, Formatierung und Veröffentlichung",
      en: "Create, format and publish releases",
    },
    searchQuery: "press release OTS publish",
    iconKey: "file-text",
  },
  {
    slug: "media-contacts",
    name: { de: "Medienkontakte", en: "Media contacts" },
    description: {
      de: "zimpel-Recherche, Listen und Outreach",
      en: "zimpel research, lists and outreach",
    },
    searchQuery: "zimpel media contacts",
    iconKey: "line-chart",
  },
]

const popularArticleSlugs = [
  "distribution-channels-explained",
  "argus-monitoring",
  "invoices-billing",
  "presseportal-overview",
  "searching-media-contacts",
  "native-advertising-overview",
] as const

export function getLatestArticles(locale: Locale = "de", limit = 4): Article[] {
  return articles
    .filter((a) => a.locale === locale)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, limit)
}

export function getPopularArticles(locale: Locale = "de", limit = 6): Article[] {
  return popularArticleSlugs
    .map((slug) => articles.find((a) => a.slug === slug && a.locale === locale))
    .filter((a): a is Article => Boolean(a))
    .slice(0, limit)
}
