"use client";

import { Button } from "@/components/utils/button";
import { DropdownMenu, DropdownMenuContent } from "@/components/utils/dropdown-menu";
import { DropdownMenuItem, DropdownMenuTrigger } from "@/components/utils/dropdown-menu";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Check, Globe } from "lucide-react";
import { Language } from "@/types/language";

const languages: { code: Language; name: string }[] = [
    { code: "en", name: "English" },
    { code: "uz", name: "O'zbek" },
    { code: "ru", name: "Русский" },
];

export default function LanguageSwitcher({ lang: language }: { lang: Language }) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const handleLanguageChange = (newLang: Language) => {
        localStorage.setItem("language", newLang);

        const currentLang = params.lang as string;
        const pathWithoutLang = pathname.replace(`/${currentLang}`, "") || "";

        const newPath = `/${newLang}${pathWithoutLang}`;
        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-9 sm:w-9">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="flex items-center justify-between">
                        {lang.name}
                        {language === lang.code && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
