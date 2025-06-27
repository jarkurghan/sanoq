"use client";

import { Send, Share2 } from "lucide-react";
import ShareAppURL from "@/components/share";
import { getTranslation } from "@/lib/i18n";
import { use } from "react";
import { Language } from "@/types/language";

type Props = {
    params: Promise<{ lang: Language }>;
};

export default function AboutPage({ params }: Props) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "en") as "uz" | "en" | "ru";
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <div className="flex-1 container py-4 px-4 sm:px-8 max-w-6xl ml-0 lg:ml-64 text-justify">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-4">{t("about.title")}</h1>
                    <p className="text-sm mb-4">{t("about.description")}</p>
                    <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4">
                        <div className="text-lg font-medium">•</div>
                        <h3 className="text-lg font-medium">{t("nav.conversion")}</h3>
                        <div></div>
                        <p className="text-sm">{t("about.page.conversion.desription")}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4">
                        <div className="text-lg font-medium">•</div>
                        <h3 className="text-lg font-medium">{t("nav.calculator")}</h3>
                        <div></div>
                        <p className="text-sm">{t("about.page.calculator.desription")}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4">
                        <div className="text-lg font-medium">•</div>
                        <h3 className="text-lg font-medium">{t("nav.publications")}</h3>
                        <div></div>
                        <p className="text-sm">{t("about.page.publications.desription")}</p>
                    </div>
                    {/* <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4">
                        <div className="text-lg font-medium">•</div>
                        <h3 className="text-lg font-medium">{t("nav.code")}</h3>
                        <div></div>
                        <p className="text-sm">{t("about.page.code.desription")}</p>
                    </div> */}
                </div>

                <div className="grid gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{t("about.share.title")}</h2>
                        <div className="sm:grid grid-cols-[1fr_auto] gap-x-4">
                            <p className="text-sm">{t("about.share.description")}</p>
                            <div className="mt-4 text-card-foreground w-full sm:w-40 py-4 flex items-center justify-center flex-col gap-2">
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

                    <div className="grid gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t("about.contact.title")}</h2>
                            <div className="sm:grid grid-cols-[1fr_auto] gap-x-4">
                                <div className="space-y-2 text-sm mb-4">
                                    <ul>
                                        <li className="mb-1">• {t("about.contact.description1")}</li>
                                        <li className="mb-1">• {t("about.contact.description2")}</li>
                                        <li className="mb-1">• {t("about.contact.description3")}</li>
                                        <li className="mb-1">• {t("about.contact.description4")}</li>
                                        <li className="mb-1">• {t("about.contact.description5")}</li>
                                        <li className="mb-1">• {t("about.contact.description6")}</li>
                                    </ul>
                                    <strong>{t("about.contact.description.bold")}</strong> {t("about.contact.description.def")}
                                </div>
                                <div className="mt-4 text-card-foreground w-full sm:w-40 py-4 flex items-center justify-center flex-col gap-2">
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
            </div>
        </div>
    );
}
