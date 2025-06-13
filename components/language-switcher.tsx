"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
<<<<<<< HEAD
import { useRouter, usePathname, useParams } from "next/navigation"
=======
>>>>>>> 17bb9f410574f5eb3eb4b9fffd08d02e6bf61b1c

const languages = [
  { code: "en", name: "English" },
  { code: "uz", name: "O'zbek" },
  { code: "ru", name: "Русский" },
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
<<<<<<< HEAD
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang as "en" | "uz" | "ru")

    // Get current path without language prefix
    const currentLang = params.lang as string
    const pathWithoutLang = pathname.replace(`/${currentLang}`, "") || ""

    // Navigate to new language path
    const newPath = `/${newLang}${pathWithoutLang}`
    router.push(newPath)
  }
=======
>>>>>>> 17bb9f410574f5eb3eb4b9fffd08d02e6bf61b1c

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
<<<<<<< HEAD
            onClick={() => handleLanguageChange(lang.code)}
=======
            onClick={() => setLanguage(lang.code as "en" | "uz" | "ru")}
>>>>>>> 17bb9f410574f5eb3eb4b9fffd08d02e6bf61b1c
            className="flex items-center justify-between"
          >
            {lang.name}
            {language === lang.code && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
