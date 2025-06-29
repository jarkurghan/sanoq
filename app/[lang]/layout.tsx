import type React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sidebar from "@/components/global-sidebar";
import { Language } from "@/types/language";
import { use } from "react";

type Props = {
    children: React.ReactNode;
    params: Promise<{ lang: Language }>;
};

export default function Layout({ children, params }: Props) {
    const { lang } = use(params);

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar lang={lang} />
            <div className="flex flex-1">
                <Sidebar lang={lang} />
                <main className="flex-1">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
