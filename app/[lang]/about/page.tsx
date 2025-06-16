"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { useParams } from "next/navigation";

export default function AboutPage() {
    const { t, setLanguage } = useLanguage();
    const params = useParams();
    const lang = params.lang as string;

    useEffect(() => {
        if (lang && ["en", "uz", "ru"].includes(lang)) {
            setLanguage(lang as "en" | "uz" | "ru");
        }
    }, [lang, setLanguage]);

    return (
        <div className="flex">
            <div className="flex-1 container px-4 sm:px-8 py-4 max-w-6xl ml-0 lg:ml-64 text-justify">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-4">Ilova haqida</h1>
                    <p className="text-sm text-muted-foreground mb-4">
                        Ushbu ilova sanoq sistemalari bilan ishlash uchun mo‘ljallangan. Agar siz talaba, dasturchi yoki shunchaki raqamlar olamiga qiziquvchi
                        bo‘lsangiz — bu ilova siz uchun foydali qo‘llanma bo‘la oladi. Ilova orqali siz turli sanoq sistemalari bo‘yicha bilim olishingiz,
                        hisob-kitob qilishingiz va kerakli konvertatsiyalarni bajarishingiz mumkin.
                    </p>
                    <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4 text-muted-foreground">
                        <div className="text-lg font-medium">•</div>
                        <h3 className="text-lg font-medium">Konvertatsiya (Bosh sahifa)</h3>
                        <div></div>
                        <p className="text-sm">
                            Bu bo‘limda siz sonlarni bir sanoq sistemasidan boshqasiga o‘tkazishingiz mumkin — masalan, ikkilikdan o‘nlikka, o‘n oltilikdan
                            sakkizlikka va boshqalar. Interfeys sodda va tushunarli bo‘lib, tezkor va aniq natijalar taqdim etadi.
                        </p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4 text-muted-foreground">
                        <div className="text-lg font-medium">•</div>
                        <h3 className="text-lg font-medium">Ta’lim</h3>
                        <div></div>
                        <p className="text-sm">
                            Bu bo‘limda sanoq sistemalari haqida umumiy va chuqurroq ma’lumotlar beriladi: Sanoq sistemasi nima va qanday ishlaydi; O‘nlik,
                            ikkilik, sakkizlik, o‘n oltilik kabi tizimlar farqi; Amaliyotda qo‘llanishi va tarixiy izohlar. Bu qism ayniqsa o‘quvchilar va
                            o‘rganuvchilar uchun foydalidir.
                        </p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4 text-muted-foreground">
                        <div className="text-lg font-medium">•</div>
                        <h3 className="text-lg font-medium">Kalkulyator</h3>
                        <div></div>
                        <p className="text-sm">
                            Oddiy matematik amallar qo‘shish, ayirish, ko‘paytirish, bo‘lishdan tortib daraja, ratsional sonlar, foizgacha – istalgan sanoq
                            sistemasida bajarish imkoniyati mavjud. Sonlarni oldin o‘zgartirib o‘tirmasdan, to‘g‘ridan-to‘g‘ri kerakli natijani olish mumkin.
                        </p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4 text-muted-foreground">
                        <div className="text-lg font-medium">•</div>
                        <h3 className="text-lg font-medium">Kod</h3>
                        <div></div>
                        <p className="text-sm">
                            Bu bo‘limda siz sanoq sistemalariga oid algoritmlar va dasturiy kodlar namunalarini topasiz: Sanoq sistemalari o‘rtasida o‘tkazish
                            algoritmlari Ikkilik arifmetikaga oid misollar; Mashhur dasturlash tillarida tayyor kodlar. Bu bo‘lim ayniqsa dasturchilar va
                            o‘rganmoqchi bo‘lgan foydalanuvchilar uchun mo‘ljallangan.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Ulashing</h2>
                        <div className="sm:grid grid-cols-[1fr_auto] gap-x-4">
                            <p className="text-sm text-muted-foreground">
                                Ilova foydali deb o‘ylasangiz, uni boshqalar bilan ham ulashing. Bu ilova orqali nafaqat siz, balki atrofingizdagi do‘stlar,
                                kursdoshlar va hamkasblar ham sanoq sistemalarini o‘rganishlari, bilimlarini boyitishlari mumkin. Ilova oddiy interfeys va sodda
                                izohlar bilan murakkab mavzuni tushunarli shaklda yetkazadi. Ayniqsa, talabalar uchun bu yaxshi qo‘shimcha manba, dasturchilar
                                uchun esa foydali vositadir. Hisoblash, konvertatsiya, o‘rganish va kod yozish barchasi bir joyda jamlangan — sanoq sistemasiga
                                oid barcha bilimlar bir ilovada yig'ilgan.
                            </p>
                            <div className="mt-4 rounded-lg border bg-card text-card-foreground shadow-sm w-full sm:w-40 py-4 flex items-center justify-center flex-col gap-2">
                                <div>share icon</div>
                                <button className="px-6 py-1 text-white text-base font-medium bg-blue-500 border-none rounded-lg cursor-pointer transition-colors text-center no-underline inline-flex items-center justify-center gap-2">
                                    Ulashish
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* to-do: donat */}

                    <div className="grid gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t("about.contact.title")}</h2>
                            <div className="sm:grid grid-cols-[1fr_auto] gap-x-4">
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <ul>
                                        <li className="mb-1">• Savol yoki takliflaringiz bormi?</li>
                                        <li className="mb-1">
                                            • Ilovaga biror qo'shimcha kiritish taklifingiz bo'lsa yoki ilovada nimanidir tushunarsiz deb hisoblaysizmi?
                                        </li>
                                        <li className="mb-1">• Biror mavzuda maqola qoʻshmoqchisiz yoki qoʻshish kerak deb hisoblaysizmi?</li>
                                        <li className="mb-1">• E'tiroz yoki shikoyatingiz bormi?</li>
                                        <li className="mb-1">• Ilova ishlashida yoki xabarlar mazmunida biror xatolik yoki tushunarsizlik bo'lsa</li>
                                        <li className="mb-1">• Ilovaga oid va ilovadan tashqari savollar uchun ham</li>
                                    </ul>
                                    <strong>Biz bilan bog'laning.</strong> Sizning fikringiz biz uchun muhim!
                                </div>
                                <div className="mt-4 rounded-lg border bg-card text-card-foreground shadow-sm w-full sm:w-40 py-4 flex items-center justify-center flex-col gap-2">
                                    <div>contact icon</div>
                                    <button className="px-6 py-1 text-white text-base font-medium bg-blue-500 border-none rounded-lg cursor-pointer transition-colors text-center no-underline inline-flex items-center justify-center gap-2">
                                        Bog'lanish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
