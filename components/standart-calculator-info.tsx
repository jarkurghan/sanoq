<<<<<<< HEAD
"use client"

import { useLanguage } from "@/contexts/language-context"
import { DEFAULT_NUMBER_SYSTEM } from "@/lib/constants"
import { useSearchParams } from "next/navigation"

export default function CalculatorText() {
  const { t } = useLanguage()

  const searchParams = useSearchParams()
  const base = searchParams.get("base") || DEFAULT_NUMBER_SYSTEM

  return (
    <div className="hidden sm:flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">{t("calculator.standard.title")}</h1>
        <p className="text-sm font-medium text-stone-700 text-justify">{t("calculator.standard.description")}</p>
      </div>

      <div className="text-sm font-medium text-stone-700">
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
        <div className="text-sm font-medium text-stone-700">
          <p className="text-justify">{t("calculator.info.warning." + base)}</p>
        </div>
      )}

      <div className="text-sm font-medium text-stone-700">
        <h2 className="text-lg font-bold mt-4 mb-1">{t("calculator.info.title." + base)}</h2>
        <p className="text-justify">
          {t("calculator.info.title." + base)} — {t("calculator.info.description." + base)}.
        </p>
        <p className="text-justify">{t("calculator.info.digits." + base)}.</p>
      </div>
    </div>
  )
=======
"use client";

import { useLanguage } from "@/contexts/language-context";
import { DEFAULT_NUMBER_SYSTEM } from "@/lib/constants";
import { useSearchParams } from "next/navigation";

export default function CalculatorText() {
    const { t } = useLanguage();

    const searchParams = useSearchParams();
    const base = searchParams.get("base") || DEFAULT_NUMBER_SYSTEM;

    return (
        <div className="hidden sm:flex flex-col gap-4">
            <div>
                <h1 className="text-2xl font-bold mb-2">Standart Kalkulyator</h1>
                <p className="text-sm font-medium text-stone-700 text-justify">
                    Oddiy va intuitiv interfeysga ega, kundalik hisob-kitoblar uchun mo‘ljallangan oson va ishlatish uchun qulay. Asosiy arifmetik amallarni tez
                    va xatosiz bajarishga imkon beradi.
                </p>
            </div>

            <div className="text-sm font-medium text-stone-700">
                Asosiy imkoniyatlar:
                <ul>
                    <li>
                        • Arifmetik amallar: <span className="text-primary">+</span>, <span className="text-primary">-</span>,{" "}
                        <span className="text-primary">×</span>, <span className="text-primary">÷</span>
                    </li>
                    <li>
                        • Teskari songa almashtirish: <span className="text-primary">±</span>, <span className="text-primary">1/x</span>
                    </li>
                    <li>
                        • Sonning 1 foizini topish: <span className="text-primary">%</span>
                    </li>
                    <li>
                        • Kvadrat va ildiz: <span className="text-primary">x²</span>, <span className="text-primary">√x</span>
                    </li>
                    <li>
                        • O'chirish va bekor qilish tugmalari: <span className="text-primary">Clear</span>, <span className="text-primary">⌫</span>{" "}
                    </li>
                    <li>
                        • Ratsional sonlar bilan ishlash: <span className="text-primary">.</span>
                    </li>
                </ul>
            </div>
            {base !== "10" && (
                <div className="text-sm font-medium text-stone-700">
                    <p className="text-justify">{t("calculator.info.warning." + base)}</p>
                </div>
            )}

            <div className="text-sm font-medium text-stone-700">
                <h2 className="text-lg font-bold mt-4 mb-1">{t("calculator.info.title." + base)}</h2>
                <p className="text-justify">
                    {t("calculator.info.title." + base)} — {t("calculator.info.description." + base)}.
                </p>
                <p className="text-justify">{t("calculator.info.digits." + base)}.</p>
            </div>
        </div>
    );
>>>>>>> 17bb9f410574f5eb3eb4b9fffd08d02e6bf61b1c
}
