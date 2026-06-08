export const HELP_SITE_HEADER_ID = "help-site-header"
export const ARTICLE_PAGE_HEADER_ID = "article-page-header"
export const SITE_HEADER_PX = 56
const SCROLL_GAP_PX = 8
export const ARTICLE_SCROLL_OFFSET_VAR = "--article-scroll-offset"
const FALLBACK_OFFSET_PX = 192

export function getArticleHeaderHeight(): number {
  return document.getElementById(ARTICLE_PAGE_HEADER_ID)?.offsetHeight ?? 0
}

export function measureArticleScrollOffset(): number {
  const siteHeader = document.getElementById(HELP_SITE_HEADER_ID)
  const articleHeader = document.getElementById(ARTICLE_PAGE_HEADER_ID)

  const siteHeight = siteHeader?.offsetHeight ?? SITE_HEADER_PX
  const articleHeight = articleHeader?.offsetHeight ?? 0

  return siteHeight + articleHeight + SCROLL_GAP_PX
}

export function applyArticleScrollOffset(): void {
  const offset = measureArticleScrollOffset()
  document.documentElement.style.setProperty(
    ARTICLE_SCROLL_OFFSET_VAR,
    `${offset}px`
  )
  document.documentElement.style.scrollPaddingTop = `${offset}px`
}

export function getArticleScrollOffset(): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(ARTICLE_SCROLL_OFFSET_VAR)
    .trim()
  const parsed = parseFloat(raw)
  return Number.isFinite(parsed) ? parsed : FALLBACK_OFFSET_PX
}

export function scrollToArticleSection(id: string): void {
  const target = document.getElementById(id)
  if (!target) return

  const offset = measureArticleScrollOffset()
  const top = window.scrollY + target.getBoundingClientRect().top - offset

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
  history.replaceState(null, "", `#${id}`)
}

export function clearArticleScrollOffset(): void {
  document.documentElement.style.scrollPaddingTop = ""
  document.documentElement.style.removeProperty(ARTICLE_SCROLL_OFFSET_VAR)
}
