"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { CONVERTER_SOLUTION_FRACTIONAL_PART } from "@/lib/default-values/fractional-part";
import { CONVERTER_SOLUTION_FRACTIONAL_PART_ON_TO_BASE } from "@/lib/default-values/fractional-part";
import { CONVERTER_SOLUTION_WHOLE_PART_ON_TO_BASE } from "@/lib/default-values/whole-part";
import { NUMERAL_VALUE_DICTIONARY } from "@/lib/constants/numeral-system";
import { SUPERSCRIPTMINUS } from "@/lib/constants/exponent";
import { SUPERSCRIPTS } from "@/lib/constants/exponent";
import { SUBSCRIPTS } from "@/lib/constants";
import { Language } from "@/lib/types/language";
import { getTranslation } from "@/lib/translater/i18n";
import { convertToDecimal } from "@/lib/utils/solution/convert-to-decimal";
import { convertFractionToDecimal } from "@/lib/utils/solution/convert-fraction-to-decimal";
import { convertFromDecimal } from "@/lib/utils/solution/convert-from-decimal";
import { convertFractionFromDecimal } from "@/lib/utils/solution/convert-fraction-from-decimal";
import { checkNumberFromBase } from "@/lib/utils/solution/check-number-from-base";
import { InlineMath } from "react-katex";
import { create, all } from "mathjs";
import Spinner from "../global/spinner";

const math = create(all);

export type Props = {
    inputNumber: string;
    fromBase: number;
    toBase: number;
    lang: Language;
    setResult: Dispatch<SetStateAction<string>>;
    waiting: boolean;
    setWaiting: Dispatch<SetStateAction<boolean>>;
    isHidden: boolean;
    setIsHidden: Dispatch<SetStateAction<boolean>>;
};

export default function ConvertSolution({ inputNumber, fromBase, toBase, lang, setResult, setWaiting, waiting, isHidden, setIsHidden }: Props) {
    const t = getTranslation(lang);
    const [isHiddenWholePart, setIsHiddenWholePart] = useState(true);
    const [isHiddenFractionalPart, setIsHiddenFractionalPart] = useState(true);
    const [isHiddenStep1, setIsHiddenStep1] = useState(true);
    const [isHiddenStep2, setIsHiddenStep2] = useState(true);
    const [part, setPart] = useState({ whole: false, fraction: false, negative: false, count: 0 });

    const [isFractional, setIsFractional] = useState(false);
    const [isNegative, setIsNegative] = useState(false);

    const [inputWholePart, setInputWholePart] = useState("");
    const [inputFractionalPart, setInputFractionalPart] = useState("");

    const [decWholePart, setDecWholePart] = useState("");
    const [decFractionalPart, setDecFractionalPart] = useState(CONVERTER_SOLUTION_FRACTIONAL_PART);

    const [toWholePart, toDecWholePart] = useState(CONVERTER_SOLUTION_WHOLE_PART_ON_TO_BASE);
    const [toFractionalPart, setToFractionalPart] = useState(CONVERTER_SOLUTION_FRACTIONAL_PART_ON_TO_BASE);

    useEffect(() => {
        const checkNumber = checkNumberFromBase(inputNumber, fromBase);
        if (!checkNumber || !Boolean(inputNumber)) {
            setIsHidden(true);
        } else {
            const checkNegative = inputNumber[0] === "-";
            const checkFractional = inputNumber.includes(".");
            const num = checkNegative ? inputNumber.slice(1).toUpperCase() : inputNumber.toUpperCase();

            const wholePart = num.split(".")[0];
            const fractionalPart = num.split(".")[1] || "";

            const decWholePart = convertToDecimal(wholePart, fromBase);
            const decFractionalPart = convertFractionToDecimal(fractionalPart, fromBase);

            const toWholePart = convertFromDecimal(decWholePart, toBase);
            const toFractionalPart = convertFractionFromDecimal(decFractionalPart, toBase);

            setIsNegative(checkNegative);
            setIsFractional(checkFractional);

            setInputWholePart(wholePart);
            setInputFractionalPart(fractionalPart);
            setDecWholePart(String(decWholePart));
            setDecFractionalPart(decFractionalPart);
            toDecWholePart(toWholePart);
            setToFractionalPart(toFractionalPart);

            setPart({
                whole: Boolean(wholePart),
                fraction: Boolean(fractionalPart),
                negative: checkNegative,
                count: Number(Boolean(wholePart)) + Number(Boolean(fractionalPart)) + Number(checkNegative),
            });

            setResult(`${toFractionalPart.exact ? "" : "≈"}${checkNegative ? "-" : ""}${toWholePart.value}${checkFractional ? toFractionalPart.value : ""}`);

            setIsHiddenStep1(fromBase === 10);
            setIsHiddenStep2(toBase === 10);
            setIsHiddenWholePart(!Boolean(wholePart));
            setIsHiddenFractionalPart(!Boolean(fractionalPart));
            setIsHidden(false);
        }
        setWaiting(false);
    }, [inputNumber, fromBase, toBase]);

    return (
        <React.Fragment>
            {waiting ? (
                <div className="min-h-60 flex items-center justify-center">
                    <Spinner size={40} />
                </div>
            ) : (
                !isHidden && (
                    <div className="mx-auto pt-10 leading-relaxed">
                        <h2 className="text-xl font-bold mt-6 mb-4">
                            {inputNumber.toUpperCase()} sonini {t("calculator.info.title." + fromBase).toLowerCase()}dan{" "}
                            {t("calculator.info.title." + toBase).toLowerCase()}ga o'tkazish
                        </h2>

                        {part.count > 1 && (
                            <p className="mb-4">
                                Avval sonni {part.count} qismga bo'lib olamiz:
                                {part.negative && (
                                    <span className="block">
                                        ishora:
                                        <code className="bg-card text-card-foreground p-1 rounded">-</code>
                                    </span>
                                )}
                                {part.whole && (
                                    <span className="block">
                                        butun qismi:
                                        <code className="bg-card text-card-foreground p-1 rounded">{inputWholePart}</code>
                                    </span>
                                )}
                                {part.fraction && (
                                    <span className="block">
                                        kasr qismi:
                                        <code className="bg-card text-card-foreground p-1 rounded">{inputFractionalPart}</code>
                                    </span>
                                )}
                            </p>
                        )}
                        {!isHiddenStep1 && (
                            <React.Fragment>
                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        <p className="mb-4">
                                            <strong>
                                                {!isHiddenStep2 && "1-qadam: "}
                                                {t("calculator.info.title." + fromBase).toLowerCase()}dan {t("calculator.info.title.10").toLowerCase()}
                                                ga o'tkazamiz
                                            </strong>
                                        </p>

                                        <p className="font-medium">
                                            Butun qismi:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded">
                                                {inputWholePart}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-4">Har bir raqam {t("calculator.info.title." + fromBase).toLowerCase()}da quyidagicha:</p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            <span className="block">
                                                {inputWholePart
                                                    .split("")
                                                    .map(
                                                        (raqam, i) =>
                                                            `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${fromBase}${SUPERSCRIPTS[inputWholePart.length - 1 - i]}`
                                                    )
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">
                                                ={" "}
                                                {inputWholePart
                                                    .split("")
                                                    .map(
                                                        (raqam, i) =>
                                                            `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${math.pow(fromBase, inputWholePart.length - 1 - i)}`
                                                    )
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">
                                                ={" "}
                                                {inputWholePart
                                                    .split("")
                                                    .map(
                                                        (raqam, i) =>
                                                            `${math.multiply(
                                                                Number(NUMERAL_VALUE_DICTIONARY[raqam]),
                                                                math.pow(fromBase, inputWholePart.length - 1 - i)
                                                            )}`
                                                    )
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">= {decWholePart}</span>
                                        </pre>
                                    </React.Fragment>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        {!isHiddenWholePart && (
                                            <p className="font-medium mt-8 mb-2">
                                                Kasr qismi:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded">
                                                    0.{inputFractionalPart}
                                                    {SUBSCRIPTS[fromBase]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-4">Bu {t("calculator.info.title." + fromBase).toLowerCase()}da ifodalanayotgan bo‘lsa:</p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            <span className="block">
                                                {inputFractionalPart
                                                    .split("")
                                                    .map(
                                                        (raqam, i) =>
                                                            `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${fromBase}${SUPERSCRIPTMINUS}${SUPERSCRIPTS[i + 1]}`
                                                    )
                                                    .join(" + ")}
                                            </span>
                                            <span className="block py-1">
                                                ={" "}
                                                {inputFractionalPart.split("").map((raqam, i) => (
                                                    <span key={i}>
                                                        <InlineMath math={`\\frac{${NUMERAL_VALUE_DICTIONARY[raqam]}}{${fromBase}${SUPERSCRIPTS[i + 1]}}`} />
                                                        {i !== inputFractionalPart.length - 1 && " + "}
                                                    </span>
                                                ))}
                                            </span>
                                            <span className="block py-1">
                                                ={" "}
                                                {inputFractionalPart.split("").map((raqam, i) => (
                                                    <span key={i}>
                                                        <InlineMath math={`\\frac{${NUMERAL_VALUE_DICTIONARY[raqam]}}{${math.pow(fromBase, i + 1)}}`} />
                                                        {i !== inputFractionalPart.length - 1 && " + "}
                                                    </span>
                                                ))}
                                            </span>
                                            <span className="block py-1">
                                                = <InlineMath math={`\\frac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </span>
                                            <span className="block">
                                                {decFractionalPart.exact ? "=" : "≈"} 0{decFractionalPart.value}
                                            </span>
                                        </pre>
                                    </React.Fragment>
                                )}
                                <p className="font-medium mt-8">
                                    Demak,{" "}
                                    <code className="bg-card text-card-foreground px-1 rounded">
                                        {inputWholePart}
                                        {isFractional ? "." : ""}
                                        {inputFractionalPart}
                                        {SUBSCRIPTS[fromBase]} {decFractionalPart.exact ? "=" : "≈"} {decWholePart}
                                        {decFractionalPart.value}
                                        {SUBSCRIPTS[10]}
                                    </code>
                                </p>
                            </React.Fragment>
                        )}

                        {!isHiddenStep2 && (
                            <React.Fragment>
                                <p className="mb-4 mt-8">
                                    <strong>
                                        {!isHiddenStep1 && "2-qadam: "}
                                        {t("calculator.info.title.10").toLowerCase()}dan {t("calculator.info.title." + toBase).toLowerCase()}ga o'tkazamiz
                                    </strong>
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        {!isHiddenFractionalPart && (
                                            <p className="font-medium">
                                                Butun qismi:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded">
                                                    {decWholePart}
                                                    {SUBSCRIPTS[10]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-4">
                                            {t("calculator.info.title.10").toLowerCase()}dagi sonni {t("calculator.info.title." + toBase).toLowerCase()}ga
                                            o‘tkazish uchun bo‘lib chiqamiz:
                                        </p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            {toWholePart.steps
                                                .map((step) => `${step.dividend} ÷ ${step.divisor} = ${step.quotient}     qoldiq ${step.remainder}`)
                                                .join("\n")}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            Pastdan yuqoriga qarab yozamiz:
                                            <code className="bg-card text-card-foreground p-1 rounded">
                                                {decWholePart}
                                                {SUBSCRIPTS[10]} = {toWholePart.value}
                                                {SUBSCRIPTS[toBase]}
                                            </code>
                                        </p>
                                    </React.Fragment>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className="font-medium mt-8 mb-2">
                                            Kasr qismi:{" "}
                                            <code className="bg-card text-card-foreground px-1 py-2 rounded">
                                                0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]} {decFractionalPart.exact ? "=" : "≈"}{" "}
                                                <InlineMath math={`\\frac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </code>
                                        </p>

                                        <p className="mb-4">Kasrni {t("calculator.info.title." + toBase).toLowerCase()}ga aylantirish uchun:</p>

                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2">
                                            {toFractionalPart.steps.map((step, i) => (
                                                <span className="block py-1" key={i}>
                                                    <span className="inline-block w-80">
                                                        <InlineMath math={`\\frac{${step.numerator}}{${step.denominator}}`} /> × {step.multiplicand} ={" "}
                                                        {step.remainder !== 0 && step.remainder}
                                                        <InlineMath math={`\\frac{${step.result}}{${step.denominator}}`} /> = {step.remainder} +{" "}
                                                        <InlineMath math={`\\frac{${step.result}}{${step.denominator}}`} />
                                                    </span>
                                                    {step.remainder}
                                                </span>
                                            ))}
                                            {toFractionalPart.period.isPeriod !== false && <span className="font-bold p-1">...</span>}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            {toFractionalPart.period.isPeriod !== false && (
                                                <span>
                                                    Bu jarayon davriy davom etadi. Davr davomiyligi{" "}
                                                    {toFractionalPart.period.isPeriod === true ? toFractionalPart.period.length : "ancha katta"}:
                                                </span>
                                            )}
                                            <code className="block bg-card text-card-foreground px-1 rounded">
                                                0{toFractionalPart.value}
                                                {!toFractionalPart.exact && "..."}
                                            </code>
                                        </p>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        )}

                        <p className="font-medium mt-8 mb-2">
                            <strong className="block">Yakuniy natija:</strong>
                            <code className="bg-card text-card-foreground p-1 rounded">
                                {isNegative && "-"}
                                {inputWholePart}
                                {isFractional && "."}
                                {inputFractionalPart}
                                {SUBSCRIPTS[fromBase]} {toFractionalPart.exact ? "=" : "≈"} {isNegative && "-"}
                                {toWholePart.value}
                                {isFractional && toFractionalPart.value}
                                {SUBSCRIPTS[toBase]}
                            </code>
                        </p>
                    </div>
                )
            )}
        </React.Fragment>
    );
}
