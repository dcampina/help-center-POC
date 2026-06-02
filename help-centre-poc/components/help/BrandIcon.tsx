import type { LucideIcon } from "lucide-react"

import { PresseportalIcon } from "@/components/help/PresseportalIcon"
import { cn } from "@/lib/utils"

type BrandIconProps = {
  iconKey: string
  lucideIcon: LucideIcon
  className?: string
  size?: number
}

export function BrandIcon({
  iconKey,
  lucideIcon: Icon,
  className,
  size = 20,
}: BrandIconProps) {
  if (iconKey === "presseportal") {
    return <PresseportalIcon className={className} size={size} />
  }

  return <Icon className={cn(className)} style={{ width: size, height: size }} />
}
