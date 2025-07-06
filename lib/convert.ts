import { FractionalPart, Period } from "@/types/converter";
import { create, all } from 'mathjs';
const math = create(all);

function gcd(a: bigint, b: bigint): bigint {
    while (b !== 0n) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function removeFactors(n: bigint, factor: bigint): bigint {
    while (n % factor === 0n) {
        n /= factor;
    }
    return n;
}

function findRepeatingDecimalPeriod(denominator: bigint): Period {
    let d = removeFactors(denominator, 2n);
    d = removeFactors(d, 5n);

    if (d === 1n) return { isPeriod: false }

    let remainder = 10n % d;
    let k = 1;
    while (remainder !== 1n) {
        remainder = (remainder * 10n) % d;
        k++;
    }

    return { isPeriod: true, length: k };
}

function countFactor(n: bigint, factor: bigint): number {
    let count = 0;
    while (n % factor === 0n) {
        n /= factor;
        count++;
    }
    return count;
}

function findNonRepeatingLength(denominator: bigint): number {
    const count2 = countFactor(denominator, 2n);
    const count5 = countFactor(denominator, 5n);
    return Math.max(count2, count5);
}


export function handlePart2(input: string): FractionalPart;
export function handlePart2(input: FractionalPart): FractionalPart;
export function handlePart2(input: string | FractionalPart): FractionalPart {
    if (typeof input === "string") {
        const parsed = JSON.parse(input);

        return {
            ...parsed,
            numerator:
                typeof parsed.numerator === "string" ? BigInt(parsed.numerator) : parsed.numerator,
            denominator:
                typeof parsed.denominator === "string" ? BigInt(parsed.denominator) : parsed.denominator,
        };
    } else {
        return input;
    }
}

const numberValDict: Record<string, number> = {
    "0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
    "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
    A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
    G: 16, H: 17, I: 18, J: 19, K: 20, L: 21,
    M: 22, N: 23, O: 24, P: 25, Q: 26, R: 27,
    S: 28, T: 29, U: 30, V: 31, W: 32, X: 33,
    Y: 34, Z: 35
};
export function numberValue(char: string): number {
    return numberValDict[char];
}

export function convertToDecimal(value: string, base: number): bigint {
    let result = BigInt(0);
    const bigBase = BigInt(base);
    for (const char of value) {
        const digit = BigInt(numberValue(char));
        result = result * bigBase + digit;
    }
    return result;
}

const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export function convertFromDecimal(value: bigint, base: number): string {
    const bigBase = BigInt(base);

    let num = value;
    if (num === BigInt(0)) return "0";

    let result = "";
    while (num > 0) {
        const remainder = num % bigBase;
        num = num / bigBase;
        result = digits[Number(remainder)] + result;
    }

    return result;
}


function getPeriodikValue(numerator: bigint, denominator: bigint, period: Period): string {
    if (period.isPeriod === false) {
        return math.fraction(numerator, denominator).toString();
    } else if (period.length < 15) {
        const noPeriod = findNonRepeatingLength(denominator);

        const frac = math.fraction(numerator, denominator);
        const decimalStr = math.number(frac).toFixed(noPeriod + period.length);

        const nonPeriodPart = decimalStr.slice(0, noPeriod + 2);
        const periodPart = decimalStr.slice(noPeriod + 2, noPeriod + 2 + period.length);

        return `${nonPeriodPart}(${periodPart})`;
    } else {
        const frac = math.fraction(numerator, denominator);
        return math.number(frac).toFixed(10);
    }
}
/**
 * kasrni o'nlik sanoq sistemasiga o‘tkazadi, natijani FractionalPart sifatida qaytaradi.
 * @param fraction - kasr qismi, butun son shaklida
 * @param base - sanoq sistemasi
 */
export function convertFractionToDecimal(fraction: string, base: number): FractionalPart {
    const bigBase = BigInt(base);
    const bigLen = BigInt(fraction.length);

    const oneTimeNumerator = convertToDecimal(fraction, base);
    const oneTimeDenominator = bigBase ** bigLen;
    const divisor = gcd(oneTimeNumerator, oneTimeDenominator);

    const numerator = oneTimeDenominator / divisor;
    const denominator = oneTimeDenominator / divisor;
    const period = findRepeatingDecimalPeriod(denominator);
    const value = getPeriodikValue(numerator, denominator, period);

    return { numerator, denominator, period, value };
}


// export function convertFractionFromDecimal(numerator: bigint, denominator: bigint, base: number, maxDigits: number = 100): { base: number; value: string } {
//     const digits: string[] = [];
//     const seen = new Map<bigint, number>();
//     let remainder = numerator % denominator;
//     let index = 0;
//     let periodStart = -1;

//     while (remainder !== 0n && index < maxDigits) {
//         if (seen.has(remainder)) {
//             periodStart = seen.get(remainder)!;
//             break;
//         }
//         seen.set(remainder, index);
//         remainder *= BigInt(base);
//         const digit = remainder / denominator;
//         digits.push(digit.toString(base).toUpperCase());
//         remainder %= denominator;
//         index++;
//     }

//     let value = "0.";

//     if (periodStart >= 0) {
//         const nonRepeat = digits.slice(0, periodStart).join("");
//         const repeat = digits.slice(periodStart).join("");
//         value += `${nonRepeat}(${repeat})`;
//     } else {
//         value += digits.join("");
//     }

//     return { base, value };
// }



export function convertFractionFromDecimal(fraction: FractionalPart, numerator: bigint, denominator: bigint, base: number, maxDigits: number = 100): { base: number; value: string } {
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
