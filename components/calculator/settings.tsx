"use client";

import { Dialog, DialogHeader, DialogDescription } from "@/components/utils/dialog";
import { DialogContent, DialogTitle, DialogTrigger } from "@/components/utils/dialog";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/types/language";

export default function CalculatorSettings({ children, lang: rawLang }: { children?: React.ReactNode; lang: string }) {
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "uz") as Language;
    const t = getTranslation(lang);

    return (
        <Dialog>
            <DialogTrigger className="h-6 w-6 sm:h-9 sm:w-9 flex items-center justify-center">{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("title")}</DialogTitle>
                    <DialogDescription>{t("description")}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">content</div>
            </DialogContent>
        </Dialog>
    );
}
