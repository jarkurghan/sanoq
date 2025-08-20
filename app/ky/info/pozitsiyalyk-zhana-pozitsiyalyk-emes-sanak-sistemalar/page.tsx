import Container from "@/components/common/container";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    return {
        title: "Позициялык жана позициялык эмес санак системалары",
        description: "Бул макала санак системалары түшүнүгүн жөнөкөй жана колдонмолуу мисалдар менен түшүндүрөт.",
        keywords: ["санак системасы", "позициялык санак системасы", "позициялык эмес санак системасы", "рим цифралары", "санак системаларынын айырмасы"],

        authors: [{ name: "Najmiddin Nazirov", url: "https://sanoq.uz/about" }],
        creator: "Najmiddin Nazirov",

        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title: "Позициялык жана позициялык эмес санак системалары",
            description: "Бул макала санак системалары түшүнүгүн жөнөкөй жана колдонмолуу мисалдар менен түшүндүрөт.",
            url: "https://sanoq.uz/ky/info/pozitsiyalyk-zhana-pozitsiyalyk-emes-sanak-sistemalar",
            siteName: "sanoq.uz",
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", width: 1000, height: 749, alt: "sanoq.uz" }],
            locale: "ky",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: "Позициялык жана позициялык эмес санак системалары",
            description: "Бул макала санак системалары түшүнүгүн жөнөкөй жана колдонмолуу мисалдар менен түшүндүрөт.",
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", alt: "sanoq.uz" }],
            creator: "@jarkurghan",
        },

        metadataBase: new URL("https://sanoq.uz"),
        alternates: {
            canonical: "https://sanoq.uz/ky/info/pozitsiyalyk-zhana-pozitsiyalyk-emes-sanak-sistemalar",
            languages: {
                ru: "https://sanoq.uz/ru/info/pozitsionnye-i-nepozitsionnye-sistemy-schisleniya",
                uz: "https://sanoq.uz/uz/info/pozitsion-va-nopozitsion-sanoq-sistemalari",
                kk: "https://sanoq.uz/kk/info/pozitsiyalyk-zhane-pozitsiyalyk-emes-sanau-zhuyeleri",
                ky: "https://sanoq.uz/ky/info/pozitsiyalyk-zhana-pozitsiyalyk-emes-sanak-sistemalar",
                "x-default": "https://sanoq.uz/publications",
            },
        },
    };
}

export default function MaqolaPozitsionNopozitsion() {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg prose-sm">
                    <header>
                        <h1>Позициялык жана позициялык эмес санак системалары</h1>
                        <p>
                            Бул макала санак системалары түшүнүгүн жөнөкөй жана колдонмолуу мисалдар менен түшүндүрөт. Негизги көңүл эки чоң категорияга
                            бурулат: <strong>позициялык</strong> (цифранын мааниси <em>ордуна</em> көз каранды) жана <strong>позициялык эмес</strong> (цифранын
                            мааниси туруктуу) системалар.
                        </p>
                    </header>

                    <section>
                        <h2>Санак системасы деген эмне?</h2>
                        <p>
                            Санак системасы — бул <em>сандарды белгилөө жана жазуу эрежелеринин</em> жыйындысы. Ар бир системанын <strong>негизи</strong> жана{" "}
                            <strong>цифралар жыйындысы</strong> болот. Мисалы, ондук системада негиз 10 болуп, цифралар жыйындысы 0–9дан турат.
                        </p>
                    </section>

                    <section>
                        <h2>Позициялык жана позициялык эмес айырмасы</h2>
                        <p>
                            <strong>Позициялык</strong> системаларда цифранын мааниси анын <em>ордуна</em> (разрядына) жараша аныкталат. Мисалы, 507 санында 5 —
                            жүздүк, 0 — ондук, 7 — бирдикти билдирет. <strong>Позициялык эмес</strong> системаларда болсо цифра кайсы жерде турбасын анын
                            мааниси өзгөрбөйт; сан мааниси цифралардын <em>кошундусу</em> же <em>эрежелик комбинациясы</em> аркылуу табылат.
                        </p>
                    </section>

                    <section>
                        <h2>Позициялык эмес системалар</h2>
                        <ul>
                            <li>
                                <strong>Штрих (tally) жазуусу:</strong> <code>||||</code> = 4, <code>|||| |||</code> = 7. Ар бир сызык дайыма 1ге барабар; орун
                                маанилүү эмес.
                            </li>
                            <li>
                                <strong>Рим цифралары:</strong> <code>I=1</code>, <code>V=5</code>, <code>X=10</code>, <code>L=50</code>, <code>C=100</code>,{" "}
                                <code>D=500</code>, <code>M=1000</code>. Сандар көбүнчө кошуу (кээде азайтуу) эрежелери менен түзүлөт. Мисалы,{" "}
                                <code>VIII = 5+3 = 8</code>, <code>IX = 10−1 = 9</code>, <code>XL = 50−10 = 40</code>.
                            </li>
                            <li>
                                <strong>Байыркы мисир цифралары:</strong> бирдик, ондүк, жүздүк белгилеринин кайталоочу кошундусу менен сан жазылат (позиция
                                маанилүү эмес).
                            </li>
                        </ul>
                        <p>
                            Позициялык эмес системаларда <em>чоң сандарды жазуу</em> көп цифраны талап кылат жана <em>арифметикалык амалдар</em> (айрыкча
                            көбөйтүү/бөлүү) татаалдашат.
                        </p>
                    </section>

                    <section>
                        <h2>Позициялык системалар</h2>
                        <p>
                            Позициялык системада сан төмөнкүдөй <em>көп мүчө</em> түрүндө түшүндүрүлөт:
                        </p>
                        <pre>
                            <code>{`(a_n a_{n-1} ... a_1 a_0)_b = a_n*b^n + a_{n-1}*b^{n-1} + ... + a_1*b + a_0\nШарт: 0 \u2264 a_i < b`}</code>
                        </pre>
                        <p>
                            Бул жерде <strong>b</strong> — системанын негизи; мисалы, ондукта <strong>b=10</strong>, экиликте <strong>b=2</strong>, он алтылыкта{" "}
                            <strong>b=16</strong>. <strong>0</strong> цифрасы позициялык системаларда абдан маанилүү: ал толтургуч жана жок маанини билдирүүчү
                            цифра катары колдонулат.
                        </p>

                        <strong>Кеңири тараган позициялык системалар</strong>
                        <ul>
                            <li>
                                <strong>Ондук (b=10):</strong> күнүмдүк жашоодо, каржыда, өлчөөлөрдө стандарт.
                            </li>
                            <li>
                                <strong>Экилик (b=2):</strong> компьютер логикасынын (0/1) жана санариптик электрониканын негизи.
                            </li>
                            <li>
                                <strong>Сегиздик (b=8) жана он алтылык (b=16):</strong> бит топторун ықчам көрсөтүү үчүн, программалоодо ыңгайлуу.
                            </li>
                            <li>
                                <strong>Алтылык (b=6), бестик (b=5), жыйырмалык (b=20), алтымыштык (b=60):</strong> ар кыл маданияттарда жана тарыхый
                                практикаларда жолугат (мисалы, убакыт жана бурч өлчөөдө 60тык).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Эмне үчүн позициялык системалар ыңгайлуу?</h2>
                        <ol>
                            <li>
                                <strong>Ыкчам жазуу:</strong> бир эле маанини азыраак белгилер (цифралар) менен берүү мүмкүн.
                            </li>
                            <li>
                                <strong>Алгоритмдик арифметика:</strong> кошуу, азайтуу, көбөйтүү, бөлүү үчүн туруктуу, кайталануучу алгоритмдер бар.
                            </li>
                            <li>
                                <strong>Масштабдалуу:</strong> негиз өзгөрсө да жалпы эрежелер сакталат (орун мааниси, даражалар).
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>Позициялык эмес системаларда арифметика эмнеге кыйын?</h2>
                        <ul>
                            <li>
                                <strong>Кошундуга негизделген түзүлүш:</strong> цифралар кошулуп түзүлөт; көбөйтүү — кайталоочу кошуу, натыйжада жазуу
                                татаалданат.
                            </li>
                            <li>
                                <strong>Субтрактив эрежелер:</strong> Рим цифраларындагы <code>IV</code>, <code>IX</code> сыяктуу учурлар алгоритмдерди
                                жөнөкөйлөтпөйт.
                            </li>
                            <li>
                                <strong>0 цифрасы жок же сейрек колдонулат:</strong> толтуруучу бош орун жоктугу системаны жалпылоого тоскоол болот.
                            </li>
                        </ul>
                        <strong>Практикалык салыштыруу</strong>
                        <table>
                            <thead>
                                <tr>
                                    <th>Сыпаттама</th>
                                    <th>Позициялык</th>
                                    <th>Позициялык эмес</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Цифранын мааниси</td>
                                    <td>
                                        Ордуна көз каранды (<em>орун мааниси</em>)
                                    </td>
                                    <td>Туруктуу, орундан көз каранды эмес</td>
                                </tr>
                                <tr>
                                    <td>0 цифрасы</td>
                                    <td>Борбордук ролго ээ</td>
                                    <td>Адатта жок же сейрек колдонулат</td>
                                </tr>
                                <tr>
                                    <td>Арифметика</td>
                                    <td>Алгоритмдик, жөнөкөйлөө</td>
                                    <td>Татаал, эрежелер топтомуна таянат</td>
                                </tr>
                                <tr>
                                    <td>Ыкчамдык</td>
                                    <td>Жогорку</td>
                                    <td>Төмөн</td>
                                </tr>
                                <tr>
                                    <td>Колдонулушу</td>
                                    <td>Күнүмдүк, илимий, компьютерлик</td>
                                    <td>Тарыхый, ырым-жырымдык, атайын белгилөө</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Келгиле, айрым мисалдарды көрөлү:</p>
                        <ul>
                            <li>
                                <strong>Римче → ондук:</strong> MCMLXXXIV = 1000 + (1000−100) + 50 + 10 + 10 + 10 + (5−1) = 1984.
                            </li>
                            <li>
                                <strong>Экилик → ондук:</strong> 1100101<sub>2</sub> = 64 + 32 + 4 + 1 = 101<sub>10</sub>.
                            </li>
                            <li>
                                <strong>Ондук → он алтылык:</strong> 255<sub>10</sub> → (FF)<sub>16</sub>.
                            </li>
                            <li>
                                <strong>Ондук → экилик (бөлчөк):</strong> 0.1<sub>10</sub> ≈ 0.0001100110011…<sub>2</sub> (кайталоочу).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Кошумча: Көп кездешкен каталар</h2>
                        <ul>
                            <li>
                                <strong>Негизден чоң цифра колдонуу:</strong> мисалы, экиликте <b>2</b> же <b>3</b> боло албайт.
                            </li>
                            <li>
                                <strong>Бөлчөк конвертациясын эрте токтотуу:</strong> катага көз салуу үчүн кадам санын жана тактыкты алдын ала белгилеп алуу
                                керек.
                            </li>
                            <li>
                                <strong>Рим цифраларындагы субтракцияны ашыра колдонуу:</strong> <b>IL</b> (49) сыяктуу жазуу стандарт боюнча туура эмес, чыныгы
                                форма <b>XLIX</b>.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>
                            Позициялык эмес системалар тарыхый жана маданий жактан кызыктуу болгону менен, бүгүнкү илим жана техникада{" "}
                            <strong>позициялык</strong> системалар практикалык жактан үстөмдүк кылат. Анын негизги күчү — орун мааниси, 0 цифрасы жана
                            алгоритмдик арифметика. Түрлендүүүрүү (конвертация) ыкмаларын билүү программалоо менен инженердик күнүмдүк ишти жеңилдетет.
                        </p>
                    </section>

                    <footer>
                        <p>Автор: Najmiddin Nazirov</p>
                    </footer>
                </Container>
            </article>
        </main>
    );
}
