"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { popularSearchChips } from "@/content/help"
import { searchUrl } from "@/lib/urls"
import { cn } from "@/lib/utils"

export function Hero() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  function submit(e: React.FormEvent) {
    e.preventDefault()
    router.push(searchUrl(query))
  }

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
        <p className="mb-3 text-xs font-medium tracking-widest text-white/70 uppercase">
          Help Centre
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
          How can we help you today?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/75 text-pretty">
          Guides for Distributions, Relations (zimpel) and Voices — from OTS and Presseportal
          to Native Ads and ARGUS monitoring.
        </p>

        <form
          onSubmit={submit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-2 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, products…"
              className={cn(
                "h-12 border-0 bg-white pl-12 text-base text-foreground shadow-lg",
                "placeholder:text-muted-foreground"
              )}
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="h-12 bg-brand px-6 text-white hover:bg-brand/90"
          >
            Search
          </Button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {popularSearchChips.map((chip) => (
            <Link
              key={chip}
              href={searchUrl(chip)}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white/90 transition-colors hover:bg-white/20"
            >
              {chip}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
