import Link from "next/link"

import type { Article, Locale } from "@/content/help"
import {
  getCategoriesForProduct,
  getCategory,
  getFirstArticleInCategory,
  getProduct,
  getRelatedArticles,
} from "@/content/help"
import { extractToc } from "@/lib/toc"
import { estimateReadingTimeMinutes } from "@/lib/reading-time"
import { articleUrl } from "@/lib/urls"
import { HelpHeader } from "@/components/help/HelpHeader"
import {
  ARTICLE_CONTENT_ID,
  ArticlePageHeader,
} from "@/components/help/ArticlePageHeader"
import { ArticleSidebar } from "@/components/help/ArticleSidebar"
import { Markdown } from "@/components/help/Markdown"
import { RelatedArticles } from "@/components/help/RelatedArticles"

type ArticleLayoutProps = {
  article: Article
  locale: Locale
}

export function ArticleLayout({ article, locale }: ArticleLayoutProps) {
  const product = getProduct(article.productSlug)!
  const category = getCategory(article.productSlug, article.categorySlug)!
  const tocItems = extractToc(article.body)
  const related = getRelatedArticles(article)
  const readingTimeMin = estimateReadingTimeMinutes(
    article.title,
    article.lead,
    article.body
  )

  const categoryLinks = getCategoriesForProduct(article.productSlug).map(
    (cat) => {
      const first = getFirstArticleInCategory(
        article.productSlug,
        cat.slug,
        locale
      )
      return {
        category: cat,
        href: first
          ? articleUrl(first.productSlug, first.categorySlug, first.slug)
          : null,
      }
    }
  )

  return (
    <div className="min-h-svh flex flex-col">
      <HelpHeader />

      <div className="mx-auto grid w-full max-w-[980px] flex-1 grid-cols-1 lg:grid-cols-[235px_1fr]">
        <ArticleSidebar
          productName={product.name}
          categoryName={category.name}
          currentCategorySlug={article.categorySlug}
          categoryLinks={categoryLinks}
          tocItems={tocItems}
          updatedAt={article.updatedAt}
          locale={locale}
        />

        <article className="min-w-0 px-5 py-8 pb-20 sm:px-12 sm:py-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Link href="/" className="text-brand hover:underline">
              Help centre
            </Link>
            <span className="opacity-40">›</span>
            <Link
              href={`/search?q=${encodeURIComponent(product.name)}`}
              className="text-brand hover:underline"
            >
              {product.name}
            </Link>
            <span className="opacity-40">›</span>
            <span>{category.name}</span>
          </nav>

          <ArticlePageHeader
            productName={product.name}
            productSlug={product.slug}
            title={article.title}
            lead={article.lead}
            readingTimeMin={readingTimeMin}
            locale={locale}
          />

          <div id={ARTICLE_CONTENT_ID}>
            <Markdown content={article.body} locale={locale} />
            <RelatedArticles articles={related} />
          </div>
        </article>
      </div>
    </div>
  )
}
