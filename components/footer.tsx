"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-4 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Number Systems. {/* {t("footer.rights")} */}
        </p>
      </div>
    </footer>
  )
}
