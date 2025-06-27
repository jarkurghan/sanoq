import HomeComponent from "@/components/home/client-component";
import RightSidebarContent from "@/components/right-sidebar-content";
import { getTranslation } from "@/lib/i18n";
import { Metadata } from "next";
import { use } from "react";

type Props = {
    params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang: rawLang } = await params;
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "en") as "uz" | "en" | "ru";
    const t = getTranslation(lang);
    return {
        title: t("home.title"),
        description: t("home.description"),
    };
}

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "en") as "uz" | "en" | "ru";
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
