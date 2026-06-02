import Link from "next/link"

import { HelpHeader } from "@/components/help/HelpHeader"
import { Button } from "@/components/ui/button"
import { searchUrl } from "@/lib/urls"

export default function NotFound() {
  return (
    <div className="min-h-svh flex flex-col">
      <HelpHeader />
      <main className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-6xl font-semibold text-brand/20">404</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-2 text-muted-foreground text-pretty">
          This article or page doesn&apos;t exist in the Help Centre. Try searching or
          return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button className="bg-brand text-white hover:bg-brand/90" render={<Link href="/" />}>
            Help Centre home
          </Button>
          <Button variant="outline" render={<Link href={searchUrl("")} />}>
            Search articles
          </Button>
        </div>
      </main>
    </div>
  )
}
