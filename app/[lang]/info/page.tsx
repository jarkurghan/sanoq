"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { useParams, useRouter } from "next/navigation";

export default function AboutPage() {
    const { t, setLanguage } = useLanguage();
    const params = useParams();
    const router = useRouter();
    const lang = params.lang as string;

    useEffect(() => {
        if (lang && ["en", "uz", "ru"].includes(lang)) {
            setLanguage(lang as "en" | "uz" | "ru");
        }
    }, [lang, setLanguage]);

    useEffect(() => {
        if (lang) {
            router.replace(`/${lang}/publications`);
        }
    }, [lang, router]);

    return null;
}
