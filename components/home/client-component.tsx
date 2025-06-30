"use client";

import { useState, useEffect, Fragment } from "react";
import { Input } from "@/components/utils/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/utils/select";
import { Button } from "@/components/utils/button";
import { ArrowRightLeft } from "lucide-react";
import { NUMBER_SYSTEMS } from "@/lib/constants";
import { getTranslation } from "@/lib/i18n";
import TypingText from "@/components/home/typer";
import * as math from "mathjs";
import Solution from "./solution";

type Props = {
    lang: "uz" | "en" | "ru";
};

function floatToBinary(num: number, maxFractionBits: number = 20): string {
    const integerPart: number = Math.floor(num);
    let fractionalPart: number = num - integerPart;

    const integerBinary: string = integerPart.toString(2);
    let fractionalBinary: string = "";

    while (fractionalPart > 0 && fractionalBinary.length < maxFractionBits) {
        fractionalPart *= 2;
        const bit: number = Math.floor(fractionalPart);
        fractionalBinary += bit;
        fractionalPart -= bit;
    }

    return fractionalBinary ? integerBinary + "." + fractionalBinary : integerBinary;
}

export default function HomeComponent({ lang }: Props) {
    const t = getTranslation(lang);

    const [leftValue, setLeftValue] = useState("");
    const [rightValue, setRightValue] = useState("");
    const [fromBase, setFromBase] = useState("10");
    const [toBase, setToBase] = useState("2");
    const [tables, setTables] = useState<{ base?: string; value: string; sup?: string }[]>([]);

    useEffect(() => {
        try {
            const isFractional = leftValue.includes(".");
            const dotIndex = leftValue.indexOf(".");
            const lengthOfLeftValue = leftValue.length;
            const lengthOfWholePart = isFractional ? dotIndex : lengthOfLeftValue;

            let sum = 0;

            const steps: { base?: string; value: string; sup?: string }[] = [{ base: fromBase, value: leftValue }, { value: "=" }];
            const steps2: { base?: string; value: string; sup?: string }[] = [{ value: "=" }];
            const steps3: { base?: string; value: string; sup?: string }[] = [{ value: "=" }];
            const steps4: { base?: string; value: string; sup?: string }[] = [{ value: "=" }];
            for (let i = lengthOfWholePart - 1, j = 0; i >= 0; i--, j++) {
                steps.push({ value: leftValue[j] });
                steps.push({ value: "*" });
                steps.push({ value: fromBase, sup: String(i) });
                if (i > 0) steps.push({ value: "+" });

                steps2.push({ value: leftValue[j] });
                steps2.push({ value: "*" });
                steps2.push({ value: String(math.pow(Number(fromBase), i)) });
                if (i > 0) steps2.push({ value: "+" });

                const value = math.multiply(Number(leftValue[j]), math.pow(Number(fromBase), i));
                sum = Number(math.add(sum, value));

                steps3.push({ value: String(value) });
                if (i > 0) steps3.push({ value: "+" });

                if (value !== 0) {
                    steps4.push({ value: String(value) });
                    steps4.push({ value: "+" });
                }
            }

            steps4.pop();

            if (isFractional) {
                for (let j = dotIndex + 1; j < lengthOfLeftValue; j++) {
                    steps.push({ value: "+" });
                    steps.push({ value: leftValue[j] });
                    steps.push({ value: "*" });
                    steps.push({ value: fromBase, sup: String(dotIndex - j) });

                    steps2.push({ value: "+" });
                    steps2.push({ value: leftValue[j] });
                    steps2.push({ value: "*" });
                    steps2.push({ value: String(math.pow(parseFloat(fromBase), dotIndex - j)) });

                    const value = math.multiply(Number(leftValue[j]), Number(math.pow(parseFloat(fromBase), dotIndex - j)));
                    sum = math.add(sum, value);

                    steps3.push({ value: "+" });
                    steps3.push({ value: String(value) });

                    if (value !== 0) {
                        steps4.push({ value: "+" });
                        steps4.push({ value: String(value) });
                    }
                }
            }

            // const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase));
            // if (!isNaN(decimalValue)) {
            //     setRightValue(decimalValue.toString(Number.parseInt(toBase)).toUpperCase());
            // }

            steps.push(...steps2);
            steps.push(...steps3);
            if (steps3.length !== steps4.length) steps.push(...steps4);

            steps.push({ value: "=" });
            steps.push({ value: String(sum), base: "10" });

            const x = floatToBinary(sum);

            setRightValue(String(x));
            setTables(steps);
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
                <div>
                    {tables.map((table, i) => (
                        <span key={i}>
                            {table.value}
                            {table.sup && <sup>{table.sup}</sup>} {table.base && <sub>{table.base}</sub>}{" "}
                        </span>
                    ))}
                </div>
                <Solution />
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
