import { Language } from "@/types/language";
import uz from "./uz.json";
import ru from "./ru.json";
import en from "./en.json";
import tr from "./tr.json";
import tg from "./tg.json";
import az from "./az.json";
import kk from "./kk.json";
import ky from "./ky.json";
import tk from "./tk.json";
import tt from "./tt.json";
import ug from "./ug.json";
import bak from "./bak.json";
import kaa from "./kaa.json";
import crh from "./crh.json";

// to-do: tugamadi
const translations: Record<Language, Record<string, string>> = { en, uz, ru, tr, tg, az, kk, ky, tk, tt, ug, bak, kaa, crh };

export function getTranslation(lang: Language) {
    return function t(key: string): string {
        return translations[lang]?.[key] || translations.en[key] || key;
    };
}
