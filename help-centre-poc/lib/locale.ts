import type { Locale } from "@/content/help"

export function parseLocale(value: string | string[] | undefined): Locale {
  const raw = Array.isArray(value) ? value[0] : value
  return raw === "en" ? "en" : "de"
}

export function localeLabel(locale: Locale): string {
  return locale === "de" ? "Deutsch" : "English"
}
