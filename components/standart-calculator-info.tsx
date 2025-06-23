"use client"

import { useLanguage } from "@/contexts/language-context"
import { DEFAULT_NUMBER_SYSTEM } from "@/lib/constants"
import { useSearchParams } from "next/navigation"

export default function CalculatorText() {
  const { t } = useLanguage()

  const searchParams = useSearchParams()
  const base = searchParams.get("base") || DEFAULT_NUMBER_SYSTEM

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-medium">
        {t("calculator.basic.features")}
        <ul>
          <li>
            • {t("calculator.arithmetic")} <span className="text-primary">+</span>,{" "}
            <span className="text-primary">-</span>, <span className="text-primary">×</span>,{" "}
            <span className="text-primary">÷</span>
          </li>
          <li>
            • {t("calculator.sign.change")} <span className="text-primary">±</span>,{" "}
            <span className="text-primary">1/x</span>
          </li>
          <li>
            • {t("calculator.percentage")} <span className="text-primary">%</span>
          </li>
          <li>
            • {t("calculator.square.root")} <span className="text-primary">x²</span>,{" "}
            <span className="text-primary">√x</span>
          </li>
          <li>
            • {t("calculator.clear.delete")} <span className="text-primary">Clear</span>,{" "}
            <span className="text-primary">⌫</span>{" "}
          </li>
          <li>
            • {t("calculator.decimal.numbers")} <span className="text-primary">.</span>
          </li>
        </ul>
      </div>
      {base !== "10" && (
        <div className="text-sm font-medium">
          <p className="text-justify">{t("calculator.info.warning." + base)}</p>
        </div>
      )}

      <div className="text-sm font-medium">
        <h2 className="text-lg font-bold mt-4 mb-1">{t("calculator.info.title." + base)}</h2>
        <p className="text-justify">
          {t("calculator.info.title." + base)} — {t("calculator.info.description." + base)}.
        </p>
        <p className="text-justify">{t("calculator.info.digits." + base)}.</p>
      </div>
    </div>
  )
}
