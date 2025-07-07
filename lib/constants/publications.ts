import { Publication } from "@/types/publication";
import { Calculator } from "lucide-react";
import { History } from "lucide-react";
import { Hash } from "lucide-react";

export const PUBLICATIONS = [
    {
        title: "Numeral system",
        description:
            "A numeral system is a writing system for expressing numbers; that is, a mathematical notation for representing numbers of a given set, using digits or other symbols in a consistent manner.",
        href: "/en/info/numeral-system",
        lang: "en",
        icon: Calculator,
        color: "cyan",
    },
    {
        title: "O‘nlik sanoq sistemasi tarixi",
        description: "O‘nlik sanoq sistemasi tarixi, hind olimlari hissasi, al-Xorazmiy va nol raqami haqida tushunchalar",
        href: "/uz/info/onlik-sanoq-sistemasi-tarixi",
        lang: "uz",
        icon: History,
        color: "fuchsia",
    },
    {
        title: "Sanoq sistemalari farqi: Son, raqam va qiymat",
        description: "Sanoq sistemalariga oid asosiy tushunchalar: son, raqam va qiymat orasidagi farq",
        href: "/uz/info/sanoq-sistemalari-farqi-son-raqam-va-qiymat",
        lang: "uz",
        icon: Hash,
        color: "red",
    },
    // { // o'chirildi
    //     title: "Sanoq sistemalari",
    //     description: "Sanoq sistemalari — bu sonlarni ifodalash va yozish uchun ishlatiladigan tizimlar.",
    //     href: "/uz/info/sanoq-sistemalari",
    //     lang: "uz",
    //     icon: Calculator,
    //     color: "cyan",
    // },
    // {
    //     title: "Система счисления",
    //     description: "Систе́ма счисле́ния — символический метод записи чисел, представление чисел с помощью письменных знаков.",
    //     href: "/ru/info/sistema-schisleniya",
    //     lang: "ru",
    //     icon: Calculator,
    //     color: "cyan",
    // },
    // {
    //     title: "List of numeral systems",
    //     description:
    //         "A numeral system is a writing system for expressing numbers; that is, a mathematical notation for representing numbers of a given set, using digits or other symbols in a consistent manner.",
    //     href: "/en/info/list-of-numeral-systems",
    //     lang: "en",
    //     icon: History,
    //     color: "green",
    // },
    // {
    //     title: "Sanoq sistemalari ro‘yxati",
    //     description: "Sanoq sistemalari — bu sonlarni ifodalash va yozish uchun ishlatiladigan tizimlar.",
    //     href: "/uz/info/sanoq-sistemalari-royxati",
    //     lang: "uz",
    //     icon: History,
    //     color: "green",
    // },
    // {
    //     title: "Список систем счисления",
    //     description: "Список систем счисления — это перечень систем счисления, используемых для представления чисел.",
    //     href: "/ru/info/spisok-sistem-schisleniya",
    //     lang: "ru",
    //     icon: History,
    //     color: "green",
    // },
] satisfies readonly Publication[];
