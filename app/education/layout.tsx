import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education - Number Systems",
  description: "Learn about different number systems and their applications",
}

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
