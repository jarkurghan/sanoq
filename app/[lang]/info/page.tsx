"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InfoPage({ params }: { params: Promise<{ lang: string }> }) {
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
