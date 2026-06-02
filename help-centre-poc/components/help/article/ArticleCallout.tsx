import { AccentIcon, getCalloutIcon } from "@/components/help/article/AccentIcon"
import {
  isHighlightAddonTitle,
  PresseportalIcon,
} from "@/components/help/PresseportalIcon"
import { cn } from "@/lib/utils"

type CalloutVariant = "accent" | "muted"

const variantStyles: Record<CalloutVariant, { box: string }> = {
  accent: {
    box: "border-brand/15 bg-brand/5",
  },
  muted: {
    box: "border-border bg-muted/60",
  },
}

type ArticleCalloutProps = {
  variant: CalloutVariant
  title: string
  body: string
}

export function ArticleCallout({ variant, title, body }: ArticleCalloutProps) {
  const styles = variantStyles[variant]
  const showPresseportalIcon = isHighlightAddonTitle(title)

  return (
    <aside
      className={cn(
        "my-5 rounded-xl border px-4 py-4 sm:px-5 sm:py-4.5",
        styles.box
      )}
    >
      <div className="flex gap-3">
        {showPresseportalIcon ? (
          <PresseportalIcon className="mt-0.5 shrink-0" size={28} />
        ) : (
          <AccentIcon
            icon={getCalloutIcon(title, variant)}
            size="sm"
            className="mt-0.5"
          />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {body ? (
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/75">
              {body}
            </p>
          ) : null}
        </div>
      </div>
    </aside>
  )
}
