import { Card, CardContent, CardHeader } from "@/components/utils/card";
import StandartCalculator from "@/components/calculator/standart-calculator";
import CalculatorText from "@/components/calculator/standart-calculator-info";
import CalculatorRightSidebar from "@/components/calculator/calculator-right-sidebar";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/types/language";
import { Metadata } from "next";
import { use } from "react";
import Content from "@/components/common/content";

type Props = {
    params: Promise<{ lang: Language }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getTranslation(lang);

    return {
        title: t("calculator.seo.title"),
        description: t("calculator.seo.description"),
        keywords: t("calculator.seo.keywords"),

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
            title: t("calculator.seo.title"),
            description: t("calculator.seo.description"),
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
            title: t("calculator.seo.title"),
            description: t("calculator.seo.description"),
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", alt: "sanoq.uz" }],
            creator: "@jarkurghan",
        },

        metadataBase: new URL("https://sanoq.uz"),
        alternates: {
            canonical: `https://sanoq.uz/${lang}/calculator`,
            languages: {
                uz: "https://sanoq.uz/uz/calculator",
                en: "https://sanoq.uz/en/calculator",
                ru: "https://sanoq.uz/ru/calculator",
            },
        },

        other: {
            "application-name": "sanoq.uz",
            "apple-mobile-web-app-title": "sanoq.uz",
        },
    };
}

export default function CalculatorPage({ params }: Props) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "uz") as Language;
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <Content className="prose prose-lg prose-sm flex-1">
                <div className="sm:grid grid-cols-[1fr_auto] gap-8 xl:gap-20">
                    <header>
                        <h1>{t("calculator.standard.title")}</h1>
                        <p className="hidden sm:block text-justify">{t("calculator.standard.description")}</p>
                        <div className="hidden sm:block">
                            <CalculatorText lang={lang} />
                        </div>
                    </header>
                    <div className="w-fit max-w-[360px]">
                        <Card>
                            <CardHeader className="pt-1" />
                            <CardContent>
                                <StandartCalculator />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="block sm:hidden px-2 pt-8">
                        <CalculatorText lang={lang} />
                    </div>
                </div>
            </Content>

            <div className="hidden lg:block">
                <CalculatorRightSidebar lang={lang} />
            </div>
        </div>
    );
}
