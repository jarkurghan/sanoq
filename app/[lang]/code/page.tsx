"use client";

import { use, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/utils/card";
import { Input } from "@/components/utils/input";
import { Button } from "@/components/utils/button";
import { ChevronRight, Search, Code, Binary, Hash, Zap, Plus, Wrench } from "lucide-react";
import RightSidebarContent from "@/components/global/right-sidebar";
import { getTranslation } from "@/lib/i18n";
import { Language } from "@/types/language";

type Props = {
    params: Promise<{ lang: Language }>;
};

export default function CodePage({ params }: Props) {
    const { lang: rawLang } = use(params);
    const lang = (["uz", "en", "ru"].includes(rawLang) ? rawLang : "uz") as Language;
    const t = getTranslation(lang);

    const [searchQuery, setSearchQuery] = useState("");

    const codeTopics = [
        {
            title: "code.topic.binarytodecimal",
            href: "binary-to-decimal",
            icon: Binary,
            description: "Learn how to convert binary numbers to decimal in various programming languages.",
        },
        {
            title: "code.topic.decimaltobinary",
            href: "decimal-to-binary",
            icon: Hash,
            description: "Implement decimal to binary conversion algorithms and functions.",
        },
        {
            title: "code.topic.hexadecimal",
            href: "hexadecimal-conversion",
            icon: Code,
            description: "Master hexadecimal conversion techniques and practical implementations.",
        },
        {
            title: "code.topic.bitwise",
            href: "bitwise-operations",
            icon: Zap,
            description: "Explore bitwise operations and their applications in number systems.",
        },
        {
            title: "code.topic.binaryaddition",
            href: "binary-addition",
            icon: Plus,
            description: "Implement binary arithmetic operations and understand their logic.",
        },
        {
            title: "code.topic.utilities",
            href: "utilities",
            icon: Wrench,
            description: "Useful utility functions and libraries for working with number systems.",
        },
    ];

    const filteredTopics = codeTopics.filter((topic) => t(topic.title).toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="flex">
            <div className="flex-1 container py-4 px-4 sm:px-8 max-w-7xl ml-0 lg:ml-64">
                <h1 className="text-2xl font-bold mb-6">coming son...</h1>
            </div>
        </div>
    );

    return (
        <div className="flex">
            <div className="flex-1 container py-4 px-4 sm:px-8 max-w-7xl ml-0 lg:ml-64">
                <h1 className="text-2xl font-bold mb-6">{t("code.title")}</h1>

                <div className="space-y-6">
                    {/* Search Input */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                        <Input placeholder="Search code examples..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                    </div>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredTopics.map((topic) => {
                            const IconComponent = topic.icon;
                            return (
                                <Card key={topic.href} className="hover:shadow-md transition-shadow cursor-pointer group">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                                            <IconComponent className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-lg">{t(topic.title)}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-sm mb-4 line-clamp-3">{topic.description}</p>
                                        <Button
                                            variant="outline"
                                            asChild
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                        >
                                            <Link href={`/${lang}/code/${topic.href}`} className="flex justify-between items-center">
                                                <span className="text-sm">{t("code.viewcode")}</span>
                                                <ChevronRight className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {filteredTopics.length === 0 && (
                        <div className="text-center py-12">
                            <Code className="h-12 w-12 mx-auto mb-4" />
                            <p className="text-sm">No code examples found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Right sidebar as part of the content */}
            <div className="hidden lg:block">
                <RightSidebarContent />
            </div>
        </div>
    );
}
