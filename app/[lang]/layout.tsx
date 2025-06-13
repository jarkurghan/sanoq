import type React from "react"
import type { Metadata } from "next"

type Props = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params

  const titles = {
    en: "Number Systems",
    uz: "Sanoq Sistemalari",
    ru: "Системы Счисления",
  }

  const descriptions = {
    en: "Learn, convert, and calculate with different number systems",
    uz: "Turli sanoq sistemalarini o'rganing, konvertatsiya qiling va hisoblang",
    ru: "Изучайте, конвертируйте и вычисляйте с различными системами счисления",
  }

  return {
    title: titles[lang as keyof typeof titles] || titles.uz,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.uz,
  }
}

export default async function LangLayout({ children, params }: Props) {
  return <>{children}</>
}
