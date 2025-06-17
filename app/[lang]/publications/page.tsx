"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useParams } from "next/navigation";
import { PUBLICATIONS } from "@/lib/publications";

export default function PublicationsPage() {
    const { t, setLanguage } = useLanguage();
    const params = useParams();
    const lang = params.lang as string;
    const [searchQuery, setSearchQuery] = useState("");

    // Set language based on route parameter
    useEffect(() => {
        if (lang && ["en", "uz", "ru"].includes(lang)) {
            setLanguage(lang as "en" | "uz" | "ru");
        }
    }, [lang, setLanguage]);

    const publicationsTopics = PUBLICATIONS;
    const filteredTopics = publicationsTopics.filter((topic) => t(topic.title).toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="flex">
            <div className="flex-1 container py-4 max-w-7xl ml-0 lg:ml-64">
                <div className="space-y-6">
                    {/* Search Input */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input placeholder="Search topics..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                    </div>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredTopics.map((topic) => {
                            const Icon = topic.icon;
                            return (
                                <Card key={topic.href} className="hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-center w-full h-fit">
                                            <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-${topic.color}-100 mb-3`}>
                                                <Icon className={`h-6 w-6 text-${topic.color}-900`} />
                                            </div>
                                        </div>
                                        <CardTitle className="text-md text-center">{t(topic.title)}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{topic.description}</p>
                                        <Button
                                            variant="outline"
                                            asChild
                                            className={`w-full group-hover:bg-${topic.color}-900 group-hover:text-${topic.color}-100 transition-colors`}
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
                            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-sm text-muted-foreground">No topics found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
