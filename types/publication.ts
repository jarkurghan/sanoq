import { Color } from "@/types/color";
import { IconType } from "@/types/icon";
import { Language } from "@/types/language";

export type Publication = {
    title: string;
    description: string;
    lang: Language;
    icon: IconType;
    color: Color;
} & (
    | { lang: "uz"; href: `/uz/info/${string}` }
    | { lang: "en"; href: `/en/info/${string}` }
    | { lang: "ru"; href: `/ru/info/${string}` }
    | { lang: "tg"; href: `/tg/info/${string}` }
    | { lang: "tr"; href: `/tr/info/${string}` }
    | { lang: "az"; href: `/az/info/${string}` }
    | { lang: "kk"; href: `/kk/info/${string}` }
    | { lang: "ky"; href: `/ky/info/${string}` }
    | { lang: "tk"; href: `/tk/info/${string}` }
    | { lang: "tt"; href: `/tt/info/${string}` }
    | { lang: "ug"; href: `/ug/info/${string}` }
    | { lang: "ba"; href: `/ba/info/${string}` }
    | { lang: "ar"; href: `/ar/info/${string}` }
);
