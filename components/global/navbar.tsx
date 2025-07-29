"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/classname";
import { Button } from "@/components/utils/button";
import { Calculator, Code, Home, Info, BookOpen, Menu, X, Share2, Binary, Settings2 } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "@/components/global/language-switcher";
import ThemeToggle from "@/components/global/theme-toggle";
import ShareAppURL from "./share";
import { getTranslation } from "@/lib/translater/i18n";
import { Language } from "@/types/language";
import Image from "next/image";
import CalculatorSettings from "../calculator/settings";

export default function Navbar({ lang: rawLang }: { lang: string }) {
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "uz") as Language;
    const t = getTranslation(lang);

    // hozircha client side bo'lsin...
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "nav.conversion", href: `/${lang}`, icon: Home },
        { name: "nav.calculator", href: `/${lang}/calculator`, icon: Calculator },
        { name: "nav.publications", href: `/${lang}/publications`, icon: BookOpen },
        // { name: "nav.code", href: `/${lang}/code`, icon: Code },
        { name: "nav.about", href: `/${lang}/about`, icon: Info },
    ];

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
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn("flex items-center font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "")}
                                >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {t(item.name)}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="ml-auto flex items-center space-x-2">
                    <CalculatorSettings lang={lang}>
                        <div>
                            <Settings2 className="h-4 w-4" />
                            <span className="sr-only">Settings</span>
                        </div>
                    </CalculatorSettings>
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

                            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </div>
                    </div>

                    <nav className="flex flex-col px-4 py-2 space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "flex items-center rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-primary",
                                        isActive ? "bg-muted text-primary" : ""
                                    )}
                                >
                                    <item.icon className="mr-2 h-5 w-5" />
                                    {t(item.name)}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
