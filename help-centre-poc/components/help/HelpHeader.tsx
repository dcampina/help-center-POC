import Link from "next/link"
import { Bell } from "lucide-react"

import { HeaderSearch } from "@/components/help/HeaderSearch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function HelpHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-14 w-full items-center gap-3 px-12 sm:gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span
            className="flex size-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white"
            aria-hidden
          >
            na
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight">news aktuell</span>
            <span className="text-xs text-muted-foreground">Help Centre</span>
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center">
          <HeaderSearch
            wrapperClassName="w-full max-w-md flex-none lg:max-w-lg"
            className="w-full"
          />
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className="relative"
            aria-label="Notifications"
          >
            <Bell className="size-4" />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-brand ring-2 ring-background" />
          </Button>

          <Avatar size="sm">
            <AvatarFallback className="bg-brand/10 text-xs font-medium text-brand">
              U
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
