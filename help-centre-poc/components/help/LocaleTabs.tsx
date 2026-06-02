"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

import type { Locale } from "@/content/help"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type LocaleTabsProps = {
  locale: Locale
  paramName?: string
}

export function LocaleTabs({ locale, paramName = "locale" }: LocaleTabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function setLocale(next: Locale) {
    const params = new URLSearchParams(searchParams.toString())
    if (next === "de") params.delete(paramName)
    else params.set(paramName, next)
    const qs = params.toString()
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  return (
    <Tabs
      value={locale}
      onValueChange={(v) => setLocale(v as Locale)}
      className="w-auto"
    >
      <TabsList>
        <TabsTrigger value="de">DE</TabsTrigger>
        <TabsTrigger value="en">EN</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
