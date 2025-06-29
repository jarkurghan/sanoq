import HomeComponent from "@/components/home/client-component";
import RightSidebarContent from "@/components/global/right-sidebar";
import { getTranslation } from "@/lib/i18n";
import { Language } from "@/types/language";
import { Metadata } from "next";
import { use } from "react";

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

export default function HomePage({ params }: Props) {
    const { lang } = use(params);
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <div className="flex-1 container py-4 px-4 sm:px-8 max-w-6xl ml-0 lg:ml-64">
                <header>
                    <h1 className="text-2xl font-bold">{t("home.title")}</h1>
                    <div className="hidden sm:block border-b pt-2 pb-4 mb-6 text-sm">
                        <p>{t("home.description")}</p>
                    </div>
                </header>

                <HomeComponent lang={lang} />
            </div>

            <div className="hidden lg:block">
                <RightSidebarContent />
            </div>
        </div>
    );
}
