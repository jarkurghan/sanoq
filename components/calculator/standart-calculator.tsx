"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/utils/button";
import { Base } from "@/types/base";

export default function StandartCalculator({ base }: { base: Base }) {
    // to-do: klaviatura bilan ishlaganda "eski qiymat" muammosi
    // hal qilish yo'li:
    //     const handlePercentage = () => {
    //         setDisplay((prevDisplay) => {
    //             const value = parseFloat(prevDisplay);
    //             const result = (value / 100).toString();
    //             setTopDisplay((prevTop) => {
    //                 if (waitingForSecondOperand) {
    //                     return `%${result} = `;
    //                 } else {
    //                     return prevTop;
    //                 }
    //             });
    //             return result;
    //         });
    //     };

    const [display, setDisplay] = useState("0");
    const [topDisplay, setTopDisplay] = useState("");
    const [firstOperand, setFirstOperand] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const inputDigit = (digit: string) => {
        if (topDisplay.endsWith("=")) {
            clearDisplay();
        }
        if (waitingForSecondOperand) {
            setDisplay(digit);
            setWaitingForSecondOperand(false);
        } else {
            setDisplay((prev) => (prev === "0" ? digit : prev + digit));
        }
    };

    const performOperation = (nextOperator: string) => {
        const inputValue = display;

        if (firstOperand === null) {
            setFirstOperand(inputValue);
            setTopDisplay(`${inputValue}${nextOperator}`);
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);
            setTopDisplay(`${result}${nextOperator}`);
            setDisplay(result);
            setFirstOperand(result);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    const parseBaseFloat = (input: string, base: number): number => {
        const [intPart, fracPart] = input.split(".");
        let result = parseInt(intPart, base);

        if (fracPart) {
            for (let i = 0; i < fracPart.length; i++) {
                const digit = parseInt(fracPart[i], base);
                if (isNaN(digit)) {
                    throw new Error(`Invalid digit '${fracPart[i]}' for base ${base}`);
                }
                result += digit / Math.pow(base, i + 1);
            }
        }

        return result;
    };

    const calculate = (firstOperand: string, secondOperand: string, operator: string) => {
        const first = parseBaseFloat(firstOperand, Number.parseInt(base));
        const second = parseBaseFloat(secondOperand, Number.parseInt(base));

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

        setTopDisplay((prev) => prev + inputValue + "=");
        setDisplay(result);
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const clearDisplay = () => {
        setTopDisplay("");
        setDisplay("0");
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
                digits.push(String.fromCharCode(65 + i - 10));
            }
        }

        return digits;
    };

    const handleDelete = () => {
        setDisplay((prev) => {
            if (prev.length > 1) {
                return prev.slice(0, -1);
            } else {
                return "0";
            }
        });
    };

    const handleSignChange = () => {
        if (display !== "0") {
            const baseNum = Number.parseInt(base);
            const decimalValue = Number.parseInt(display, baseNum);
            const negatedValue = -decimalValue;
            setDisplay(negatedValue.toString(baseNum).toUpperCase());
        }
    };

    const handleReciprocal = () => {
        const baseNum = Number.parseInt(base);
        const decimalValue = parseBaseFloat(display, baseNum);

        if (decimalValue === 0) {
            // setDisplay("Error")
            return;
        }

        const reciprocalValue = 1 / decimalValue;
        setTopDisplay(`1/${display} = `);
        setDisplay(reciprocalValue.toString(baseNum).toUpperCase());
    };

    const handlePercentage = () => {
        const baseNum = Number.parseInt(base);
        const decimalValue = parseBaseFloat(display, baseNum);
        const percentValue = decimalValue / 100;
        setTopDisplay(`%${display} = `);
        setDisplay(percentValue.toString(baseNum).toUpperCase());
    };

    const handleSquare = () => {
        const baseNum = Number.parseInt(base);
        const decimalValue = parseBaseFloat(display, baseNum);
        const squaredValue = decimalValue * decimalValue;
        setTopDisplay(`${display}² = `);
        setDisplay(squaredValue.toString(baseNum).toUpperCase());
    };

    const handleSquareRoot = () => {
        const baseNum = Number.parseInt(base);
        const decimalValue = parseBaseFloat(display, baseNum);

        if (decimalValue < 0) {
            // setDisplay("Error")
            return;
        }

        const sqrtValue = Math.sqrt(decimalValue);
        setTopDisplay(`√${display} = `);
        setDisplay(sqrtValue.toString(baseNum).toUpperCase());
    };

    const inputDecimal = () => {
        if (waitingForSecondOperand) {
            setDisplay("0.");
            setWaitingForSecondOperand(false);
            return;
        }

        if (!display.includes(".")) {
            setDisplay(display + ".");
        }
    };

    const digits = getAvailableDigits();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toUpperCase();
            console.log(key);

            if (digits.includes(key) || key === "0") inputDigit(key);
            else if (/^[/*-+]$/i.test(key)) performOperation(key);
            else if (key === "=" || key === "ENTER") handleEquals();
            else if (key === "BACKSPACE") handleDelete();
            else if (key === ".") inputDecimal();
            else if (key === "%") handlePercentage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex flex-col items-end font-mono h-16 bg-muted/50 border rounded-md overflow-x-auto px-4 py-1">
                <div className="text-sm text-gray-500">{topDisplay !== "" ? topDisplay : <>&nbsp;</>}</div>
                <div className="text-2xl">{display}</div>
            </div>

            <div className="grid grid-cols-4 gap-2">
                <Button variant="outline" onClick={() => performOperation("/")} className="text-primary">
                    ÷
                </Button>
                <Button variant="outline" onClick={() => performOperation("*")} className="text-primary">
                    ×
                </Button>

                <Button variant="outline" onClick={() => performOperation("-")} className="text-primary">
                    -
                </Button>
                <Button variant="outline" onClick={() => performOperation("+")} className="text-primary">
                    +
                </Button>
                <Button variant="outline" onClick={handleSignChange} className="text-primary">
                    ±
                </Button>
                <Button variant="outline" onClick={handleReciprocal} className="text-primary">
                    1/x
                </Button>
                <Button variant="outline" onClick={handlePercentage} className="text-primary">
                    %
                </Button>
                <Button variant="outline" onClick={handleEquals} className="col-span-1 text-primary">
                    =
                </Button>
                <Button variant="outline" onClick={handleSquare} className="text-primary">
                    x²
                </Button>
                <Button variant="outline" onClick={handleSquareRoot} className="text-primary">
                    √x
                </Button>
                <Button variant="outline" className="text-primary" onClick={clearDisplay}>
                    Clear
                </Button>
                <Button variant="outline" className="text-primary" onClick={handleDelete}>
                    ⌫
                </Button>

                {digits.map((digit) => (
                    <Button key={digit} variant="outline" onClick={() => inputDigit(digit)} className={digit >= "A" ? "bg-muted/50" : ""}>
                        {digit}
                    </Button>
                ))}
                {Number.parseInt(base) % 4 === 0 && (
                    <Button variant="outline" onClick={inputDecimal} className={"col-span-1"}>
                        {"."}
                    </Button>
                )}
                <Button variant="outline" onClick={() => inputDigit("0")} className={"col-span-" + (4 - (Number.parseInt(base) % 4))}>
                    {"0"}
                </Button>
                {Number.parseInt(base) % 4 !== 0 && (
                    <Button variant="outline" onClick={inputDecimal} className={"col-span-1"}>
                        {"."}
                    </Button>
                )}
            </div>
        </div>
    );
}
