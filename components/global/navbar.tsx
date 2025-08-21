"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/classname";
import { Button } from "@/components/utils/button";
import { Calculator } from "lucide-react";
import { Code } from "lucide-react";
import { Home } from "lucide-react";
import { Info } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Share2 } from "lucide-react";
import { Binary } from "lucide-react";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "@/components/global/language-switcher";
import ThemeToggle from "@/components/global/theme-toggle";
import ShareAppURL from "./share";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/lib/types/language";
import Image from "next/image";
import CalculatorSettings from "../calculator/settings";
import { Base } from "@/lib/types/base";

export default function Navbar({ lang }: { lang: Language }) {
    const t = getTranslation(lang);

    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const params: { base: Base; lang: Language } = useParams();

    const isOnCalculatorPage = pathname.startsWith(`/${lang}/calculator`);
    const navItemCN = "flex items-center font-medium transition-colors hover:text-primary";
    const navItemCNMb = "flex items-center rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-primary";

    const navItems = [
        { name: "nav.conversion", href: `/${lang}`, icon: Home, isActive: pathname === `/${lang}` },
        { name: "nav.calculator", href: `/${lang}/calculator`, icon: Calculator, isActive: isOnCalculatorPage },
        { name: "nav.article", href: `/${lang}/article`, icon: BookOpen, isActive: pathname.startsWith(`/${lang}/article`) },
        // { name: "nav.code", href: `/${lang}/code`, icon: Code, isActive: pathname.startsWith(`/${lang}/code`) },
        { name: "nav.about", href: `/${lang}/about`, icon: Info, isActive: pathname.startsWith(`/${lang}/about`) },
    ];

    const close = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="px-4 sm:px-8 lg:px-12 w-full flex h-14 items-center">
                <div className="flex items-center space-x-8">
                    <Link href={`/${lang}`} className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 lg:ml-[175px] rounded-lg border-2 border-blue-300">
                            <Image src="/favicon.ico" alt="logo" width={24} height={24} />
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className={cn(navItemCN, item.isActive ? "text-primary" : "")}>
                                <item.icon className="mr-2 h-4 w-4" />
                                {t(item.name)}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="ml-auto flex items-center space-x-2">
                    {isOnCalculatorPage && (
                        <CalculatorSettings lang={lang} base={params.base}>
                            <div>
                                <Settings2 className="h-4 w-4" />
                                <span className="sr-only">Settings</span>
                            </div>
                        </CalculatorSettings>
                    )}
                    <ShareAppURL lang={lang}>
                        <div>
                            <Share2 className="h-4 w-4" />
                            <span className="sr-only">Share this page</span>
                        </div>
                    </ShareAppURL>
                    <ThemeToggle />
                    <LanguageSwitcher lang={lang} />

                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col w-[100vw] h-[100vh]">
                    <div className="flex justify-between items-center px-4 py-2 border-b">
                        <Link href={`/${lang}`} className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                                <Calculator className="h-6 w-6" />
                            </div>
                        </Link>
                        <div className="ml-auto flex items-center space-x-2">
                            <ShareAppURL lang={lang} />
                            <ThemeToggle />
                            <LanguageSwitcher lang={lang} />

                            <Button variant="ghost" size="icon" onClick={close}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </div>
                    </div>

                    <nav className="flex flex-col px-4 py-2 space-y-2">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} onClick={close} className={cn(navItemCNMb, item.isActive ? "bg-muted text-primary" : "")}>
                                <item.icon className="mr-2 h-5 w-5" />
                                {t(item.name)}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
