import Link from "next/link"
import { format } from "date-fns"
import { de, enUS } from "date-fns/locale"
import { ArrowRight } from "lucide-react"

import { PresseportalIcon } from "@/components/help/PresseportalIcon"
import type { Article, Locale } from "@/content/help"
import { getCategory, getProduct } from "@/content/help"
import { articleUrl } from "@/lib/urls"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ArticlePreviewCardProps = {
  article: Article
  locale: Locale
  featured?: boolean
  showLead?: boolean
}

export function ArticlePreviewCard({
  article,
  locale,
  featured = false,
  showLead = false,
}: ArticlePreviewCardProps) {
  const displayLead = featured || showLead
  const expanded = featured || showLead
  const product = getProduct(article.productSlug)
  const category = getCategory(article.productSlug, article.categorySlug)
  const dateLocale = locale === "de" ? de : enUS

  return (
    <Card
      className={
        expanded
          ? "flex h-full flex-col border-border/80 bg-card transition-shadow hover:shadow-md"
          : "border-border/60 transition-colors hover:border-brand/25 hover:bg-muted/30"
      }
    >
      <CardHeader className={expanded ? "pb-2" : "gap-1 p-4 pb-1"}>
        <div className="flex flex-wrap items-center gap-2">
          {product ? (
            <Badge
              variant="secondary"
              className="gap-1 text-[10px] font-medium"
            >
              {product.slug === "presseportal" ? (
                <PresseportalIcon size={14} />
              ) : null}
              {product.name}
            </Badge>
          ) : null}
          {category ? (
            <span className="text-[11px] text-muted-foreground">{category.name}</span>
          ) : null}
        </div>
        <CardTitle className={expanded ? "text-base leading-snug" : "text-sm leading-snug"}>
          <Link
            href={articleUrl(article.productSlug, article.categorySlug, article.slug)}
            className="hover:text-brand"
          >
            {article.title}
          </Link>
        </CardTitle>
        {displayLead ? (
          <CardDescription className="line-clamp-2 text-pretty">{article.lead}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent
        className={
          expanded ? "mt-auto flex items-center justify-between pt-0" : "flex items-center justify-between p-4 pt-2"
        }
      >
        <time
          dateTime={article.updatedAt}
          className="text-xs text-muted-foreground"
        >
          {format(new Date(article.updatedAt), "d MMM yyyy", { locale: dateLocale })}
        </time>
        <Link
          href={articleUrl(article.productSlug, article.categorySlug, article.slug)}
          className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
        >
          {locale === "de" ? "Lesen" : "Read"}
          <ArrowRight className="size-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
