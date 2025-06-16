"use client";

import { usePathname } from "next/navigation";
import CalculatorRightSidebar from "./calculator-right-sidebar";

export default function RightSidebarContent() {
    // const pathname = usePathname();

    // if (pathname.startsWith("/calculator")) {
    //     return <CalculatorRightSidebar />;
    // }

    return (
        <div className="w-64 bg-background">
            <div className="p-4">
                <div className="text-center text-muted-foreground text-sm py-8">{/* Empty right sidebar content */}</div>
            </div>
        </div>
    );
}
