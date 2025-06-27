"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Language } from "@/types/language";

type Props = {
    params: Promise<{ lang: Language }>;
};

export default function InfoPage({ params }: Props) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "en") as "uz" | "en" | "ru";

    const router = useRouter();

    useEffect(() => {
        if (lang) {
            router.replace(`/${lang}/publications`);
        }
    }, [lang, router]);

    return null;
}
