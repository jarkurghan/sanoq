"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import RightSidebarContent from "@/components/right-sidebar-content"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex">
      <div className="flex-1 container py-4 max-w-6xl ml-0 lg:ml-64">
        <h1 className="text-2xl font-bold mb-2">{t("about.title")}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t("about.description")}</p>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t("about.mission.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t("about.mission.description")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("about.project.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{t("about.project.description")}</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                <li>{t("about.project.feature1")}</li>
                <li>{t("about.project.feature2")}</li>
                <li>{t("about.project.feature3")}</li>
                <li>{t("about.project.feature4")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("about.team.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mb-4 flex items-center justify-center text-2xl font-bold">
                    JS
                  </div>
                  <h3 className="text-lg font-semibold">John Smith</h3>
                  <p className="text-sm text-muted-foreground">Lead Developer</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mb-4 flex items-center justify-center text-2xl font-bold">
                    AD
                  </div>
                  <h3 className="text-lg font-semibold">Alice Davis</h3>
                  <p className="text-sm text-muted-foreground">Mathematics Specialist</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("about.contact.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{t("about.contact.description")}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Email:</strong> contact@numbersystems.com
                </p>
                <p>
                  <strong>GitHub:</strong> github.com/numbersystems
                </p>
                <p>
                  <strong>Twitter:</strong> @numbersystems
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right sidebar as part of the content */}
      <div className="hidden lg:block">
        <RightSidebarContent />
      </div>
    </div>
  )
}
