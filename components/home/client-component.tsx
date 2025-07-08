"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useRef } from "react";
import { Input } from "@/components/utils/input";
import { Select } from "@/components/utils/select";
import { SelectContent } from "@/components/utils/select";
import { SelectItem } from "@/components/utils/select";
import { SelectTrigger } from "@/components/utils/select";
import { SelectValue } from "@/components/utils/select";
import { Button } from "@/components/utils/button";
import { ArrowRightLeft } from "lucide-react";
import { getTranslation } from "@/lib/translater/i18n";
import TypingText from "@/components/home/typer";
import Solution from "./solution";
import { NUMBER_SYSTEMS } from "@/lib/constants/numeral-system";
import { Language } from "@/types/language";

export default function HomeComponent({ lang }: { lang: Language }) {
    const t = getTranslation(lang);
    // to-do: maximum kars qism 10ta;

    const [leftValue, setLeftValue] = useState("");
    const [rightValue, setRightValue] = useState("");
    const [fromBase, setFromBase] = useState("10");
    const [toBase, setToBase] = useState("2");

    useEffect(() => {
        try {
            const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase));
            if (!isNaN(decimalValue)) {
                setRightValue(decimalValue.toString(Number.parseInt(toBase)).toUpperCase());
            }
        } catch {
            setRightValue("");
        }
    }, [leftValue, rightValue, fromBase, toBase]);

    useEffect(() => {
        const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase));
        if (!isNaN(decimalValue)) {
            setRightValue(decimalValue.toString(Number.parseInt(toBase)).toUpperCase());
        }
    }, [fromBase, toBase]);

    const swapBases = () => {
        setFromBase(toBase);
        setToBase(fromBase);
        setLeftValue(rightValue);
        setRightValue(leftValue);
    };

    /* for solution --------------------------------------- */
    const [solutionLeftValue, setSolutionLeftValue] = useState("");
    const [solutionFromBase, setSolutionFromBase] = useState(10);
    const [solutionToBase, setSolutionToBase] = useState(2);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setSolutionLeftValue(leftValue);
            setSolutionFromBase(Number(fromBase));
            setSolutionToBase(Number(toBase));
        }, 3000);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [leftValue, fromBase, toBase]);

    return (
        <Fragment>
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
                        onChange={(e) => setLeftValue(e.target.value)}
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
                    <Input readOnly value={rightValue} className="font-mono w-full outline-none" placeholder={t("home.result")} />
                </div>
            </div>
            <div className="mt-8">
                {/* <div>
                    {tables.map((table, i) => (
                        <span key={i}>
                            {table.value}
                            {table.sup && <sup>{table.sup}</sup>} {table.base && <sub>{table.base}</sub>}{" "}
                        </span>
                    ))}
                </div> */}
                <Solution inputNumber={solutionLeftValue} fromBase={solutionFromBase} toBase={solutionToBase} lang={lang} />
                {/* <TypingText speed={70}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris. Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio sagittis, ut faucibus libero imperdiet.
                </TypingText> */}
            </div>
        </Fragment>
    );
}
