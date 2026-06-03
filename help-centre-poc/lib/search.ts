import type { Article, Locale } from "@/content/help"
import { articles, categories, products } from "@/content/help"

export type SearchResult = {
  article: Article
  score: number
  snippet: string
}

const TITLE_WEIGHT = 10
const LEAD_WEIGHT = 5
const BODY_WEIGHT = 1

function countOccurrences(text: string, term: string): number {
  if (!term) return 0
  const lower = text.toLowerCase()
  const t = term.toLowerCase()
  let count = 0
  let pos = 0
  while ((pos = lower.indexOf(t, pos)) !== -1) {
    count++
    pos += t.length
  }
  return count
}

function scoreField(text: string, term: string, weight: number): number {
  return countOccurrences(text, term) * weight
}

function scoreArticle(article: Article, terms: string[]): number {
  if (terms.length === 0) return 0
  let score = 0
  for (const term of terms) {
    score += scoreField(article.title, term, TITLE_WEIGHT)
    score += scoreField(article.lead, term, LEAD_WEIGHT)
    score += scoreField(article.body, term, BODY_WEIGHT)
    score += scoreField(article.tags.join(" "), term, LEAD_WEIGHT)
  }
  return score
}

function buildSnippet(article: Article, terms: string[]): string {
  const source = article.lead || article.body.replace(/[#*`]/g, "").slice(0, 300)
  const lower = source.toLowerCase()
  const term = terms.find((t) => lower.includes(t.toLowerCase()))
  if (!term) return article.lead.slice(0, 160) + (article.lead.length > 160 ? "…" : "")

  const idx = lower.indexOf(term.toLowerCase())
  const start = Math.max(0, idx - 60)
  const end = Math.min(source.length, idx + term.length + 100)
  const snippet = (start > 0 ? "…" : "") + source.slice(start, end) + (end < source.length ? "…" : "")
  return snippet
}

export function highlightSnippet(snippet: string, terms: string[]): string {
  let result = snippet
  for (const term of terms) {
    if (!term) continue
    const regex = new RegExp(`(${escapeRegex(term)})`, "gi")
    result = result.replace(regex, "<mark>$1</mark>")
  }
  return result
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export function searchArticles(query: string, locale: Locale): SearchResult[] {
  const trimmed = query.trim()
  if (!trimmed) return []

  const terms = trimmed.split(/\s+/).filter(Boolean)
  const results: SearchResult[] = []

  for (const article of articles) {
    if (article.locale !== locale) continue
    const score = scoreArticle(article, terms)
    if (score <= 0) continue
    results.push({
      article,
      score,
      snippet: buildSnippet(article, terms),
    })
  }

  results.sort((a, b) => b.score - a.score)
  return results
}

export type GroupedSearchResults = {
  productSlug: string
  productName: string
  categories: {
    categorySlug: string
    categoryName: string
    results: SearchResult[]
  }[]
}[]

export function groupSearchResults(results: SearchResult[]): GroupedSearchResults {
  const grouped = new Map<string, Map<string, SearchResult[]>>()

  for (const result of results) {
    const { productSlug, categorySlug } = result.article
    if (!grouped.has(productSlug)) grouped.set(productSlug, new Map())
    const catMap = grouped.get(productSlug)!
    if (!catMap.has(categorySlug)) catMap.set(categorySlug, [])
    catMap.get(categorySlug)!.push(result)
  }

  return Array.from(grouped.entries()).map(([productSlug, catMap]) => {
    const product = products.find((p) => p.slug === productSlug)!
    return {
      productSlug,
      productName: product.name,
      categories: Array.from(catMap.entries()).map(([categorySlug, catResults]) => {
        const category = categories.find(
          (c) => c.productSlug === productSlug && c.slug === categorySlug
        )!
        return {
          categorySlug,
          categoryName: category.name,
          results: catResults,
        }
      }),
    }
  })
}
