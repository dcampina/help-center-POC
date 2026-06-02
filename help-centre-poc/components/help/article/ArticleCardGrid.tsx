import { AccentIcon, getCardIcon } from "@/components/help/article/AccentIcon"
import {
  isPresseportalCard,
  PresseportalIcon,
} from "@/components/help/PresseportalIcon"
import type { ArticleCard } from "@/lib/article-blocks"
import { cn } from "@/lib/utils"

const includedPill = "bg-brand/10 text-brand"
const addonPill = "bg-muted text-muted-foreground"

type ArticleCardGridProps = {
  cards: ArticleCard[]
}

export function ArticleCardGrid({ cards }: ArticleCardGridProps) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-2">
      {cards.map((card) => {
        const pillStyles =
          card.badgeVariant === "included" ? includedPill : addonPill
        const showPresseportalIcon = isPresseportalCard(card)

        return (
          <div
            key={card.title}
            className="flex flex-col rounded-xl border border-border bg-card px-4 py-4"
          >
            <div className="flex items-start gap-3">
              {showPresseportalIcon ? (
                <PresseportalIcon className="shrink-0" size={36} />
              ) : (
                <AccentIcon icon={getCardIcon(card.title, card.badgeVariant)} />
              )}
              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-semibold text-foreground">{card.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                  {card.description}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "mt-4 inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-medium",
                pillStyles
              )}
            >
              {card.badge}
            </span>
          </div>
        )
      })}
    </div>
  )
}
