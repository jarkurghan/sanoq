"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "uz" | "ru"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "uz", "ru"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.conversion": "Conversion",
    "nav.publications": "Publications",
    "nav.calculator": "Calculator",
    "nav.code": "Code",
    "nav.about": "About Us",

    // Home page
    "home.title": "Number System Converter",
    "home.description": "Convert between binary, octal, decimal, and hexadecimal number systems.",
    "home.conversion.title": "Conversion Tool",
    "home.conversion.description": "Enter a value and select the number systems to convert between.",
    "home.from": "From",
    "home.to": "To",
    "home.input": "Input Value",
    "home.result": "Result",
    "home.convert": "Convert",
    "home.swap": "Swap",
    "home.copy": "Copy",
    "home.whatare.title": "What are Number Systems?",
    "home.whatare.description":
      "Number systems are mathematical systems for expressing numbers. A number system consists of a set of symbols (digits) and rules for using these symbols to represent numbers.",
    "home.learnmore": "Learn",
    "home.calculator.title": "Number System Conversion Calculator",
    "home.calculator.description":
      "Common programming number systems include Binary (Base 2), Decimal (Base 10), Octal (Base 8), and Hexadecimal (Base 16). The number system conversion calculator allows the user to enter a number in any system and convert it to the others. It also functions as a binary bit shift calculator allowing you to change the values by shifting bits right or left or by changing individual bits.",
    "home.placeholder.binary": "Enter a binary number",
    "home.placeholder.octal": "Enter an octal number",
    "home.placeholder.decimal": "Enter a decimal number",
    "home.placeholder.hexadecimal": "Enter a hexadecimal number",

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
    "publications.title": "Publications",
    "publications.description": "Learn about different number systems and their applications.",
    "publications.welcome.title": "Welcome to Number Systems Publications",
    "publications.welcome.description":
      "This section provides comprehensive information about different number systems, their properties, and how they are used in computing and mathematics.",
    "publications.welcome.select": "Select a topic from the sidebar to learn more about specific number systems.",

    // Publications topics
    "publications.topic.binary": "Binary System",
    "publications.topic.octal": "Octal System",
    "publications.topic.decimal": "Decimal System",
    "publications.topic.hexadecimal": "Hexadecimal System",
    "publications.topic.conversions": "Number System Conversions",
    "publications.topic.history": "History of Number Systems",

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
    "calculator.advanced.title": "Advanced Calculator",
    "calculator.advanced.description": "Advanced mathematical operations and functions.",
    "calculator.logical.title": "Logical Calculator",
    "calculator.logical.description": "Bitwise and logical operations for number systems.",
    "calculator.numbersystem": "Number System",
    "calculator.type": "Calculator Type",
    "calculator.type.standard": "Standard",
    "calculator.type.advanced": "Advanced",
    "calculator.type.logical": "Logical",
    "calculator.clear": "Clear",

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
    "calculator.info.description.11":
      "is a positional number system based on 11 digits. Rarely used in the modern world",
    "calculator.info.description.12":
      "is a positional number system based on 12 digits. Rarely used in the modern world",
    "calculator.info.description.13":
      "is a positional number system based on 13 digits. Rarely used in the modern world",
    "calculator.info.description.14":
      "is a positional number system based on 14 digits. Rarely used in the modern world",
    "calculator.info.description.15":
      "is a positional number system based on 15 digits. Rarely used in the modern world",
    "calculator.info.description.17":
      "is a positional number system based on 17 digits. Rarely used in the modern world",
    "calculator.info.description.18":
      "is a positional number system based on 18 digits. Rarely used in the modern world",
    "calculator.info.description.19":
      "is a positional number system based on 19 digits. Rarely used in the modern world",
    "calculator.info.description.20":
      "is a positional number system based on 20 digits. Rarely used in the modern world",
    "calculator.info.description.21":
      "is a positional number system based on 21 digits. Rarely used in the modern world",
    "calculator.info.description.22":
      "is a positional number system based on 22 digits. Rarely used in the modern world",
    "calculator.info.description.23":
      "is a positional number system based on 23 digits. Rarely used in the modern world",
    "calculator.info.description.24":
      "is a positional number system based on 24 digits. Rarely used in the modern world, but this number system can be seen in the example of a clock",
    "calculator.info.description.25":
      "is a positional number system based on 25 digits. Rarely used in the modern world",
    "calculator.info.description.26":
      "is a positional number system based on 26 digits. Rarely used in the modern world",
    "calculator.info.description.27":
      "is a positional number system based on 27 digits. Rarely used in the modern world",
    "calculator.info.description.28":
      "is a positional number system based on 28 digits. Rarely used in the modern world",
    "calculator.info.description.29":
      "is a positional number system based on 29 digits. Rarely used in the modern world",
    "calculator.info.description.30":
      "is a positional number system based on 30 digits. Rarely used in the modern world",
    "calculator.info.description.31":
      "is a positional number system based on 31 digits. Rarely used in the modern world",
    "calculator.info.description.32":
      "is a positional number system based on 32 digits. Rarely used in the modern world",
    "calculator.info.description.33":
      "is a positional number system based on 33 digits. Rarely used in the modern world",
    "calculator.info.description.34":
      "is a positional number system based on 34 digits. Rarely used in the modern world",
    "calculator.info.description.35":
      "is a positional number system based on 35 digits. Rarely used in the modern world",
    "calculator.info.description.36":
      "is a positional number system based on 36 digits. Rarely used in the modern world",

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
    "calculator.info.warning.2":
      "When binary number system is selected, this calculator performs calculations according to the binary number system",
    "calculator.info.warning.8":
      "When octal number system is selected, this calculator performs calculations according to the octal number system",
    "calculator.info.warning.16":
      "When hexadecimal number system is selected, this calculator performs calculations according to the hexadecimal number system",
    "calculator.info.warning.3":
      "When ternary number system is selected, this calculator performs calculations according to the ternary number system",
    "calculator.info.warning.4":
      "When quaternary number system is selected, this calculator performs calculations according to the quaternary number system",
    "calculator.info.warning.5":
      "When quinary number system is selected, this calculator performs calculations according to the quinary number system",
    "calculator.info.warning.6":
      "When senary number system is selected, this calculator performs calculations according to the senary number system",
    "calculator.info.warning.7":
      "When septenary number system is selected, this calculator performs calculations according to the septenary number system",
    "calculator.info.warning.9":
      "When nonary number system is selected, this calculator performs calculations according to the nonary number system",
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

    // Code page
    "code.title": "Number Systems Code",
    "code.description": "Programming examples and code snippets for working with number systems.",
    "code.welcome.title": "Programming with Number Systems",
    "code.welcome.description":
      "This section provides code examples and explanations for working with different number systems in various programming languages.",
    "code.welcome.select": "Select a topic from the sidebar to view code examples and explanations.",

    // Code topics
    "code.topic.binarytodecimal": "Binary to Decimal Conversion",
    "code.topic.decimaltobinary": "Decimal to Binary Conversion",
    "code.topic.hexadecimal": "Hexadecimal Conversion",
    "code.topic.bitwise": "Bitwise Operations",
    "code.topic.binaryaddition": "Binary Addition",
    "code.topic.utilities": "Number System Utilities",
    "code.viewcode": "View Code",

    // About page
    "about.title": "About Us",
    "about.description": "Learn more about our number systems project and the team behind it.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "Our mission is to provide a comprehensive resource for learning about and working with different number systems. We aim to make these concepts accessible to students, programmers, and anyone interested in understanding the mathematical foundations of computing.",
    "about.project.title": "The Project",
    "about.project.description":
      "This project was created to serve as an all-in-one platform for number system publications and utilities. Our features include:",
    "about.project.feature1":
      "Conversion Tool: Convert between binary, octal, decimal, and hexadecimal number systems.",
    "about.project.feature2":
      "Publicationsal Resources: Comprehensive guides and explanations about different number systems.",
    "about.project.feature3": "Calculator: Perform arithmetic operations in various number systems.",
    "about.project.feature4":
      "Code Examples: Programming examples for working with number systems in different languages.",
    "about.team.title": "Our Team",
    "about.contact.title": "Contact Us",
    "about.contact.description": "Have questions, suggestions, or feedback? We'd love to hear from you!",

    // Footer
    "footer.description": "Learn, convert, and calculate with different number systems.",
    "footer.quicklinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.contactdesc": "Have questions or suggestions? Feel free to reach out to us.",
    "footer.rights": "All rights reserved.",

    // Sidebar
    "sidebar.topics": "Topics",
    "sidebar.menu": "Menu",
    "sidebar.close": "Close",
  },

  uz: {
    // Navigation
    "nav.conversion": "Konvertatsiya",
    "nav.publications": "Maqolalar",
    "nav.calculator": "Kalkulyator",
    "nav.code": "Kod",
    "nav.about": "Biz haqimizda",

    // Home page
    "home.title": "Sanoq Sistemalari Konvertori",
    "home.description": "Ikkilik, sakkizlik, o'nlik va o'n oltilik sanoq sistemalari orasida konvertatsiya qiling.",
    "home.conversion.title": "Konvertatsiya Vositasi",
    "home.conversion.description": "Qiymat kiriting va konvertatsiya qilish uchun sanoq sistemalarini tanlang.",
    "home.from": "Qaysi sistemadan",
    "home.to": "Qaysi sistemaga",
    "home.input": "Kiruvchi qiymat",
    "home.result": "Natija",
    "home.convert": "Konvertatsiya",
    "home.swap": "Almashtirish",
    "home.copy": "Nusxalash",
    "home.whatare.title": "Sanoq Sistemalari nima?",
    "home.whatare.description":
      "Sanoq sistemalari sonlarni ifodalash uchun matematik sistemalardir. Sanoq sistemasi belgilar (raqamlar) to'plami va bu belgilardan sonlarni ifodalash uchun foydalanish qoidalaridan iborat.",
    "home.learnmore": "O'qish",
    "home.calculator.title": "Sanoq Sistemalari Konvertatsiya Kalkulyatori",
    "home.calculator.description":
      "Umumiy dasturlash sanoq sistemalari Ikkilik (2-asos), O'nlik (10-asos), Sakkizlik (8-asos) va O'n oltilik (16-asos)ni o'z ichiga oladi. Sanoq sistemalari konvertatsiya kalkulyatori foydalanuvchiga istalgan sistemada raqam kiritish va uni boshqalarga konvertatsiya qilish imkonini beradi. U shuningdek, ikkilik bit siljish kalkulyatori sifatida ham ishlaydi, bu sizga bitlarni o'ngga yoki chapga siljitish yoki alohida bitlarni o'zgartirish orqali qiymatlarni o'zgartirish imkonini beradi.",
    "home.placeholder.binary": "Ikkilik raqam kiriting",
    "home.placeholder.octal": "Sakkizlik raqam kiriting",
    "home.placeholder.decimal": "O'nlik raqam kiriting",
    "home.placeholder.hexadecimal": "O'n oltilik raqam kiriting",

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
    "publications.title": "Maqolalar",
    "publications.description": "Turli sanoq sistemalari va ularning qo'llanilishi haqida o'rganing.",
    "publications.welcome.title": "Sanoq Sistemalari Ta'limiga Xush Kelibsiz",
    "publications.welcome.description":
      "Bu bo'lim turli sanoq sistemalari, ularning xususiyatlari va ularning hisoblash va matematikada qanday qo'llanilishi haqida keng ma'lumot beradi.",
    "publications.welcome.select":
      "Muayyan sanoq sistemalari haqida ko'proq ma'lumot olish uchun yon paneldan mavzuni tanlang.",

    // Publications topics
    "publications.topic.binary": "Ikkilik Sistema",
    "publications.topic.octal": "Sakkizlik Sistema",
    "publications.topic.decimal": "O'nlik Sistema",
    "publications.topic.hexadecimal": "O'n oltilik Sistema",
    "publications.topic.conversions": "Sanoq Sistemalari Konvertatsiyasi",
    "publications.topic.history": "Sanoq Sistemalari Tarixi",

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
    "calculator.advanced.title": "Ilg'or Kalkulyator",
    "calculator.advanced.description": "Ilg'or matematik amallar va funksiyalar.",
    "calculator.logical.title": "Mantiqiy Kalkulyator",
    "calculator.logical.description": "Sanoq sistemalari uchun bitli va mantiqiy amallar.",
    "calculator.numbersystem": "Sanoq Sistemasi",
    "calculator.type": "Kalkulyator Turi",
    "calculator.type.standard": "Standart",
    "calculator.type.advanced": "Ilg'or",
    "calculator.type.logical": "Mantiqiy",
    "calculator.clear": "Tozalash",

    // calculator info
    "calculator.info.description.10":
      "bu insonlar tomonidan tabiiy foydalaniladigan, 10 ta raqamga asoslangan pozitsion sanoq sistemasi. Ko‘pchilik kalkulyatorlar, foydalanuvchi interfeyslari va matematikaning barcha sohalarida ishlatiladi",
    "calculator.info.description.2":
      "bu 2 ta raqamga asoslangan pozitsion sanoq sistemasi. Kompyuterlarning asosiy ishlash prinsipi shu sanoq sistemasiga asoslangan: xotira, protsessor, fayllar, elektr signallar va hokazo",
    "calculator.info.description.8": "bu 8 ta raqamga asoslangan pozitsion sanoq sistemasi. Ba'zi joylarda ishlatiladi",
    "calculator.info.description.16":
      "bu 16 ta raqamga asoslangan pozitsion sanoq sistemasi. Kompyuter texnologiyasi, xotira manzillari, rang kodlari (CSS), bit operatsiyalar, assembler va debugging uchun ishlatiladi",
    "calculator.info.description.3":
      "bu 3 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.4":
      "bu 4 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.5":
      "bu 5 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.6":
      "bu 6 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.7":
      "bu 7 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.9":
      "bu 9 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.11":
      "bu 11 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.12":
      "bu 12 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.13":
      "bu 13 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.14":
      "bu 14 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.15":
      "bu 15 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.17":
      "bu 17 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.18":
      "bu 18 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.19":
      "bu 19 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.20":
      "bu 20 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.21":
      "bu 21 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.22":
      "bu 22 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.23":
      "bu 23 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.24":
      "bu 24 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi, biroq bu sanoq sistemasini soat misolida ko'rish mumkin",
    "calculator.info.description.25":
      "bu 25 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.26":
      "bu 26 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.27":
      "bu 27 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.28":
      "bu 28 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.29":
      "bu 29 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.30":
      "bu 30 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.31":
      "bu 31 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.32":
      "bu 32 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.33":
      "bu 33 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.34":
      "bu 34 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.35":
      "bu 35 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",
    "calculator.info.description.36":
      "bu 36 ta raqamga asoslangan pozitsion sanoq sistemasi. Zamonaviy dunyoda deyarli ishlatilmaydi",

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
    "calculator.info.warning.2":
      "Ikkilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni ikkilik sanoq sistemasi bo'yicha bajaradi",
    "calculator.info.warning.8":
      "Sakkizlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni sakkizlik sanoq sistemasi bo'yicha bajaradi",
    "calculator.info.warning.16":
      "O'n oltilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni o'n oltilik sanoq sistemasi bo'yicha bajaradi",
    "calculator.info.warning.3":
      "Uchlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni uchlik sanoq sistemasi bo'yicha bajaradi",
    "calculator.info.warning.4":
      "To'rtlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni to'rtlik sanoq sistemasi bo'yicha bajaradi",
    "calculator.info.warning.5":
      "Beshlik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni beshlik sanoq sistemasi bo'yicha bajaradi",
    "calculator.info.warning.6":
      "Oltilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni oltilik sanoq sistemasi bo'yicha bajaradi",
    "calculator.info.warning.7":
      "Yettilik sanoq sistemasi tanlangan holatda ushbu kalkulyator hisob kitoblarni yettilik sanoq sistemasi bo'yicha bajaradi",
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

    // Code page
    "code.title": "Sanoq Sistemalari Kodi",
    "code.description": "Sanoq sistemalari bilan ishlash uchun dasturlash misollari va kod parchalar.",
    "code.welcome.title": "Sanoq Sistemalari bilan Dasturlash",
    "code.welcome.description":
      "Bu bo'lim turli dasturlash tillarida turli sanoq sistemalari bilan ishlash uchun kod misollarini va tushuntirishlarni taqdim etadi.",
    "code.welcome.select": "Kod misollarini va tushuntirishlarni ko'rish uchun yon paneldan mavzuni tanlang.",

    // Code topics
    "code.topic.binarytodecimal": "Ikkilikdan O'nlikka Konvertatsiya",
    "code.topic.decimaltobinary": "O'nlikdan Ikkilikka Konvertatsiya",
    "code.topic.hexadecimal": "O'n oltilik Konvertatsiya",
    "code.topic.bitwise": "Bit Operatsiyalari",
    "code.topic.binaryaddition": "Ikkilik Qo'shish",
    "code.topic.utilities": "Sanoq Sistemalari Utilitlari",
    "code.viewcode": "Kodni Ko'rish",

    // About page
    "about.title": "Biz haqimizda",
    "about.description": "Sanoq sistemalari loyihamiz va uning ortidagi jamoa haqida ko'proq ma'lumot oling.",
    "about.mission.title": "Bizning Vazifamiz",
    "about.mission.description":
      "Bizning vazifamiz sanoq sistemalari haqida o'rganish va ular bilan ishlash uchun keng qamrovli resurs taqdim etishdir. Biz bu tushunchalarni talabalar, dasturchilar va hisoblashning matematik asoslarini tushunishga qiziquvchi har qanday kishi uchun qulay qilishni maqsad qilganmiz.",
    "about.project.title": "Loyiha",
    "about.project.description":
      "Bu loyiha sanoq sistemalari ta'limi va utilitlari uchun barcha-bir platformasi sifatida yaratilgan. Bizning xususiyatlarimiz quyidagilarni o'z ichiga oladi:",
    "about.project.feature1":
      "Konvertatsiya Vositasi: Ikkilik, sakkizlik, o'nlik va o'n oltilik sanoq sistemalari orasida konvertatsiya qiling.",
    "about.project.feature2":
      "Ta'lim Resurslari: Turli sanoq sistemalari haqida keng qamrovli qo'llanmalar va tushuntirishlar.",
    "about.project.feature3": "Kalkulyator: Turli sanoq sistemalarida arifmetik amallarni bajaring.",
    "about.project.feature4":
      "Kod Misollari: Turli tillarda sanoq sistemalari bilan ishlash uchun dasturlash misollari.",
    "about.team.title": "Bizning Jamoa",
    "about.contact.title": "Biz bilan bog'laning",
    "about.contact.description": "Savollar, takliflar yoki fikr-mulohazalar bormi? Biz sizdan eshitishni xohlaymiz!",

    // Footer
    "footer.description": "Turli sanoq sistemalarini o'rganing, konvertatsiya qiling va hisoblang.",
    "footer.quicklinks": "Tezkor Havolalar",
    "footer.contact": "Aloqa",
    "footer.contactdesc": "Savollar yoki takliflar bormi? Biz bilan bog'lanishdan tortinmang.",
    "footer.rights": "Barcha huquqlar himoyalangan.",

    // Sidebar
    "sidebar.topics": "Mavzular",
    "sidebar.menu": "Menyu",
    "sidebar.close": "Yopish",
  },

  ru: {
    // Navigation
    "nav.conversion": "Конвертация",
    "nav.publications": "Статьи",
    "nav.calculator": "Калькулятор",
    "nav.code": "Код",
    "nav.about": "О нас",

    // Home page
    "home.title": "Конвертер Систем Счисления",
    "home.description":
      "Конвертируйте между двоичной, восьмеричной, десятичной и шестнадцатеричной системами счисления.",
    "home.conversion.title": "Инструмент Конвертации",
    "home.conversion.description": "Введите значение и выберите системы счисления для конвертации.",
    "home.from": "Из",
    "home.to": "В",
    "home.input": "Входное значение",
    "home.result": "Результат",
    "home.convert": "Конвертировать",
    "home.swap": "Поменять",
    "home.copy": "Копировать",
    "home.whatare.title": "Что такое Системы Счисления?",
    "home.whatare.description":
      "Системы счисления - это математические системы для выражения чисел. Система счисления состоит из набора символов (цифр) и правил использования этих символов для представления чисел.",
    "home.learnmore": "Узнать",
    "home.calculator.title": "Калькулятор Конвертации Систем Счисления",
    "home.calculator.description":
      "Общие системы счисления в программировании включают Двоичную (Основание 2), Десятичную (Основание 10), Восьмеричную (Основание 8) и Шестнадцатеричную (Основание 16). Калькулятор конвертации систем счисления позволяет пользователю ввести число в любой системе и конвертировать его в другие. Он также функционирует как калькулятор двоичного битового сдвига, позволяя изменять значения путем сдвига битов вправо или влево или изменения отдельных битов.",
    "home.placeholder.binary": "Введите двоичное число",
    "home.placeholder.octal": "Введите восьмеричное число",
    "home.placeholder.decimal": "Введите десятичное число",
    "home.placeholder.hexadecimal": "Введите шестнадцатеричное число",

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
    "publications.title": "Статьи",
    "publications.description": "Изучите различные системы счисления и их применение.",
    "publications.welcome.title": "Добро пожаловать в Обучение Системам Счисления",
    "publications.welcome.description":
      "Этот раздел предоставляет исчерпывающую информацию о различных системах счисления, их свойствах и о том, как они используются в вычислениях и математике.",
    "publications.welcome.select": "Выберите тему из боковой панели, чтобы узнать больше о конкретных системах счисления.",

    // Publications topics
    "publications.topic.binary": "Двоичная Система",
    "publications.topic.octal": "Восьмеричная Система",
    "publications.topic.decimal": "Десятичная Система",
    "publications.topic.hexadecimal": "Шестнадцатеричная Система",
    "publications.topic.conversions": "Конвертация Систем Счисления",
    "publications.topic.history": "История Систем Счисления",

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
    "calculator.advanced.title": "Продвинутый Калькулятор",
    "calculator.advanced.description": "Продвинутые математические операции и функции.",
    "calculator.logical.title": "Логический Калькулятор",
    "calculator.logical.description": "Побитовые и логические операции для систем счисления.",
    "calculator.numbersystem": "Система Счисления",
    "calculator.type": "Тип Калькулятора",
    "calculator.type.standard": "Стандартный",
    "calculator.type.advanced": "Продвинутый",
    "calculator.type.logical": "Логический",
    "calculator.clear": "Очистить",

    // calculator info for Russian (add missing ones)
    "calculator.info.description.10":
      "это позиционная система счисления, естественно используемая людьми, основанная на 10 цифрах. Используется в большинстве калькуляторов, пользовательских интерфейсах и всех областях математики",
    "calculator.info.description.2":
      "это позиционная система счисления, основанная на 2 цифрах. Основной принцип работы компьютеров основан на этой системе счисления: память, процессор, файлы, электрические сигналы и т.д.",
    "calculator.info.description.8":
      "это позиционная система счисления, основанная на 8 цифрах. Используется в некоторых местах",
    "calculator.info.description.16":
      "это позиционная система счисления, основанная на 16 цифрах. Используется для компьютерных технологий, адресов памяти, цветовых кодов (CSS), битовых операций, ассемблера и отладки",
    "calculator.info.description.3":
      "это позиционная система счисления, основанная на 3 цифрах. Редко используется в современном мире",
    "calculator.info.description.4":
      "это позиционная система счисления, основанная на 4 цифрах. Редко используется в современном мире",
    "calculator.info.description.5":
      "это позиционная система счисления, основанная на 5 цифрах. Редко используется в современном мире",
    "calculator.info.description.6":
      "это позиционная система счисления, основанная на 6 цифрах. Редко используется в современном мире",
    "calculator.info.description.7":
      "это позиционная система счисления, основанная на 7 цифрах. Редко используется в современном мире",
    "calculator.info.description.9":
      "это позиционная система счисления, основанная на 9 цифрах. Редко используется в современном мире",
    "calculator.info.description.11":
      "это позиционная система счисления, основанная на 11 цифрах. Редко используется в современном мире",
    "calculator.info.description.12":
      "это позиционная система счисления, основанная на 12 цифрах. Редко используется в современном мире",
    "calculator.info.description.13":
      "это позиционная система счисления, основанная на 13 цифрах. Редко используется в современном мире",
    "calculator.info.description.14":
      "это позиционная система счисления, основанная на 14 цифрах. Редко используется в современном мире",
    "calculator.info.description.15":
      "это позиционная система счисления, основанная на 15 цифрах. Редко используется в современном мире",
    "calculator.info.description.17":
      "это позиционная система счисления, основанная на 17 цифрах. Редко используется в современном мире",
    "calculator.info.description.18":
      "это позиционная система счисления, основанная на 18 цифрах. Редко используется в современном мире",
    "calculator.info.description.19":
      "это позиционная система счисления, основанная на 19 цифрах. Редко используется в современном мире",
    "calculator.info.description.20":
      "это позиционная система счисления, основанная на 20 цифрах. Редко используется в современном мире",
    "calculator.info.description.21":
      "это позиционная система счисления, основанная на 21 цифре. Редко используется в современном мире",
    "calculator.info.description.22":
      "это позиционная система счисления, основанная на 22 цифрах. Редко используется в современном мире",
    "calculator.info.description.23":
      "это позиционная система счисления, основанная на 23 цифрах. Редко используется в современном мире",
    "calculator.info.description.24":
      "это позиционная система счисления, основанная на 24 цифрах. Редко используется в современном мире, но эту систему счисления можно увидеть на примере часов",
    "calculator.info.description.25":
      "это позиционная система счисления, основанная на 25 цифрах. Редко используется в современном мире",
    "calculator.info.description.26":
      "это позиционная система счисления, основанная на 26 цифрах. Редко используется в современном мире",
    "calculator.info.description.27":
      "это позиционная система счисления, основанная на 27 цифрах. Редко используется в современном мире",
    "calculator.info.description.28":
      "это позиционная система счисления, основанная на 28 цифрах. Редко используется в современном мире",
    "calculator.info.description.29":
      "это позиционная система счисления, основанная на 29 цифрах. Редко используется в современном мире",
    "calculator.info.description.30":
      "это позиционная система счисления, основанная на 30 цифрах. Редко используется в современном мире",
    "calculator.info.description.31":
      "это позиционная система счисления, основанная на 31 цифре. Редко используется в современном мире",
    "calculator.info.description.32":
      "это позиционная система счисления, основанная на 32 цифрах. Редко используется в современном мире",
    "calculator.info.description.33":
      "это позиционная система счисления, основанная на 33 цифрах. Редко используется в современном мире",
    "calculator.info.description.34":
      "это позиционная система счисления, основанная на 34 цифрах. Редко используется в современном мире",
    "calculator.info.description.35":
      "это позиционная система счисления, основанная на 35 цифрах. Редко используется в современном мире",
    "calculator.info.description.36":
      "это позиционная система счисления, основанная на 36 цифрах. Редко используется в современном мире",

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
    "calculator.info.digits.10":
      "Десятичная система счисления использует следующие цифры: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0",
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
    "calculator.info.warning.2":
      "При выборе двоичной системы счисления данный калькулятор выполняет вычисления согласно двоичной системе счисления",
    "calculator.info.warning.8":
      "При выборе восьмеричной системы счисления данный калькулятор выполняет вычисления согласно восьмеричной системе счисления",
    "calculator.info.warning.16":
      "При выборе шестнадцатеричной системы счисления данный калькулятор выполняет вычисления согласно шестнадцатеричной системе счисления",
    "calculator.info.warning.3":
      "При выборе троичной системы счисления данный калькулятор выполняет вычисления согласно троичной системе счисления",
    "calculator.info.warning.4":
      "При выборе четверичной системы счисления данный калькулятор выполняет вычисления согласно четверичной системе счисления",
    "calculator.info.warning.5":
      "При выборе пятеричной системы счисления данный калькулятор выполняет вычисления согласно пятеричной системе счисления",
    "calculator.info.warning.6":
      "При выборе шестеричной системы счисления данный калькулятор выполняет вычисления согласно шестеричной системе счисления",
    "calculator.info.warning.7":
      "При выборе семеричной системы счисления данный калькулятор выполняет вычисления согласно семеричной системе счисления",
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

    // Code page
    "code.title": "Код Систем Счисления",
    "code.description": "Примеры программирования и фрагменты кода для работы с системами счисления.",
    "code.welcome.title": "Программирование с Системами Счисления",
    "code.welcome.description":
      "Этот раздел предоставляет примеры кода и объяснения для работы с различными системами счисления на различных языках программирования.",
    "code.welcome.select": "Выберите тему из боковой панели, чтобы просмотреть примеры кода и объяснения.",

    // Code topics
    "code.topic.binarytodecimal": "Конвертация из Двоичной в Десятичную",
    "code.topic.decimaltobinary": "Конвертация из Десятичной в Двоичную",
    "code.topic.hexadecimal": "Шестнадцатеричная Конвертация",
    "code.topic.bitwise": "Побитовые Операции",
    "code.topic.binaryaddition": "Двоичное Сложение",
    "code.topic.utilities": "Утилиты Систем Счисления",
    "code.viewcode": "Просмотреть Код",

    // About page
    "about.title": "О нас",
    "about.description": "Узнайте больше о нашем проекте систем счисления и команде, стоящей за ним.",
    "about.mission.title": "Наша Миссия",
    "about.mission.description":
      "Наша миссия - предоставить исчерпывающий ресурс для изучения и работы с различными системами счисления. Мы стремимся сделать эти концепции доступными для студентов, программистов и всех, кто интересуется пониманием математических основ вычислений.",
    "about.project.title": "Проект",
    "about.project.description":
      "Этот проект был создан для того, чтобы служить универсальной платформой для обучения и утилит систем счисления. Наши функции включают:",
    "about.project.feature1":
      "Инструмент Конвертации: Конвертируйте между двоичной, восьмеричной, десятичной и шестнадцатеричной системами счисления.",
    "about.project.feature2":
      "Образовательные Ресурсы: Исчерпывающие руководства и объяснения о различных системах счисления.",
    "about.project.feature3": "Калькулятор: Выполняйте арифметические операции в различных системах счисления.",
    "about.project.feature4":
      "Примеры Кода: Примеры программирования для работы с системами счисления на разных языках.",
    "about.team.title": "Наша Команда",
    "about.contact.title": "Свяжитесь с нами",
    "about.contact.description": "Есть вопросы, предложения или отзывы? Мы будем рады услышать от вас!",

    // Footer
    "footer.description": "Изучайте, конвертируйте и вычисляйте с различными системами счисления.",
    "footer.quicklinks": "Быстрые Ссылки",
    "footer.contact": "Контакт",
    "footer.contactdesc": "Есть вопросы или предложения? Не стесняйтесь обращаться к нам.",
    "footer.rights": "Все права защищены.",

    // Sidebar
    "sidebar.topics": "Темы",
    "sidebar.menu": "Меню",
    "sidebar.close": "Закрыть",
  },
}
