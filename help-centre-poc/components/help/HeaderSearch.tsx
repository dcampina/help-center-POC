"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { searchUrl } from "@/lib/urls"
import { cn } from "@/lib/utils"

type HeaderSearchProps = {
  className?: string
  inputClassName?: string
  placeholder?: string
  defaultQuery?: string
}

export function HeaderSearch({
  className,
  inputClassName,
  placeholder = "Search help articles…",
  defaultQuery = "",
}: HeaderSearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState(defaultQuery)

  function submit(e?: React.FormEvent) {
    e?.preventDefault()
    router.push(searchUrl(query))
  }

  const form = (
    <form onSubmit={submit} className={cn("relative flex-1", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={cn("h-10 pl-9", inputClassName)}
      />
    </form>
  )

  return (
    <>
      <div className="hidden min-w-0 flex-1 md:block md:max-w-md lg:max-w-lg">
        {form}
      </div>
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Open search"
            >
              <Search className="size-4" />
            </Button>
          }
        />
        <SheetContent side="top" className="pt-10">
          <SheetHeader>
            <SheetTitle>Search</SheetTitle>
          </SheetHeader>
          <div className="px-4 pb-6">{form}</div>
        </SheetContent>
      </Sheet>
    </>
  )
}
