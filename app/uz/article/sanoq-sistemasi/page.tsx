import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/common/container";
import { ARTICLES_002_SS_METALANG } from "@/lib/constants/article/sanoq-sistemasi";
import { SEO } from "@/lib/utils/generate-metadata";

export function generateMetadata(): Metadata {
    const lang = "uz";
    const url = ARTICLES_002_SS_METALANG[lang] as string;

    const title = "Sanoq sistemasi — umumiy ko‘rinish, tarix va turlari";
    const description =
        "Sanoq sistemalari, ularning tarixi, asosiy turlari va sonlarning madaniyat, matematika hamda kompyuter texnologiyalarida qanday ifodalanishi haqida batafsil maqola.";
    const keywords = [
        "sanoq sistemasi",
        "son tizimi",
        "hind–arab raqamlari",
        "raqamlar tarixi",
        "o‘nlik sistemasi",
        "rim raqamlari",
        "maya raqamlari",
        "matematika",
        "sonlarni yozish",
    ].join(", ");

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_002_SS_METALANG, lang, pageType: "article" });
}

const NumeralSystem = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg prose-sm">
                    <header>
                        <h1>Sanoq sistemasi</h1>
                    </header>

                    <section>
                        <h2 className="hidden">Sanoq sistemasi</h2>
                        <p>
                            Sanoq sistemasi — sonlarni yozma shaklda ifodalash usuli, ya’ni ma’lum bir sonlar to‘plamini belgilar yoki raqamlar yordamida
                            muntazam va izchil tarzda tasvirlashga xizmat qiladigan matematik yozuv tizimidir.
                        </p>
                        <p>
                            Bir xil belgilar ketma-ketligi turli sanoq sistemalarida turlicha ma’noga ega bo‘lishi mumkin. Masalan,{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1 py-0.5 rounded">"11"</code> yozuvi o‘nlik sanoq sistemasida (bugungi
                            kunda dunyoda eng keng qo‘llaniladigani) o‘n birni bildiradi, ikkilik sanoq sistemasida (zamonaviy kompyuterlarda ishlatiladi) uchni
                            anglatadi, birdanlik sanoq sistemasida esa (hisob-tayoq usulida) ikki soniga teng bo‘ladi.
                        </p>
                        <p>
                            Belgining ifodalagan soni uning <strong>qiymati</strong> deb ataladi. Barcha sanoq sistemalari ham bir xil sonlar to‘plamini
                            ifodalab bera olmaydi; masalan, Rim, Yunon yoki Misr raqamlarida nol uchun maxsus belgi mavjud emas.
                        </p>
                        <p>Ideal sanoq sistemasi quyidagilarga ega bo‘lishi kerak:</p>
                        <ul>
                            <li>Foydali sonlar to‘plamini ifodalash (masalan, barcha butun yoki ratsional sonlar)</li>
                            <li>Har bir songa yagona, aniq ifoda berish (yoki hech bo‘lmasa standart yozuv)</li>
                            <li>Sonlarning algebraik va arifmetik xususiyatlarini aks ettirish</li>
                        </ul>
                        <p>
                            Masalan, odatiy o‘nlik sanoq sistemasida nol bo‘lmagan har qanday natural son boshida nol bo‘lmagan raqamdan boshlanadigan chekli
                            raqamlar ketma-ketligi orqali yagona tarzda ifodalanadi.
                        </p>
                        <p>
                            Ba’zan sanoq sistemalari <em>son sistemalari</em> deb ham ataladi. Ammo bu atama aniq emas, chunki u boshqa turdagi matematik
                            sistemalarni ham anglatishi mumkin: masalan, haqiqiy sonlar sistemasi, murakkab sonlar sistemasi, giperkompleks sonlar sistemalari,
                            p-adik sonlar sistemasi va hokazo. Biroq bu maqola bunday sistemalar haqida emas.
                        </p>
                    </section>
//
                    <section>
                        <h2>Tarixidan</h2>
                        <p>
                            Qadimda turli xalqlar turlicha sanoq sistemalaridan foydalangan: bobililiklar 60-lik, misrliklar iyeroglif, xitoyliklar tayoqcha
                            raqamlarini ishlatgan. Mayyalar esa mustaqil ravishda yigirmalik (asos-20) sistemani yaratib, hatto nol uchun belgi ham qo‘llashgan.
                        </p>
                        <Image
                            src="/images/historial_numeric_system.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 rounded-lg p-4"
                            alt="maya"
                            width={360}
                            height={120}
                        />
                        <p>
                            Hind matematiklari — jumladan 7-asrda yashagan <strong>Brahmagupta</strong> — nolni joriy qilgan va hisob qoidalarini yozib
                            qoldirgan. Keyinchalik <strong>al-Xorazmiy</strong> kabi olimlar bu tizimni yanada rivojlantirishgan. Shu sababli zamonaviy
                            hisoblashda nol va pozitsion yozuv asosiy rol o‘ynaydi.
                        </p>
                        <p>
                            Hind–arab raqamlari asta-sekin Yevropaga ham kirib kelgan. Avvaliga qarshilik bo‘lgan, lekin hisob-kitobda qulayligi sababli tez
                            tarqalgan. <strong>Fibonachchi</strong> o‘zining <em>Liber Abaci</em> kitobida bu raqamlarni targ‘ib qilgan.
                        </p>
                        <p>
                            15-asrda bosmaxona ixtiro qilinishi bu sistemani yanada ommalashtirdi. Rim raqamlari asta-sekin chetga chiqib, arab raqamlari butun
                            dunyoga yoyildi. Bugunga kelib deyarli barcha hisob-kitob shu raqamlar bilan bajariladi.
                        </p>
                    </section>

                    <section>
                        <h2>Asosiy sanoq sistemalari</h2>
                        <p>
                            Eng ko‘p ishlatiladigan sistemasi — o‘nlik. Hind matematiklari ishlab chiqqan bu tizim hozir dunyoning deyarli barcha joyida
                            ishlatiladi. Kompyuterlarda esa ikkilik (0 va 1) asosiy hisoblanadi. Shuningdek, sakkizlik va o‘n oltilik sistemalar ham keng
                            qo‘llaniladi.
                        </p>
                        <p>Oddiy misol: o‘nlikda 304 soni 3×100 + 0×10 + 4×1 tarzida yoziladi. Ikkilikda esa sonlar faqat 0 va 1 orqali ifodalanadi.</p>
                        <p>Qadimiy sistemalarda esa rim raqamlari kabi “belgi–qiymat” usuli ishlatilgan. Masalan, V = 5, X = 10, C = 100 va hokazo.</p>
                    </section>

                    <section>
                        <h2>Pozitsion sistemalar</h2>
                        <p>
                            Bugungi kunda eng qulay usul — pozitsion sistemalar. Bu yerda sonning qiymati faqat belgiga emas, balki uning qaysi o‘rinda
                            turganiga ham bog‘liq. Masalan, 4327 o‘nlikda: 4 minglik, 3 yuzlik, 2 o‘nlik va 7 birlikni bildiradi.
                        </p>
                        <p>Shu usul tufayli hisoblash osonlashadi, sonlarni yozish ixcham bo‘ladi va juda katta sonlarni ham ifodalash mumkin bo‘ladi.</p>
                    </section>

                    <section>
                        <h2>Xulosa</h2>
                        <p>
                            Sanoq sistemalari insoniyat taraqqiyotida katta ahamiyatga ega bo‘lgan. Nolning kashf etilishi, pozitsion yozuvning paydo bo‘lishi
                            va kompyuterlar uchun ikkilik tizimning yaratilishi — barchasi matematika, savdo, fan va texnologiyalar rivojida hal qiluvchi rol
                            o‘ynagan.
                        </p>
                        <div className="float-right">© sanoq.uz, 2025</div>
                    </section>
                </Container>
            </article>
        </main>
    );
};

export default NumeralSystem;
