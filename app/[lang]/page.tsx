"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowRightLeft } from "lucide-react"
import RightSidebarContent from "@/components/right-sidebar-content"
import { NUMBER_SYSTEMS } from "@/lib/constants"
import { useParams } from "next/navigation"

export default function HomePage() {
  const { t, setLanguage } = useLanguage()
  const params = useParams()
  const lang = params.lang as string

  const [leftValue, setLeftValue] = useState("")
  const [rightValue, setRightValue] = useState("")
  const [fromBase, setFromBase] = useState("10")
  const [toBase, setToBase] = useState("2")
  const [lastChanged, setLastChanged] = useState<"left" | "right">("left")

  // Set language based on route parameter
  useEffect(() => {
    if (lang && ["en", "uz", "ru"].includes(lang)) {
      setLanguage(lang as "en" | "uz" | "ru")
    }
  }, [lang, setLanguage])

  // Update values when inputs change
  useEffect(() => {
    if (lastChanged === "left" && leftValue) {
      try {
        const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase))
        if (!isNaN(decimalValue)) {
          const result = decimalValue.toString(Number.parseInt(toBase))
          setRightValue(result.toUpperCase())
        }
      } catch (e) {
        setRightValue("")
      }
    } else if (lastChanged === "right" && rightValue) {
      try {
        const decimalValue = Number.parseInt(rightValue, Number.parseInt(toBase))
        if (!isNaN(decimalValue)) {
          const result = decimalValue.toString(Number.parseInt(fromBase))
          setLeftValue(result.toUpperCase())
        }
      } catch (e) {
        setLeftValue("")
      }
    }
  }, [leftValue, rightValue, fromBase, toBase, lastChanged])

  // Update values when bases change
  useEffect(() => {
    if (leftValue && lastChanged === "left") {
      try {
        const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase))
        if (!isNaN(decimalValue)) {
          const result = decimalValue.toString(Number.parseInt(toBase))
          setRightValue(result.toUpperCase())
        }
      } catch (e) {
        setRightValue("")
      }
    } else if (rightValue && lastChanged === "right") {
      try {
        const decimalValue = Number.parseInt(rightValue, Number.parseInt(toBase))
        if (!isNaN(decimalValue)) {
          const result = decimalValue.toString(Number.parseInt(fromBase))
          setLeftValue(result.toUpperCase())
        }
      } catch (e) {
        setLeftValue("")
      }
    }
  }, [fromBase, toBase])

  const swapBases = () => {
    setFromBase(toBase)
    setToBase(fromBase)
    setLeftValue(rightValue)
    setRightValue(leftValue)
  }

  const getPlaceholder = (base: string) => {
    const system = NUMBER_SYSTEMS.find((s) => s.value === base)
    return system ? t(system.label) : ""
  }

  return (
    <div className="flex">
      <div className="flex-1 container py-4 max-w-6xl ml-0 lg:ml-64">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{t("home.calculator.title")}</h1>
        </div>

        <div className="border-t border-b py-4 mb-6 text-sm">
          <p>{t("home.calculator.description")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* First row: From and To selects side by side */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Select value={fromBase} onValueChange={setFromBase}>
                <SelectTrigger>
                  <SelectValue placeholder={t("home.from")} />
                </SelectTrigger>
                <SelectContent>
                  {NUMBER_SYSTEMS.slice(0, 4).map((system) => (
                    <SelectItem key={system.value} value={system.value}>
                      {t(system.label)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-center w-full md:w-auto md:mx-4">
              <Button variant="outline" size="icon" onClick={swapBases} className="rounded-full" title={t("home.swap")}>
                <ArrowRightLeft className="h-4 w-4" />
                <span className="sr-only">{t("home.swap")}</span>
              </Button>
            </div>

            <div className="w-full md:w-1/2">
              <Select value={toBase} onValueChange={setToBase}>
                <SelectTrigger>
                  <SelectValue placeholder={t("home.to")} />
                </SelectTrigger>
                <SelectContent>
                  {NUMBER_SYSTEMS.slice(0, 4).map((system) => (
                    <SelectItem key={system.value} value={system.value}>
                      {t(system.label)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Second row: Input fields side by side */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Input
                value={leftValue}
                onChange={(e) => {
                  setLeftValue(e.target.value)
                  setLastChanged("left")
                }}
                className="font-mono w-full"
                placeholder={getPlaceholder(fromBase)}
              />
            </div>

            <div className="w-full md:w-1/2">
              <Input
                value={rightValue}
                onChange={(e) => {
                  setRightValue(e.target.value)
                  setLastChanged("right")
                }}
                className="font-mono w-full"
                placeholder={getPlaceholder(toBase)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right sidebar as part of the content */}
      <div className="hidden lg:block">
        <RightSidebarContent />
      </div>
    </div>
  )
}
