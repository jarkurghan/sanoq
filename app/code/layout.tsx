import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Code - Number Systems",
  description: "Programming examples related to number systems",
}

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
