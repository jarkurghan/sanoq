import Content from "@/components/common/content";
import HomeComponent from "@/components/home/client-component";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/types/language";
import { Metadata } from "next";

type Props = {
    params: Promise<{ lang: Language }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getTranslation(lang);

    return {
        title: t("home.seo.title"),
        description: t("home.seo.description"),
        keywords: t("home.seo.keywords"),

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
            title: t("home.seo.title"),
            description: t("home.seo.description"),
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
            title: t("home.seo.title"),
            description: t("home.seo.description"),
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", alt: "sanoq.uz" }],
            creator: "@jarkurghan",
        },

        metadataBase: new URL("https://sanoq.uz"),
        alternates: {
            canonical: `https://sanoq.uz/${lang}`,
            languages: {
                uz: "https://sanoq.uz/uz",
                en: "https://sanoq.uz/en",
                ru: "https://sanoq.uz/ru",
            },
        },

        other: {
            "application-name": "sanoq.uz",
            "apple-mobile-web-app-title": "sanoq.uz",
        },
    };
}

export default async function HomePage({ params }: Props) {
    const { lang } = await params;
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <div className="flex-1 text-justify">
                <Content className="prose prose-lg prose-sm">
                    <header>
                        <h1>{t("home.title")}</h1>
                        {/* <div className="hidden sm:block border-b pt-2 pb-4 mb-6 text-sm"> */}
                        <p>{t("home.description")}</p>
                        {/* </div> */}
                    </header>
                    <HomeComponent lang={lang} />
                </Content>
            </div>
        </div>
    );
}
