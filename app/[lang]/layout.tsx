import type React from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlobalSidebar from "@/components/global-sidebar";
import { ThemeProvider } from "@/contexts/theme-context";
import { Language } from "@/types/language";
import { use } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: React.ReactNode;
    params: Promise<{ lang: Language }>;
};

export default function Layout({ children, params }: Props) {
    const { lang } = use(params);

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
