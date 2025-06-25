"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { usePathname, useSearchParams } from "next/navigation";
import { ClipboardCopy, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export default function ShareAppURL({ children }: { children?: React.ReactNode }) {
    const { t } = useLanguage();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [url, setUrl] = useState("https://sanoq.uz");
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const params = searchParams.toString() ? `?${searchParams.toString()}` : "";
        const fullUrl = `${window.location.origin}${pathname}${params}`;
        setUrl(fullUrl);
    }, [pathname, searchParams]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    return (
        <Dialog>
            <DialogTrigger className="h-6 w-6 sm:h-9 sm:w-9 flex items-center justify-center">{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("share.title")}</DialogTitle>
                    <DialogDescription>{t("share.description")}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="text-sm break-all bg-card border rounded p-2">{url}</div>

                    <div className="flex gap-2 flex-wrap">
                        <Button variant="outline" asChild>
                            <a href={`https://t.me/share/url?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
                                <Send className="w-4 h-4 mr-2" /> {t("share.telegram")}
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href={`mailto:?subject=Sahifa havolasi&body=Mana bu sahifani ko‘r: ${encodeURIComponent(url)}`}>
                                <Mail className="w-4 h-4 mr-2" /> {t("share.email")}
                            </a>
                        </Button>
                        <Button variant="outline" onClick={copyToClipboard}>
                            <ClipboardCopy className="w-4 h-4 mr-2" />
                            {isCopied ? t("share.copied") : t("share.copy")}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
