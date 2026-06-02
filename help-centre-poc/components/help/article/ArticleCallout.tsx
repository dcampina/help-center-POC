import {
  isHighlightAddonTitle,
  PresseportalIcon,
} from "@/components/help/PresseportalIcon"
import { cn } from "@/lib/utils"

type CalloutVariant = "accent" | "muted"

const variantStyles: Record<
  CalloutVariant,
  { box: string; icon: string }
> = {
  accent: {
    box: "border-brand/15 bg-brand/5",
    icon: "bg-brand/10 text-brand ring-brand/20",
  },
  muted: {
    box: "border-border bg-muted/60",
    icon: "bg-brand/10 text-brand ring-brand/20",
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
          <span
            className={cn(
              "mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-md ring-1 ring-inset",
              styles.icon
            )}
            aria-hidden
          >
            <span className="size-2.5 rounded-[3px] border-2 border-current" />
          </span>
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
