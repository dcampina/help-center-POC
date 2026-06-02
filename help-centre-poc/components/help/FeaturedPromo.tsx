import Link from "next/link"
import { GraduationCap, ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { searchUrl } from "@/lib/urls"

export function FeaturedPromo() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Card className="overflow-hidden border-border/80 bg-muted/30">
        <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <GraduationCap className="size-7" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium tracking-wide text-brand uppercase">
              Academy
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">
              Learn PR workflows with news aktuell
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground text-pretty">
              Video courses and guided paths for OTS distribution, zimpel research and Voices
              production — free for existing customers.
            </p>
          </div>
          <Button
            variant="outline"
            className="shrink-0 border-brand/30 text-brand hover:bg-brand/5"
            render={<Link href={searchUrl("getting started")} />}
          >
            Explore Academy
            <ArrowRight className="size-4" />
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
