import { FractionalPart } from "@/types/converter";

export function convertFractionFromDecimal(
    fraction: FractionalPart,
    numerator: bigint,
    denominator: bigint,
    base: number,
    maxDigits: number = 100
): { base: number; value: string } {
    if (fraction.period.isPeriod === false) {
    } else if (fraction.period.length < 15) {
    } else {
    }
    const digits: string[] = [];
    const seen = new Map<bigint, number>();
    let remainder = numerator % denominator;
    let index = 0;
    let periodStart = -1;

    while (remainder !== 0n && index < maxDigits) {
        if (seen.has(remainder)) {
            periodStart = seen.get(remainder)!;
            break;
        }
        seen.set(remainder, index);
        remainder *= BigInt(base);
        const digit = remainder / denominator;
        digits.push(digit.toString(base).toUpperCase());
        remainder %= denominator;
        index++;
    }

    let value = "0.";

    if (periodStart >= 0) {
        const nonRepeat = digits.slice(0, periodStart).join("");
        const repeat = digits.slice(periodStart).join("");
        value += `${nonRepeat}(${repeat})`;
    } else {
        value += digits.join("");
    }

    return { base, value };
}
