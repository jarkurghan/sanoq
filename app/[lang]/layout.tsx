import type { ReactNode } from "react";
import { Language } from "@/types/language";
import { headers } from "next/headers";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

type Props = {
    children: ReactNode;
    params: Promise<{ lang: Language }>;
};

export default async function Layout({ children, params }: Props) {
    const { lang } = await params;
    const headerList = await headers();
    const pathname = headerList.get("x-pathname") || "/";

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar lang={lang} pathname={pathname} />
            <div className="flex flex-1">
                <main className="flex-1">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
