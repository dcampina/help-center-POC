export function articleUrl(
  productSlug: string,
  categorySlug: string,
  articleSlug: string
): string {
  return `/${productSlug}/${categorySlug}/${articleSlug}`
}

export function searchUrl(query: string): string {
  const params = new URLSearchParams()
  if (query.trim()) params.set("q", query.trim())
  const qs = params.toString()
  return qs ? `/search?${qs}` : "/search"
}
