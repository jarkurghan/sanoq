"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, BookOpen, Calculator, Binary, Hash, History, RefreshCw } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import RightSidebarContent from "@/components/right-sidebar-content"

export default function EducationPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  const educationTopics = [
    {
      title: "education.topic.binary",
      href: "binary",
      icon: Binary,
      description: "Learn about the binary number system, the foundation of all digital computing.",
    },
    {
      title: "education.topic.octal",
      href: "octal",
      icon: Hash,
      description: "Understand the octal number system and its applications in computing.",
    },
    {
      title: "education.topic.decimal",
      href: "decimal",
      icon: Calculator,
      description: "Explore the decimal number system that we use in everyday life.",
    },
    {
      title: "education.topic.hexadecimal",
      href: "hexadecimal",
      icon: Hash,
      description: "Master the hexadecimal system used in programming and computer science.",
    },
    {
      title: "education.topic.conversions",
      href: "conversions",
      icon: RefreshCw,
      description: "Learn how to convert between different number systems effectively.",
    },
    {
      title: "education.topic.history",
      href: "history",
      icon: History,
      description: "Discover the fascinating history and evolution of number systems.",
    },
  ]

  const filteredTopics = educationTopics.filter((topic) =>
    t(topic.title).toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex">
      <div className="flex-1 container py-4 max-w-6xl ml-0 lg:ml-64">
        <h1 className="text-2xl font-bold mb-6">{t("education.title")}</h1>

        <div className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search topics..."
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
                      <Link href={`/education/${topic.href}`} className="flex justify-between items-center">
                        <span className="text-sm">{t("home.learnmore")}</span>
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
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">No topics found matching your search.</p>
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
