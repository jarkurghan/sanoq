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
    "nav.education": "Education",
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
    "home.learnmore": "Learn More",
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

    // Education page
    "education.title": "Number Systems Education",
    "education.description": "Learn about different number systems and their applications.",
    "education.welcome.title": "Welcome to Number Systems Education",
    "education.welcome.description":
      "This section provides comprehensive information about different number systems, their properties, and how they are used in computing and mathematics.",
    "education.welcome.select": "Select a topic from the sidebar to learn more about specific number systems.",

    // Education topics
    "education.topic.binary": "Binary System",
    "education.topic.octal": "Octal System",
    "education.topic.decimal": "Decimal System",
    "education.topic.hexadecimal": "Hexadecimal System",
    "education.topic.conversions": "Number System Conversions",
    "education.topic.history": "History of Number Systems",

    // Calculator page
    "calculator.title": "Number System Calculator",
    "calculator.description": "Perform calculations in different number systems.",
    "calculator.standard.title": "Standard Calculator",
    "calculator.standard.description": "Perform basic arithmetic operations in different number systems.",
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
      "This project was created to serve as an all-in-one platform for number system education and utilities. Our features include:",
    "about.project.feature1":
      "Conversion Tool: Convert between binary, octal, decimal, and hexadecimal number systems.",
    "about.project.feature2":
      "Educational Resources: Comprehensive guides and explanations about different number systems.",
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
    "nav.education": "Ta'lim",
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
    "home.learnmore": "Ko'proq o'rganish",
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

    // Education page
    "education.title": "Sanoq Sistemalari Ta'limi",
    "education.description": "Turli sanoq sistemalari va ularning qo'llanilishi haqida o'rganing.",
    "education.welcome.title": "Sanoq Sistemalari Ta'limiga Xush Kelibsiz",
    "education.welcome.description":
      "Bu bo'lim turli sanoq sistemalari, ularning xususiyatlari va ularning hisoblash va matematikada qanday qo'llanilishi haqida keng ma'lumot beradi.",
    "education.welcome.select":
      "Muayyan sanoq sistemalari haqida ko'proq ma'lumot olish uchun yon paneldan mavzuni tanlang.",

    // Education topics
    "education.topic.binary": "Ikkilik Sistema",
    "education.topic.octal": "Sakkizlik Sistema",
    "education.topic.decimal": "O'nlik Sistema",
    "education.topic.hexadecimal": "O'n oltilik Sistema",
    "education.topic.conversions": "Sanoq Sistemalari Konvertatsiyasi",
    "education.topic.history": "Sanoq Sistemalari Tarixi",

    // Calculator page
    "calculator.title": "Sanoq Sistemalari Kalkulyatori",
    "calculator.description": "Turli sanoq sistemalarida hisob-kitoblarni bajaring.",
    "calculator.standard.title": "Standart Kalkulyator",
    "calculator.standard.description": "Turli sanoq sistemalarida asosiy arifmetik amallarni bajaring.",
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
    "nav.education": "Обучение",
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
    "home.learnmore": "Узнать больше",
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

    // Education page
    "education.title": "Обучение Системам Счисления",
    "education.description": "Изучите различные системы счисления и их применение.",
    "education.welcome.title": "Добро пожаловать в Обучение Системам Счисления",
    "education.welcome.description":
      "Этот раздел предоставляет исчерпывающую информацию о различных системах счисления, их свойствах и о том, как они используются в вычислениях и математике.",
    "education.welcome.select": "Выберите тему из боковой панели, чтобы узнать больше о конкретных системах счисления.",

    // Education topics
    "education.topic.binary": "Двоичная Система",
    "education.topic.octal": "Восьмеричная Система",
    "education.topic.decimal": "Десятичная Система",
    "education.topic.hexadecimal": "Шестнадцатеричная Система",
    "education.topic.conversions": "Конвертация Систем Счисления",
    "education.topic.history": "История Систем Счисления",

    // Calculator page
    "calculator.title": "Калькулятор Систем Счисления",
    "calculator.description": "Выполняйте вычисления в различных системах счисления.",
    "calculator.standard.title": "Стандартный Калькулятор",
    "calculator.standard.description": "Выполняйте основные арифметические операции в различных системах счисления.",
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
