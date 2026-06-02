import { headers } from "next/headers"

import type { Locale } from "@/content/help"

export function localeFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return "de"

  const languages = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, qPart] = part.trim().split(";")
      const q = qPart?.startsWith("q=") ? parseFloat(qPart.slice(2)) : 1
      return { lang: lang.trim().toLowerCase(), q: Number.isFinite(q) ? q : 0 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { lang } of languages) {
    if (lang.startsWith("en")) return "en"
    if (lang.startsWith("de")) return "de"
  }

  return "de"
}

export async function getLocale(): Promise<Locale> {
  const headersList = await headers()
  return localeFromAcceptLanguage(headersList.get("accept-language"))
}
