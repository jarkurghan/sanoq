import { DIGITS } from "@/lib/constants/numeral-system";
import { FractionalPart } from "@/types/converter";
import { FractionalPartOnToBase } from "@/types/converter";

const MAX_STACK_LIMIT = 300;

export function convertFractionFromDecimal(fraction: FractionalPart, base: number): FractionalPartOnToBase {
    const numerator = BigInt(fraction.numerator);
    const denominator = BigInt(fraction.denominator);
    const bigBase = BigInt(base);

    const seen = new Map();
    let remainder = numerator % denominator;
    let result = "";

    const steps: { denominator: number; numerator: number; result: number; remainder: number; multiplicand: number }[] = [];
    const denominatorNumber = Number(denominator);

    while (!seen.has(remainder)) {
        if (result.length >= MAX_STACK_LIMIT) return { period: { isPeriod: null }, value: "." + result.slice(0, 15), steps, exact: false };

        const digit = (remainder * bigBase) / denominator;
        result += DIGITS[Number(digit)];
        const newRemainder = (remainder * bigBase) % denominator;

        seen.set(remainder, result.length);
        steps.push({
            denominator: denominatorNumber,
            numerator: Number(remainder),
            result: Number(newRemainder),
            remainder: Number(digit),
            multiplicand: base,
        });

        if (newRemainder === 0n) break;

        remainder = newRemainder;
    }

    const firstIndex = seen.get(remainder);
    const periodLength = result.length - firstIndex;
    const value = `.${result.slice(0, firstIndex - 1)}(${result.slice(firstIndex - 1)})`;

    if (periodLength > 15) return { period: { isPeriod: true, length: periodLength }, value: `.${result.slice(0, 15)}`, steps, exact: false };

    if (periodLength === 0) return { period: { isPeriod: false }, value: "." + result, steps, exact: true };

    return { period: { isPeriod: true, length: periodLength }, value, steps, exact: true };
}
