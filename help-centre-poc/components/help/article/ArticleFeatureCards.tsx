import { getFeatureIcon } from "@/components/help/article/AccentIcon"
import type { FeatureCard } from "@/lib/article-blocks"
import { cn } from "@/lib/utils"

type ArticleFeatureCardsProps = {
  cards: FeatureCard[]
}

export function ArticleFeatureCards({ cards }: ArticleFeatureCardsProps) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-2">
      {cards.map((card) => {
        const Icon = getFeatureIcon(card.title)

        return (
          <div
            key={card.title}
            className={cn(
              "flex gap-3 rounded-xl border border-border/80 bg-card p-4"
            )}
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Icon className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug text-foreground">
                {card.title}
              </p>
              <p className="mt-0.5 line-clamp-3 text-xs text-muted-foreground text-pretty">
                {card.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
