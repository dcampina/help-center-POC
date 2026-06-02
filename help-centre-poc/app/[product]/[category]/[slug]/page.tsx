import { notFound } from "next/navigation"

import { ArticleLayout } from "@/components/help/ArticleLayout"
import {
  articleExists,
  articles,
  getArticleWithFallback,
  getCategory,
  getProduct,
} from "@/content/help"
import { getLocale } from "@/lib/locale"

type ArticlePageProps = {
  params: Promise<{ product: string; category: string; slug: string }>
}

export function generateStaticParams() {
  const slugs = new Set<string>()
  const params: { product: string; category: string; slug: string }[] = []

  for (const { productSlug, categorySlug, slug } of articles) {
    const key = `${productSlug}/${categorySlug}/${slug}`
    if (slugs.has(key)) continue
    slugs.add(key)
    params.push({ product: productSlug, category: categorySlug, slug })
  }

  return params
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { product, category, slug } = await params
  const locale = await getLocale()

  if (!getProduct(product) || !getCategory(product, category) || !articleExists(product, category, slug)) {
    notFound()
  }

  const article = getArticleWithFallback(product, category, slug, locale)
  if (!article) notFound()

  return <ArticleLayout article={article} locale={locale} />
}
