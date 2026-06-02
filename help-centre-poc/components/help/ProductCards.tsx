import Link from "next/link"
import { Megaphone, Newspaper, Send, Users, Video, ArrowRight } from "lucide-react"

import { BrandIcon } from "@/components/help/BrandIcon"
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
  video: Video,
  megaphone: Megaphone,
  newspaper: Newspaper,
  presseportal: Newspaper,
} as const

export function ProductCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Browse by product</h2>
        <p className="mt-2 text-muted-foreground">
          Distributions, Relations, Voices, Native Advertising and Presseportal — pick a product to find guides.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const Icon = iconMap[product.iconKey]
          const useBrandIcon = product.iconKey === "presseportal"
          return (
            <Card
              key={product.slug}
              className="flex flex-col border-border/80 transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div
                  className={
                    useBrandIcon
                      ? "mb-2 flex size-10 items-center justify-center"
                      : "mb-2 flex size-10 items-center justify-center rounded-lg text-white"
                  }
                  style={
                    useBrandIcon ? undefined : { backgroundColor: product.accentColor }
                  }
                >
                  <BrandIcon
                    iconKey={product.iconKey}
                    lucideIcon={Icon}
                    size={useBrandIcon ? 40 : 20}
                  />
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
