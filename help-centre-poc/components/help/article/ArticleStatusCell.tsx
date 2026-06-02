import { Check, Plus } from "lucide-react"

import { parseStatusCell } from "@/lib/article-blocks"
import { cn } from "@/lib/utils"

type ArticleStatusCellProps = {
  value: string
}

export function ArticleStatusCell({ value }: ArticleStatusCellProps) {
  const status = parseStatusCell(value)

  if (status.kind === "text") {
    return <span>{status.label}</span>
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[13px] font-medium",
        status.kind === "success" ? "text-brand" : "text-muted-foreground"
      )}
    >
      {status.kind === "success" ? (
        <Check className="size-3.5 shrink-0 stroke-[2.5]" aria-hidden />
      ) : (
        <Plus className="size-3.5 shrink-0 stroke-[2.5]" aria-hidden />
      )}
      {status.label}
    </span>
  )
}
