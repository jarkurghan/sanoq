"use client"

import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import {  Share2,  } from "lucide-react"

export default function ShareAppURL() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-6 w-6 sm:h-9 sm:w-9">
      <Share2 className="h-4 w-4" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
