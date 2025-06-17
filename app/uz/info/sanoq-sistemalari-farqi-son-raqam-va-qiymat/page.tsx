"use client";

import { useEffect } from "react";
import RightSidebarContent from "@/components/right-sidebar-content";
import { useLanguage } from "@/contexts/language-context";
import { useParams } from "next/navigation";

export default function BinaryPage() {
    const { setLanguage } = useLanguage();
    const params = useParams();
    const lang = params.lang as string;

    // Yo'nalish bo'yicha tilni o'rnatish
    useEffect(() => {
        if (lang && ["en", "uz", "ru"].includes(lang)) {
            setLanguage(lang as "en" | "uz" | "ru");
        }
    }, [lang, setLanguage]);

    return (
        <div className="flex">
            <div className="flex-1 container py-4 max-w-6xl ml-0 lg:ml-64">
                <article className="prose max-w-none text-justify">
                    <h1 className="text-2xl font-bold mb-6">Sanoq sistemalari farqi: Son, raqam va qiymat</h1>
                    <p>
                        Sanoq sistemalarini o‘rganishga kirishishdan oldin, eng avvalo <b>son</b>, <b>raqam</b> va <b>qiymat</b> kabi asosiy tushunchalarni
                        to‘g‘ri anglab olish zarur. Ushbu tushunchalar ko‘pincha chalkashtirib yuboriladi, biroq ularning har biri o‘ziga xos va sanoq
                        sistemalarini to‘g‘ri tushunishda muhim ahamiyatga ega. Biroq ularni farqini tushunib olish pozitsion sanoq sistemalarini o‘rganishda
                        muhimdir. Ushbu maqolada biz bu uch tushunchani batafsil ko‘rib chiqamiz va ularning farqlarini tushuntiramiz.
                    </p>

                    <h2 className="text-xl">Son nima?</h2>
                    <p>
                        <b>Son</b> — bu qiymatni, tartibni yoki holatni ifodalovchi matematik tushuncha. Masalan, “7” soni yetti dona ob’yektni yoki yettinchi
                        tartibdagi elementni ifodalashi mumkin. Son — bu abstrakt tushuncha bo‘lib, uni yozish yoki ifodalash uchun biz raqamlardan
                        foydalanamiz.
                    </p>

                    <h2 className="text-xl">Raqam nima?</h2>
                    <p>
                        <b>Raqam</b> — bu sonni yozishda ishlatiladigan belgidir. Masalan, o‘nlik sanoq sistemasida 10 ta raqam bor: 0, 1, 2, 3, 4, 5, 6, 7, 8,
                        9. Sonlar bir yoki bir nechta raqamlarning ketma-ketligidan tashkil topadi. Masalan, 23 soni — ikki raqamdan (2 va 3) tashkil topgan.
                    </p>

                    <h2 className="text-xl">Qiymat nima?</h2>
                    <p>
                        <b>Qiymat</b> — bu son bilan ifodalangan narsalarning aniq soni yoki hajmidir. Masalan, “5” soni beshta olmani bildiradi — bu qiymat.
                        Son — bu abstrakt tushuncha bo‘lsa, qiymat — bu real hayotdagi o‘lchash, sanash yoki hisoblash natijasida olingan natijadir. Qiymat
                        moddiy yoki aniq ko‘rinadigan narsalarga taalluqli bo‘ladi.
                    </p>

                    <h2 className="text-xl">Xulosa:</h2>
                    <ul>
                        <li>
                            <b>Son</b> — bu matematik tushuncha, u qiymat yoki tartibni bildiradi.
                        </li>
                        <li>
                            <b>Raqam</b> — bu sonni yozish uchun ishlatiladigan belgi.
                        </li>
                        <li>
                            <b>Qiymat</b> — bu son orqali ifodalangan real hajm yoki birliklar soni.
                        </li>
                    </ul>
                    <p>
                        Sanoq sistemalarini o‘rganishda bu uch tushunchani aniq ajratib olish muhim, chunki turli sanoq sistemalarida bir xil son turli raqamlar
                        bilan yozilishi mumkin, ammo ifodalayotgan qiymat bir xil qoladi.
                    </p>
                </article>
            </div>
        </div>
    );
}
