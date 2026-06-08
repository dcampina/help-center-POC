import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Clock, Flame, Star } from "lucide-react"

import type { Locale } from "@/content/help"
import {
  getFeaturedArticles,
  getLatestArticles,
  getPopularArticles,
} from "@/content/help"
import { searchUrl } from "@/lib/urls"
import { ArticlePreviewCard } from "@/components/help/ArticlePreviewCard"
import { Button } from "@/components/ui/button"

type HomeArticleSectionsProps = {
  locale: Locale
}

function SectionHeader({
  icon: Icon,
  title,
  description,
  viewAllHref,
  viewAllLabel,
}: {
  icon: LucideIcon
  title: string
  description: string
  viewAllHref?: string
  viewAllLabel?: string
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight">
          <Icon className="size-5 shrink-0 text-brand" />
          {title}
        </h2>
        <p className="mt-2 text-muted-foreground text-pretty">{description}</p>
      </div>
      {viewAllHref && viewAllLabel ? (
        <Button
          variant="ghost"
          size="sm"
          className="shrink-0 text-brand hover:bg-brand/5 hover:text-brand"
          render={<Link href={viewAllHref} />}
        >
          {viewAllLabel}
          <ArrowRight className="size-4" />
        </Button>
      ) : null}
    </div>
  )
}

export function HomeArticleSections({ locale }: HomeArticleSectionsProps) {
  const featured = getFeaturedArticles(locale)
  const latest = getLatestArticles(locale, 4)
  const popular = getPopularArticles(locale, 4)

  const copy =
    locale === "de"
      ? {
          featuredTitle: "Empfohlene Artikel",
          featuredDesc: "Die wichtigsten Einstiegs-Guides für Distribution, Presseportal und Monitoring.",
          latestTitle: "Neueste Artikel",
          latestDesc: "Kürzlich aktualisierte Hilfe-Artikel.",
          popularTitle: "Beliebte Artikel",
          popularDesc: "Am häufigsten aufgerufene Themen in der Hilfe.",
          viewAll: "Alle Artikel durchsuchen",
        }
      : {
          featuredTitle: "Featured articles",
          featuredDesc: "Essential starting guides for distribution, Presseportal and monitoring.",
          latestTitle: "Latest articles",
          latestDesc: "Recently updated help articles.",
          popularTitle: "Popular articles",
          popularDesc: "Most visited topics in the help centre.",
          viewAll: "Browse all articles",
        }

  return (
    <>
      <section className="border-t border-brand/15 bg-gradient-to-b from-brand/10 via-brand/[0.06] to-brand/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionHeader
            icon={Star}
            title={copy.featuredTitle}
            description={copy.featuredDesc}
            viewAllHref={searchUrl("getting started")}
            viewAllLabel={copy.viewAll}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => (
              <ArticlePreviewCard
                key={article.slug}
                article={article}
                locale={locale}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionHeader
            icon={Clock}
            title={copy.latestTitle}
            description={copy.latestDesc}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {latest.map((article) => (
              <ArticlePreviewCard
                key={article.slug}
                article={article}
                locale={locale}
                showLead
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionHeader
            icon={Flame}
            title={copy.popularTitle}
            description={copy.popularDesc}
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {popular.map((article) => (
              <li key={article.slug}>
                <ArticlePreviewCard article={article} locale={locale} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
