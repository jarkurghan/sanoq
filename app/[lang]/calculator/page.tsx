"use client";

import { Card, CardContent, CardHeader } from "@/components/utils/card";
import { useSearchParams } from "next/navigation";
import { DEFAULT_NUMBER_SYSTEM } from "@/lib/constants";
import { DEFAULT_CALCULATOR_TYPE } from "@/lib/constants";
import StandartCalculator from "@/components/standart-calculator";
import CalculatorText from "@/components/standart-calculator-info";
import CalculatorRightSidebar from "@/components/calculator-right-sidebar";
import { getTranslation } from "@/lib/i18n";
import { use } from "react";

export default function CalculatorPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "en") as "uz" | "en" | "ru";
    const t = getTranslation(lang);

    const searchParams = useSearchParams();
    const base = searchParams.get("base") || DEFAULT_NUMBER_SYSTEM;
    const type = searchParams.get("type") || DEFAULT_CALCULATOR_TYPE;

    return (
        <div className="flex">
            <div className="flex-1 container py-4 px-4 sm:px-8 max-w-7xl ml-0 lg:ml-64 sm:grid grid-cols-[1fr_auto] gap-8 xl:gap-20">
                <div>
                    <h1 className="text-2xl font-bold mb-2">{t("calculator.standard.title")}</h1>
                    <p className="hidden sm:block text-sm font-medium text-justify">{t("calculator.standard.description")}</p>
                    <div className="hidden sm:block">
                        <CalculatorText lang={lang} />
                    </div>
                </div>
                <div className="w-fit max-w-[360px]">
                    <Card>
                        <CardHeader className="pt-1" />
                        <CardContent>
                            <StandartCalculator />
                        </CardContent>
                    </Card>
                </div>
                <div className="block sm:hidden px-2 pt-8">
                    <CalculatorText lang={lang} />
                </div>
            </div>

            <div className="hidden lg:block">
                <CalculatorRightSidebar lang={lang} />
            </div>
        </div>
    );
}
