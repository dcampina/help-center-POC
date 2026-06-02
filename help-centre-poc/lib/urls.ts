import type { Locale } from "@/content/help"

export function articleUrl(
  productSlug: string,
  categorySlug: string,
  articleSlug: string,
  locale?: Locale
): string {
  const base = `/${productSlug}/${categorySlug}/${articleSlug}`
  return locale === "en" ? `${base}?locale=en` : base
}

export function searchUrl(query: string, locale?: Locale): string {
  const params = new URLSearchParams()
  if (query.trim()) params.set("q", query.trim())
  if (locale && locale !== "de") params.set("locale", locale)
  const qs = params.toString()
  return qs ? `/search?${qs}` : "/search"
}
