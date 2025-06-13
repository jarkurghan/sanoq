"use client"

import type React from "react"
import { useLanguage } from "@/contexts/language-context"

export default function CodeLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const { t } = useLanguage()

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">{t("code.title")}</h1>
      <p className="text-muted-foreground mb-8">{t("code.description")}</p>
      {children}
    </div>
  )
}
