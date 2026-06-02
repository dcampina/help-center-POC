import Link from "next/link"
import { Suspense } from "react"
import { format } from "date-fns"
import { de, enUS } from "date-fns/locale"

import type { Article, Locale } from "@/content/help"
import {
  getCategory,
  getProduct,
  getSiblingArticles,
} from "@/content/help"
import { extractToc } from "@/lib/toc"
import { HelpHeader } from "@/components/help/HelpHeader"
import { ArticleSidebar } from "@/components/help/ArticleSidebar"
import { Markdown } from "@/components/help/Markdown"
import { LocaleTabs } from "@/components/help/LocaleTabs"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
type ArticleLayoutProps = {
  article: Article
  locale: Locale
}

export function ArticleLayout({ article, locale }: ArticleLayoutProps) {
  const product = getProduct(article.productSlug)!
  const category = getCategory(article.productSlug, article.categorySlug)!
  const siblings = getSiblingArticles(
    article.productSlug,
    article.categorySlug,
    locale
  )
  const tocItems = extractToc(article.body)
  const dateLocale = locale === "de" ? de : enUS

  return (
    <div className="min-h-svh flex flex-col">
      <HelpHeader />
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/" />}>Help centre</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={
                    <Link href={`/search?q=${encodeURIComponent(product.name)}`} />
                  }
                >
                  {product.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={
                    <Link
                      href={`/search?q=${encodeURIComponent(category.name)}&locale=${locale}`}
                    />
                  }
                >
                  {category.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[12rem] truncate sm:max-w-none">
                  {article.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Suspense fallback={null}>
            <LocaleTabs locale={locale} />
          </Suspense>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr]">
          <ArticleSidebar
            siblings={siblings}
            currentSlug={article.slug}
            categoryName={category.name}
            tocItems={tocItems}
            locale={locale}
          />

          <article className="min-w-0">
            <header className="mb-8 border-b border-border pb-8">
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {article.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">{article.lead}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {article.machineTranslated && (
                  <Badge variant="outline" className="border-amber-500/40 text-amber-700 dark:text-amber-400">
                    Machine translated
                  </Badge>
                )}
                <span>
                  Last updated{" "}
                  {format(new Date(article.updatedAt), "d MMMM yyyy", {
                    locale: dateLocale,
                  })}
                </span>
              </div>
            </header>
            <Markdown content={article.body} />
          </article>
        </div>
      </div>
      <footer className="mt-auto border-t py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground sm:px-6">
          <Link href="/" className="text-brand hover:underline">
            ← Back to Help Centre
          </Link>
        </div>
      </footer>
    </div>
  )
}
