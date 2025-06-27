"use client";

import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/utils/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-6 w-6 sm:h-9 sm:w-9">
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
