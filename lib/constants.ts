export const NUMBER_SYSTEMS = [
    { value: "10", label: "numbersystem.decimal", name: "Decimal (Base 10)" },
    { value: "2", label: "numbersystem.binary", name: "Binary (Base 2)" },
    { value: "8", label: "numbersystem.octal", name: "Octal (Base 8)" },
    { value: "16", label: "numbersystem.hexadecimal", name: "Hexadecimal (Base 16)" },
    { value: "3", label: "numbersystem.ternary", name: "Ternary (Base 3)" },
    { value: "4", label: "numbersystem.quaternary", name: "Quaternary (Base 4)" },
    { value: "5", label: "numbersystem.quinary", name: "Quinary (Base 5)" },
    { value: "6", label: "numbersystem.senary", name: "Senary (Base 6)" },
    { value: "7", label: "numbersystem.septenary", name: "Septenary (Base 7)" },
    { value: "9", label: "numbersystem.nonary", name: "Nonary (Base 9)" },
    { value: "11", label: "numbersystem.undecimal", name: "Undecimal (Base 11)" },
    { value: "12", label: "numbersystem.duodecimal", name: "Duodecimal (Base 12)" },
    { value: "13", label: "numbersystem.tridecimal", name: "Tridecimal (Base 13)" },
    { value: "14", label: "numbersystem.tetradecimal", name: "Tetradecimal (Base 14)" },
    { value: "15", label: "numbersystem.pentadecimal", name: "Pentadecimal (Base 15)" },
    { value: "17", label: "numbersystem.heptadecimal", name: "Heptadecimal (Base 17)" },
    { value: "18", label: "numbersystem.octodecimal", name: "Octodecimal (Base 18)" },
    { value: "19", label: "numbersystem.enneadecimal", name: "Enneadecimal (Base 19)" },
    { value: "20", label: "numbersystem.vigesimal", name: "Vigesimal (Base 20)" },
    { value: "21", label: "numbersystem.unvigesimal", name: "Unvigesimal (Base 21)" },
    { value: "22", label: "numbersystem.duovigesimal", name: "Duovigesimal (Base 22)" },
    { value: "23", label: "numbersystem.trivigesimal", name: "Trivigesimal (Base 23)" },
    { value: "24", label: "numbersystem.tetravigesimal", name: "Tetravigesimal (Base 24)" },
    { value: "25", label: "numbersystem.pentavigesimal", name: "Pentavigesimal (Base 25)" },
    { value: "26", label: "numbersystem.hexavigesimal", name: "Hexavigesimal (Base 26)" },
    { value: "27", label: "numbersystem.heptavigesimal", name: "Heptavigesimal (Base 27)" },
    { value: "28", label: "numbersystem.octovigesimal", name: "Octovigesimal (Base 28)" },
    { value: "29", label: "numbersystem.enneavigesimal", name: "Enneavigesimal (Base 29)" },
    { value: "30", label: "numbersystem.trigesimal", name: "Trigesimal (Base 30)" },
    { value: "31", label: "numbersystem.untrigesimal", name: "Untrigesimal (Base 31)" },
    { value: "32", label: "numbersystem.duotrigesimal", name: "Duotrigesimal (Base 32)" },
    { value: "33", label: "numbersystem.tritrigesimal", name: "Tritrigesimal (Base 33)" },
    { value: "34", label: "numbersystem.tetratrigesimal", name: "Tetratrigesimal (Base 34)" },
    { value: "35", label: "numbersystem.pentatrigesimal", name: "Pentatrigesimal (Base 35)" },
    { value: "36", label: "numbersystem.hexatrigesimal", name: "Hexatrigesimal (Base 36)" },
] as const;

export const CALCULATOR_TYPES = [
    { value: "standard", label: "calculator.type.standard", name: "Standard Calculator" },
    // { value: "advanced", label: "calculator.type.advanced", name: "Advanced Calculator" },
    // { value: "logical", label: "calculator.type.logical", name: "Logical Calculator" },
] as const;

export const DEFAULT_NUMBER_SYSTEM = "10";
export const DEFAULT_TWICE_NUMBER_SYSTEM = "2";
export const DEFAULT_CALCULATOR_TYPE = "standard";
