"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calculator, Code, Home, Info, BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import ThemeToggle from "@/components/theme-toggle"

const navItems = [
  { name: "nav.conversion", href: "/", icon: Home },
  { name: "nav.education", href: "/education", icon: BookOpen },
  { name: "nav.calculator", href: "/calculator", icon: Calculator },
  { name: "nav.code", href: "/code", icon: Code },
  { name: "nav.about", href: "/about", icon: Info },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-8 lg:px-12 w-full flex h-14 items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
              <Calculator className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold">Number Systems</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {t(item.name)}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="ml-auto flex items-center space-x-2">
          <ThemeToggle />
          <LanguageSwitcher />

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile navigation - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu content */}
          <div className="fixed inset-0 bg-background">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                  <Calculator className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold">Number Systems</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            {/* Navigation items */}
            <div className="p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center py-4 px-4 text-lg font-medium rounded-lg transition-colors hover:bg-accent",
                      isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="mr-3 h-6 w-6" />
                    {t(item.name)}
                  </Link>
                )
              })}
            </div>

            {/* Theme and language controls */}
            <div className="absolute bottom-8 left-4 right-4">
              <div className="flex items-center justify-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
