import type { LucideIcon } from "lucide-react"
import {
  BadgeCheck,
  BarChart3,
  Briefcase,
  CalendarClock,
  CircleAlert,
  Clock,
  Euro,
  Film,
  Globe,
  Globe2,
  Info,
  Lightbulb,
  MapPin,
  MousePointerClick,
  Newspaper,
  Plus,
  Search,
  Sparkles,
} from "lucide-react"

import { cn } from "@/lib/utils"

type AccentIconProps = {
  icon: LucideIcon
  size?: "sm" | "md"
  className?: string
}

export function AccentIcon({ icon: Icon, size = "md", className }: AccentIconProps) {
  const box = size === "sm" ? "size-7" : "size-9"
  const iconSize = size === "sm" ? "size-3.5" : "size-4"

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-inset ring-brand/20",
        box,
        className
      )}
      aria-hidden
    >
      <Icon className={iconSize} />
    </span>
  )
}

export function getCalloutIcon(title: string, variant: "accent" | "muted"): LucideIcon {
  const t = title.toLowerCase()
  if (/timing/.test(t)) return Clock
  if (/highlight/.test(t)) return Sparkles
  if (/tip|tipp/.test(t)) return Lightbulb
  if (/deadline|frist/.test(t)) return CalendarClock
  return variant === "accent" ? Info : CircleAlert
}

export function getCardIcon(title: string, badgeVariant: "included" | "addon"): LucideIcon {
  const t = title.toLowerCase()
  if (/national/.test(t)) return Globe
  if (/international/.test(t)) return Globe2
  if (/fachmedien|specialist|trade/.test(t)) return Briefcase
  if (/regional/.test(t)) return MapPin
  return badgeVariant === "included" ? BadgeCheck : Plus
}

export function getFeatureIcon(title: string): LucideIcon {
  const t = title.toLowerCase()
  if (/platzierung|placement/.test(t)) return BadgeCheck
  if (/reporting|analytics/.test(t)) return BarChart3
  if (/multimedia|format/.test(t)) return Film
  if (/redaktion|editorial/.test(t)) return Newspaper
  if (/archiv|archive/.test(t)) return Search
  if (/preis|price|festpreis|budget/.test(t)) return Euro
  if (/buchung|booking/.test(t)) return MousePointerClick
  return Info
}
