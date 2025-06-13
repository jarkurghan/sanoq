"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, Code, Binary, Hash, Zap, Plus, Wrench } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import RightSidebarContent from "@/components/right-sidebar-content"
import { useParams } from "next/navigation"

export default function CodePage() {
  const { t, setLanguage } = useLanguage()
  const params = useParams()
  const lang = params.lang as string
  const [searchQuery, setSearchQuery] = useState("")

  // Set language based on route parameter
  useEffect(() => {
    if (lang && ["en", "uz", "ru"].includes(lang)) {
      setLanguage(lang as "en" | "uz" | "ru")
    }
  }, [lang, setLanguage])

  const codeTopics = [
    {
      title: "code.topic.binarytodecimal",
      href: "binary-to-decimal",
      icon: Binary,
      description: "Learn how to convert binary numbers to decimal in various programming languages.",
    },
    {
      title: "code.topic.decimaltobinary",
      href: "decimal-to-binary",
      icon: Hash,
      description: "Implement decimal to binary conversion algorithms and functions.",
    },
    {
      title: "code.topic.hexadecimal",
      href: "hexadecimal-conversion",
      icon: Code,
      description: "Master hexadecimal conversion techniques and practical implementations.",
    },
    {
      title: "code.topic.bitwise",
      href: "bitwise-operations",
      icon: Zap,
      description: "Explore bitwise operations and their applications in number systems.",
    },
    {
      title: "code.topic.binaryaddition",
      href: "binary-addition",
      icon: Plus,
      description: "Implement binary arithmetic operations and understand their logic.",
    },
    {
      title: "code.topic.utilities",
      href: "utilities",
      icon: Wrench,
      description: "Useful utility functions and libraries for working with number systems.",
    },
  ]

  const filteredTopics = codeTopics.filter((topic) => t(topic.title).toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex">
      <div className="flex-1 container py-4 max-w-6xl ml-0 lg:ml-64">
        <h1 className="text-2xl font-bold mb-6">{t("code.title")}</h1>

        <div className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search code examples..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTopics.map((topic) => {
              const IconComponent = topic.icon
              return (
                <Card key={topic.href} className="hover:shadow-md transition-shadow cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t(topic.title)}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{topic.description}</p>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={`/${lang}/code/${topic.href}`} className="flex justify-between items-center">
                        <span className="text-sm">{t("code.viewcode")}</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredTopics.length === 0 && (
            <div className="text-center py-12">
              <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">No code examples found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Right sidebar as part of the content */}
      <div className="hidden lg:block">
        <RightSidebarContent />
      </div>
    </div>
  )
}
