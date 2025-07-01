"use client";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as math from "mathjs";

type Props = {
    inputNumber: string;
    fromBase: number;
    toBase: number;
};

type Step = {
    base?: number;
    value: string;
    sup?: number;
};

export default function ConvertSolution({ inputNumber, fromBase, toBase }: Props) {
    const [isHidden, setIsHidden] = useState(true);
    const [isHiddenPart1, setIsHiddenPart1] = useState(true);
    const [isHiddenPart2, setIsHiddenPart2] = useState(true);

    const [isFractional, setIsFractional] = useState(false);
    const [isNegative, setIsNegative] = useState(false);

    useEffect(() => {
        try {
            const isFractional = inputNumber.includes(".");
            const dotIndex = inputNumber.indexOf(".");
            const lengthOfInputNumber = inputNumber.length;
            const lengthOfWholePart = isFractional ? dotIndex : lengthOfInputNumber;

            let sum = 0;

            const steps: Step[] = [{ base: fromBase, value: inputNumber }, { value: "=" }];
            const steps2: Step[] = [{ value: "=" }];
            const steps3: Step[] = [{ value: "=" }];
            const steps4: Step[] = [{ value: "=" }];
            for (let i = lengthOfWholePart - 1, j = 0; i >= 0; i--, j++) {
                steps.push({ value: inputNumber[j] });
                steps.push({ value: "*" });
                steps.push({ value: String(fromBase), sup: i });
                if (i > 0) steps.push({ value: "+" });

                steps2.push({ value: inputNumber[j] });
                steps2.push({ value: "*" });
                steps2.push({ value: String(math.pow(Number(fromBase), i)) });
                if (i > 0) steps2.push({ value: "+" });

                const value = math.multiply(Number(inputNumber[j]), math.pow(Number(fromBase), i));
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
                for (let j = dotIndex + 1; j < lengthOfInputNumber; j++) {
                    steps.push({ value: "+" });
                    steps.push({ value: inputNumber[j] });
                    steps.push({ value: "*" });
                    steps.push({ value: String(fromBase), sup: dotIndex - j });

                    steps2.push({ value: "+" });
                    steps2.push({ value: inputNumber[j] });
                    steps2.push({ value: "*" });
                    steps2.push({ value: String(math.pow(fromBase, dotIndex - j)) });

                    const value = math.multiply(Number(inputNumber[j]), Number(math.pow(fromBase, dotIndex - j)));
                    sum = math.add(sum, value);

                    steps3.push({ value: "+" });
                    steps3.push({ value: String(value) });

                    if (value !== 0) {
                        steps4.push({ value: "+" });
                        steps4.push({ value: String(value) });
                    }
                }
            }

            // const decimalValue = Number.parseInt(inputNumber, Number.parseInt(fromBase));
            // if (!isNaN(decimalValue)) {
            //     setRightValue(decimalValue.toString(Number.parseInt(toBase)).toUpperCase());
            // }

            steps.push(...steps2);
            steps.push(...steps3);
            if (steps3.length !== steps4.length) steps.push(...steps4);

            steps.push({ value: "=" });
            steps.push({ value: String(sum), base: 10 });

            // const x = floatToBinary(sum);

            // setRightValue(String(x));
            // setTables(steps);
        } catch (error) {
            console.log(error);
            setIsHidden(true);
        }
    }, [inputNumber, fromBase, toBase]);

    return (
        <div className="mx-auto pt-10 text-gray-800 leading-relaxed">
            <h2 className="text-xl font-bold mt-6 mb-4">1234.9 sonini o'ttiz oltilik sanoq sistemasidan ikkilik sanoq sistemasiga o'tkazish</h2>

            {/* agar o'nlikdan bo'lmasa */}
            <p className="mb-4">
                <strong>1-qadam: 36 lik sondan 10 likka o'tkazamiz</strong>
            </p>
            <p className="font-medium">
                Butun qismi: <code className="bg-gray-100 px-1 rounded">1234₃₆</code>
            </p>

            <p className="mb-4">Har bir raqam 36 lik sanoq sistemasida quyidagicha:</p>
            <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                {`1 × 36³ + 2 × 36² + 3 × 36¹ + 4 × 36⁰
= 1 × 46656 + 2 × 1296 + 3 × 36 + 4 × 1
= 46656 + 2592 + 108 + 4
= 49360`}
            </pre>

            <p className="font-medium mt-8 mb-2">
                Kasr qismi: <code className="bg-gray-100 px-1 rounded">.9₃₆</code>
            </p>

            <p className="mb-4">
                Bu <code className="bg-gray-100 px-1 rounded">.9</code> raqami 36-likda ifodalanayotgan bo‘lsa, u:
            </p>

            <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono mt-2">{`9 × 36⁻¹ = 9 / 36 = 0.25`}</pre>

            <p className="font-medium mt-8">
                Demak, <code className="bg-gray-100 px-1 rounded">1234.9₃₆ = 49360.25₁₀</code>
            </p>

            {/* agar o'nlikdan bo'lmasa */}
            <p className="mb-4">
                <strong>2-qadam: 10 likdan 3 likka o'tkazamiz</strong>
            </p>
            <p className="font-medium">
                Butun qismi: <code className="bg-gray-100 px-1 rounded">49360₁₀</code>
            </p>

            <p className="mb-4">10 lik sonni 3 likka o‘tkazish uchun bo‘lib chiqamiz:</p>
            <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                {`49360 ÷ 3 = 16453 qoldiq 1
16453 ÷ 3 = 5484 qoldiq 1  
5484 ÷ 3 = 1828 qoldiq 0  
1828 ÷ 3 = 609  qoldiq 1  
609 ÷ 3 = 203   qoldiq 0  
203 ÷ 3 = 67    qoldiq 2  
67 ÷ 3 = 22     qoldiq 1  
22 ÷ 3 = 7      qoldiq 1  
7 ÷ 3 = 2       qoldiq 1  
2 ÷ 3 = 0       qoldiq 2  `}
            </pre>
            <p className="font-medium">
                Yuqoridan pastga qarab yozamiz:
                <code className="block bg-gray-100 px-1 rounded">49360₁₀ = 2111210121₃</code>
            </p>

            <p className="font-medium mt-8 mb-2">
                Kasr qismi: <code className="bg-gray-100 px-1 rounded">0.25₁₀</code>
            </p>

            <p className="mb-4">Kasrni 3 likka aylantirish uchun:</p>

            <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono mt-2">{`0.25 × 3 = 0.75 → 0
0.75 × 3 = 2.25 → 2
0.25 × 3 = 0.75 → 0
0.75 × 3 = 2.25 → 2
...`}</pre>
            <p className="font-medium">
                Bu 0, 2, 0, 2, 0, 2, ... ko‘rinishida <strong>davriy</strong> ketadi:
                <code className="block bg-gray-100 px-1 rounded">0.202020...</code>
            </p>

            <p className="font-medium mt-8 mb-2">
                Yakuniy natija: <code className="bg-gray-100 px-1 rounded">1234.9₃₆ = 2111210121.202020...₃</code> yoki{" "}
                <code className="bg-gray-100 px-1 rounded">1234.9₃₆ = 2111210121.(20)₃</code>
            </p>
        </div>
    );
}
