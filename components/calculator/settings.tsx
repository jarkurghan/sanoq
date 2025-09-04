import Link from "next/link";
import { Dialog } from "@/components/utils/dialog";
import { DialogHeader } from "@/components/utils/dialog";
import { DialogContent } from "@/components/utils/dialog";
import { DialogTitle } from "@/components/utils/dialog";
import { DialogTrigger } from "@/components/utils/dialog";
import { NUMERAL_NAME_TO_LINGUISTIC_NAME } from "@/lib/constants/numeral-system";
import { NUMBER_SYSTEMS } from "@/lib/constants/numeral-system";
import { DropdownMenuContent } from "../utils/dropdown-menu";
import { DropdownMenuTrigger } from "../utils/dropdown-menu";
import { DropdownMenuItem } from "../utils/dropdown-menu";
import { DropdownMenu } from "../utils/dropdown-menu";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/lib/types/language";
import { Base } from "@/lib/types/base";

export default function CalculatorSettings({ children, lang, base }: { children?: React.ReactNode; lang: Language; base: Base }) {
    const t = getTranslation(lang);

    return (
        <Dialog>
            <DialogTrigger className="flex items-center justify-center">{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("calculator.settings.title")}</DialogTitle>
                    {/* <DialogDescription>{t("description")}</DialogDescription> */}
                </DialogHeader>
                <div className="space-y-2 pb-2">
                    <label className="text-sm font-medium pr-3">{t("calculator.settings.label")}</label>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-4 py-2 border rounded-md">{t("numbersystem." + base)}</DropdownMenuTrigger>
                        <DropdownMenuContent className="max-h-64 overflow-y-auto">
                            {NUMBER_SYSTEMS.map((system) => (
                                <DropdownMenuItem asChild key={system.value}>
                                    <Link href={`/${lang}/calculator/${NUMERAL_NAME_TO_LINGUISTIC_NAME[system.value]}`}>{t(system.label)}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {/* to-do: Bu yerda calculator turini o'zgartirish bo'ladi: Standart, ... */}
            </DialogContent>
        </Dialog>
    );
}
