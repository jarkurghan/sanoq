import { DIGITS } from "@/lib/constants/numeral-system";

export function convertFromDecimal(value: bigint, base: number): string {
    const bigBase = BigInt(base);

    let num = value;
    if (num === BigInt(0)) return "0";

    let result = "";
    while (num > 0) {
        const remainder = num % bigBase;
        num = num / bigBase;
        result = DIGITS[Number(remainder)] + result;
    }

    return result;
}
