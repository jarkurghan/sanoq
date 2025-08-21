import { getTranslation } from "@/lib/translater/i18n";
import PublicsComponent from "@/components/publications/client-component";
import Content from "@/components/common/content";
import { Language } from "@/types/language";
import type { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // to-do: publications to articles

    const { lang } = await params;
    const t = getTranslation(lang);

    return {
        title: t("publications.seo.title"),
        description: t("publications.seo.description"),
        keywords: t("publications.seo.keywords"),

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
            title: t("publications.seo.title"),
            description: t("publications.seo.description"),
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
            title: t("publications.seo.title"),
            description: t("publications.seo.description"),
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

type Props = {
    params: Promise<{ lang: Language }>;
};

export default async function PublicationsPage({ params }: Props) {
    const { lang } = await params;
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <div className="flex-1">
                <Content className="prose prose-lg prose-sm">
                    <header className="hidden">
                        <h1>{t("publications.seo.title")}</h1>
                        <p>{t("publications.seo.description")}</p>
                    </header>
                    <PublicsComponent lang={lang} />
                </Content>
            </div>
        </div>
    );
}
