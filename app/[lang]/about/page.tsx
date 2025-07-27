import ShareAppURL from "@/components/global/share";
import { Send, Share2 } from "lucide-react";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/types/language";
import type { Metadata } from "next";
import { use } from "react";
import Container from "@/components/common/container";

type Props = {
    params: Promise<{ lang: Language }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getTranslation(lang);

    return {
        title: t("about.title"),
        description: t("about.description"),

        authors: [{ name: "Najmiddin Nazirov", url: "https://sanoq.uz/about" }],
        creator: "Najmiddin Nazirov",

        robots: {
            index: false,
            follow: false,
            nocache: false,
            googleBot: {
                index: false,
                follow: false,
            },
        },

        openGraph: {
            title: t("about.title"),
            description: t("about.description"),
            url: "https://sanoq.uz",
            siteName: "sanoq.uz",
            images: [
                {
                    url: "https://sanoq.uz/images/sanoq.uz.png",
                    width: 1000,
                    height: 749,
                    alt: "sanoq.uz",
                },
            ],
            locale: lang,
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: t("about.title"),
            description: t("about.description"),
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", alt: "sanoq.uz" }],
            creator: "@jarkurghan",
        },

        metadataBase: new URL("https://sanoq.uz"),
        alternates: {
            canonical: `https://sanoq.uz/${lang}/publications`,
            languages: {
                uz: "https://sanoq.uz/uz/publications",
                en: "https://sanoq.uz/en/publications",
                ru: "https://sanoq.uz/ru/publications",
            },
        },

        other: {
            "application-name": "sanoq.uz",
            "apple-mobile-web-app-title": "sanoq.uz",
        },
    };
}

export default function AboutPage({ params }: Props) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "uz") as Language;
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <Container className="flex-1 prose prose-lg prose-sm text-justify">
                <div>
                    <header>
                        <h1>{t("about.title")}</h1>
                        <p>{t("about.description")}</p>
                    </header>
                    <div>
                        <h3>{t("nav.conversion")}</h3>
                        <div></div>
                        <p>{t("about.page.conversion.desription")}</p>
                    </div>
                    <div>
                        <h3>{t("nav.calculator")}</h3>
                        <div></div>
                        <p>{t("about.page.calculator.desription")}</p>
                    </div>
                    <div>
                        <h3>{t("nav.publications")}</h3>
                        <div></div>
                        <p>{t("about.page.publications.desription")}</p>
                    </div>
                    {/* <div>
                        <h3>{t("nav.code")}</h3>
                        <div></div>
                        <p>{t("about.page.code.desription")}</p>
                    </div> */}
                </div>

                <div>
                    <div>
                        <h2>{t("about.share.title")}</h2>
                        <div className="sm:grid grid-cols-[1fr_auto] gap-x-8">
                            <p>{t("about.share.description")}</p>
                            <div className="text-card-foreground w-full sm:w-40 py-4 flex items-center justify-end flex-col gap-2">
                                <Share2 size={30} />
                                <ShareAppURL lang={lang}>
                                    <div className="px-6 py-1 text-white text-base font-medium bg-blue-500 border-none rounded-lg cursor-pointer transition-colors text-center no-underline inline-flex items-center justify-center gap-2">
                                        {t("about.share.button")}
                                    </div>
                                </ShareAppURL>
                            </div>
                        </div>
                    </div>

                    {/* to-do: donat */}

                    <div>
                        <div>
                            <h2>{t("about.contact.title")}</h2>
                            <div className="sm:grid grid-cols-[1fr_auto] gap-x-8">
                                <div>
                                    <ul>
                                        <li>{t("about.contact.description1")}</li>
                                        <li>{t("about.contact.description2")}</li>
                                        <li>{t("about.contact.description3")}</li>
                                        <li>{t("about.contact.description4")}</li>
                                        <li>{t("about.contact.description5")}</li>
                                        <li>{t("about.contact.description6")}</li>
                                    </ul>
                                    <strong>{t("about.contact.description.bold")}</strong> {t("about.contact.description.def")}
                                </div>
                                <div className="text-card-foreground w-full sm:w-40 py-4 flex items-center justify-end flex-col gap-2">
                                    <Send size={30} />
                                    <a
                                        href="https://t.me/full_full_stack"
                                        target="_blank"
                                        className="px-6 py-1 text-white text-base font-medium bg-blue-500 border-none rounded-lg cursor-pointer transition-colors text-center no-underline inline-flex items-center justify-center gap-2"
                                    >
                                        {t("about.contact.button")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
