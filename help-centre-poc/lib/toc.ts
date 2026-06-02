export type TocItem = {
  id: string
  text: string
  level: 2 | 3
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function extractToc(markdown: string): TocItem[] {
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

  return items
}
