export type ArticleCard = {
  title: string
  description: string
  badge: string
  badgeVariant: "included" | "addon"
}

export type ArticleStep = {
  text: string
}

export type FeatureCard = {
  title: string
  description: string
}

export function parseCardGrid(source: string): ArticleCard[] {
  return source
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("|").map((s) => s.trim())
      const badgeType = parts[parts.length - 1]
      const title = parts[parts.length - 3] ?? ""
      const description = parts[parts.length - 2] ?? ""
      const badgeVariant = badgeType === "included" ? "included" : "addon"
      return {
        title,
        description,
        badge: badgeVariant === "included" ? "Included in every booking" : "Add-on",
        badgeVariant,
      }
    })
}

export function parseCallout(source: string): { title: string; body: string } {
  const lines = source.trim().split("\n")
  const first = lines[0]?.trim() ?? ""
  const titleMatch = first.match(/^\*\*(.+)\*\*$/)
  if (titleMatch) {
    return {
      title: titleMatch[1],
      body: lines.slice(1).join("\n").trim(),
    }
  }
  return { title: first, body: lines.slice(1).join("\n").trim() }
}

export function parseFeatureCards(source: string): FeatureCard[] {
  return source
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [title = "", description = ""] = line.split("|").map((s) => s.trim())
      return { title, description }
    })
}

export function parseSteps(source: string): ArticleStep[] {
  return source
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => ({
      text: line.replace(/^\d+\.\s*/, ""),
    }))
}

export function parseStatusCell(value: string): {
  kind: "success" | "neutral" | "text"
  label: string
} {
  const trimmed = value.trim()
  if (/^✓|^✔/.test(trimmed)) {
    return { kind: "success", label: trimmed.replace(/^[✓✔]\s*/, "") }
  }
  if (/^\+/.test(trimmed)) {
    return { kind: "neutral", label: trimmed.replace(/^\+\s*/, "") }
  }
  return { kind: "text", label: trimmed }
}
