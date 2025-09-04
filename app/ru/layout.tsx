import type React from "react";
import Navbar from "@/components/global/header/navbar";
import Footer from "@/components/global/footer";
// import Sidebar from "@/components/global/left-sidebar";
import { Language } from "@/lib/types/language";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    const lang: Language = "ru";

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar lang={lang} page="article" />
            <div className="flex flex-1">
                {/* <Sidebar lang={lang} /> */}
                <main className="flex-1">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
