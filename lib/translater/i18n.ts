type Language = "uz" | "en" | "ru";

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navigation
        "nav.conversion": "Conversion",
        "nav.publications": "Publications",
        "nav.calculator": "Calculator",
        "nav.code": "Code",
        "nav.about": "About",

        // Home page
        "home.title": "Number System Converter",
        "home.description": "Convert between binary, octal, decimal, and hexadecimal number systems.",
        "home.from": "From",
        "home.to": "To",
        "home.input": "Input Value",
        "home.result": "Result",
        "home.swap": "Swap",

        "home.seo.title": "Numeral system converter",
        "home.seo.description": "Numeral system converter: quickly and easily convert numbers between different numeral systems.",
        "home.seo.keywords": "numeral systems, converter, number conversion, online calculator, base conversion",

        // Number systems
        "numbersystem.binary": "Binary (Base 2)",
        "numbersystem.octal": "Octal (Base 8)",
        "numbersystem.decimal": "Decimal (Base 10)",
        "numbersystem.hexadecimal": "Hexadecimal (Base 16)",
        "numbersystem.ternary": "Ternary (Base 3)",
        "numbersystem.quaternary": "Quaternary (Base 4)",
        "numbersystem.quinary": "Quinary (Base 5)",
        "numbersystem.senary": "Senary (Base 6)",
        "numbersystem.septenary": "Septenary (Base 7)",
        "numbersystem.nonary": "Nonary (Base 9)",
        "numbersystem.undecimal": "Undecimal (Base 11)",
        "numbersystem.duodecimal": "Duodecimal (Base 12)",
        "numbersystem.tridecimal": "Tridecimal (Base 13)",
        "numbersystem.tetradecimal": "Tetradecimal (Base 14)",
        "numbersystem.pentadecimal": "Pentadecimal (Base 15)",
        "numbersystem.heptadecimal": "Heptadecimal (Base 17)",
        "numbersystem.octodecimal": "Octodecimal (Base 18)",
        "numbersystem.enneadecimal": "Enneadecimal (Base 19)",
        "numbersystem.vigesimal": "Vigesimal (Base 20)",
        "numbersystem.unvigesimal": "Unvigesimal (Base 21)",
        "numbersystem.duovigesimal": "Duovigesimal (Base 22)",
        "numbersystem.trivigesimal": "Trivigesimal (Base 23)",
        "numbersystem.tetravigesimal": "Tetravigesimal (Base 24)",
        "numbersystem.pentavigesimal": "Pentavigesimal (Base 25)",
        "numbersystem.hexavigesimal": "Hexavigesimal (Base 26)",
        "numbersystem.heptavigesimal": "Heptavigesimal (Base 27)",
        "numbersystem.octovigesimal": "Octovigesimal (Base 28)",
        "numbersystem.enneavigesimal": "Enneavigesimal (Base 29)",
        "numbersystem.trigesimal": "Trigesimal (Base 30)",
        "numbersystem.untrigesimal": "Untrigesimal (Base 31)",
        "numbersystem.duotrigesimal": "Duotrigesimal (Base 32)",
        "numbersystem.tritrigesimal": "Tritrigesimal (Base 33)",
        "numbersystem.tetratrigesimal": "Tetratrigesimal (Base 34)",
        "numbersystem.pentatrigesimal": "Pentatrigesimal (Base 35)",
        "numbersystem.hexatrigesimal": "Hexatrigesimal (Base 36)",

        // Publications page
        "publications.search": "Search...",
        "publications.learnmore": "Learn",
        "publications.notfound": "No topics found matching your search.",

        "publications.seo.title": "Articles — Read and explore topics on numeral systems",
        "publications.seo.description":
            "Discover informative articles on numeral systems including binary, decimal, hexadecimal, and more — learn how numbers are represented and used in math and computing.",
        "publications.seo.keywords":
            "numeral systems, articles, decimal system, binary system, hexadecimal system, mathematics, digits, positional notation, number history, computation",

        // Calculator page
        "calculator.title": "Number System Calculator",
        "calculator.description": "Perform calculations in different number systems.",
        "calculator.standard.title": "Standard Calculator",
        "calculator.standard.description":
            "Simple and intuitive interface designed for everyday calculations, easy and convenient to use. Allows you to perform basic arithmetic operations quickly and accurately.",
        "calculator.basic.features": "Basic features:",
        "calculator.arithmetic": "Arithmetic operations:",
        "calculator.sign.change": "Sign change and reciprocal:",
        "calculator.percentage": "Find 1 percent of a number:",
        "calculator.square.root": "Square and root:",
        "calculator.clear.delete": "Clear and delete buttons:",
        "calculator.decimal.numbers": "Working with decimal numbers:",
        "calculator.numbersystem": "Number System",
        "calculator.type": "Calculator Type",
        "calculator.type.standard": "Standard",
        "calculator.type.advanced": "Advanced",
        "calculator.type.logical": "Logical",

        // calculator info
        "calculator.info.description.10":
            "is a positional number system naturally used by humans, based on 10 digits. Used in most calculators, user interfaces, and all areas of mathematics",
        "calculator.info.description.2":
            "is a positional number system based on 2 digits. The basic operating principle of computers is based on this number system: memory, processor, files, electrical signals, etc.",
        "calculator.info.description.8": "is a positional number system based on 8 digits. Used in some places",
        "calculator.info.description.16":
            "is a positional number system based on 16 digits. Used for computer technology, memory addresses, color codes (CSS), bit operations, assembler and debugging",
        "calculator.info.description.3": "is a positional number system based on 3 digits. Rarely used in the modern world",
        "calculator.info.description.4": "is a positional number system based on 4 digits. Rarely used in the modern world",
        "calculator.info.description.5": "is a positional number system based on 5 digits. Rarely used in the modern world",
        "calculator.info.description.6": "is a positional number system based on 6 digits. Rarely used in the modern world",
        "calculator.info.description.7": "is a positional number system based on 7 digits. Rarely used in the modern world",
        "calculator.info.description.9": "is a positional number system based on 9 digits. Rarely used in the modern world",
        "calculator.info.description.11": "is a positional number system based on 11 digits. Rarely used in the modern world",
        "calculator.info.description.12": "is a positional number system based on 12 digits. Rarely used in the modern world",
        "calculator.info.description.13": "is a positional number system based on 13 digits. Rarely used in the modern world",
        "calculator.info.description.14": "is a positional number system based on 14 digits. Rarely used in the modern world",
        "calculator.info.description.15": "is a positional number system based on 15 digits. Rarely used in the modern world",
        "calculator.info.description.17": "is a positional number system based on 17 digits. Rarely used in the modern world",
        "calculator.info.description.18": "is a positional number system based on 18 digits. Rarely used in the modern world",
        "calculator.info.description.19": "is a positional number system based on 19 digits. Rarely used in the modern world",
        "calculator.info.description.20": "is a positional number system based on 20 digits. Rarely used in the modern world",
        "calculator.info.description.21": "is a positional number system based on 21 digits. Rarely used in the modern world",
        "calculator.info.description.22": "is a positional number system based on 22 digits. Rarely used in the modern world",
        "calculator.info.description.23": "is a positional number system based on 23 digits. Rarely used in the modern world",
        "calculator.info.description.24":
            "is a positional number system based on 24 digits. Rarely used in the modern world, but this number system can be seen in the example of a clock",
        "calculator.info.description.25": "is a positional number system based on 25 digits. Rarely used in the modern world",
        "calculator.info.description.26": "is a positional number system based on 26 digits. Rarely used in the modern world",
        "calculator.info.description.27": "is a positional number system based on 27 digits. Rarely used in the modern world",
        "calculator.info.description.28": "is a positional number system based on 28 digits. Rarely used in the modern world",
        "calculator.info.description.29": "is a positional number system based on 29 digits. Rarely used in the modern world",
        "calculator.info.description.30": "is a positional number system based on 30 digits. Rarely used in the modern world",
        "calculator.info.description.31": "is a positional number system based on 31 digits. Rarely used in the modern world",
        "calculator.info.description.32": "is a positional number system based on 32 digits. Rarely used in the modern world",
        "calculator.info.description.33": "is a positional number system based on 33 digits. Rarely used in the modern world",
        "calculator.info.description.34": "is a positional number system based on 34 digits. Rarely used in the modern world",
        "calculator.info.description.35": "is a positional number system based on 35 digits. Rarely used in the modern world",
        "calculator.info.description.36": "is a positional number system based on 36 digits. Rarely used in the modern world",

        // Add title translations for English:
        "calculator.info.title.10": "Decimal number system",
        "calculator.info.title.2": "Binary number system",
        "calculator.info.title.8": "Octal number system",
        "calculator.info.title.16": "Hexadecimal number system",
        "calculator.info.title.3": "Ternary number system",
        "calculator.info.title.4": "Quaternary number system",
        "calculator.info.title.5": "Quinary number system",
        "calculator.info.title.6": "Senary number system",
        "calculator.info.title.7": "Septenary number system",
        "calculator.info.title.9": "Nonary number system",
        "calculator.info.title.11": "Undecimal number system",
        "calculator.info.title.12": "Duodecimal number system",
        "calculator.info.title.13": "Tridecimal number system",
        "calculator.info.title.14": "Tetradecimal number system",
        "calculator.info.title.15": "Pentadecimal number system",
        "calculator.info.title.17": "Heptadecimal number system",
        "calculator.info.title.18": "Octodecimal number system",
        "calculator.info.title.19": "Enneadecimal number system",
        "calculator.info.title.20": "Vigesimal number system",
        "calculator.info.title.21": "Unvigesimal number system",
        "calculator.info.title.22": "Duovigesimal number system",
        "calculator.info.title.23": "Trivigesimal number system",
        "calculator.info.title.24": "Tetravigesimal number system",
        "calculator.info.title.25": "Pentavigesimal number system",
        "calculator.info.title.26": "Hexavigesimal number system",
        "calculator.info.title.27": "Heptavigesimal number system",
        "calculator.info.title.28": "Octovigesimal number system",
        "calculator.info.title.29": "Enneavigesimal number system",
        "calculator.info.title.30": "Trigesimal number system",
        "calculator.info.title.31": "Untrigesimal number system",
        "calculator.info.title.32": "Duotrigesimal number system",
        "calculator.info.title.33": "Tritrigesimal number system",
        "calculator.info.title.34": "Tetratrigesimal number system",
        "calculator.info.title.35": "Pentatrigesimal number system",
        "calculator.info.title.36": "Hexatrigesimal number system",

        // Add digits translations for English:
        "calculator.info.digits.10": "The decimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0",
        "calculator.info.digits.2": "The binary number system uses the following digits: 1, 0",
        "calculator.info.digits.8": "The octal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 0",
        "calculator.info.digits.16":
            "The hexadecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, 0. Where: 0–9 are regular digits, A–F represent values 10–15 respectively",
        "calculator.info.digits.3": "The ternary number system uses the following digits: 1, 2, 0",
        "calculator.info.digits.4": "The quaternary number system uses the following digits: 1, 2, 3, 0",
        "calculator.info.digits.5": "The quinary number system uses the following digits: 1, 2, 3, 4, 0",
        "calculator.info.digits.6": "The senary number system uses the following digits: 1, 2, 3, 4, 5, 0",
        "calculator.info.digits.7": "The septenary number system uses the following digits: 1, 2, 3, 4, 5, 6, 0",
        "calculator.info.digits.9": "The nonary number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 0",
        "calculator.info.digits.11":
            "The undecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, 0. Where: 0–9 are regular digits, A represents value 10",
        "calculator.info.digits.12":
            "The duodecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, 0. Where: 0–9 are regular digits, A–B represent values 10–11 respectively",
        "calculator.info.digits.13":
            "The tridecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, 0. Where: 0–9 are regular digits, A–C represent values 10–12 respectively",
        "calculator.info.digits.14":
            "The tetradecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, 0. Where: 0–9 are regular digits, A–D represent values 10–13 respectively",
        "calculator.info.digits.15":
            "The pentadecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, 0. Where: 0–9 are regular digits, A–E represent values 10–14 respectively",
        "calculator.info.digits.17":
            "The heptadecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, 0. Where: 0–9 are regular digits, A–G represent values 10–16 respectively",
        "calculator.info.digits.18":
            "The octodecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, 0. Where: 0–9 are regular digits, A–H represent values 10–17 respectively",
        "calculator.info.digits.19":
            "The enneadecimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, 0. Where: 0–9 are regular digits, A–I represent values 10–18 respectively",
        "calculator.info.digits.20":
            "The vigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, 0. Where: 0–9 are regular digits, A–J represent values 10–19 respectively",
        "calculator.info.digits.21":
            "The unvigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, 0. Where: 0–9 are regular digits, A–K represent values 10–20 respectively",
        "calculator.info.digits.22":
            "The duovigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, 0. Where: 0–9 are regular digits, A–L represent values 10–21 respectively",
        "calculator.info.digits.23":
            "The trivigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, 0. Where: 0–9 are regular digits, A–M represent values 10–22 respectively",
        "calculator.info.digits.24":
            "The tetravigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, 0. Where: 0–9 are regular digits, A–N represent values 10–23 respectively",
        "calculator.info.digits.25":
            "The pentavigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, 0. Where: 0–9 are regular digits, A–O represent values 10–24 respectively",
        "calculator.info.digits.26":
            "The hexavigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, 0. Where: 0–9 are regular digits, A–P represent values 10–25 respectively",
        "calculator.info.digits.27":
            "The heptavigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, 0. Where: 0–9 are regular digits, A–Q represent values 10–26 respectively",
        "calculator.info.digits.28":
            "The octovigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, 0. Where: 0–9 are regular digits, A–R represent values 10–27 respectively",
        "calculator.info.digits.29":
            "The enneavigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, 0. Where: 0–9 are regular digits, A–S represent values 10–28 respectively",
        "calculator.info.digits.30":
            "The trigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, 0. Where: 0–9 are regular digits, A–T represent values 10–29 respectively",
        "calculator.info.digits.31":
            "The untrigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, 0. Where: 0–9 are regular digits, A–U represent values 10–30 respectively",
        "calculator.info.digits.32":
            "The duotrigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, 0. Where: 0–9 are regular digits, A–V represent values 10–31 respectively",
        "calculator.info.digits.33":
            "The tritrigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, 0. Where: 0–9 are regular digits, A–W represent values 10–32 respectively",
        "calculator.info.digits.34":
            "The tetratrigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, 0. Where: 0–9 are regular digits, A–X represent values 10–33 respectively",
        "calculator.info.digits.35":
            "The pentatrigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, 0. Where: 0–9 are regular digits, A–Y represent values 10–34 respectively",
        "calculator.info.digits.36":
            "The hexatrigesimal number system uses the following digits: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, 0. Where: 0–9 are regular digits, A–Z represent values 10–35 respectively",

        // Add warning translations for English (complete all missing ones):
        "calculator.info.warning.10": "",
        "calculator.info.warning.2": "When binary number system is selected, this calculator performs calculations according to the binary number system",
        "calculator.info.warning.8": "When octal number system is selected, this calculator performs calculations according to the octal number system",
        "calculator.info.warning.16":
            "When hexadecimal number system is selected, this calculator performs calculations according to the hexadecimal number system",
        "calculator.info.warning.3": "When ternary number system is selected, this calculator performs calculations according to the ternary number system",
        "calculator.info.warning.4":
            "When quaternary number system is selected, this calculator performs calculations according to the quaternary number system",
        "calculator.info.warning.5": "When quinary number system is selected, this calculator performs calculations according to the quinary number system",
        "calculator.info.warning.6": "When senary number system is selected, this calculator performs calculations according to the senary number system",
        "calculator.info.warning.7": "When septenary number system is selected, this calculator performs calculations according to the septenary number system",
        "calculator.info.warning.9": "When nonary number system is selected, this calculator performs calculations according to the nonary number system",
        "calculator.info.warning.11":
            "When undecimal number system is selected, this calculator performs calculations according to the undecimal number system",
        "calculator.info.warning.12":
            "When duodecimal number system is selected, this calculator performs calculations according to the duodecimal number system",
        "calculator.info.warning.13":
            "When tridecimal number system is selected, this calculator performs calculations according to the tridecimal number system",
        "calculator.info.warning.14":
            "When tetradecimal number system is selected, this calculator performs calculations according to the tetradecimal number system",
        "calculator.info.warning.15":
            "When pentadecimal number system is selected, this calculator performs calculations according to the pentadecimal number system",
        "calculator.info.warning.17":
            "When heptadecimal number system is selected, this calculator performs calculations according to the heptadecimal number system",
        "calculator.info.warning.18":
            "When octodecimal number system is selected, this calculator performs calculations according to the octodecimal number system",
        "calculator.info.warning.19":
            "When enneadecimal number system is selected, this calculator performs calculations according to the enneadecimal number system",
        "calculator.info.warning.20":
            "When vigesimal number system is selected, this calculator performs calculations according to the vigesimal number system",
        "calculator.info.warning.21":
            "When unvigesimal number system is selected, this calculator performs calculations according to the unvigesimal number system",
        "calculator.info.warning.22":
            "When duovigesimal number system is selected, this calculator performs calculations according to the duovigesimal number system",
        "calculator.info.warning.23":
            "When trivigesimal number system is selected, this calculator performs calculations according to the trivigesimal number system",
        "calculator.info.warning.24":
            "When tetravigesimal number system is selected, this calculator performs calculations according to the tetravigesimal number system",
        "calculator.info.warning.25":
            "When pentavigesimal number system is selected, this calculator performs calculations according to the pentavigesimal number system",
        "calculator.info.warning.26":
            "When hexavigesimal number system is selected, this calculator performs calculations according to the hexavigesimal number system",
        "calculator.info.warning.27":
            "When heptavigesimal number system is selected, this calculator performs calculations according to the heptavigesimal number system",
        "calculator.info.warning.28":
            "When octovigesimal number system is selected, this calculator performs calculations according to the octovigesimal number system",
        "calculator.info.warning.29":
            "When enneavigesimal number system is selected, this calculator performs calculations according to the enneavigesimal number system",
        "calculator.info.warning.30":
            "When trigesimal number system is selected, this calculator performs calculations according to the trigesimal number system",
        "calculator.info.warning.31":
            "When untrigesimal number system is selected, this calculator performs calculations according to the untrigesimal number system",
        "calculator.info.warning.32":
            "When duotrigesimal number system is selected, this calculator performs calculations according to the duotrigesimal number system",
        "calculator.info.warning.33":
            "When tritrigesimal number system is selected, this calculator performs calculations according to the tritrigesimal number system",
        "calculator.info.warning.34":
            "When tetratrigesimal number system is selected, this calculator performs calculations according to the tetratrigesimal number system",
        "calculator.info.warning.35":
            "When pentatrigesimal number system is selected, this calculator performs calculations according to the pentatrigesimal number system",
        "calculator.info.warning.36":
            "When hexatrigesimal number system is selected, this calculator performs calculations according to the hexatrigesimal number system",

        "calculator.seo.title.2": "Binary Calculator — Fast 0 and 1 Arithmetic Online",
        "calculator.seo.description.2":
            "Online binary numeral system calculator for performing all arithmetic operations — addition, subtraction, multiplication, division — directly in binary. Perfect for programming, electronics, computer science, and learning purposes.",
        "calculator.seo.keywords.2":
            "binary calculator, binary arithmetic, online binary calculator, base 2 calculator, 0 and 1 calculator, binary math, programmer calculator, electronics calculator, computer science calculator, fast binary calculations",
        "calculator.seo.title.3": "Ternary Calculator — Online Base 3 Arithmetic with 0, 1, 2",
        "calculator.seo.description.3":
            "Online ternary numeral system calculator for performing all arithmetic operations — addition, subtraction, multiplication, division — directly in base 3. Supports integers, fractions, and negative numbers. Ideal for programming, mathematics, and learning.",
        "calculator.seo.keywords.3":
            "ternary calculator, base 3 calculator, ternary arithmetic, online base 3 calculator, 0 1 2 calculator, programming calculator, math calculator, computer science calculator, base three calculations, ternary math",
        "calculator.seo.title.4": "Quartal System Calculator — Arithmetic and Scientific Functions",
        "calculator.seo.description.4":
            "With this online quartal (base 4) calculator, perform all arithmetic operations such as addition, subtraction, multiplication, and division in the 4-base system. Fully supports integers, fractions, and negative numbers. Convenient and fast usage in the base 4 system.",
        "calculator.seo.keywords.4":
            "quartal system, quartal calculator, base 4 calculator, 4-base calculator, quartal arithmetic, online quartal calculator, calculator for programmers",
        "calculator.seo.title.5": "Base 5 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.5":
            "Perform addition, subtraction, multiplication, division, and advanced arithmetic operations in base 5 using this online base 5 calculator. Supports integers, fractions, and negative numbers. Perfect for programmers and students.",
        "calculator.seo.keywords.5": "base 5 calculator, online base 5 calculator, base 5 arithmetic, base 5 number system, programmer calculator",
        "calculator.seo.title.6": "Base 6 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.6":
            "Perform addition, subtraction, multiplication, division, and complex calculations in base 6 using this online base 6 calculator. Supports integers, fractions, and negative numbers. Convenient for programmers and students.",
        "calculator.seo.keywords.6": "base 6 calculator, online base 6 calculator, base 6 arithmetic, base 6 number system, programmer calculator",
        "calculator.seo.title.7": "Base 7 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.7":
            "Use this online base 7 calculator to perform addition, subtraction, multiplication, division, and other arithmetic operations in base 7. Supports integers, fractions, and negative numbers. Perfect for programmers, students, and math enthusiasts.",
        "calculator.seo.keywords.7": "base 7 calculator, online base 7 calculator, base 7 arithmetic, base 7 number system, programmer calculator",
        "calculator.seo.title.8": "Octal System Calculator — Arithmetic and Scientific Functions",
        "calculator.seo.description.8":
            "With this online octal (base 8) calculator, perform all arithmetic operations such as addition, subtraction, multiplication, and division in the 8-base system. Fully supports integers, fractions, and negative numbers. Convenient and fast usage in the base 8 system.",
        "calculator.seo.keywords.8":
            "octal system, octal calculator, base 8 calculator, 8-base calculator, octal arithmetic, online octal calculator, calculator for programmers",
        "calculator.seo.title.9": "Base 9 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.9":
            "Perform addition, subtraction, multiplication, division, and complex calculations in base 9 using this online base 9 calculator. Supports integers, fractions, and negative numbers. Perfect for programmers, students, and math enthusiasts.",
        "calculator.seo.keywords.9": "base 9 calculator, online base 9 calculator, base 9 arithmetic, base 9 number system, programmer calculator",
        "calculator.seo.title.10": "Online Calculator — Arithmetic and Scientific Functions",
        "calculator.seo.description.10":
            "This online calculator allows you to perform arithmetic operations +, -, ×, ÷, change signs with ± and 1/x, calculate percentages with %, find squares and roots with x² and √x. Clear and ⌫ buttons make correcting mistakes easy. Fully supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.10":
            "online calculator, arithmetic functions, scientific functions, addition, subtraction, multiplication, division, ±, 1/x, %, x², √x, Clear, ⌫, integers, fractions, negative numbers",
        "calculator.seo.title.11": "Base 11 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.11":
            "Use this online base 11 calculator to perform addition, subtraction, multiplication, division, and other arithmetic operations in base 11. Supports integers, fractions, and negative numbers. Convenient for programmers and students.",
        "calculator.seo.keywords.11": "base 11 calculator, online base 11 calculator, base 11 arithmetic, base 11 number system, programmer calculator",
        "calculator.seo.title.12": "Base 12 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.12":
            "Perform addition, subtraction, multiplication, and division in base 12. Fully supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.12": "base 12 calculator, online base 12 calculator, base 12 arithmetic, base 12 number system, programmer calculator",
        "calculator.seo.title.13": "Base 13 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.13":
            "Use this online base 13 calculator to perform addition, subtraction, multiplication, and division. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.13": "base 13 calculator, online base 13 calculator, base 13 arithmetic, base 13 number system, programmer calculator",
        "calculator.seo.title.14": "Base 14 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.14":
            "Perform addition, subtraction, multiplication, and division in base 14 with full support for integers, fractions, and negative numbers.",
        "calculator.seo.keywords.14": "base 14 calculator, online base 14 calculator, base 14 arithmetic, base 14 number system, programmer calculator",
        "calculator.seo.title.15": "Base 15 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.15":
            "Perform addition, subtraction, multiplication, and division in base 15 using this online base 15 calculator. Full support for integers, fractions, and negative numbers.",
        "calculator.seo.keywords.15": "base 15 calculator, online base 15 calculator, base 15 arithmetic, base 15 number system, programmer calculator",
        "calculator.seo.title.16": "Hexadecimal System Calculator — Arithmetic and Scientific Functions",
        "calculator.seo.description.16":
            "With this online hexadecimal (base 16) calculator, perform all arithmetic operations such as addition, subtraction, multiplication, and division in the 16-base system. Fully supports integers, fractions, and negative numbers. Convenient and fast usage in the hexadecimal system.",
        "calculator.seo.keywords.16":
            "hexadecimal system, hexadecimal calculator, base 16 calculator, 16-base calculator, hexadecimal arithmetic, online hexadecimal calculator, calculator for programmers",
        "calculator.seo.title.17": "Base 17 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.17":
            "Perform addition, subtraction, multiplication, and division in base 17 using this online base 17 calculator. Full support for integers, fractions, and negative numbers.",
        "calculator.seo.keywords.17": "base 17 calculator, online base 17 calculator, base 17 arithmetic, base 17 number system, programmer calculator",
        "calculator.seo.title.18": "Base 18 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.18":
            "Perform addition, subtraction, multiplication, and division in base 18 using this online base 18 calculator. Full support for integers, fractions, and negative numbers.",
        "calculator.seo.keywords.18": "base 18 calculator, online base 18 calculator, base 18 arithmetic, base 18 number system, programmer calculator",
        "calculator.seo.title.19": "Base 19 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.19":
            "Quickly perform addition, subtraction, multiplication, and division in base 19. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.19": "base 19 calculator, online base 19 calculator, base 19 arithmetic, base 19 number system, programmer calculator",
        "calculator.seo.title.20": "Base 20 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.20":
            "Perform addition, subtraction, multiplication, division, and complex calculations in base 20 with this online calculator. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.20": "base 20 calculator, online base 20 calculator, base 20 arithmetic, base 20 number system, programmer calculator",
        "calculator.seo.title.21": "Base 21 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.21":
            "Use this online base 21 calculator to perform addition, subtraction, multiplication, and division. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.21": "base 21 calculator, online base 21 calculator, base 21 arithmetic, base 21 number system, programmer calculator",
        "calculator.seo.title.22": "Base 22 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.22":
            "Perform arithmetic and scientific calculations quickly and easily in base 22 with this online calculator. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.22": "base 22 calculator, online base 22 calculator, base 22 arithmetic, base 22 number system, programmer calculator",
        "calculator.seo.title.23": "Base 23 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.23":
            "Perform addition, subtraction, multiplication, division, and complex calculations in base 23 with this online calculator. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.23": "base 23 calculator, online base 23 calculator, base 23 arithmetic, base 23 number system, programmer calculator",
        "calculator.seo.title.24": "Base 24 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.24":
            "Use this online base 24 calculator to perform arithmetic and scientific calculations. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.24": "base 24 calculator, online base 24 calculator, base 24 arithmetic, base 24 number system, programmer calculator",
        "calculator.seo.title.25": "Base 25 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.25":
            "Perform addition, subtraction, multiplication, division, and complex calculations in base 25 using this online calculator. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.25": "base 25 calculator, online base 25 calculator, base 25 arithmetic, base 25 number system, programmer calculator",
        "calculator.seo.title.26": "Base 26 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.26":
            "Perform arithmetic and scientific calculations in base 26, including addition, subtraction, multiplication, and division. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.26": "base 26 calculator, online base 26 calculator, base 26 arithmetic, base 26 number system, programmer calculator",
        "calculator.seo.title.27": "Base 27 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.27":
            "Use this online base 27 calculator for quick and accurate addition, subtraction, multiplication, and division in base 27. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.27": "base 27 calculator, online base 27 calculator, base 27 arithmetic, base 27 number system, programmer calculator",
        "calculator.seo.title.28": "Base 28 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.28":
            "Perform all arithmetic operations in base 28 using this online calculator. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.28": "base 28 calculator, online base 28 calculator, base 28 arithmetic, base 28 number system, programmer calculator",
        "calculator.seo.title.29": "Base 29 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.29":
            "Use this online base 29 calculator for addition, subtraction, multiplication, division, and other advanced operations. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.29": "base 29 calculator, online base 29 calculator, base 29 arithmetic, base 29 number system, programmer calculator",
        "calculator.seo.title.30": "Base 30 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.30":
            "Perform addition, subtraction, multiplication, division, and complex calculations in base 30 using this online calculator. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.30": "base 30 calculator, online base 30 calculator, base 30 arithmetic, base 30 number system, programmer calculator",
        "calculator.seo.title.31": "Base 31 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.31":
            "Use this online base 31 calculator to perform addition, subtraction, multiplication, and division in base 31. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.31": "base 31 calculator, online base 31 calculator, base 31 arithmetic, base 31 number system, programmer calculator",
        "calculator.seo.title.32": "Base 32 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.32":
            "Quickly perform addition, subtraction, multiplication, and division in base 32 with this online calculator. Supports integers, fractions, and negative numbers.",
        "calculator.seo.keywords.32": "base 32 calculator, online base 32 calculator, base 32 arithmetic, base 32 number system, programmer calculator",
        "calculator.seo.title.33": "Base 33 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.33": "Perform all arithmetic operations and advanced calculations in base 33 using this online calculator.",
        "calculator.seo.keywords.33": "base 33 calculator, online base 33 calculator, base 33 arithmetic, base 33 number system, programmer calculator",
        "calculator.seo.title.34": "Base 34 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.34":
            "Perform addition, subtraction, multiplication, and division in base 34 with full support for integers, fractions, and negative numbers.",
        "calculator.seo.keywords.34": "base 34 calculator, online base 34 calculator, base 34 arithmetic, base 34 number system, programmer calculator",
        "calculator.seo.title.35": "Base 35 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.35": "Use this online base 35 calculator for all arithmetic operations and advanced computations.",
        "calculator.seo.keywords.35": "base 35 calculator, online base 35 calculator, base 35 arithmetic, base 35 number system, programmer calculator",
        "calculator.seo.title.36": "Base 36 Calculator - Arithmetic and Scientific Operations",
        "calculator.seo.description.36":
            "Perform addition, subtraction, multiplication, division, and work with integers, fractions, and negative numbers in base 36.",
        "calculator.seo.keywords.36": "base 36 calculator, online base 36 calculator, base 36 arithmetic, base 36 number system, programmer calculator",

        // Code page
        "code.title": "Number Systems Code",
        "code.description": "Programming examples and code snippets for working with number systems.",

        // About page
        "about.title": "About the app",
        "about.description":
            "This app is designed for working with numeral systems. Whether you are a student, a developer, or simply someone interested in the world of numbers — this app can be a helpful guide for you. Through the app, you can learn about different numeral systems, perform calculations, and carry out the necessary conversions.",
        "about.page.conversion.desription":
            "In this section, you can easily and accurately convert numbers from any numeral system with a base between 2 and 36 into any other numeral system within the same range. The tool supports not only integers but also fractional numbers and negative values. The conversion process doesn’t just provide the result — it explains each step in detail, helping you understand the underlying logic. The results are precise and reliable, making this tool useful for education, programming, mathematics, and everyday calculations. A user-friendly interface and clear explanations make it easier to grasp the concepts. Instead of memorizing complex conversion algorithms, you can now understand them in real time and apply them in practice.",
        "about.page.calculator.desription":
            "This section offers all the functions of a standard calculator, but with one important difference: you can choose any numeral system with a base from 2 to 36. All arithmetic operations — addition, subtraction, multiplication, division, and other calculations — are performed in the selected numeral system. This enables you not only to obtain results but also to observe the logic of calculations in that system in practice. The calculator supports integers, fractional numbers, and negative values.",
        "about.page.publications.desription":
            "This section provides both general and in-depth information about numeral systems: what a numeral system is and how it works; the differences between decimal, binary, octal, and hexadecimal systems; practical applications and historical background. This part is especially useful for students and learners",
        "about.page.code.desription":
            "In this section, you will find examples of algorithms and code related to numeral systems: algorithms for converting between numeral systems; examples of binary arithmetic; ready-to-use code in popular programming languages. This section is especially intended for developers and users who want to learn more.",
        "about.share.title": "Share",
        "about.share.description":
            "If you find this app useful, share it with others. Through this app, not only you but also your friends, classmates, and colleagues can learn about numeral systems and expand their knowledge. The app presents a complex topic in a clear and understandable way, with a simple interface and easy-to-follow explanations. It is especially a great additional resource for students and a helpful tool for developers. Everything is in one place — calculation, conversion, learning, and coding — all numeral system knowledge gathered in one app.",
        "about.share.button": "Share",
        "about.contact.title": "Contact Us",
        "about.contact.description1": "Do you have any questions or suggestions?",
        "about.contact.description2": "Do you have a suggestion to improve the app or did you find something unclear?",
        "about.contact.description3": "Would you like to add an article on a specific topic or think one should be added?",
        "about.contact.description4": "Do you have any complaints or concerns?",
        "about.contact.description5": "If there is an error or confusion in the app's functionality or the content of the messages",
        "about.contact.description6": "For questions related to the app as well as other inquiries",
        "about.contact.description.bold": "Contact us.",
        "about.contact.description.def": "Your feedback is important to us!",
        "about.contact.button": "Contact",

        // Footer
        "footer.rights": "All rights reserved.",

        // share
        "share.title": "Share",
        "share.description": "Share this page with your friends",
        "share.telegram": "Telegram",
        "share.email": "Email",
        "share.copy": "Copy",
        "share.copied": "🎉 Copied",

        // settings calculator
        "calculator.settings.title": "Calculator Settings",
        "calculator.settings.label": "Numaral System",
        "calculator.settings.placeholder": "Select",

        // Sidebar
        "sidebar.topics": "Topics",
    },

    uz: {
        // Navigation
        "nav.conversion": "Konvertor",
        "nav.publications": "Maqolalar",
        "nav.calculator": "Kalkulyator",
        "nav.code": "Kod",
        "nav.about": "Ilova haqida",

        // Home page
        "home.title": "Sanoq Sistemalari Konvertori",
        "home.description": "Ikkilik, sakkizlik, o'nlik va o'n oltilik sanoq sistemalari orasida konvertatsiya qiling.",
        "home.from": "Qaysi sistemadan",
        "home.to": "Qaysi sistemaga",
        "home.input": "Sonni kiriting",
        "home.result": "Natija",
        "home.swap": "Almashtirish",

        "home.seo.title": "Sanoq sistemalari konvertori",
        "home.seo.description": "Sanoq sistemalari konvertori: Turli sanoq sistemalari orasida tez va oson konversiya",
        "home.seo.keywords": "sanoq sistemalari, konvertor, sanoq sistemasi aylantirish, raqam konvertori, onlayn kalkulyator",

        // Number systems
        "numbersystem.binary": "Ikkilik (2-asos)",
        "numbersystem.octal": "Sakkizlik (8-asos)",
        "numbersystem.decimal": "O'nlik (10-asos)",
        "numbersystem.hexadecimal": "O'n oltilik (16-asos)",
        "numbersystem.ternary": "Uchlik (3-asos)",
        "numbersystem.quaternary": "To'rtlik (4-asos)",
        "numbersystem.quinary": "Beshlik (5-asos)",
        "numbersystem.senary": "Oltilik (6-asos)",
        "numbersystem.septenary": "Yettilik (7-asos)",
        "numbersystem.nonary": "To'qqizlik (9-asos)",
        "numbersystem.undecimal": "O'n birlik (11-asos)",
        "numbersystem.duodecimal": "O'n ikkilik (12-asos)",
        "numbersystem.tridecimal": "O'n uchlik (13-asos)",
        "numbersystem.tetradecimal": "O'n to'rtlik (14-asos)",
        "numbersystem.pentadecimal": "O'n beshlik (15-asos)",
        "numbersystem.heptadecimal": "O'n yettilik (17-asos)",
        "numbersystem.octodecimal": "O'n sakkizlik (18-asos)",
        "numbersystem.enneadecimal": "O'n to'qqizlik (19-asos)",
        "numbersystem.vigesimal": "Yigirmalik (20-asos)",
        "numbersystem.unvigesimal": "Yigirma birlik (21-asos)",
        "numbersystem.duovigesimal": "Yigirma ikkilik (22-asos)",
        "numbersystem.trivigesimal": "Yigirma uchlik (23-asos)",
        "numbersystem.tetravigesimal": "Yigirma to'rtlik (24-asos)",
        "numbersystem.pentavigesimal": "Yigirma beshlik (25-asos)",
        "numbersystem.hexavigesimal": "Yigirma oltilik (26-asos)",
        "numbersystem.heptavigesimal": "Yigirma yettilik (27-asos)",
        "numbersystem.octovigesimal": "Yigirma sakkizlik (28-asos)",
        "numbersystem.enneavigesimal": "Yigirma to'qqizlik (29-asos)",
        "numbersystem.trigesimal": "O'ttizlik (30-asos)",
        "numbersystem.untrigesimal": "O'ttiz birlik (31-asos)",
        "numbersystem.duotrigesimal": "O'ttiz ikkilik (32-asos)",
        "numbersystem.tritrigesimal": "O'ttiz uchlik (33-asos)",
        "numbersystem.tetratrigesimal": "O'ttiz to'rtlik (34-asos)",
        "numbersystem.pentatrigesimal": "O'ttiz beshlik (35-asos)",
        "numbersystem.hexatrigesimal": "O'ttiz oltilik (36-asos)",

        // Publications page
        "publications.search": "Qidirish...",
        "publications.learnmore": "O'qish",
        "publications.notfound": "Qidiruv bo‘yicha hech qanday mavzu topilmadi.",

        "publications.seo.title": "Maqolalar — Sanoq sistemalari mavzusidagi maqolalarni o‘qing va o‘rganing",
        "publications.seo.description":
            "Sanoq sistemalari bo‘yicha eng so‘nggi va foydali maqolalarni o‘qing. Ikkilik, o‘nlik, o‘n oltilik tizimlar va boshqa matematik tushunchalar haqida bilim oling.",
        "publications.seo.keywords":
            "sanoq sistemalari, maqolalar, o‘nlik sistema, ikkilik sistema, o‘n oltilik sanoq, matematika, raqamlar, pozitsion sistema, raqamlar tarixi, hisoblash",

        // Calculator page
        "calculator.title": "Sanoq Sistemalari Kalkulyatori",
        "calculator.description": "Turli sanoq sistemalarida hisob-kitoblarni bajaring.",
        "calculator.standard.title": "Standart Kalkulyator",
        "calculator.standard.description": "Turli sanoq sistemalarida asosiy arifmetik amallarni bajaring.",
        "calculator.basic.features": "Asosiy imkoniyatlar:",
        "calculator.arithmetic": "Arifmetik amallar:",
        "calculator.sign.change": "Ishora o'zgartirish va teskari son:",
        "calculator.percentage": "Sonning 1 foizini topish:",
        "calculator.square.root": "Kvadrat va ildiz:",
        "calculator.clear.delete": "Tozalash va o'chirish tugmalari:",
        "calculator.decimal.numbers": "O'nlik sonlar bilan ishlash:",
        "calculator.numbersystem": "Sanoq Sistemasi",
        "calculator.type": "Kalkulyator Turi",
        "calculator.type.standard": "Standart",
        "calculator.type.advanced": "Ilg'or",
        "calculator.type.logical": "Mantiqiy",

        // calculator info
        "calculator.info.description.10":
            "bu insonlar tomonidan tabiiy foydalaniladigan, 10 ta raqamga asoslangan pozitsion sanoq sistemasi. Ko‘pchilik kalkulyatorlar, foydalanuvchi interfeyslari va matematikaning barcha sohalarida ishlatiladi",
        "calculator.info.description.2":
            "bu 2 ta raqamga asoslangan pozitsion sanoq sistemasi. Kompyuterlarning asosiy ishlash prinsipi shu sanoq sistemasiga asoslangan: xotira, protsessor, fayllar, elektr signallar va hokazo",
        "calculator.info.description.8": "bu 8 ta raqamga asoslangan pozitsion sanoq sistemasi. Ba'zi joylarda ishlatiladi",
        "calculator.info.description.16":
            "bu 16 ta raqamga asoslangan pozitsion sanoq sistemasi. Kompyuter texnologiyasi, xotira manzillari, rang kodlari (CSS), bit operatsiyalar, assembler va debugging uchun ishlatiladi",
        "calculator.info.description.3": "bu 3 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.4": "bu 4 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.5": "bu 5 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.6": "bu 6 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.7": "bu 7 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.9": "bu 9 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.11": "bu 11 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.12": "bu 12 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.13": "bu 13 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.14": "bu 14 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.15": "bu 15 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.17": "bu 17 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.18": "bu 18 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.19": "bu 19 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.20": "bu 20 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.21": "bu 21 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.22": "bu 22 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.23": "bu 23 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.24":
            "bu 24 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi, biroq bu sanoq sistemasini soat misolida ko'rish mumkin",
        "calculator.info.description.25": "bu 25 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.26": "bu 26 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.27": "bu 27 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.28": "bu 28 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.29": "bu 29 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.30": "bu 30 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.31": "bu 31 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.32": "bu 32 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.33": "bu 33 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.34": "bu 34 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.35": "bu 35 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
        "calculator.info.description.36": "bu 36 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",

        "calculator.info.title.10": "O'nlik sanoq sistemasi",
        "calculator.info.title.2": "Ikkilik sanoq sistemasi",
        "calculator.info.title.8": "Sakkizlik sanoq sistemasi",
        "calculator.info.title.16": "O'n oltilik sanoq sistemasi",
        "calculator.info.title.3": "Uchlik sanoq sistemasi",
        "calculator.info.title.4": "To'rtlik sanoq sistemasi",
        "calculator.info.title.5": "Beshlik sanoq sistemasi",
        "calculator.info.title.6": "Oltilik sanoq sistemasi",
        "calculator.info.title.7": "Yettilik sanoq sistemasi",
        "calculator.info.title.9": "Ikkilik sanoq sistemasi",
        "calculator.info.title.11": "O'n birlik sanoq sistemasi",
        "calculator.info.title.12": "O'n ikkilik sanoq sistemasi",
        "calculator.info.title.13": "O'n uchlik sanoq sistemasi",
        "calculator.info.title.14": "O'n to'rtlik sanoq sistemasi",
        "calculator.info.title.15": "O'n beshlik sanoq sistemasi",
        "calculator.info.title.17": "O'n yettilik sanoq sistemasi",
        "calculator.info.title.18": "O'n sakkizlik sanoq sistemasi",
        "calculator.info.title.19": "O'n to'qqizlik sanoq sistemasi",
        "calculator.info.title.20": "Yigirmalik sanoq sistemasi",
        "calculator.info.title.21": "Yigirma birlik sanoq sistemasi",
        "calculator.info.title.22": "Yigirma ikkilik sanoq sistemasi",
        "calculator.info.title.23": "Yigirma uchlik sanoq sistemasi",
        "calculator.info.title.24": "Yigirma to'rtlik sanoq sistemasi",
        "calculator.info.title.25": "Yigirma beshlik sanoq sistemasi",
        "calculator.info.title.26": "Yigirma oltilik sanoq sistemasi",
        "calculator.info.title.27": "Yigirma yettilik sanoq sistemasi",
        "calculator.info.title.28": "Yigirma sakkizlik sanoq sistemasi",
        "calculator.info.title.29": "Yigirma to'qqizlik sanoq sistemasi",
        "calculator.info.title.30": "O'ttizlik sanoq sistemasi",
        "calculator.info.title.31": "O'ttiz birlik sanoq sistemasi",
        "calculator.info.title.32": "O'ttiz ikkilik sanoq sistemasi",
        "calculator.info.title.33": "O'ttiz uchlik sanoq sistemasi",
        "calculator.info.title.34": "O'ttiz to'rtlik sanoq sistemasi",
        "calculator.info.title.35": "O'ttiz beshlik sanoq sistemasi",
        "calculator.info.title.36": "O'ttiz oltilik sanoq sistemasi",

        "calculator.info.digits.10": "O'nlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0",
        "calculator.info.digits.2": "Ikkilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 0",
        "calculator.info.digits.8": "Sakkizlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 0",
        "calculator.info.digits.16":
            "O'n oltilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, 0. Bu yerda: 0–9 odatdagi raqamlar, A–F esa mos ravishda 10–15 qiymatlarini anglatadi",
        "calculator.info.digits.3": "Uchlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 0",
        "calculator.info.digits.4": "To'rtlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 0",
        "calculator.info.digits.5": "Beshlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 0",
        "calculator.info.digits.6": "Oltilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 0",
        "calculator.info.digits.7": "Yettilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 0",
        "calculator.info.digits.9": "Ikkilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 0",
        "calculator.info.digits.11":
            "O'n birlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, 0. Bu yerda: 0–9 odatdagi raqamlar, A esa 10 qiymatini anglatadi",
        "calculator.info.digits.12":
            "O'n ikkilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, 0. Bu yerda: 0–9 odatdagi raqamlar, A–B esa mos ravishda 10–11 qiymatlarini anglatadi",
        "calculator.info.digits.13":
            "O'n uchlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, 0. Bu yerda: 0–9 odatdagi raqamlar, A–C esa mos ravishda 10–12 qiymatlarini anglatadi",
        "calculator.info.digits.14":
            "O'n to'rtlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, 0. Bu yerda: 0–9 odatdagi raqamlar, A–D esa mos ravishda 10–13 qiymatlarini anglatadi",
        "calculator.info.digits.15":
            "O'n beshlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, 0. Bu yerda: 0–9 odatdagi raqamlar, A–E esa mos ravishda 10–14 qiymatlarini anglatadi",
        "calculator.info.digits.17":
            "O'n yettilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, 0. Bu yerda: 0–9 odatdagi raqamlar, A–G esa mos ravishda 10–16 qiymatlarini anglatadi",
        "calculator.info.digits.18":
            "O'n sakkizlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, 0. Bu yerda: 0–9 odatdagi raqamlar, A–H esa mos ravishda 10–17 qiymatlarini anglatadi",
        "calculator.info.digits.19":
            "O'n to'qqizlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, 0. Bu yerda: 0–9 odatdagi raqamlar, A–I esa mos ravishda 10–18 qiymatlarini anglatadi",
        "calculator.info.digits.20":
            "Yigirmalik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, 0. Bu yerda: 0–9 odatdagi raqamlar, A–J esa mos ravishda 10–19 qiymatlarini anglatadi",
        "calculator.info.digits.21":
            "Yigirma birlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, 0. Bu yerda: 0–9 odatdagi raqamlar, A–K esa mos ravishda 10–20 qiymatlarini anglatadi",
        "calculator.info.digits.22":
            "Yigirma ikkilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, 0. Bu yerda: 0–9 odatdagi raqamlar, A–L esa mos ravishda 10–21 qiymatlarini anglatadi",
        "calculator.info.digits.23":
            "Yigirma uchlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, 0. Bu yerda: 0–9 odatdagi raqamlar, A–M esa mos ravishda 10–22 qiymatlarini anglatadi",
        "calculator.info.digits.24":
            "Yigirma to'rtlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, 0. Bu yerda: 0–9 odatdagi raqamlar, A–N esa mos ravishda 10–23 qiymatlarini anglatadi",
        "calculator.info.digits.25":
            "Yigirma beshlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, 0. Bu yerda: 0–9 odatdagi raqamlar, A–O esa mos ravishda 10–24 qiymatlarini anglatadi",
        "calculator.info.digits.26":
            "Yigirma oltilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, 0. Bu yerda: 0–9 odatdagi raqamlar, A–P esa mos ravishda 10–25 qiymatlarini anglatadi",
        "calculator.info.digits.27":
            "Yigirma yettilik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, 0. Bu yerda: 0–9 odatdagi raqamlar, A–Q esa mos ravishda 10–26 qiymatlarini anglatadi",
        "calculator.info.digits.28":
            "Yigirma sakkizlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, 0. Bu yerda: 0–9 odatdagi raqamlar, A–R esa mos ravishda 10–27 qiymatlarini anglatadi",
        "calculator.info.digits.29":
            "Yigirma to'qqizlik sanoq sistemasida quyidagi raqamlar ishlatiladi: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, 0. Bu yerda: 0–9 odatdagi raqamlar, A–S esa mos ravishda 10–28 qiymatlarini anglatadi",
        "calculator.info.warning.10": "",
        "calculator.info.warning.2": "Ikkilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni ikkilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.8":
            "Sakkizlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni sakkizlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.16":
            "O'n oltilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n oltilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.3": "Uchlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni uchlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.4": "To'rtlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni to'rtlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.5": "Beshlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni beshlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.6": "Oltilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni oltilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.7": "Yettilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yettilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.9":
            "To'qqizlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni to'qqizlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.11":
            "O'n birlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n birlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.12":
            "O'n ikkilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n ikkilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.13":
            "O'n uchlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n uchlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.14":
            "O'n to'rtlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n to'rtlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.15":
            "O'n beshlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n beshlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.17":
            "O'n yettilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n yettilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.18":
            "O'n sakkizlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n sakkizlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.19":
            "O'n to'qqizlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n to'qqizlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.20":
            "Yigirmalik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirmalik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.21":
            "Yigirma birlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma birlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.22":
            "Yigirma ikkilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma ikkilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.23":
            "Yigirma uchlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma uchlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.24":
            "Yigirma to'rtlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma to'rtlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.25":
            "Yigirma beshlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma beshlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.26":
            "Yigirma oltilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma oltilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.27":
            "Yigirma yettilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma yettilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.28":
            "Yigirma sakkizlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma sakkizlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.29":
            "Yigirma to'qqizlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yigirma to'qqizlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.30":
            "O'ttizlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'ttizlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.31":
            "O'ttiz birlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'ttiz birlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.32":
            "O'ttiz ikkilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'ttiz ikkilik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.33":
            "O'ttiz uchlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'ttiz uchlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.34":
            "O'ttiz to'rtlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'ttiz to'rtlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.35":
            "O'ttiz beshlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'ttiz beshlik sanoq sistemasi bo'yicha bajaradi",
        "calculator.info.warning.36":
            "O'ttiz oltilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'ttiz oltilik sanoq sistemasi bo'yicha bajaradi",

        "calculator.seo.title.2": "Ikkilik sanoq sistemasi kalkulyatori — arifmetik va ilmiy amallar",
        "calculator.seo.description.2":
            "Onlayn ikkilik sanoq sistemasi kalkulyatori yordamida 0 va 1 raqamlari bilan barcha arifmetik amallarni — qo‘shish, ayirish, ko‘paytirish, bo‘lish — to‘g‘ridan-to‘g‘ri ikkilik tizimda bajaring. Dasturlash, elektronika, kompyuter fanlari va ta’lim uchun qulay vosita.",
        "calculator.seo.keywords.2":
            "ikkilik sanoq sistemasi, binary kalkulyator, ikkilik tizim kalkulyatori, ikkilik hisoblash, 0 va 1 kalkulyator, binary arithmetic, onlayn ikkilik kalkulyator, kompyuter fanlari kalkulyator, elektronika hisoblash, dasturchilar uchun kalkulyator",
        "calculator.seo.title.3": "Uchlik sanoq sistemasi kalkulyatori — arifmetik va ilmiy amallar",
        "calculator.seo.description.3":
            "Onlayn uchlik sanoq sistemasi kalkulyatori yordamida barcha arifmetik amallarni — qo‘shish, ayirish, ko‘paytirish, bo‘lish — to‘g‘ridan-to‘g‘ri uchlik tizimda bajaring. Butun, kasr va manfiy sonlarni qo‘llab-quvvatlaydi. Dasturlash, matematika va ta’lim uchun qulay vosita.",
        "calculator.seo.keywords.3":
            "uchlik sanoq sistemasi, ternary kalkulyator, uchlik tizim kalkulyatori, 0 1 2 kalkulyator, uchlik arifmetika, onlayn ternary kalkulyator, kompyuter fanlari kalkulyator, dasturchilar uchun kalkulyator, base 3 calculator, uchlik hisoblash",
        "calculator.seo.title.4": "To‘rtlik sanoq sistemasi kalkulyatori — arifmetik va ilmiy amallar",
        "calculator.seo.description.4":
            "Onlayn to‘rtlik (quartal) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish kabi barcha arifmetik amallarni 4-lik tizimda bajaring. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi. 4-lik tizimni qulay va tez ishlatish imkonini beradi.",
        "calculator.seo.keywords.4":
            "to‘rtlik sanoq sistemi, quartal kalkulyator, 4-lik tizim kalkulyatori, base 4 calculator, to‘rtlik arifmetika, onlayn quartal kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.5": "Beshlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.5":
            "Onlayn 5-lik (base 5) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab arifmetik amallarni 5-lik tizimda bajarish mumkin. Butun, kasr va manfiy sonlarni qo‘llab-quvvatlaydi. Dasturchilar va talabalar uchun ideal.",
        "calculator.seo.keywords.5": "5-lik sanoq sistemi, base 5 kalkulyator, 5-lik arifmetika, onlayn 5-lik kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.6": "Oltilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.6":
            "Onlayn 6-lik (base 6) sanoq sistemasi kalkulyatori qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab hisob-kitoblarni 6-lik tizimda bajarish imkonini beradi. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi. Dasturchilar va talabalar uchun qulay vosita.",
        "calculator.seo.keywords.6": "6-lik sanoq sistemi, base 6 kalkulyator, 6-lik arifmetika, onlayn base 6 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.7": "Yettilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.7":
            "Onlayn 7-lik (base 7) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqa arifmetik amallarni 7-lik tizimda bajarish mumkin. Butun, kasr va manfiy sonlarni qo‘llab-quvvatlaydi. Dasturchilar, talabalar va matematika ixlosmandlari uchun ajoyib vosita.",
        "calculator.seo.keywords.7": "7-lik sanoq sistemi, base 7 kalkulyator, 7-lik arifmetika, onlayn base 7 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.8": "Sakkizlik sanoq sistemasi kalkulyatori — arifmetik va ilmiy amallar",
        "calculator.seo.description.8":
            "Onlayn sakkizlik (octal) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish kabi barcha arifmetik amallarni 8-lik tizimda bajaring. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi. 8-lik tizimni qulay va tez ishlatish imkonini beradi.",
        "calculator.seo.keywords.8":
            "sakkizlik sanoq sistemi, octal kalkulyator, 8-lik tizim kalkulyatori, base 8 calculator, sakkizlik arifmetika, onlayn octal kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.9": "To'qqizlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.9":
            "Onlayn 9-lik (base 9) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab hisob-kitoblarni 9-lik tizimda bajarish mumkin. Butun, kasr va manfiy sonlar to‘liq qo‘llab-quvvatlanadi. Dasturchilar, talabalar va matematika ixlosmandlari uchun ideal.",
        "calculator.seo.keywords.9": "9-lik sanoq sistemi, base 9 kalkulyator, 9-lik arifmetika, onlayn base 9 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.10": "Onlayn kalkulyator — arifmetik va ilmiy amallar",
        "calculator.seo.description.10":
            "Ushbu onlayn kalkulyator orqali +, -, ×, ÷ kabi arifmetik amallarni bajarishingiz, ± va 1/x bilan ishora o‘zgartirishingiz, % bilan foizni hisoblashingiz, x² va √x bilan kvadrat va ildizni topishingiz mumkin. Clear va ⌫ tugmalari yordamida xatolarni tuzatish oson. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.10":
            "onlayn kalkulyator, arifmetik amallar, ilmiy amallar, qo‘shish, ayirish, ko‘paytirish, bo‘lish, ±, 1/x, %, x², √x, Clear, ⌫, butun sonlar, kasr sonlar, manfiy sonlar",
        "calculator.seo.title.11": "O‘n birlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.11":
            "Onlayn 11-lik (base 11) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqa murakkab arifmetik amallarni 11-lik tizimda bajarish mumkin. Butun, kasr va manfiy sonlarni to‘liq qo‘llab-quvvatlaydi. Dasturchilar va talabalar uchun qulay vosita.",
        "calculator.seo.keywords.11":
            "11-lik sanoq sistemi, base 11 kalkulyator, 11-lik arifmetika, onlayn base 11 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.12": "O'n ikkilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.12":
            "Onlayn 12-lik (base 12) sanoq tizimi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish kabi arifmetik amallarni bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.12":
            "12-lik sanoq sistemi, base 12 kalkulyator, 12-lik arifmetika, onlayn base 12 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.13": "O'n uchlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.13":
            "Onlayn 13-lik (base 13) sanoq tizimi kalkulyatori yordamida tez va aniq arifmetik amallarni bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.13":
            "13-lik sanoq sistemi, base 13 kalkulyator, 13-lik arifmetika, onlayn base 13 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.14": "O'n to'rtlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.14":
            "Onlayn 14-lik (base 14) sanoq tizimi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish kabi amallarni bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.14":
            "14-lik sanoq sistemi, base 14 kalkulyator, 14-lik arifmetika, onlayn base 14 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.15": "O‘n beshlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.15":
            "Onlayn o‘n beshlik (base 15) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish kabi barcha arifmetik amallarni 15-lik tizimda bajaring. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.15":
            "o‘n beshlik sanoq sistemasi, base 15 kalkulyator, 15-lik tizim kalkulyatori, onlayn base 15 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.16": "O‘n oltilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.16":
            "Onlayn o‘n oltilik (hexadecimal) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish kabi barcha arifmetik amallarni 16-lik tizimda bajaring. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi. 16-lik (hexadecimal) tizimni qulay va tez ishlatish imkonini beradi.",
        "calculator.seo.keywords.16":
            "o‘n oltilik sanoq sistemasi, hexadecimal kalkulyator, 16-lik tizim kalkulyatori, base 16 calculator, o‘n oltilik arifmetika, onlayn hexadecimal kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.17": "O‘n yettilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.17":
            "Onlayn o‘n yettilik (base 17) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish kabi barcha arifmetik amallarni 17-lik tizimda bajaring. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.17":
            "o‘n yettilik sanoq sistemasi, base 17 kalkulyator, 17-lik tizim kalkulyatori, onlayn base 17 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.18": "O‘n sakkizlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.18":
            "Onlayn o‘n sakkizlik (base 18) sanoq sistemasi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish kabi barcha arifmetik amallarni 18-lik tizimda bajaring. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.18":
            "o‘n sakkizlik sanoq sistemasi, base 18 kalkulyator, 18-lik tizim kalkulyatori, onlayn base 18 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.19": "O'n to'qqizlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.19":
            "Onlayn 19-lik (base 19) sanoq tizimi kalkulyatori yordamida barcha arifmetik amallarni tez va aniq bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.19":
            "19-lik sanoq sistemi, base 19 kalkulyator, 19-lik arifmetika, onlayn base 19 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.20": "Yigirmalik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.20":
            "Onlayn 20-lik (base 20) sanoq tizimi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab hisob-kitoblarni bajarish mumkin. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.20":
            "20-lik sanoq sistemi, base 20 kalkulyator, 20-lik arifmetika, onlayn base 20 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.21": "Yigirma birlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.21":
            "21-lik (base 21) tizimida qo‘shish, ayirish, ko‘paytirish va bo‘lish amallarini bajarish uchun onlayn kalkulyator. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.21":
            "21-lik sanoq sistemi, base 21 kalkulyator, 21-lik arifmetika, onlayn base 21 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.22": "Yigirma ikkilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.22":
            "Onlayn 22-lik (base 22) sanoq tizimi kalkulyatori orqali arifmetik va ilmiy hisob-kitoblarni tez va oson bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.22":
            "22-lik sanoq sistemi, base 22 kalkulyator, 22-lik arifmetika, onlayn base 22 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.23": "Yigirma uchlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.23":
            "Onlayn 23-lik (base 23) sanoq tizimi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab hisob-kitoblarni bajarish mumkin. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.23":
            "23-lik sanoq sistemi, base 23 kalkulyator, 23-lik arifmetika, onlayn base 23 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.24": "Yigirma to'rtlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.24":
            "24-lik (base 24) tizimida arifmetik va ilmiy amallarni bajarish uchun onlayn kalkulyator. Butun, kasr va manfiy sonlar to‘liq qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.24":
            "24-lik sanoq sistemi, base 24 kalkulyator, 24-lik arifmetika, onlayn base 24 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.25": "Yigirma beshlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.25":
            "Onlayn 25-lik (base 25) sanoq tizimi kalkulyatori orqali qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab hisob-kitoblarni bajarish mumkin. Butun, kasr va manfiy sonlar bilan ishlash imkoniyati mavjud.",
        "calculator.seo.keywords.25":
            "25-lik sanoq sistemi, base 25 kalkulyator, 25-lik arifmetika, onlayn base 25 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.26": "Yigirma oltilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.26":
            "Onlayn 26-lik (base 26) sanoq tizimi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab hisob-kitoblarni tez va aniq bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.26":
            "26-lik sanoq sistemi, base 26 kalkulyator, 26-lik arifmetika, onlayn base 26 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.27": "Yigirma yettilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.27":
            "Onlayn 27-lik (base 27) sanoq tizimi kalkulyatori orqali qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab hisob-kitoblarni qulay va tez bajarish mumkin. Butun, kasr va manfiy sonlarni to‘liq qo‘llab-quvvatlaydi.",
        "calculator.seo.keywords.27":
            "27-lik sanoq sistemi, base 27 kalkulyator, 27-lik arifmetika, onlayn base 27 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.28": "Yigirma sakkizlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.28":
            "Onlayn 28-lik (base 28) sanoq tizimi kalkulyatori yordamida barcha arifmetik amallarni bajarish mumkin: qo‘shish, ayirish, ko‘paytirish, bo‘lish. Butun, kasr va manfiy sonlar bilan ishlash to‘liq qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.28":
            "28-lik sanoq sistemi, base 28 kalkulyator, 28-lik arifmetika, onlayn base 28 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.29": "Yigirma to'qqizlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.29":
            "Onlayn 29-lik (base 29) sanoq tizimi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqa murakkab amallarni aniq va tez bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.29":
            "29-lik sanoq sistemi, base 29 kalkulyator, 29-lik arifmetika, onlayn base 29 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.30": "O'ttizlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.30":
            "Onlayn 30-lik (base 30) sanoq tizimi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqa murakkab arifmetik amallarni bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.30":
            "30-lik sanoq sistemi, base 30 kalkulyator, 30-lik arifmetika, onlayn base 30 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.31": "O'ttiz birlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.31":
            "Onlayn 31-lik (base 31) sanoq tizimi kalkulyatori orqali barcha arifmetik amallarni bajarish mumkin: qo‘shish, ayirish, ko‘paytirish, bo‘lish. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.31":
            "31-lik sanoq sistemi, base 31 kalkulyator, 31-lik arifmetika, onlayn base 31 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.32": "O'ttiz ikkilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.32":
            "Onlayn 32-lik (base 32) sanoq tizimi kalkulyatori yordamida tez va aniq arifmetik amallarni bajarish mumkin. Butun, kasr va manfiy sonlarni to‘liq qo‘llab-quvvatlaydi.",
        "calculator.seo.keywords.32":
            "32-lik sanoq sistemi, base 32 kalkulyator, 32-lik arifmetika, onlayn base 32 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.33": "O'ttiz uchlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.33":
            "Onlayn 33-lik (base 33) sanoq tizimi kalkulyatori orqali qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqa murakkab amallarni bajarish mumkin.",
        "calculator.seo.keywords.33":
            "33-lik sanoq sistemi, base 33 kalkulyator, 33-lik arifmetika, onlayn base 33 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.34": "O'ttiz to'rtlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.34":
            "Onlayn 34-lik (base 34) sanoq tizimi kalkulyatori yordamida barcha arifmetik amallarni bajarish mumkin. Butun, kasr va manfiy sonlar bilan ishlash imkoniyati mavjud.",
        "calculator.seo.keywords.34":
            "34-lik sanoq sistemi, base 34 kalkulyator, 34-lik arifmetika, onlayn base 34 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.35": "O'ttiz beshlik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.35":
            "Onlayn 35-lik (base 35) sanoq tizimi kalkulyatori yordamida qo‘shish, ayirish, ko‘paytirish, bo‘lish va murakkab amallarni bajarish mumkin.",
        "calculator.seo.keywords.35":
            "35-lik sanoq sistemi, base 35 kalkulyator, 35-lik arifmetika, onlayn base 35 kalkulyator, dasturchilar uchun kalkulyator",
        "calculator.seo.title.36": "O'ttiz oltilik sanoq sistemasi kalkulyatori - arifmetik va ilmiy amallar",
        "calculator.seo.description.36":
            "Onlayn 36-lik (base 36) sanoq tizimi kalkulyatori yordamida barcha arifmetik amallarni bajarish mumkin. Butun, kasr va manfiy sonlar qo‘llab-quvvatlanadi.",
        "calculator.seo.keywords.36":
            "36-lik sanoq sistemi, base 36 kalkulyator, 36-lik arifmetika, onlayn base 36 kalkulyator, dasturchilar uchun kalkulyator",

        // Code page
        "code.title": "Sanoq Sistemalari Kodi",
        "code.description": "Sanoq sistemalari bilan ishlash uchun dasturlash misollari va kod parchalar.",

        // About page
        "about.title": "Ilova haqida",
        "about.description":
            "Ushbu ilova sanoq sistemalari bilan ishlash uchun mo‘ljallangan. Agar siz talaba, dasturchi yoki shunchaki raqamlar olamiga qiziquvchi bo‘lsangiz — bu ilova siz uchun foydali qo‘llanma bo‘la oladi. Ilova orqali siz turli sanoq sistemalari bo‘yicha bilim olishingiz, hisob-kitob qilishingiz va kerakli konvertatsiyalarni bajarishingiz mumkin.",
        "about.page.conversion.desription":
            "Bu bo‘lim orqali siz 2 dan 36 gacha bo‘lgan istalgan sanoq sistemasidan boshqa istalgan sanoq sistemasiga sonlarni oson va aniq tarzda o‘tkazishingiz mumkin. Faqat butun sonlar emas, balki kasr sonlar va manfiy qiymatlar ham to‘liq qo‘llab-quvvatlanadi. Konversiya jarayoni nafaqat natija beradi, balki har bir qadamni tushunarli qilib izohlaydi, shu orqali siz jarayon mantiqini o‘rganishingiz mumkin. Natijalar aniq va ishonchli bo‘lib, siz ta’lim, dasturlash, matematika yoki kundalik hisob-kitoblarda foydalana olasiz. Qulay interfeys va tushuntirishlar. Siz endi murakkab konvertatsiyalarni yodlab qolish o‘rniga, ularni real vaqt rejimida tushunishingiz va amalda qo‘llashingiz mumkin.",
        "about.page.calculator.desription":
            "Bu bo‘lim odatiy standart kalkulyatorning barcha imkoniyatlarini taqdim etadi, biroq bitta farq bilan: siz 2 dan 36 gacha bo‘lgan istalgan sanoq sistemasini tanlashingiz mumkin. Barcha arifmetik amallar — qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqa hisob-kitoblar — tanlangan sanoq sistemasida amalga oshiriladi. Bu sizga nafaqat natijalarni olish, balki o‘sha sanoq sistemasida hisoblash mantiqini amalda ko‘rish imkonini beradi. Kalkulyator butun, kasr va manfiy sonlarni qo‘llab-quvvatlaydi.",
        "about.page.publications.desription":
            "Bu bo‘limda sanoq sistemalari haqida umumiy va chuqurroq ma’lumotlar beriladi: Sanoq sistemasi nima va qanday ishlaydi; O‘nlik, ikkilik, sakkizlik, o‘n oltilik kabi tizimlar farqi; Amaliyotda qo‘llanishi va tarixiy izohlar. Bu qism ayniqsa o‘quvchilar va o‘rganuvchilar uchun foydalidir.",
        "about.page.code.desription":
            "Bu bo‘limda siz sanoq sistemalariga oid algoritmlar va dasturiy kodlar namunalarini topasiz: Sanoq sistemalari o‘rtasida o‘tkazish algoritmlari Ikkilik arifmetikaga oid misollar; Mashhur dasturlash tillarida tayyor kodlar. Bu bo‘lim ayniqsa dasturchilar va o‘rganmoqchi bo‘lgan foydalanuvchilar uchun mo‘ljallangan.",
        "about.share.title": "Ulashing",
        "about.share.description":
            "Ilova foydali deb o‘ylasangiz, uni boshqalar bilan ham ulashing. Bu ilova orqali nafaqat siz, balki atrofingizdagi do‘stlar, kursdoshlar va hamkasblar ham sanoq sistemalarini o‘rganishlari, bilimlarini boyitishlari mumkin. Ilova oddiy interfeys va sodda izohlar bilan murakkab mavzuni tushunarli shaklda yetkazadi. Ayniqsa, talabalar uchun bu yaxshi qo‘shimcha manba, dasturchilar uchun esa foydali vositadir. Hisoblash, konvertatsiya, o‘rganish va kod yozish barchasi bir joyda jamlangan — sanoq sistemasiga oid barcha bilimlar bir ilovada yig'ilgan.",
        "about.share.button": "Ulashish",
        "about.contact.title": "Biz bilan bog'laning",
        "about.contact.description1": "Savol yoki takliflaringiz bormi?",
        "about.contact.description2": "Ilovaga biror qo'shimcha kiritish taklifingiz bo'lsa yoki ilovada nimanidir tushunarsiz deb hisoblaysizmi?",
        "about.contact.description3": "Biror mavzuda maqola qoʻshmoqchisiz yoki qoʻshish kerak deb hisoblaysizmi?",
        "about.contact.description4": "E'tiroz yoki shikoyatingiz bormi?",
        "about.contact.description5": "Ilova ishlashida yoki xabarlar mazmunida biror xatolik yoki tushunarsizlik bo'lsa",
        "about.contact.description6": "Ilovaga oid va ilovadan tashqari savollar uchun ham",
        "about.contact.description.bold": "Biz bilan bog'laning.",
        "about.contact.description.def": "Sizning fikringiz biz uchun muhim!",
        "about.contact.button": "Bog'lanish",

        // Footer
        "footer.rights": "Barcha huquqlar himoyalangan.",

        // share
        "share.title": "Ulashish",
        "share.description": "Ushbu sahifani do‘stlaringizga ulashing",
        "share.telegram": "Telegram",
        "share.email": "Email",
        "share.copy": "Nusxalash",
        "share.copied": "🎉 Nusxalandi",

        // settings calculator
        "calculator.settings.title": "Kalkulyator sozlamalari",
        "calculator.settings.label": "Sanoq sistemasi",
        "calculator.settings.placeholder": "Tanlang",

        // Sidebar
        "sidebar.topics": "Mavzular",
    },

    ru: {
        // Navigation
        "nav.conversion": "Конвертация",
        "nav.publications": "Статьи",
        "nav.calculator": "Калькулятор",
        "nav.code": "Код",
        "nav.about": "О приложении",

        // Home page
        "home.title": "Конвертер Систем Счисления",
        "home.description": "Конвертируйте между двоичной, восьмеричной, десятичной и шестнадцатеричной системами счисления.",
        "home.from": "Из",
        "home.to": "В",
        "home.input": "Входное значение",
        "home.result": "Результат",
        "home.swap": "Поменять",

        "home.seo.title": "Конвертер систем счисления",
        "home.seo.description": "Конвертер систем счисления: быстро и легко переводите числа между различными системами счисления.",
        "home.seo.keywords": "системы счисления, конвертер, перевод чисел, онлайн калькулятор, системы счисления перевод",

        // Number systems
        "numbersystem.binary": "Двоичная (Основание 2)",
        "numbersystem.octal": "Восьмеричная (Основание 8)",
        "numbersystem.decimal": "Десятичная (Основание 10)",
        "numbersystem.hexadecimal": "Шестнадцатеричная (Основание 16)",
        "numbersystem.ternary": "Троичная (Основание 3)",
        "numbersystem.quaternary": "Четверичная (Основание 4)",
        "numbersystem.quinary": "Пятеричная (Основание 5)",
        "numbersystem.senary": "Шестеричная (Основание 6)",
        "numbersystem.septenary": "Семеричная (Основание 7)",
        "numbersystem.nonary": "Девятеричная (Основание 9)",
        "numbersystem.undecimal": "Одиннадцатеричная (Основание 11)",
        "numbersystem.duodecimal": "Двенадцатеричная (Основание 12)",
        "numbersystem.tridecimal": "Тринадцатеричная (Основание 13)",
        "numbersystem.tetradecimal": "Четырнадцатеричная (Основание 14)",
        "numbersystem.pentadecimal": "Пятнадцатеричная (Основание 15)",
        "numbersystem.heptadecimal": "Семнадцатеричная (Основание 17)",
        "numbersystem.octodecimal": "Восемнадцатеричная (Основание 18)",
        "numbersystem.enneadecimal": "Девятнадцатеричная (Основание 19)",
        "numbersystem.vigesimal": "Двадцатеричная (Основание 20)",
        "numbersystem.unvigesimal": "Двадцать одна (Основание 21)",
        "numbersystem.duovigesimal": "Двадцать два (Основание 22)",
        "numbersystem.trivigesimal": "Двадцать три (Основание 23)",
        "numbersystem.tetravigesimal": "Двадцать четыре (Основание 24)",
        "numbersystem.pentavigesimal": "Двадцать пять (Основание 25)",
        "numbersystem.hexavigesimal": "Двадцать шесть (Основание 26)",
        "numbersystem.heptavigesimal": "Двадцать семь (Основание 27)",
        "numbersystem.octovigesimal": "Двадцать восемь (Основание 28)",
        "numbersystem.enneavigesimal": "Двадцать девять (Основание 29)",
        "numbersystem.trigesimal": "Тридцатеричная (Основание 30)",
        "numbersystem.untrigesimal": "Тридцать одна (Основание 31)",
        "numbersystem.duotrigesimal": "Тридцать два (Основание 32)",
        "numbersystem.tritrigesimal": "Тридцать три (Основание 33)",
        "numbersystem.tetratrigesimal": "Тридцать четыре (Основание 34)",
        "numbersystem.pentatrigesimal": "Тридцать пять (Основание 35)",
        "numbersystem.hexatrigesimal": "Тридцать шесть (Основание 36)",

        // Publications page
        "publications.search": "Поиск...",
        "publications.learnmore": "Узнать",
        "publications.notfound": "По вашему запросу темы не найдены.",

        "publications.seo.title": "Статьи — Читайте и изучайте материалы по системам счисления",
        "publications.seo.description":
            "Читайте полезные статьи о системах счисления: двоичная, десятичная, шестнадцатеричная и другие числовые системы, применяемые в математике и информатике.",
        "publications.seo.keywords":
            "системы счисления, статьи, десятичная система, двоичная система, шестнадцатеричная система, математика, цифры, позиционная система, история чисел, вычисления",

        // Calculator page
        "calculator.title": "Калькулятор Систем Счисления",
        "calculator.description": "Выполняйте вычисления в различных системах счисления.",
        "calculator.standard.title": "Стандартный Калькулятор",
        "calculator.standard.description":
            "Простой и интуитивно понятный интерфейс, предназначенный для повседневных вычислений, легкий и удобный в использовании. Позволяет быстро и точно выполнять основные арифметические операции.",
        "calculator.basic.features": "Основные возможности:",
        "calculator.arithmetic": "Арифметические операции:",
        "calculator.sign.change": "Смена знака и обратное число:",
        "calculator.percentage": "Найти 1 процент от числа:",
        "calculator.square.root": "Квадрат и корень:",
        "calculator.clear.delete": "Кнопки очистки и удаления:",
        "calculator.decimal.numbers": "Работа с десятичными числами:",
        "calculator.numbersystem": "Система Счисления",
        "calculator.type": "Тип Калькулятора",
        "calculator.type.standard": "Стандартный",
        "calculator.type.advanced": "Продвинутый",
        "calculator.type.logical": "Логический",

        // calculator info for Russian (add missing ones)
        "calculator.info.description.10":
            "это позиционная система счисления, естественно используемая людьми, основанная на 10 цифрах. Используется в большинстве калькуляторов, пользовательских интерфейсах и всех областях математики",
        "calculator.info.description.2":
            "это позиционная система счисления, основанная на 2 цифрах. Основной принцип работы компьютеров основан на этой системе счисления: память, процессор, файлы, электрические сигналы и т.д.",
        "calculator.info.description.8": "это позиционная система счисления, основанная на 8 цифрах. Используется в некоторых местах",
        "calculator.info.description.16":
            "это позиционная система счисления, основанная на 16 цифрах. Используется для компьютерных технологий, адресов памяти, цветовых кодов (CSS), битовых операций, ассемблера и отладки",
        "calculator.info.description.3": "это позиционная система счисления, основанная на 3 цифрах. Редко используется в современном мире",
        "calculator.info.description.4": "это позиционная система счисления, основанная на 4 цифрах. Редко используется в современном мире",
        "calculator.info.description.5": "это позиционная система счисления, основанная на 5 цифрах. Редко используется в современном мире",
        "calculator.info.description.6": "это позиционная система счисления, основанная на 6 цифрах. Редко используется в современном мире",
        "calculator.info.description.7": "это позиционная система счисления, основанная на 7 цифрах. Редко используется в современном мире",
        "calculator.info.description.9": "это позиционная система счисления, основанная на 9 цифрах. Редко используется в современном мире",
        "calculator.info.description.11": "это позиционная система счисления, основанная на 11 цифрах. Редко используется в современном мире",
        "calculator.info.description.12": "это позиционная система счисления, основанная на 12 цифрах. Редко используется в современном мире",
        "calculator.info.description.13": "это позиционная система счисления, основанная на 13 цифрах. Редко используется в современном мире",
        "calculator.info.description.14": "это позиционная система счисления, основанная на 14 цифрах. Редко используется в современном мире",
        "calculator.info.description.15": "это позиционная система счисления, основанная на 15 цифрах. Редко используется в современном мире",
        "calculator.info.description.17": "это позиционная система счисления, основанная на 17 цифрах. Редко используется в современном мире",
        "calculator.info.description.18": "это позиционная система счисления, основанная на 18 цифрах. Редко используется в современном мире",
        "calculator.info.description.19": "это позиционная система счисления, основанная на 19 цифрах. Редко используется в современном мире",
        "calculator.info.description.20": "это позиционная система счисления, основанная на 20 цифрах. Редко используется в современном мире",
        "calculator.info.description.21": "это позиционная система счисления, основанная на 21 цифре. Редко используется в современном мире",
        "calculator.info.description.22": "это позиционная система счисления, основанная на 22 цифрах. Редко используется в современном мире",
        "calculator.info.description.23": "это позиционная система счисления, основанная на 23 цифрах. Редко используется в современном мире",
        "calculator.info.description.24":
            "это позиционная система счисления, основанная на 24 цифрах. Редко используется в современном мире, но эту систему счисления можно увидеть на примере часов",
        "calculator.info.description.25": "это позиционная система счисления, основанная на 25 цифрах. Редко используется в современном мире",
        "calculator.info.description.26": "это позиционная система счисления, основанная на 26 цифрах. Редко используется в современном мире",
        "calculator.info.description.27": "это позиционная система счисления, основанная на 27 цифрах. Редко используется в современном мире",
        "calculator.info.description.28": "это позиционная система счисления, основанная на 28 цифрах. Редко используется в современном мире",
        "calculator.info.description.29": "это позиционная система счисления, основанная на 29 цифрах. Редко используется в современном мире",
        "calculator.info.description.30": "это позиционная система счисления, основанная на 30 цифрах. Редко используется в современном мире",
        "calculator.info.description.31": "это позиционная система счисления, основанная на 31 цифре. Редко используется в современном мире",
        "calculator.info.description.32": "это позиционная система счисления, основанная на 32 цифрах. Редко используется в современном мире",
        "calculator.info.description.33": "это позиционная система счисления, основанная на 33 цифрах. Редко используется в современном мире",
        "calculator.info.description.34": "это позиционная система счисления, основанная на 34 цифрах. Редко используется в современном мире",
        "calculator.info.description.35": "это позиционная система счисления, основанная на 35 цифрах. Редко используется в современном мире",
        "calculator.info.description.36": "это позиционная система счисления, основанная на 36 цифрах. Редко используется в современном мире",

        // Add title translations for Russian:
        "calculator.info.title.10": "Десятичная система счисления",
        "calculator.info.title.2": "Двоичная система счисления",
        "calculator.info.title.8": "Восьмеричная система счисления",
        "calculator.info.title.16": "Шестнадцатеричная система счисления",
        "calculator.info.title.3": "Троичная система счисления",
        "calculator.info.title.4": "Четверичная система счисления",
        "calculator.info.title.5": "Пятеричная система счисления",
        "calculator.info.title.6": "Шестеричная система счисления",
        "calculator.info.title.7": "Семеричная система счисления",
        "calculator.info.title.9": "Девятеричная система счисления",
        "calculator.info.title.11": "Одиннадцатеричная система счисления",
        "calculator.info.title.12": "Двенадцатеричная система счисления",
        "calculator.info.title.13": "Тринадцатеричная система счисления",
        "calculator.info.title.14": "Четырнадцатеричная система счисления",
        "calculator.info.title.15": "Пятнадцатеричная система счисления",
        "calculator.info.title.17": "Семнадцатеричная система счисления",
        "calculator.info.title.18": "Восемнадцатеричная система счисления",
        "calculator.info.title.19": "Девятнадцатеричная система счисления",
        "calculator.info.title.20": "Двадцатеричная система счисления",
        "calculator.info.title.21": "Двадцать одна система счисления",
        "calculator.info.title.22": "Двадцать два система счисления",
        "calculator.info.title.23": "Двадцать три система счисления",
        "calculator.info.title.24": "Двадцать четыре система счисления",
        "calculator.info.title.25": "Двадцать пять система счисления",
        "calculator.info.title.26": "Двадцать шесть система счисления",
        "calculator.info.title.27": "Двадцать семь система счисления",
        "calculator.info.title.28": "Двадцать восемь система счисления",
        "calculator.info.title.29": "Двадцать девять система счисления",
        "calculator.info.title.30": "Тридцатеричная система счисления",
        "calculator.info.title.31": "Тридцать одна система счисления",
        "calculator.info.title.32": "Тридцать два система счисления",
        "calculator.info.title.33": "Тридцать три система счисления",
        "calculator.info.title.34": "Тридцать четыре система счисления",
        "calculator.info.title.35": "Тридцать пять система счисления",
        "calculator.info.title.36": "Тридцать шесть система счисления",

        // Add digits translations for Russian:
        "calculator.info.digits.10": "Десятичная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0",
        "calculator.info.digits.2": "Двоичная система счисления использует следующие цифры: 1, 0",
        "calculator.info.digits.8": "Восьмеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 0",
        "calculator.info.digits.16":
            "Шестнадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, 0. Где: 0–9 обычные цифры, A–F представляют значения 10–15 соответственно",
        "calculator.info.digits.3": "Троичная система счисления использует следующие цифры: 1, 2, 0",
        "calculator.info.digits.4": "Четверичная система счисления использует следующие цифры: 1, 2, 3, 0",
        "calculator.info.digits.5": "Пятеричная система счисления использует следующие цифры: 1, 2, 3, 4, 0",
        "calculator.info.digits.6": "Шестеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 0",
        "calculator.info.digits.7": "Семеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 0",
        "calculator.info.digits.9": "Девятеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 0",
        "calculator.info.digits.11":
            "Одиннадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, 0. Где: 0–9 обычные цифры, A представляет значение 10",
        "calculator.info.digits.12":
            "Двенадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, 0. Где: 0–9 обычные цифры, A–B представляют значения 10–11 соответственно",
        "calculator.info.digits.13":
            "Тринадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, 0. Где: 0–9 обычные цифры, A–C представляют значения 10–12 соответственно",
        "calculator.info.digits.14":
            "Четырнадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, 0. Где: 0–9 обычные цифры, A–D представляют значения 10–13 соответственно",
        "calculator.info.digits.15":
            "Пятнадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, 0. Где: 0–9 обычные цифры, A–E представляют значения 10–14 соответственно",
        "calculator.info.digits.17":
            "Семнадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, 0. Где: 0–9 обычные цифры, A–G представляют значения 10–16 соответственно",
        "calculator.info.digits.18":
            "Восемнадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, 0. Где: 0–9 обычные цифры, A–H представляют значения 10–17 соответственно",
        "calculator.info.digits.19":
            "Девятнадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, 0. Где: 0–9 обычные цифры, A–I представляют значения 10–18 соответственно",
        "calculator.info.digits.20":
            "Двадцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, 0. Где: 0–9 обычные цифры, A–J представляют значения 10–19 соответственно",
        "calculator.info.digits.21":
            "Двадцать одна система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, 0. Где: 0–9 обычные цифры, A–K представляют значения 10–20 соответственно",
        "calculator.info.digits.22":
            "Двадцать два система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, 0. Где: 0–9 обычные цифры, A–L представляют значения 10–21 соответственно",
        "calculator.info.digits.23":
            "Двадцать три система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, 0. Где: 0–9 обычные цифры, A–M представляют значения 10–22 соответственно",
        "calculator.info.digits.24":
            "Двадцать четыре система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, 0. Где: 0–9 обычные цифры, A–N представляют значения 10–23 соответственно",
        "calculator.info.digits.25":
            "Двадцать пять система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, 0. Где: 0–9 обычные цифры, A–O представляют значения 10–24 соответственно",
        "calculator.info.digits.26":
            "Двадцать шесть система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, 0. Где: 0–9 обычные цифры, A–P представляют значения 10–25 соответственно",
        "calculator.info.digits.27":
            "Двадцать семь система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, 0. Где: 0–9 обычные цифры, A–Q представляют значения 10–26 соответственно",
        "calculator.info.digits.28":
            "Двадцать восемь система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, 0. Где: 0–9 обычные цифры, A–R представляют значения 10–27 соответственно",
        "calculator.info.digits.29":
            "Двадцать девять система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, 0. Где: 0–9 обычные цифры, A–S представляют значения 10–28 соответственно",
        "calculator.info.digits.30":
            "Тридцатеричная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, 0. Где: 0–9 обычные цифры, A–T представляют значения 10–29 соответственно",
        "calculator.info.digits.31":
            "Тридцать одна система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, 0. Где: 0–9 обычные цифры, A–U представляют значения 10–30 соответственно",
        "calculator.info.digits.32":
            "Тридцать два система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, 0. Где: 0–9 обычные цифры, A–V представляют значения 10–31 соответственно",
        "calculator.info.digits.33":
            "Тридцать три система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, 0. Где: 0–9 обычные цифры, A–W представляют значения 10–32 соответственно",
        "calculator.info.digits.34":
            "Тридцать четыре система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, 0. Где: 0–9 обычные цифры, A–X представляют значения 10–33 соответственно",
        "calculator.info.digits.35":
            "Тридцать пять система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, 0. Где: 0–9 обычные цифры, A–Y представляют значения 10–34 соответственно",
        "calculator.info.digits.36":
            "Тридцать шесть система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, 0. Где: 0–9 обычные цифры, A–Z представляют значения 10–35 соответственно",

        // Add warning translations for Russian:
        "calculator.info.warning.10": "",
        "calculator.info.warning.2": "При выборе двоичной системы счисления данный калькулятор выполняет вычисления согласно двоичной системе счисления",
        "calculator.info.warning.8":
            "При выборе восьмеричной системы счисления данный калькулятор выполняет вычисления согласно восьмеричной системе счисления",
        "calculator.info.warning.16":
            "При выборе шестнадцатеричной системы счисления данный калькулятор выполняет вычисления согласно шестнадцатеричной системе счисления",
        "calculator.info.warning.3": "При выборе троичной системы счисления данный калькулятор выполняет вычисления согласно троичной системе счисления",
        "calculator.info.warning.4": "При выборе четверичной системы счисления данный калькулятор выполняет вычисления согласно четверичной системе счисления",
        "calculator.info.warning.5": "При выборе пятеричной системы счисления данный калькулятор выполняет вычисления согласно пятеричной системе счисления",
        "calculator.info.warning.6": "При выборе шестеричной системы счисления данный калькулятор выполняет вычисления согласно шестеричной системе счисления",
        "calculator.info.warning.7": "При выборе семеричной системы счисления данный калькулятор выполняет вычисления согласно семеричной системе счисления",
        "calculator.info.warning.9":
            "При выборе девятеричной системы счисления данный калькулятор выполняет вычисления согласно девятеричной системе счисления",
        "calculator.info.warning.11":
            "При выборе одиннадцатеричной системы счисления данный калькулятор выполняет вычисления согласно одиннадцатеричной системе счисления",
        "calculator.info.warning.12":
            "При выборе двенадцатеричной системы счисления данный калькулятор выполняет вычисления согласно двенадцатеричной системе счисления",
        "calculator.info.warning.13":
            "При выборе тринадцатеричной системы счисления данный калькулятор выполняет вычисления согласно тринадцатеричной системе счисления",
        "calculator.info.warning.14":
            "При выборе четырнадцатеричной системы счисления данный калькулятор выполняет вычисления согласно четырнадцатеричной системе счисления",
        "calculator.info.warning.15":
            "При выборе пятнадцатеричной системы счисления данный калькулятор выполняет вычисления согласно пятнадцатеричной системе счисления",
        "calculator.info.warning.17":
            "При выборе семнадцатеричной системы счисления данный калькулятор выполняет вычисления согласно семнадцатеричной системе счисления",
        "calculator.info.warning.18":
            "При выборе восемнадцатеричной системы счисления данный калькулятор выполняет вычисления согласно восемнадцатеричной системе счисления",
        "calculator.info.warning.19":
            "При выборе девятнадцатеричной системы счисления данный калькулятор выполняет вычисления согласно девятнадцатеричной системе счисления",
        "calculator.info.warning.20":
            "При выборе двадцатеричной системы счисления данный калькулятор выполняет вычисления согласно двадцатеричной системе счисления",
        "calculator.info.warning.21":
            "При выборе двадцать одной системы счисления данный калькулятор выполняет вычисления согласно двадцать одной системе счисления",
        "calculator.info.warning.22":
            "При выборе двадцать двух системы счисления данный калькулятор выполняет вычисления согласно двадцать двух системе счисления",
        "calculator.info.warning.23":
            "При выборе двадцать трех системы счисления данный калькулятор выполняет вычисления согласно двадцать трех системе счисления",
        "calculator.info.warning.24":
            "При выборе двадцать четырех системы счисления данный калькулятор выполняет вычисления согласно двадцать четырех системе счисления",
        "calculator.info.warning.25":
            "При выборе двадцать пять системы счисления данный калькулятор выполняет вычисления согласно двадцать пять системе счисления",
        "calculator.info.warning.26":
            "При выборе двадцать шесть системы счисления данный калькулятор выполняет вычисления согласно двадцать шесть системе счисления",
        "calculator.info.warning.27":
            "При выборе двадцать семь системы счисления данный калькулятор выполняет вычисления согласно двадцать семь системе счисления",
        "calculator.info.warning.28":
            "При выборе двадцать восемь системы счисления данный калькулятор выполняет вычисления согласно двадцать восемь системе счисления",
        "calculator.info.warning.29":
            "При выборе двадцать девяти системы счисления данный калькулятор выполняет вычисления согласно двадцать девяти системе счисления",
        "calculator.info.warning.30":
            "При выборе тридцатеричной системы счисления данный калькулятор выполняет вычисления согласно тридцатеричной системе счисления",
        "calculator.info.warning.31":
            "При выборе тридцать одной системы счисления данный калькулятор выполняет вычисления согласно тридцать одной системе счисления",
        "calculator.info.warning.32":
            "При выборе тридцать двух системы счисления данный калькулятор выполняет вычисления согласно тридцать двух системе счисления",
        "calculator.info.warning.33":
            "При выборе тридцать трех системы счисления данный калькулятор выполняет вычисления согласно тридцать трех системе счисления",
        "calculator.info.warning.34":
            "При выборе тридцать четырех системы счисления данный калькулятор выполняет вычисления согласно тридцать четырех системе счисления",
        "calculator.info.warning.35":
            "При выборе тридцать пять системы счисления данный калькулятор выполняет вычисления согласно тридцать пять системе счисления",
        "calculator.info.warning.36":
            "При выборе тридцать шесть системы счисления данный калькулятор выполняет вычисления согласно тридцать шесть системе счисления",

        "calculator.seo.title.2": "Калькулятор двоичной системы — арифметические и научные операции",
        "calculator.seo.description.2":
            "Онлайн-калькулятор двоичной системы счисления для выполнения всех арифметических операций — сложение, вычитание, умножение, деление — прямо в двоичной системе. Идеален для программирования, электроники, компьютерных наук и обучения.",
        "calculator.seo.keywords.2":
            "двоичная система счисления, двоичный калькулятор, binary calculator, двоичная арифметика, онлайн калькулятор 0 и 1, калькулятор для программистов, калькулятор для электроники, компьютерная арифметика, быстрые расчёты двоичная",
        "calculator.seo.title.3": "Калькулятор троичной системы — арифметические и научные операции",
        "calculator.seo.description.3":
            "Онлайн-калькулятор троичной системы счисления для выполнения всех арифметических операций — сложение, вычитание, умножение, деление — прямо в троичной системе. Поддерживает целые, дробные и отрицательные числа. Подходит для программирования, математики и обучения.",
        "calculator.seo.keywords.3":
            "троичная система счисления, троичный калькулятор, ternary calculator, троичная арифметика, онлайн калькулятор 0 1 2, калькулятор для программистов, калькулятор base 3, математика онлайн, компьютерная арифметика, расчёты в троичной системе",
        "calculator.seo.title.4": "Калькулятор четверичной системы — арифметические и научные операции",
        "calculator.seo.description.4":
            "С помощью онлайн-калькулятора четверичной (quartal) системы выполняйте все арифметические операции +, -, ×, ÷ в 4-ричной системе. Полная поддержка целых, дробных и отрицательных чисел. Удобная и быстрая работа в 4-ричной системе.",
        "calculator.seo.keywords.4":
            "четверичная система, quartal калькулятор, калькулятор base 4, base 4 calculator, четверичная арифметика, онлайн quartal калькулятор, калькулятор для программистов",
        "calculator.seo.title.5": "Калькулятор пятеричной системы - арифметика и научные операции",
        "calculator.seo.description.5":
            "Онлайн калькулятор пятеричной (base 5) системы позволяет выполнять сложение, вычитание, умножение, деление и другие арифметические операции в системе base 5. Поддержка целых, дробных и отрицательных чисел. Идеально для программистов и студентов.",
        "calculator.seo.keywords.5": "пятеричная система, калькулятор base 5, арифметика base 5, онлайн калькулятор 5, калькулятор для программистов",
        "calculator.seo.title.6": "Калькулятор шестиричной системы - арифметика и научные операции",
        "calculator.seo.description.6":
            "Онлайн калькулятор шестиричной (base 6) системы позволяет выполнять сложение, вычитание, умножение, деление и сложные вычисления в системе base 6. Полная поддержка целых, дробных и отрицательных чисел. Удобно для программистов и студентов.",
        "calculator.seo.keywords.6": "шестиричная система, калькулятор base 6, арифметика base 6, онлайн калькулятор 6, калькулятор для программистов",
        "calculator.seo.title.7": "Калькулятор семеричной системы - арифметика и научные операции",
        "calculator.seo.description.7":
            "Онлайн калькулятор семеричной (base 7) системы позволяет выполнять сложение, вычитание, умножение, деление и другие арифметические операции в системе base 7. Поддержка целых, дробных и отрицательных чисел. Отлично подходит для программистов, студентов и любителей математики.",
        "calculator.seo.keywords.7": "семеричная система, калькулятор base 7, арифметика base 7, онлайн калькулятор 7, калькулятор для программистов",
        "calculator.seo.title.8": "Калькулятор восьмеричной системы — арифметические и научные операции",
        "calculator.seo.description.8":
            "С помощью онлайн-калькулятора восьмеричной (octal) системы выполняйте все арифметические операции +, -, ×, ÷ в 8-ричной системе. Полная поддержка целых, дробных и отрицательных чисел. Удобная и быстрая работа в 8-ричной системе.",
        "calculator.seo.keywords.8":
            "восьмеричная система, octal калькулятор, калькулятор base 8, base 8 calculator, восьмеричная арифметика, онлайн octal калькулятор, калькулятор для программистов",
        "calculator.seo.title.9": "Калькулятор девятеричной системы - арифметика и научные операции",
        "calculator.seo.description.9":
            "Онлайн калькулятор девятеричной (base 9) системы позволяет выполнять сложение, вычитание, умножение, деление и сложные вычисления в системе base 9. Полная поддержка целых, дробных и отрицательных чисел. Отлично подходит для программистов, студентов и любителей математики.",
        "calculator.seo.keywords.9": "девятеричная система, калькулятор base 9, арифметика base 9, онлайн калькулятор 9, калькулятор для программистов",
        "calculator.seo.title.10": "Онлайн-калькулятор — арифметические и научные операции",
        "calculator.seo.description.10":
            "С помощью этого онлайн-калькулятора вы можете выполнять арифметические операции +, -, ×, ÷, менять знак числа с помощью ± и 1/x, рассчитывать процент с %, находить квадрат и корень с x² и √x. Кнопки Clear и ⌫ помогут легко исправлять ошибки. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.10":
            "онлайн калькулятор, арифметические операции, научные операции, сложение, вычитание, умножение, деление, ±, 1/x, %, x², √x, Clear, ⌫, целые числа, дробные числа, отрицательные числа",
        "calculator.seo.title.11": "Калькулятор одиннадцатеричной системы - арифметика и научные операции",
        "calculator.seo.description.11":
            "Онлайн калькулятор одиннадцатеричной (base 11) системы позволяет выполнять сложение, вычитание, умножение, деление и другие арифметические операции в системе base 11. Поддержка целых, дробных и отрицательных чисел. Удобно для программистов и студентов.",
        "calculator.seo.keywords.11":
            "одиннадцатеричная система, калькулятор base 11, арифметика base 11, онлайн калькулятор 11, калькулятор для программистов",
        "calculator.seo.title.12": "Калькулятор двенадцатеричной системы - арифметика и научные операции",
        "calculator.seo.description.12":
            "Онлайн калькулятор системы base 12 позволяет выполнять сложение, вычитание, умножение и деление, а также работать с отрицательными и дробными числами.",
        "calculator.seo.keywords.12": "двенадцатеричная система, калькулятор base 12, арифметика base 12, онлайн калькулятор 12, калькулятор для программистов",
        "calculator.seo.title.13": "Калькулятор тринадцатеричной системы - арифметика и научные операции",
        "calculator.seo.description.13":
            "Онлайн калькулятор системы base 13 выполняет сложение, вычитание, умножение и деление с поддержкой отрицательных и дробных чисел.",
        "calculator.seo.keywords.13": "тринадцатеричная система, калькулятор base 13, арифметика base 13, онлайн калькулятор 13, калькулятор для программистов",
        "calculator.seo.title.14": "Калькулятор четырнадцатеричной системы - арифметика и научные операции",
        "calculator.seo.description.14":
            "Онлайн калькулятор системы base 14 позволяет быстро и удобно выполнять сложение, вычитание, умножение и деление. Поддержка дробных и отрицательных чисел.",
        "calculator.seo.keywords.14":
            "четырнадцатеричная система, калькулятор base 14, арифметика base 14, онлайн калькулятор 14, калькулятор для программистов",
        "calculator.seo.title.15": "Калькулятор пятнадцатеричной системы - арифметические и научные операции",
        "calculator.seo.description.15":
            "Онлайн калькулятор пятнадцатеричной (base 15) системы позволяет выполнять сложение, вычитание, умножение и деление в 15-й системе счисления. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.15": "пятнадцатеричная система, калькулятор base 15, онлайн калькулятор 15, арифметика base 15, калькулятор для программистов",
        "calculator.seo.title.16": "Калькулятор шестнадцатеричной системы — арифметические и научные операции",
        "calculator.seo.description.16":
            "С помощью онлайн-калькулятора шестнадцатеричной (hexadecimal) системы выполняйте все арифметические операции +, -, ×, ÷ в 16-ричной системе. Полная поддержка целых, дробных и отрицательных чисел. Удобная и быстрая работа в шестнадцатеричной (hexadecimal) системе.",
        "calculator.seo.keywords.16":
            "шестнадцатеричная система, hexadecimal калькулятор, калькулятор base 16, base 16 calculator, шестнадцатеричная арифметика, онлайн hexadecimal калькулятор, калькулятор для программистов",
        "calculator.seo.title.17": "Калькулятор семнадцатеричной системы - арифметические и научные операции",
        "calculator.seo.description.17":
            "Онлайн калькулятор семнадцатеричной (base 17) системы позволяет выполнять сложение, вычитание, умножение и деление в 17-й системе счисления. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.17": "семнадцатеричная система, калькулятор base 17, онлайн калькулятор 17, арифметика base 17, калькулятор для программистов",
        "calculator.seo.title.18": "Калькулятор восемнадцатеричной системы - арифметические и научные операции",
        "calculator.seo.description.18":
            "Онлайн калькулятор восемнадцатеричной (base 18) системы позволяет выполнять сложение, вычитание, умножение и деление в 18-й системе счисления. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.18":
            "восемнадцатеричная система, калькулятор base 18, онлайн калькулятор 18, арифметика base 18, калькулятор для программистов",
        "calculator.seo.title.19": "Калькулятор девятнадцатеричной системы - арифметика и научные операции",
        "calculator.seo.description.19":
            "Онлайн калькулятор системы base 19 выполняет сложение, вычитание, умножение и деление, а также работу с дробными и отрицательными числами.",
        "calculator.seo.keywords.19":
            "девятнадцатеричная система, калькулятор base 19, арифметика base 19, онлайн калькулятор 19, калькулятор для программистов",
        "calculator.seo.title.20": "Калькулятор двадцатеричной системы - арифметика и научные операции",
        "calculator.seo.description.20":
            "Онлайн калькулятор двадцатеричной (base 20) системы позволяет выполнять сложение, вычитание, умножение, деление и сложные вычисления. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.20": "двадцатеричная система, калькулятор base 20, арифметика base 20, онлайн калькулятор 20, калькулятор для программистов",
        "calculator.seo.title.21": "Калькулятор двадцать одной системы - арифметика и научные операции",
        "calculator.seo.description.21":
            "Онлайн калькулятор системы base 21 позволяет выполнять сложение, вычитание, умножение и деление. Поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.21": "система base 21, калькулятор base 21, арифметика base 21, онлайн калькулятор 21, калькулятор для программистов",
        "calculator.seo.title.22": "Калькулятор двадцать двух системы - арифметика и научные операции",
        "calculator.seo.description.22":
            "Онлайн калькулятор системы base 22 позволяет быстро и легко выполнять арифметические и научные вычисления. Поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.22": "система base 22, калькулятор base 22, арифметика base 22, онлайн калькулятор 22, калькулятор для программистов",
        "calculator.seo.title.23": "Калькулятор двадцать трёх системы - арифметика и научные операции",
        "calculator.seo.description.23":
            "Онлайн калькулятор системы base 23 позволяет выполнять сложение, вычитание, умножение, деление и сложные вычисления. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.23": "система base 23, калькулятор base 23, арифметика base 23, онлайн калькулятор 23, калькулятор для программистов",
        "calculator.seo.title.24": "Калькулятор двадцать четырёх системы - арифметика и научные операции",
        "calculator.seo.description.24":
            "Онлайн калькулятор системы base 24 позволяет выполнять арифметические и научные вычисления. Поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.24": "система base 24, калькулятор base 24, арифметика base 24, онлайн калькулятор 24, калькулятор для программистов",
        "calculator.seo.title.25": "Калькулятор двадцать пять системы - арифметика и научные операции",
        "calculator.seo.description.25":
            "Онлайн калькулятор системы base 25 позволяет выполнять сложение, вычитание, умножение, деление и сложные вычисления. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.25": "система base 25, калькулятор base 25, арифметика base 25, онлайн калькулятор 25, калькулятор для программистов",
        "calculator.seo.title.26": "Калькулятор двадцать шесть системы - арифметика и научные операции",
        "calculator.seo.description.26":
            "Онлайн калькулятор системы base 26 позволяет выполнять арифметические и научные вычисления, включая сложение, вычитание, умножение и деление. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.26": "система base 26, калькулятор base 26, арифметика base 26, онлайн калькулятор 26, калькулятор для программистов",
        "calculator.seo.title.27": "Калькулятор двадцать семь системы - арифметика и научные операции",
        "calculator.seo.description.27":
            "Онлайн калькулятор системы base 27 позволяет легко выполнять сложение, вычитание, умножение, деление и другие арифметические операции. Поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.27": "система base 27, калькулятор base 27, арифметика base 27, онлайн калькулятор 27, калькулятор для программистов",
        "calculator.seo.title.28": "Калькулятор двадцать восемь системы - арифметика и научные операции",
        "calculator.seo.description.28":
            "Онлайн калькулятор системы base 28 позволяет выполнять все арифметические операции, включая сложение, вычитание, умножение и деление. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.28": "система base 28, калькулятор base 28, арифметика base 28, онлайн калькулятор 28, калькулятор для программистов",
        "calculator.seo.title.29": "Калькулятор двадцать девять системы - арифметика и научные операции",
        "calculator.seo.description.29":
            "Онлайн калькулятор системы base 29 позволяет выполнять сложение, вычитание, умножение, деление и другие сложные вычисления. Поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.29": "система base 29, калькулятор base 29, арифметика base 29, онлайн калькулятор 29, калькулятор для программистов",
        "calculator.seo.title.30": "Калькулятор тридцатеричной системы - арифметика и научные операции",
        "calculator.seo.description.30":
            "Онлайн калькулятор системы base 30 позволяет выполнять сложение, вычитание, умножение, деление и сложные вычисления. Полная поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.30": "тридцатеричная система, калькулятор base 30, арифметика base 30, онлайн калькулятор 30, калькулятор для программистов",
        "calculator.seo.title.31": "Калькулятор тридцать одной системы - арифметика и научные операции",
        "calculator.seo.description.31":
            "Онлайн калькулятор системы base 31 позволяет выполнять сложение, вычитание, умножение и деление в тридцать первой системе счисления. Поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.31": "система base 31, калькулятор base 31, арифметика base 31, онлайн калькулятор 31, калькулятор для программистов",
        "calculator.seo.title.32": "Калькулятор тридцать двух системы - арифметика и научные операции",
        "calculator.seo.description.32":
            "Онлайн калькулятор системы base 32 позволяет быстро выполнять сложение, вычитание, умножение и деление. Поддержка целых, дробных и отрицательных чисел.",
        "calculator.seo.keywords.32": "система base 32, калькулятор base 32, арифметика base 32, онлайн калькулятор 32, калькулятор для программистов",
        "calculator.seo.title.33": "Калькулятор тридцать трёх системы - арифметика и научные операции",
        "calculator.seo.description.33": "Онлайн калькулятор системы base 33 позволяет выполнять все основные арифметические операции и сложные вычисления.",
        "calculator.seo.keywords.33": "система base 33, калькулятор base 33, арифметика base 33, онлайн калькулятор 33, калькулятор для программистов",
        "calculator.seo.title.34": "Калькулятор тридцать четырёх системы - арифметика и научные операции",
        "calculator.seo.description.34":
            "Онлайн калькулятор системы base 34 позволяет выполнять сложение, вычитание, умножение и деление, включая поддержку отрицательных и дробных чисел.",
        "calculator.seo.keywords.34": "система base 34, калькулятор base 34, арифметика base 34, онлайн калькулятор 34, калькулятор для программистов",
        "calculator.seo.title.35": "Калькулятор тридцать пяти системы - арифметика и научные операции",
        "calculator.seo.description.35": "Онлайн калькулятор системы base 35 позволяет выполнять все виды арифметических операций и сложных вычислений.",
        "calculator.seo.keywords.35": "система base 35, калькулятор base 35, арифметика base 35, онлайн калькулятор 35, калькулятор для программистов",
        "calculator.seo.title.36": "Калькулятор тридцать шести системы - арифметика и научные операции",
        "calculator.seo.description.36":
            "Онлайн калькулятор системы base 36 поддерживает сложение, вычитание, умножение, деление и работу с дробными и отрицательными числами.",
        "calculator.seo.keywords.36": "система base 36, калькулятор base 36, арифметика base 36, онлайн калькулятор 36, калькулятор для программистов",

        // Code page
        "code.title": "Код Систем Счисления",
        "code.description": "Примеры программирования и фрагменты кода для работы с системами счисления.",

        // About page
        "about.title": "О приложении",
        "about.description":
            "Это приложение предназначено для работы с системами счисления. Если вы студент, разработчик или просто интересуетесь миром чисел — это приложение станет для вас полезным помощником. С его помощью вы сможете изучать различные системы счисления, выполнять вычисления и необходимые преобразования.",
        "about.page.conversion.desription":
            "В этом разделе вы сможете легко и точно преобразовывать числа из любой системы счисления с основанием от 2 до 36 в любую другую систему в этом же диапазоне. Поддерживаются не только целые числа, но и дробные, а также отрицательные значения. Процесс конверсии не просто выдает результат, но и пошагово поясняет каждый этап, что позволяет понять саму логику преобразования. Результаты точны и надежны, что делает инструмент полезным для обучения, программирования, математики и повседневных расчетов. Удобный интерфейс и подробные пояснения помогут вам быстрее освоить материал. Теперь вам не нужно заучивать сложные алгоритмы конверсии — вы сможете понимать их в реальном времени и применять на практике.",
        "about.page.calculator.desription":
            "Этот раздел предоставляет все возможности обычного стандартного калькулятора, но с одним важным отличием: вы можете выбрать любую систему счисления с основанием от 2 до 36. Все арифметические операции — сложение, вычитание, умножение, деление и другие вычисления — выполняются в выбранной системе счисления. Это позволяет не только получать результаты, но и на практике видеть логику вычислений в данной системе. Калькулятор поддерживает целые, дробные и отрицательные числа.",
        "about.page.publications.desription":
            "В этом разделе представлена общая и более глубокая информация о системах счисления: что такое система счисления и как она работает; различия между десятичной, двоичной, восьмеричной и шестнадцатеричной системами; практическое применение и исторический контекст. Этот раздел особенно полезен для учащихся и изучающих",
        "about.page.code.desription":
            "В этом разделе вы найдёте алгоритмы и примеры программного кода, связанные с системами счисления: алгоритмы преобразования между системами счисления, примеры, связанные с двоичной арифметикой, готовые коды на популярных языках программирования. Этот раздел особенно предназначен для разработчиков и пользователей, желающих изучить тему.",
        "about.share.title": "Поделиться",
        "about.share.description":
            "Если вы считаете приложение полезным, поделитесь им с другими. Благодаря этому приложению не только вы, но и ваши друзья, одногруппники и коллеги смогут изучать системы счисления и расширять свои знания. Приложение с простым интерфейсом и понятными пояснениями делает сложную тему доступной для понимания. Особенно оно будет полезно студентам как дополнительный источник информации, а программистам — как удобный инструмент. Всё в одном месте: вычисления, конвертация, обучение и написание кода — все знания о системах счисления собраны в одном приложении.",
        "about.share.button": "Поделиться",
        "about.contact.title": "Свяжитесь с нами",
        "about.contact.description1": "Есть вопросы или предложения?",
        "about.contact.description2": "У вас есть предложение по улучшению приложения или что-то показалось непонятным?",
        "about.contact.description3": "Хотите добавить статью на какую-либо тему или считаете, что это необходимо?",
        "about.contact.description4": "Есть замечания или жалобы?",
        "about.contact.description5": "Если в работе приложения или в содержании сообщений есть ошибка или непонимание",
        "about.contact.description6": "Как по вопросам, связанным с приложением, так и по другим вопросам",
        "about.contact.description.bold": "Свяжитесь с нами.",
        "about.contact.description.def": "Ваше мнение важно для нас!",
        "about.contact.button": "Связь",

        // Footer
        "footer.rights": "Все права защищены.",

        // share
        "share.title": "Поделиться",
        "share.description": "Поделитесь этой страницей с друзьями",
        "share.telegram": "Telegram",
        "share.email": "Эл. почта",
        "share.copy": "Копировать",
        "share.copied": "🎉 Скопировано",

        // settings calculator
        "calculator.settings.title": "Настройки калькулятора",
        "calculator.settings.label": "Система счисления",
        "calculator.settings.placeholder": "Выбрать",

        // Sidebar
        "sidebar.topics": "Темы",
    },
};

export function getTranslation(lang: Language) {
    return function t(key: string): string {
        return translations[lang]?.[key] || translations.en[key] || key;
    };
}
