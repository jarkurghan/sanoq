import { Color } from "@/types/color";
import { IconType } from "@/types/icon";
import { MetaLang } from "@/types/language";
import { Publication } from "@/types/publication";
import { MapPinCheckInside } from "lucide-react";

const icon: IconType = MapPinCheckInside;
const color: Color = "sky";

export const ARTICLES_001_PVNSS = [
    {
        title: "Pozitsion va nopozitsion sanoq sistemalari",
        description: "Ushbu maqola sanoq sistemalari tushunchasini sodda va amaliy misollar bilan tushuntiradi.",
        href: "/uz/info/pozitsion-va-nopozitsion-sanoq-sistemalari",
        lang: "uz",
        icon,
        color,
    },
    {
        title: "Positional vs Non‑Positional Numeral Systems",
        description: "This article explains numeral systems with simple, practical examples.",
        href: "/en/info/positional-vs-nonpositional-numeral-systems",
        lang: "en",
        icon,
        color,
    },
    {
        title: "Позиционные и непозиционные системы счисления",
        description: "Эта статья простым языком и на практических примерах объясняет понятие систем счисления.",
        href: "/ru/info/pozitsionnye-i-nepozitsionnye-sistemy-schisleniya",
        lang: "ru",
        icon,
        color,
    },
    {
        title: "Системаҳои ҳисоб: позиционӣ ва ғайрипозиционӣ",
        description: "Ин мақола мафҳуми системаҳои ҳисобро бо мисолҳои оддӣ ва амалӣ шарҳ медиҳад.",
        href: "/tg/info/sistemahoi-hisob-pozitsioni-va-ghayripozitsioni",
        lang: "tg",
        icon,
        color,
    },
    {
        title: "Konumsal ve konumsal olmayan sayı sistemleri",
        description: "Bu makale sayı sistemi kavramını basit ve uygulamalı örneklerle açıklar.",
        href: "/tr/info/konumsal-ve-konumsal-olmayan-sayi-sistemleri",
        lang: "tr",
        icon,
        color,
    },
    {
        title: "Pozisional və qeyri-pozisional say sistemləri",
        description: "Bu məqalə say sistemləri anlayışını sadə və praktik nümunələrlə izah edir.",
        href: "/az/info/pozisional-ve-qeyri-pozisional-say-sistemleri",
        lang: "az",
        icon,
        color,
    },
    {
        title: "Позициялық және позициялық емес санау жүйелері",
        description: "Бұл мақала санау жүйелері ұғымын қарапайым әрі қолданбалы мысалдармен түсіндіреді.",
        href: "/kk/info/pozitsiyalyk-zhane-pozitsiyalyk-emes-sanau-zhuyeleri",
        lang: "kk",
        icon,
        color,
    },
    {
        title: "Позициялык жана позициялык эмес санак системалары",
        description: "Бул макала санак системалары түшүнүгүн жөнөкөй жана колдонмолуу мисалдар менен түшүндүрөт.",
        href: "/ky/info/pozitsiyalyk-zhana-pozitsiyalyk-emes-sanak-sistemalar",
        lang: "ky",
        icon,
        color,
    },
    {
        title: "Pozision we pozision däl san ulgamlary",
        description: "Bu makala san ulgamlarynyň düşünjesini ýönekeý we amaly mysallar bilen düşündirýär.",
        href: "/tk/info/pozision-we-pozision-dal-san-ulgamlary",
        lang: "tk",
        icon,
        color,
    },
    {
        title: "Позицион һәм позицион түгел сан системалары",
        description: "Бу мәкалә сан системасы төшенчәсен гади һәм гамәли мисаллар белән аңлата.",
        href: "/tt/info/pozitsion-ham-pozitsion-tugel-san-sistemalary",
        lang: "tt",
        icon,
        color,
    },
    {
        title: "ئورۇن قىممەتلىك ۋە ئورۇن قىممەتسىز ساناق سىستېمىلىرى",
        description: "بۇ ماقالە ساناق سىستېمىسى ئىقتىدارىنى ساددا چۈشەندۈرۈپ، ئەمەلىي مىساللار ئارقىلىق ئىزاھلايدۇ.",
        href: "/ug/info/orun-qimmetlik-we-orun-qimmetsiz-sanaq-sistemiliri",
        lang: "ug",
        icon,
        color,
    },
    {
        title: "Позицион һәм позицион булмаған һан системалары",
        description: "Был мәҡәлә һан системалары төшөнсәһен ябай һәм практик миҫалдар менән аңлата.",
        href: "/ba/info/pozitsion-ham-pozitsion-bulmagan-han-sistemalary",
        lang: "ba",
        icon,
        color,
    },
    {
        title: "أنظمة العد الموضعية وغير الموضعية",
        description: "تشرح هذه المقالة مفهوم أنظمة العد بأسلوب مبسّط مع أمثلة عملية.",
        href: "/ar/info/anzimat-al-add-al-mawdiyya-wa-ghayr-al-mawdiyya",
        lang: "ar",
        icon,
        color,
    },
] satisfies readonly Publication[];

export const ARTICLES_001_PVNSS_METALANG: MetaLang = ARTICLES_001_PVNSS.reduce(
    (obj, article) => {
        obj[article.lang] = `https://sanoq.uz${article.href}`;
        return obj;
    },
    { "x-default": "https://sanoq.uz/publications" } as MetaLang
);
