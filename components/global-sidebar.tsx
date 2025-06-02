"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Static sidebar menus
const sidebarMenus = {
  education: [
    { title: "education.topic.binary", href: "binary" },
    { title: "education.topic.octal", href: "octal" },
    { title: "education.topic.decimal", href: "decimal" },
    { title: "education.topic.hexadecimal", href: "hexadecimal" },
    { title: "education.topic.conversions", href: "conversions" },
    { title: "education.topic.history", href: "history" },
  ],
  code: [
    { title: "code.topic.binarytodecimal", href: "binary-to-decimal" },
    { title: "code.topic.decimaltobinary", href: "decimal-to-binary" },
    { title: "code.topic.hexadecimal", href: "hexadecimal-conversion" },
    { title: "code.topic.bitwise", href: "bitwise-operations" },
    { title: "code.topic.binaryaddition", href: "binary-addition" },
    { title: "code.topic.utilities", href: "utilities" },
  ],
}

export default function GlobalSidebar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  // Determine which sidebar to show based on current path
  const getCurrentSidebar = () => {
    if (pathname.startsWith("/education")) {
      return { items: sidebarMenus.education, basePath: "/education" }
    }
    if (pathname.startsWith("/code")) {
      return { items: sidebarMenus.code, basePath: "/code" }
    }
    return null
  }

  const currentSidebar = getCurrentSidebar()

  // Show empty sidebar if no items
  const { items = [], basePath = "" } = currentSidebar || {}

  return (
    <div className="hidden lg:block fixed left-0 top-14 bottom-16 w-64 z-10">
      {/* Sidebar - only visible on desktop */}
      <div className="h-full bg-background border-r overflow-y-auto">
        <div className="bg-muted/50 px-4 py-3 font-medium border-b">{items.length > 0 ? t("sidebar.topics") : ""}</div>
        <nav className="p-2">
          {items.length > 0 ? (
            <ul className="space-y-1">
              {items.map((item) => {
                const isActive = pathname === `${basePath}/${item.href}`
                return (
                  <li key={item.href}>
                    <Link
                      href={`${basePath}/${item.href}`}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm rounded-md transition-colors hover:bg-accent",
                        isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground",
                      )}
                    >
                      <ChevronRight className={cn("mr-2 h-4 w-4 transition-transform", isActive ? "rotate-90" : "")} />
                      {t(item.title)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="text-center text-muted-foreground text-sm py-8">{/* Empty sidebar content */}</div>
          )}
        </nav>
      </div>
    </div>
  )
}
