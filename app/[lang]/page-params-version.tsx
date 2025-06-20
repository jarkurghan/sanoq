"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/language-context";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";
import RightSidebarContent from "@/components/right-sidebar-content";
import { NUMBER_SYSTEMS } from "@/lib/constants";

export default function HomePage() {
    const { t, setLanguage } = useLanguage();
    const params = useParams();
    const lang = params.lang as string;

    const router = useRouter();
    const searchParams = useSearchParams();

    // Boshlang'ich qiymatlarni query string'dan olamiz
    const initialFromBase = searchParams.get("fromBase") || "10";
    const initialToBase = searchParams.get("toBase") || "2";
    const initialLeftValue = searchParams.get("leftValue") || "";

    const [fromBase, setFromBase] = useState(initialFromBase);
    const [toBase, setToBase] = useState(initialToBase);
    const [leftValue, setLeftValue] = useState(initialLeftValue);
    const [rightValue, setRightValue] = useState("");
    const [lastChanged, setLastChanged] = useState<"left" | "right">("left");

    // URL query stringni yangilash
    const updateQuery = (newFromBase: string, newToBase: string, newLeftValue: string) => {
        const params = new URLSearchParams();
        if (newFromBase) params.set("fromBase", newFromBase);
        if (newToBase) params.set("toBase", newToBase);
        if (newLeftValue) params.set("leftValue", newLeftValue);
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    // Tilni route parametrlari asosida o'rnatish
    useEffect(() => {
        if (lang && ["en", "uz", "ru"].includes(lang)) {
            setLanguage(lang as "en" | "uz" | "ru");
        }
    }, [lang, setLanguage]);

    // leftValue, fromBase, toBase o'zgarganda query stringni yangilash
    useEffect(() => {
        updateQuery(fromBase, toBase, leftValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fromBase, toBase, leftValue]);

    // leftValue yoki rightValue o'zgarganda natijani hisoblash
    useEffect(() => {
        if (lastChanged === "left" && leftValue) {
            try {
                const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase));
                if (!isNaN(decimalValue)) {
                    const result = decimalValue.toString(Number.parseInt(toBase));
                    setRightValue(result.toUpperCase());
                } else {
                    setRightValue("");
                }
            } catch {
                setRightValue("");
            }
        } else if (lastChanged === "right" && rightValue) {
            try {
                const decimalValue = Number.parseInt(rightValue, Number.parseInt(toBase));
                if (!isNaN(decimalValue)) {
                    const result = decimalValue.toString(Number.parseInt(fromBase));
                    setLeftValue(result.toUpperCase());
                } else {
                    setLeftValue("");
                }
            } catch {
                setLeftValue("");
            }
        }
    }, [leftValue, rightValue, fromBase, toBase, lastChanged]);

    // fromBase yoki toBase o'zgarganda natijani hisoblash
    useEffect(() => {
        if (leftValue && lastChanged === "left") {
            try {
                const decimalValue = Number.parseInt(leftValue, Number.parseInt(fromBase));
                if (!isNaN(decimalValue)) {
                    const result = decimalValue.toString(Number.parseInt(toBase));
                    setRightValue(result.toUpperCase());
                } else {
                    setRightValue("");
                }
            } catch {
                setRightValue("");
            }
        } else if (rightValue && lastChanged === "right") {
            try {
                const decimalValue = Number.parseInt(rightValue, Number.parseInt(toBase));
                if (!isNaN(decimalValue)) {
                    const result = decimalValue.toString(Number.parseInt(fromBase));
                    setLeftValue(result.toUpperCase());
                } else {
                    setLeftValue("");
                }
            } catch {
                setLeftValue("");
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
        <div className="flex">
            <div className="flex-1 container py-4 px-4 sm:px-8 max-w-6xl ml-0 lg:ml-64">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">{t("home.calculator.title")}</h1>
                </div>

                <div className="hidden sm:block border-t border-b py-4 mb-6 text-sm">
                    <p>{t("home.calculator.description")}</p>
                </div>

                <div className="sm:grid grid-cols-[1fr_auto_1fr] gap-6">
                    <div className="flex flex-col gap-4">
                        <Select value={fromBase} onValueChange={(val) => { setFromBase(val); }}>
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
                            className="font-mono w-full"
                            placeholder={getPlaceholder(fromBase)}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 my-4">
                        <div className="flex items-center justify-center md:w-auto md:mx-4">
                            <Button variant="outline" size="icon" onClick={swapBases} className="rounded-full" title={t("home.swap")}>
                                <ArrowRightLeft className="h-4 w-4" />
                                <span className="sr-only">{t("home.swap")}</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Select value={toBase} onValueChange={(val) => { setToBase(val); }}>
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
                            className="font-mono w-full"
                            placeholder={getPlaceholder(toBase)}
                        />
                    </div>
                </div>
            </div>

            <div className="hidden lg:block">
                <RightSidebarContent />
            </div>
        </div>
    );
}
