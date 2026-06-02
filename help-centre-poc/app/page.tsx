import { HelpHeader } from "@/components/help/HelpHeader"
import { Hero } from "@/components/help/Hero"
import { FeaturedPromo } from "@/components/help/FeaturedPromo"
import { ProductCards } from "@/components/help/ProductCards"

export default function HomePage() {
  return (
    <div className="min-h-svh flex flex-col">
      <HelpHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedPromo />
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
