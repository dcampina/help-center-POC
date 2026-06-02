"use client"

import Link from "next/link"
import { format } from "date-fns"
import { de, enUS } from "date-fns/locale"

import { PresseportalIcon } from "@/components/help/PresseportalIcon"
import type { Locale } from "@/content/help"
import { popularSearchChips } from "@/content/help"
import { groupSearchResults, highlightSnippet, searchArticles } from "@/lib/search"
import { articleUrl, searchUrl } from "@/lib/urls"
import { Separator } from "@/components/ui/separator"

type SearchResultsProps = {
  query: string
  locale: Locale
}

export function SearchResults({ query, locale }: SearchResultsProps) {
  const trimmed = query.trim()
  const results = searchArticles(trimmed, locale)
  const grouped = groupSearchResults(results)
  const terms = trimmed.split(/\s+/).filter(Boolean)
  const dateLocale = locale === "de" ? de : enUS

  if (!trimmed) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg font-medium">Search the Help Centre</p>
        <p className="mt-2 text-muted-foreground">
          Enter a topic, product name or keyword above.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {popularSearchChips.map((chip) => (
            <Link
              key={chip}
              href={searchUrl(chip)}
              className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm transition-colors hover:border-brand/30 hover:bg-brand/5 hover:text-brand"
            >
              {chip}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg font-medium">No results for &ldquo;{trimmed}&rdquo;</p>
        <p className="mt-2 text-muted-foreground">
          Try different keywords or browse popular topics below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {popularSearchChips.map((chip) => (
            <Link
              key={chip}
              href={searchUrl(chip)}
              className="rounded-full border border-border px-3 py-1.5 text-sm hover:text-brand"
            >
              {chip}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <p className="text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;
        {trimmed}&rdquo;
      </p>
      {grouped.map((group) => (
        <section key={group.productSlug}>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-brand">
            {group.productSlug === "presseportal" ? (
              <PresseportalIcon size={22} />
            ) : null}
            {group.productName}
          </h2>
          <div className="mt-4 space-y-8">
            {group.categories.map((cat) => (
              <div key={cat.categorySlug}>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {cat.categoryName}
                </h3>
                <ul className="mt-3 divide-y divide-border rounded-lg border border-border/80">
                  {cat.results.map(({ article, snippet }) => (
                    <li key={`${article.slug}-${article.locale}`}>
                      <Link
                        href={articleUrl(
                          article.productSlug,
                          article.categorySlug,
                          article.slug
                        )}
                        className="block px-4 py-4 transition-colors hover:bg-muted/40"
                      >
                        <span className="font-medium hover:text-brand">
                          {article.title}
                        </span>
                        <p
                          className="mt-1 text-sm text-muted-foreground [&_mark]:rounded-sm [&_mark]:bg-brand/15 [&_mark]:px-0.5 [&_mark]:text-foreground"
                          dangerouslySetInnerHTML={{
                            __html: highlightSnippet(snippet, terms),
                          }}
                        />
                        <p className="mt-2 text-xs text-muted-foreground">
                          Last updated{" "}
                          {format(new Date(article.updatedAt), "d MMM yyyy", {
                            locale: dateLocale,
                          })}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="mt-8" />
        </section>
      ))}
    </div>
  )
}

export function SearchPageHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold tracking-tight">Search</h1>
    </div>
  )
}
