import { HelpHeader } from "@/components/help/HelpHeader"
import { Hero } from "@/components/help/Hero"
import { FeaturedPromo } from "@/components/help/FeaturedPromo"
import { TopicBrowse } from "@/components/help/TopicBrowse"
import { HomeArticleSections } from "@/components/help/HomeArticleSections"
import { ProductCards } from "@/components/help/ProductCards"
import { getLocale } from "@/lib/locale"

export default async function HomePage() {
  const locale = await getLocale()

  return (
    <div className="min-h-svh flex flex-col">
      <HelpHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedPromo />
        <TopicBrowse locale={locale} />
        <HomeArticleSections locale={locale} />
        <ProductCards />
      </main>
      <footer className="border-t py-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} news aktuell — Help Centre POC
        </p>
      </footer>
    </div>
  )
}
