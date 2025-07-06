export type Props = {
    inputNumber: string;
    fromBase: number;
    toBase: number;
};

export type Period = { isPeriod: true; length: number } | { isPeriod: false; length?: undefined };

export type FractionalPart = {
    numerator: number | BigInt;
    denominator: number | BigInt;
    period: Period;
    value: string;
}
