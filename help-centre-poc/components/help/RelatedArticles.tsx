import Link from "next/link"
import { FileText } from "lucide-react"

import { PresseportalIcon } from "@/components/help/PresseportalIcon"
import type { Article } from "@/content/help"
import { articleUrl } from "@/lib/urls"

type RelatedArticlesProps = {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null

  return (
    <section className="mt-10 border-t border-border pt-6">
      <p className="mb-3 text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
        Related articles
      </p>
      <ul className="flex flex-col gap-1.5">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={articleUrl(
                article.productSlug,
                article.categorySlug,
                article.slug
              )}
              className="group flex items-center gap-2 text-[13px] text-brand"
            >
              {article.productSlug === "presseportal" ? (
                <PresseportalIcon size={14} />
              ) : (
                <FileText className="size-3.5 shrink-0" />
              )}
              <span className="group-hover:underline">{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
