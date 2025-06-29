"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { PUBLICATIONS } from "@/lib/publications";
import { getTranslation } from "@/lib/i18n";

// Static sidebar menus
const sidebarMenus = {
    publications: PUBLICATIONS,
    code: [
        { title: "code.topic.binarytodecimal", href: "binary-to-decimal" },
        { title: "code.topic.decimaltobinary", href: "decimal-to-binary" },
        { title: "code.topic.hexadecimal", href: "hexadecimal-conversion" },
        { title: "code.topic.bitwise", href: "bitwise-operations" },
        { title: "code.topic.binaryaddition", href: "binary-addition" },
        { title: "code.topic.utilities", href: "utilities" },
    ],
};

export default function GlobalSidebar({ lang: rawLang }: { lang: string }) {
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "uz") as Language;
    const t = getTranslation(lang);
    const pathname = usePathname();
    const params = useParams();

    // Determine which sidebar to show based on current path
    const getCurrentSidebar = () => {
        if (pathname.includes("/publications")) {
            return { items: sidebarMenus.publications.filter((e) => e.lang === lang), basePath: `/${lang}/publications` };
        }
        if (pathname.includes("/ru/info")) {
            return { items: sidebarMenus.publications.filter((e) => e.lang === "ru"), basePath: `/${lang}/publications` };
        }
        if (pathname.includes("/uz/info")) {
            return { items: sidebarMenus.publications.filter((e) => e.lang === "uz"), basePath: `/${lang}/publications` };
        }
        if (pathname.includes("/en/info")) {
            return { items: sidebarMenus.publications.filter((e) => e.lang === "en"), basePath: `/${lang}/publications` };
        }
        // if (pathname.includes("/code")) {
        //   return { items: sidebarMenus.code, basePath: `/${lang}/code` }
        // }
        return null;
    };

    const currentSidebar = getCurrentSidebar();

    // Show empty sidebar if no items
    const { items = [], basePath = "" } = currentSidebar || {};

    if (items.length === 0) return null;

    return (
        <div className="hidden lg:block fixed left-0 top-14 bottom-16 w-64 z-10">
            {/* Sidebar - only visible on desktop */}
            <div className="h-full bg-background border-r overflow-y-auto">
                <div className="bg-muted/50 px-4 py-3 font-medium border-b">{t("sidebar.topics")}</div>
                <nav className="p-2">
                    <ul className="space-y-1">
                        {items.map((item) => {
                            const isActive = pathname === `${basePath}/${item.href}`;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center px-3 py-2 text-sm rounded-md transition-colors hover:bg-accent",
                                            isActive ? "bg-accent text-accent-foreground font-medium" : ""
                                        )}
                                    >
                                        <ChevronRight className={cn("mr-2 h-4 w-4 transition-transform", isActive ? "rotate-90" : "")} />
                                        {t(item.title)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
