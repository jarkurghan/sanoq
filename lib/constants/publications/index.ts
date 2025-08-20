import { Publication } from "@/types/publication";
import { Calculator } from "lucide-react";
import { History } from "lucide-react";
import { Hash } from "lucide-react";
import { ARTICLES_POZITSION_VA_NOPOZITSION_SANOQ_SISTEMALARI } from "./pozitsion-va-nopozitsion-sanoq-sistemalari";

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
    ...ARTICLES_POZITSION_VA_NOPOZITSION_SANOQ_SISTEMALARI,
] satisfies readonly Publication[];
