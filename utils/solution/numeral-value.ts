import { NUMERAL_VALUE_DICTIONARY } from "@/lib/constants/numeral-system";

export function numberValue(char: string): number {
    return NUMERAL_VALUE_DICTIONARY[char];
}
