import { Suspense } from "react"

import { HelpHeader } from "@/components/help/HelpHeader"
import { HeaderSearch } from "@/components/help/HeaderSearch"
import { SearchPageHeader, SearchResults } from "@/components/help/SearchResults"
import { parseLocale } from "@/lib/locale"

type SearchPageProps = {
  searchParams: Promise<{ q?: string; locale?: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const query = params.q ?? ""
  const locale = parseLocale(params.locale)

  return (
    <div className="min-h-svh flex flex-col">
      <HelpHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <Suspense fallback={null}>
          <SearchPageHeader locale={locale} />
        </Suspense>
        <div className="mb-8">
          <HeaderSearch defaultQuery={query} className="max-w-none" />
        </div>
        <SearchResults query={query} locale={locale} />
      </main>
    </div>
  )
}
