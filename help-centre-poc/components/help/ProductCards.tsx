import Link from "next/link"
import { Mic, Send, Users, ArrowRight } from "lucide-react"

import { products } from "@/content/help"
import { searchUrl } from "@/lib/urls"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const iconMap = {
  send: Send,
  users: Users,
  mic: Mic,
} as const

export function ProductCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Browse by product</h2>
        <p className="mt-2 text-muted-foreground">
          Distributions, Relations and Voices — pick a product to find guides.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const Icon = iconMap[product.iconKey]
          return (
            <Card
              key={product.slug}
              className="flex flex-col border-border/80 transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div
                  className="mb-2 flex size-10 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: product.accentColor }}
                >
                  <Icon className="size-5" />
                </div>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription className="text-pretty">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Button
                  variant="ghost"
                  className="px-0 text-brand hover:bg-brand/5 hover:text-brand"
                  render={
                    <Link href={searchUrl(product.name.split(" ")[0] ?? product.slug)} />
                  }
                >
                  Browse guides
                  <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
