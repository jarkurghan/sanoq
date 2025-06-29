import { use } from "react";
import { redirect } from "next/navigation";
import { Language } from "@/types/language";

type Props = {
    params: Promise<{ lang: Language }>;
};

export default function InfoPage({ params }: Props) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "uz") as Language;

    redirect(`/${lang}/publications`);
}
