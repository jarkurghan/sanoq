"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calculator, Code, Home, Info, BookOpen, Menu, X, Share2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import LanguageSwitcher from "@/components/language-switcher";
import ThemeToggle from "@/components/theme-toggle";
import ShareAppURL from "./share";

export default function Navbar() {
    const pathname = usePathname();
    const params = useParams();
    const lang = (params.lang as string) || "uz";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navItems = [
        { name: "nav.conversion", href: `/${lang}`, icon: Home },
        { name: "nav.calculator", href: `/${lang}/calculator`, icon: Calculator },
        { name: "nav.publications", href: `/${lang}/publications`, icon: BookOpen },
        // { name: "nav.code", href: `/${lang}/code`, icon: Code },
        { name: "nav.about", href: `/${lang}/about`, icon: Info },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="px-4 md:px-8 lg:px-12 w-full flex h-14 items-center">
                <div className="flex items-center space-x-8">
                    <Link href={`/${lang}`} className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                            <Calculator className="h-6 w-6" />
                        </div>
                        <span className="hidden sm:inline-block text-xl font-bold">Number Systems</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center text-sm font-medium transition-colors hover:text-primary",
                                        isActive ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {t(item.name)}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="ml-auto flex items-center space-x-2">
                    <ShareAppURL>
                        <div>
                            <Share2 className="h-4 w-4" />
                            <span className="sr-only">Share this page</span>
                        </div>
                    </ShareAppURL>
                    <ThemeToggle />
                    <LanguageSwitcher />

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
                            <ShareAppURL />
                            <ThemeToggle />
                            <LanguageSwitcher />

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
                                        isActive ? "bg-muted text-primary" : "text-muted-foreground"
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
