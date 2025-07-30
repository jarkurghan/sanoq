"use client";

import { Dialog, DialogHeader, DialogDescription } from "@/components/utils/dialog";
import { DialogContent, DialogTitle, DialogTrigger } from "@/components/utils/dialog";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/types/language";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/utils/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CALCULATOR_TYPES } from "@/lib/constants/calculator";
import { NUMBER_SYSTEMS } from "@/lib/constants/numeral-system";

export default function CalculatorSettings({ children, lang: rawLang }: { children?: React.ReactNode; lang: string }) {
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "uz") as Language;
    const t = getTranslation(lang);

    const router = useRouter();
    const searchParams = useSearchParams();

    const [numberSystem, setNumberSystem] = useState(searchParams.get("base") || "10");
    const [calculatorType, setCalculatorType] = useState(searchParams.get("type") || "standard");

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (numberSystem !== "10") {
            params.set("base", numberSystem);
        } else {
            params.delete("base");
        }

        if (calculatorType !== "standard") {
            params.set("type", calculatorType);
        } else {
            params.delete("type");
        }

        const newUrl = params.toString() ? `/${lang}/calculator?${params.toString()}` : `/${lang}/calculator`;
        router.replace(newUrl);
    }, [numberSystem, calculatorType, router, searchParams, lang]);

    const handleNumberSystemChange = (value: string) => {
        setNumberSystem(value);
    };

    const handleCalculatorTypeChange = (value: string) => {
        setCalculatorType(value);
    };

    return (
        <Dialog>
            <DialogTrigger className="h-6 w-6 sm:h-9 sm:w-9 flex items-center justify-center">{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("Kalkulatorni sozlash")}</DialogTitle>
                    {/* <DialogDescription>{t("description")}</DialogDescription> */}
                </DialogHeader>
                <div className="space-y-2 pb-2">
                    <label className="text-sm font-medium pl-3">{t("calculator.numbersystem")}</label>
                    <Select value={numberSystem} onValueChange={handleNumberSystemChange}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {NUMBER_SYSTEMS.map((system) => (
                                <SelectItem key={system.value} value={system.value}>
                                    {t(system.label)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                {/* <div className="space-y-2 pb-2">
                    <label className="text-sm font-medium pl-3">{t("calculator.type")}</label>
                    <Select value={calculatorType} onValueChange={handleCalculatorTypeChange}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {CALCULATOR_TYPES.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                    {t(type.label)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div> */}
            </DialogContent>
        </Dialog>
    );
}
