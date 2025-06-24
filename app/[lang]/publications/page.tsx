"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Search, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { PUBLICATIONS } from "@/lib/publications";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function PublicationsPage() {
    const { t, setLanguage } = useLanguage();
    const params = useParams();
    const lang = params.lang as string;
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (lang && ["en", "uz", "ru"].includes(lang)) {
            setLanguage(lang as "en" | "uz" | "ru");
        }
    }, [lang, setLanguage]);

    const publicationsTopics = PUBLICATIONS;
    const filteredTopics = publicationsTopics.filter((topic) => t(topic.title).toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="flex">
            <div className="flex-1 container py-4 px-4 sm:px-8 max-w-7xl ml-0 lg:ml-64">
                <div className="space-y-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                        <Input placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredTopics.map((topic) => {
                            const Icon = topic.icon;
                            const bgColor = `bg-${topic.color}-100`;
                            const iconColor = `text-${topic.color}-900`;
                            const darkBgColor = `dark:bg-${topic.color}-100/30`;
                            const darkIconColor = `dark:text-${topic.color}-100/90`;
                            return (
                                <Card key={topic.href} className="hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-center w-full h-fit">
                                            <div className={clsx("flex items-center justify-center w-12 h-12 rounded-full mb-3", bgColor, darkBgColor)}>
                                                <Icon className={clsx(`h-6 w-6`, iconColor, darkIconColor)} />
                                            </div>
                                        </div>
                                        <CardTitle className="text-md text-center">{topic.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-sm mb-4 line-clamp-3">{topic.description}</p>
                                        <Button
                                            variant="outline"
                                            asChild
                                            className={clsx("w-full transition-colors")}
                                        >
                                            <Link href={topic.href} className="flex justify-between items-center">
                                                <span className="text-sm">{t("home.learnmore")}</span>
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
                            <BookOpen className="h-12 w-12 mx-auto mb-4" />
                            <p className="text-sm">No topics found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
