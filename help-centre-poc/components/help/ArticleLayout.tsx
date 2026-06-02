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
import { articleUrl } from "@/lib/urls"
import { HelpHeader } from "@/components/help/HelpHeader"
import { PresseportalIcon } from "@/components/help/PresseportalIcon"
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

          <header className="mb-8">
            <p className="mb-2.5 flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-brand uppercase">
              {product.slug === "presseportal" ? (
                <PresseportalIcon size={16} />
              ) : (
                <span className="size-1.5 rounded-full bg-brand" aria-hidden />
              )}
              {product.name}
            </p>
            <h1 className="font-serif text-[1.875rem] leading-tight font-normal tracking-normal text-balance text-foreground">
              {article.title}
            </h1>
            <p className="mt-3 max-w-[580px] border-b border-border pb-6 text-[15px] leading-relaxed text-muted-foreground text-pretty">
              {article.lead}
            </p>
          </header>

          <Markdown content={article.body} />
          <RelatedArticles articles={related} />
        </article>
      </div>
    </div>
  )
}
