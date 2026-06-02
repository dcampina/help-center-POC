export type Locale = "de" | "en"

export type Product = {
  slug: string
  name: string
  description: string
  accentColor: string
  iconKey: "send" | "users" | "mic"
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
      "OTS, Presseportal and multi-channel distribution — reach journalists and audiences across Germany.",
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
      "Podcast production, audio newsrooms and Native Ads for brand storytelling.",
    accentColor: "#1856F5",
    iconKey: "mic",
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
  { productSlug: "voices", slug: "native-ads", name: "Native Ads" },
  { productSlug: "voices", slug: "studio", name: "Studio workflow" },
]

const deBodies = {
  distributionChannels: `## Überblick

news aktuell verteilt Ihre Pressemitteilungen über mehrere Kanäle — von klassischen OTS-Leitungen bis zum Presseportal.

## OTS (Originaltextservice)

Der OTS ist der Kernkanal für strukturierte Unternehmensnachrichten. Nach Freigabe erscheint Ihre Meldung in journalistischen Redaktionssystemen.

### Formatierungstipps

- Nutzen Sie eine klare Überschrift (max. 120 Zeichen)
- Lead-Absatz mit den wichtigsten Fakten
- Ansprechpartner und Bildmaterial angeben

## Presseportal

Das Presseportal erweitert die Reichweite um eine öffentlich zugängliche Darstellung mit SEO-Vorteilen.

## Kombinierte Pakete

Viele Kunden buchen OTS plus Presseportal als Bundle. ARGUS Monitoring lässt sich als Add-on hinzufügen.`,

  argusMonitoring: `## Was ist ARGUS?

ARGUS ist das Medienbeobachtungs-Add-on von news aktuell. Es ergänzt Ihre Distribution um Echtzeit-Monitoring in Print, Online, Radio und TV.

## Aktivierung

1. Öffnen Sie Ihr Distributions-Dashboard
2. Wählen Sie **Monitoring hinzufügen**
3. Definieren Sie Suchbegriffe und Ausschlüsse

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

## Native Ads

Für redaktionell eingebettete Markeninhalte siehe den separaten Leitfaden zu Native-Ads-Bundles.`,

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

  crmExport: `## CRM-Export

Exportieren Sie zimpel-Listen für Salesforce, HubSpot oder CSV-Import in Ihr internes System.

## Felder

Name, Medium, Ressort, E-Mail, Telefon, letzte Aktualisierung.`,
}

const enBodies: Record<string, string> = {
  "distribution-channels-explained": `## Overview

news aktuell distributes your press releases across multiple channels — from classic OTS wires to Presseportal.

## OTS (wire service)

OTS is the core channel for structured corporate news. After approval, your release appears in editorial systems.

### Formatting tips

- Use a clear headline (max. 120 characters)
- Lead paragraph with key facts
- Include contacts and image assets

## Presseportal

Presseportal extends reach with a public-facing page and SEO benefits.

## Combined packages

Many clients book OTS plus Presseportal as a bundle. ARGUS monitoring can be added as an add-on.`,

  "argus-monitoring": `## What is ARGUS?

ARGUS is the media monitoring add-on from news aktuell. It complements distribution with real-time tracking across print, online, radio and TV.

## Activation

1. Open your Distributions dashboard
2. Select **Add monitoring**
3. Define keywords and exclusions

## Clippings & alerts

### Daily digest emails

Receive a summary of all matches — filterable by medium and relevance.`,

  "getting-started-with-voices": `## Getting started with Voices

Voices connects podcast production, audio newsrooms and sponsored content on one platform.

## Create your first project

1. Choose format: interview, newsflash or series
2. Upload briefing and script
3. Book voice talent and editing

## Native Ads

For editorially embedded brand content, see the Native Ads bundles guide.`,

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
}

export const articles: Article[] = [
  {
    productSlug: "distributions",
    categorySlug: "channels",
    slug: "distribution-channels-explained",
    title: "Distribution channels explained",
    lead: "Understand OTS, Presseportal and how combined packages extend your PR reach across Germany.",
    updatedAt: "2025-11-12",
    tags: ["OTS", "Presseportal", "channels"],
    locale: "de",
    body: deBodies.distributionChannels,
  },
  {
    productSlug: "distributions",
    categorySlug: "channels",
    slug: "distribution-channels-explained",
    title: "Distribution channels explained",
    lead: "Understand OTS, Presseportal and how combined packages extend your PR reach across Germany.",
    updatedAt: "2025-11-12",
    tags: ["OTS", "Presseportal", "channels"],
    locale: "en",
    machineTranslated: true,
    body: enBodies["distribution-channels-explained"],
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
    productSlug: "voices",
    categorySlug: "native-ads",
    slug: "native-ads-bundles",
    title: "Native Ads bundles",
    lead: "Paketgrößen, Reichweite und Freigabeprozesse für gesponserte Inhalte.",
    updatedAt: "2025-11-28",
    tags: ["Native Ads", "bundles"],
    locale: "de",
    body: deBodies.nativeAdsBundles,
  },
  {
    productSlug: "voices",
    categorySlug: "native-ads",
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
  "Distribution channels explained",
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

export function getFeaturedArticles(locale: Locale = "de"): Article[] {
  const slugs = [
    "distribution-channels-explained",
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
