import { Color } from "@/types/color";
import { IconType } from "@/types/icon";
import { Language } from "@/types/language";

export type Publication = {
    title: string;
    description: string;
    lang: Language;
    icon: IconType;
    color: Color;
} & ({ lang: "uz"; href: `/uz/info/${string}` } | { lang: "en"; href: `/en/info/${string}` } | { lang: "ru"; href: `/ru/info/${string}` });
