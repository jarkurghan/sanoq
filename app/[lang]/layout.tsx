// app/[lang]/layout.tsx

import type { Metadata } from "next";
import type React from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlobalSidebar from "@/components/global-sidebar";
import { ThemeProvider } from "@/contexts/theme-context";
import { use } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
};

// export function generateStaticParams() {
//     return [{ lang: "uz" }, { lang: "en" }, { lang: "ru" }];
// }

// export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
//     const { lang: rawLang } = use(params);
//     const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "en") as "uz" | "en" | "ru";

//   const titles = {
//     en: "Number Systems",
//     uz: "Sanoq Sistemalari",
//     ru: "Системы Счисления",
//   };

//   const descriptions = {
//     en: "Learn, convert, and calculate with different number systems",
//     uz: "Turli sanoq sistemalarini o'rganing, konvertatsiya qiling va hisoblang",
//     ru: "Изучайте, конвертируйте и вычисляйте с различными системами счисления",
//   };

//   return {
//     title: titles[lang as keyof typeof titles] || titles.uz,
//     description: descriptions[lang as keyof typeof descriptions] || descriptions.uz,
//     generator: "v0.dev",
//   };
// }

export default function Layout({ children, params }: Props) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "en") as "uz" | "en" | "ru";

    return (
        <html lang={lang} suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="flex min-h-screen flex-col">
                        <Navbar lang={lang} />
                        <div className="flex flex-1">
                            <GlobalSidebar lang={lang} />
                            <main className="flex-1">{children}</main>
                        </div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
