"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/utils/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/utils/select";
import { Button } from "@/components/utils/button";
import { ArrowRightLeft } from "lucide-react";
import { NUMBER_SYSTEMS } from "@/lib/constants";
import { getTranslation } from "@/lib/i18n";

type Props = {
    lang: "uz" | "en" | "ru";
};

export default function HomeComponent({ lang }: Props) {
    const t = getTranslation(lang);

    const [leftValue, setLeftValue] = useState("");
    const [rightValue, setRightValue] = useState("");
    const [fromBase, setFromBase] = useState("10");
    const [toBase, setToBase] = useState("2");
    const [lastChanged, setLastChanged] = useState<"left" | "right">("left");

    useEffect(() => {
        if (lastChanged === "left" && leftValue) {
            try {
                const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase));
                if (!isNaN(decimalValue)) {
                    setRightValue(decimalValue.toString(Number.parseInt(toBase)).toUpperCase());
                }
            } catch {
                setRightValue("");
            }
        } else if (lastChanged === "right" && rightValue) {
            try {
                const decimalValue = Number.parseInt(rightValue, Number.parseInt(toBase));
                if (!isNaN(decimalValue)) {
                    setLeftValue(decimalValue.toString(Number.parseInt(fromBase)).toUpperCase());
                }
            } catch {
                setLeftValue("");
            }
        }
    }, [leftValue, rightValue, fromBase, toBase, lastChanged]);

    useEffect(() => {
        if (lastChanged === "left" && leftValue) {
            const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase));
            if (!isNaN(decimalValue)) {
                setRightValue(decimalValue.toString(Number.parseInt(toBase)).toUpperCase());
            }
        } else if (lastChanged === "right" && rightValue) {
            const decimalValue = Number.parseInt(rightValue, Number.parseInt(toBase));
            if (!isNaN(decimalValue)) {
                setLeftValue(decimalValue.toString(Number.parseInt(fromBase)).toUpperCase());
            }
        }
    }, [fromBase, toBase]);

    const swapBases = () => {
        setFromBase(toBase);
        setToBase(fromBase);
        setLeftValue(rightValue);
        setRightValue(leftValue);
    };

    const getPlaceholder = (base: string) => {
        const system = NUMBER_SYSTEMS.find((s) => s.value === base);
        return system ? t(system.label) : "";
    };

    return (
        <div className="sm:grid grid-cols-[1fr_auto_1fr] gap-6">
            {/* From input */}
            <div className="flex flex-col gap-4">
                <Select value={fromBase} onValueChange={setFromBase}>
                    <SelectTrigger>
                        <SelectValue placeholder={t("home.from")} />
                    </SelectTrigger>
                    <SelectContent>
                        {NUMBER_SYSTEMS.map((system) => (
                            <SelectItem key={system.value} value={system.value}>
                                {t(system.label)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Input
                    value={leftValue}
                    onChange={(e) => {
                        setLeftValue(e.target.value);
                        setLastChanged("left");
                    }}
                    className="font-mono w-full outline-none"
                    placeholder={t("home.input")}
                />
            </div>

            {/* Swap button */}
            <div className="flex flex-col md:flex-row gap-4 my-4">
                <div className="flex items-center justify-center md:w-auto md:mx-4">
                    <Button variant="outline" size="icon" onClick={swapBases} className="rounded-full" title={t("home.swap")}>
                        <ArrowRightLeft className="h-4 w-4" />
                        <span className="sr-only">{t("home.swap")}</span>
                    </Button>
                </div>
            </div>

            {/* To input */}
            <div className="flex flex-col gap-4">
                <Select value={toBase} onValueChange={setToBase}>
                    <SelectTrigger>
                        <SelectValue placeholder={t("home.to")} />
                    </SelectTrigger>
                    <SelectContent>
                        {NUMBER_SYSTEMS.map((system) => (
                            <SelectItem key={system.value} value={system.value}>
                                {t(system.label)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Input
                    value={rightValue}
                    onChange={(e) => {
                        setRightValue(e.target.value);
                        setLastChanged("right");
                    }}
                    className="font-mono w-full outline-none"
                    placeholder={t("home.result")}
                />
            </div>
        </div>
    );
}
