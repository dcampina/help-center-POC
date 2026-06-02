import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  BadgeCheck,
  BarChart3,
  CreditCard,
  FileText,
  Image,
  LineChart,
  Mail,
  Megaphone,
  Newspaper,
  Plug,
  Radio,
  Send,
  Shield,
  UserPlus,
  Users,
} from "lucide-react"

import { BrandIcon } from "@/components/help/BrandIcon"
import type { HelpTopicIconKey, Locale } from "@/content/help"
import { helpTopics } from "@/content/help"
import { searchUrl } from "@/lib/urls"
import { cn } from "@/lib/utils"

const iconMap = {
  send: Send,
  mail: Mail,
  "credit-card": CreditCard,
  "bar-chart": BarChart3,
  "user-plus": UserPlus,
  users: Users,
  "badge-check": BadgeCheck,
  radio: Radio,
  image: Image,
  plug: Plug,
  shield: Shield,
  megaphone: Megaphone,
  "line-chart": LineChart,
  "file-text": FileText,
  presseportal: Newspaper,
} as const satisfies Record<HelpTopicIconKey, LucideIcon>

type TopicBrowseProps = {
  locale: Locale
}

export function TopicBrowse({ locale }: TopicBrowseProps) {
  const heading = locale === "de" ? "Nach Thema stöbern" : "Browse by topic"
  const subheading =
    locale === "de"
      ? "Distribution, E-Mails, Abrechnung, Reporting, Newsrooms und weitere Bereiche der Plattform."
      : "Distribution, emails, billing, reporting, newsrooms, registration, user management, dpa ID and more."

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-2 text-muted-foreground text-pretty">{subheading}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {helpTopics.map((topic) => {
          const Icon = iconMap[topic.iconKey]
          const useBrandIcon = topic.iconKey === "presseportal"
          return (
            <Link
              key={topic.slug}
              href={searchUrl(topic.searchQuery)}
              className={cn(
                "group flex gap-3 rounded-xl border border-border/80 bg-card p-4 transition-colors",
                "hover:border-brand/30 hover:bg-brand/5"
              )}
            >
              <div
                className={
                  useBrandIcon
                    ? "flex size-9 shrink-0 items-center justify-center"
                    : "flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand"
                }
              >
                <BrandIcon
                  iconKey={topic.iconKey}
                  lucideIcon={Icon}
                  size={useBrandIcon ? 36 : 16}
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug group-hover:text-brand">
                  {topic.name[locale]}
                </p>
                <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground text-pretty">
                  {topic.description[locale]}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
