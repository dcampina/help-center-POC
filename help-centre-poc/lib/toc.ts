import type { Locale } from "@/content/help"
import { getRegioRegionsContent } from "@/lib/regio-ads-data"

export type TocItem = {
  id: string
  text: string
  level: 2 | 3
}

export function getRegioRegionTocId(regionId: string): string {
  return `region-${regionId}`
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function extractToc(markdown: string, locale?: Locale): TocItem[] {
  const items: TocItem[] = []
  const seen = new Map<string, number>()
  const regex = /^(#{2,3})\s+(.+)$/gm
  let match: RegExpExecArray | null

  while ((match = regex.exec(markdown)) !== null) {
    const hashes = match[1]
    const text = match[2].replace(/\*\*/g, "").trim()
    const level = hashes.length as 2 | 3
    let id = slugifyHeading(text)
    const count = seen.get(id) ?? 0
    if (count > 0) id = `${id}-${count}`
    seen.set(slugifyHeading(text), count + 1)
    items.push({ id, text, level })
  }

  if (!locale || !markdown.includes("```regio-regions")) {
    return items
  }

  return injectRegioRegionTocItems(items, markdown, locale)
}

function findRegionsSectionHeading(markdown: string): string | null {
  const blockIndex = markdown.indexOf("```regio-regions")
  if (blockIndex === -1) return null

  const beforeBlock = markdown.slice(0, blockIndex)
  const headings = [...beforeBlock.matchAll(/^#{2}\s+(.+)$/gm)]
  return headings.at(-1)?.[1]?.replace(/\*\*/g, "").trim() ?? null
}

function injectRegioRegionTocItems(
  items: TocItem[],
  markdown: string,
  locale: Locale
): TocItem[] {
  const regionsHeading = findRegionsSectionHeading(markdown)
  if (!regionsHeading) return items

  const sectionIndex = items.findIndex(
    (item) => item.level === 2 && item.text === regionsHeading
  )
  if (sectionIndex === -1) return items

  const regionItems: TocItem[] = getRegioRegionsContent(locale).regions.map(
    (region) => ({
      id: getRegioRegionTocId(region.id),
      text: region.name,
      level: 3,
    })
  )

  return [
    ...items.slice(0, sectionIndex + 1),
    ...regionItems,
    ...items.slice(sectionIndex + 1),
  ]
}
