import { Card, CardContent, CardHeader } from "@/components/utils/card";
import StandartCalculator from "@/components/calculator/standart-calculator";
import CalculatorText from "@/components/calculator/standart-calculator-info";
import Content from "@/components/common/content";
import { LINGUISTIC_NAME_TO_NUMERAL_NAME } from "@/lib/constants/numeral-system";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/types/language";
import { Base } from "@/types/base";
import { Metadata } from "next";

type Props = {
    params: Promise<{ lang: Language; base: Base }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang, base } = await params;
    const baseNum = LINGUISTIC_NAME_TO_NUMERAL_NAME[base] || "10";

    const t = getTranslation(lang);

    return {
        title: t("calculator.seo.title." + baseNum),
        description: t("calculator.seo.description." + baseNum),
        keywords: t("calculator.seo.keywords." + baseNum),

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
            title: t("calculator.seo.title." + baseNum),
            description: t("calculator.seo.description." + baseNum),
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
            title: t("calculator.seo.title." + baseNum),
            description: t("calculator.seo.description." + baseNum),
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", alt: "sanoq.uz" }],
            creator: "@jarkurghan",
        },

        metadataBase: new URL("https://sanoq.uz"),
        alternates: {
            canonical: `https://sanoq.uz/${lang}/calculator/${baseNum}`,
            languages: {
                uz: "https://sanoq.uz/uz/calculator/" + baseNum,
                en: "https://sanoq.uz/en/calculator/" + baseNum,
                ru: "https://sanoq.uz/ru/calculator/" + baseNum,
            },
        },

        other: {
            "application-name": "sanoq.uz",
            "apple-mobile-web-app-title": "sanoq.uz",
        },
    };
}

export default async function CalculatorPage({ params }: Props) {
    const { lang, base: baseStr } = await params;
    const base = LINGUISTIC_NAME_TO_NUMERAL_NAME[baseStr] || "10";
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <Content className="prose prose-lg prose-sm flex-1">
                <div className="sm:grid grid-cols-[1fr_auto] gap-8 xl:gap-20">
                    <header>
                        <h1>{t("calculator.standard.title")}</h1>
                        <p className="hidden sm:block text-justify">{t("calculator.standard.description")}</p>
                        <div className="hidden sm:block">
                            <CalculatorText lang={lang} base={base} />
                        </div>
                    </header>
                    <div className="w-fit max-w-[360px]">
                        <Card>
                            <CardHeader className="pt-1" />
                            <CardContent>
                                <StandartCalculator base={base} />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="block sm:hidden px-2 pt-8">
                        <CalculatorText lang={lang} base={base} />
                    </div>
                </div>
            </Content>
        </div>
    );
}
