import Image from "next/image"

import { cn } from "@/lib/utils"

/** Presseportal brand teal from presseportal.de favicon */
export const PRESSEPORTAL_BRAND_COLOR = "#0B6B5C"

type PresseportalIconProps = {
  className?: string
  size?: number
}

export function PresseportalIcon({ className, size = 20 }: PresseportalIconProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        className
      )}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        aspectRatio: "1 / 1",
      }}
      aria-hidden
    >
      <Image
        src="/presseportal-icon.png"
        alt=""
        fill
        sizes={`${size}px`}
        className="object-contain"
        draggable={false}
      />
    </span>
  )
}

export function isHighlightAddonTitle(title: string): boolean {
  return /highlight/i.test(title)
}

export function isPresseportalCard(card: { title: string; description: string }): boolean {
  return /presseportal/i.test(card.title) || /presseportal/i.test(card.description)
}
