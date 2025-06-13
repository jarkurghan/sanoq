"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { useSearchParams } from "next/navigation";
import { DEFAULT_NUMBER_SYSTEM, DEFAULT_CALCULATOR_TYPE } from "@/lib/constants";
import StandartCalculator from "@/components/standart-calculator";
import CalculatorText from "@/components/standart-calculator-info";
import CalculatorRightSidebar from "@/components/calculator-right-sidebar";

export default function CalculatorPage() {
    const { t } = useLanguage();
    const searchParams = useSearchParams();

    const base = searchParams.get("base") || DEFAULT_NUMBER_SYSTEM;
    const type = searchParams.get("type") || DEFAULT_CALCULATOR_TYPE;
    const [digits, setDigits] = useState<string[]>([]);

    const [display, setDisplay] = useState("0");
    const [firstOperand, setFirstOperand] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const clearDisplay = () => {
        setDisplay("0");
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const inputDigit = (digit: string) => {
        if (waitingForSecondOperand) {
            setDisplay(digit);
            setWaitingForSecondOperand(false);
        } else {
            setDisplay(display === "0" ? digit : display + digit);
        }
    };

    const performOperation = (nextOperator: string) => {
        const inputValue = display;

        if (firstOperand === null) {
            setFirstOperand(inputValue);
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);
            setDisplay(result);
            setFirstOperand(result);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    const calculate = (firstOperand: string, secondOperand: string, operator: string) => {
        const first = Number.parseInt(firstOperand, Number.parseInt(base));
        const second = Number.parseInt(secondOperand, Number.parseInt(base));

        let result: number;

        switch (operator) {
            case "+":
                result = first + second;
                break;
            case "-":
                result = first - second;
                break;
            case "*":
                result = first * second;
                break;
            case "/":
                result = Math.floor(first / second);
                break;
            case "AND":
                result = first & second;
                break;
            case "OR":
                result = first | second;
                break;
            case "XOR":
                result = first ^ second;
                break;
            case "<<":
                result = first << second;
                break;
            case ">>":
                result = first >> second;
                break;
            default:
                return secondOperand;
        }

        return result.toString(Number.parseInt(base)).toUpperCase();
    };

    const handleEquals = () => {
        if (!firstOperand || !operator) return;

        const inputValue = display;
        const result = calculate(firstOperand, inputValue, operator);

        setDisplay(result);
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const getAvailableDigits = () => {
        const baseNum = Number.parseInt(base);
        const digits = [];

        for (let i = 1; i < Math.min(baseNum, 10); i++) {
            digits.push(i.toString());
        }

        if (baseNum > 10) {
            for (let i = 10; i < baseNum; i++) {
                digits.push(String.fromCharCode(65 + i - 10)); // A, B, C, etc.
            }
        }

        digits.push("0");

        setDigits(digits);
    };

    useEffect(() => {
        getAvailableDigits();
    }, [base]);

    const renderAdvancedCalculator = () => {
        return (
            <div className="space-y-4">
                <div className="border rounded-md p-4 text-right text-2xl font-mono h-16 flex items-center justify-end overflow-x-auto bg-muted/50">
                    {display}
                </div>
                <div className="text-center text-muted-foreground">
                    <p>{t("calculator.advanced.description")}</p>
                </div>
            </div>
        );
    };

    const renderLogicalCalculator = () => {
        return (
            <div className="space-y-4">
                <div className="border rounded-md p-4 text-right text-2xl font-mono h-16 flex items-center justify-end overflow-x-auto bg-muted/50">
                    {display}
                </div>

                <div className="grid grid-cols-4 gap-2">
                    <Button variant="outline" className="col-span-2" onClick={clearDisplay}>
                        {t("calculator.clear")}
                    </Button>
                    <Button variant="outline" onClick={() => performOperation("AND")} className="text-primary">
                        AND
                    </Button>
                    <Button variant="outline" onClick={() => performOperation("OR")} className="text-primary">
                        OR
                    </Button>

                    {/* Render available digits */}
                    {digits.slice(0, 8).map((digit) => (
                        <Button key={digit} variant="outline" onClick={() => inputDigit(digit)} className={digit >= "A" ? "bg-muted/50" : ""}>
                            {digit}
                        </Button>
                    ))}

                    <Button variant="outline" onClick={() => performOperation("XOR")} className="text-primary">
                        XOR
                    </Button>
                    <Button variant="outline" onClick={() => performOperation("<<")} className="text-primary">
                        {"<<"}
                    </Button>
                    <Button variant="outline" onClick={() => performOperation(">>")} className="text-primary">
                        {">>"}
                    </Button>
                    <Button variant="outline" onClick={handleEquals} className="bg-primary text-primary-foreground hover:bg-primary/90">
                        =
                    </Button>
                </div>
            </div>
        );
    };

    const renderCalculator = () => {
        switch (type) {
            case "advanced":
                return renderAdvancedCalculator();
            case "logical":
                return renderLogicalCalculator();
            default:
                return <StandartCalculator clearDisplay={clearDisplay} base={base} />;
        }
    };

    return (
        <div className="flex">
            <div className="flex-1 container py-4 max-w-7xl ml-0 lg:ml-64 px-2 sm:px-8 sm:grid grid-cols-[1fr_auto] gap-8 xl:gap-20">
                <CalculatorText />
                <div className="w-fit">
                    <Card>
                        <CardHeader className="pt-1" />
                        <CardContent>{renderCalculator()}</CardContent>
                    </Card>
                </div>
            </div>

            <div className="hidden lg:block">
                <CalculatorRightSidebar />
            </div>
        </div>
    );
}
