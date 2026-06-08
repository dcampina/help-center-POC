import Image from "next/image"
import { MapPin } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Locale } from "@/content/help"
import { getRegioRegionsContent } from "@/lib/regio-ads-data"
import { cn } from "@/lib/utils"

type ArticleRegioRegionsProps = {
  locale: Locale
}

function StatusBadge({
  status,
  availableLabel,
  comingSoonLabel,
}: {
  status: "available" | "coming-soon"
  availableLabel: string
  comingSoonLabel: string
}) {
  const isAvailable = status === "available"

  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium",
        isAvailable
          ? "bg-brand/10 text-brand"
          : "bg-muted text-muted-foreground"
      )}
    >
      {isAvailable ? availableLabel : comingSoonLabel}
    </span>
  )
}

export function ArticleRegioRegions({ locale }: ArticleRegioRegionsProps) {
  const { regions, expandLabel, availableLabel, comingSoonLabel } =
    getRegioRegionsContent(locale)

  return (
    <div className="my-6 space-y-8">
      {regions.map((region) => (
        <section key={region.id} className="scroll-mt-20">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-sm font-semibold text-foreground">
              {region.name}
            </h3>
            <StatusBadge
              status={region.status}
              availableLabel={availableLabel}
              comingSoonLabel={comingSoonLabel}
            />
          </div>

          <p className="mt-1.5 flex items-center gap-1.5 text-sm leading-relaxed text-foreground/70">
            <MapPin className="size-3.5 shrink-0 text-brand" aria-hidden />
            {region.coverage}
          </p>

          {region.status === "coming-soon" ? (
            <p className="mt-3 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm leading-relaxed text-foreground/75">
              {region.comingSoonNote}
            </p>
          ) : (
            <>
              <div className="mt-5 space-y-5">
                {region.partners?.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-xl border border-border bg-card"
                  >
                    <div className="px-4 py-4 sm:px-5">
                      <div className="flex flex-col gap-0.5">
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold leading-tight text-brand hover:underline"
                        >
                          {partner.name}
                        </a>
                        <p className="text-sm leading-snug text-foreground/70">
                          {partner.description}
                        </p>
                      </div>
                    </div>

                    <Accordion className="border-t border-border px-4 sm:px-5">
                      <AccordionItem value={partner.name}>
                        <AccordionTrigger className="py-3 text-sm font-medium text-foreground hover:no-underline">
                          {expandLabel}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <div className="grid gap-3 sm:grid-cols-2">
                            {partner.publications.map((publication) => (
                              <div
                                key={publication.title}
                                className="flex flex-col rounded-xl border border-border bg-background px-4 py-4"
                              >
                                <div className="mb-4 w-full">
                                  <Image
                                    src={publication.logo}
                                    alt={`${publication.title} logo`}
                                    width={480}
                                    height={120}
                                    sizes="(max-width: 640px) 100vw, 280px"
                                    className="h-auto max-h-16 w-full rounded-md border border-border/60 object-contain object-left"
                                  />
                                </div>
                                <div className="flex flex-col gap-0">
                                  <p className="text-sm font-semibold leading-tight text-foreground">
                                    {publication.title}
                                  </p>
                                  <p className="text-sm leading-snug text-foreground/70">
                                    {publication.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      ))}
    </div>
  )
}
