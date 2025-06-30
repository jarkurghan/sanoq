"use client";

import React, { useEffect, useState } from "react";
import "./typer.css";

interface TypingProps {
    children: string;
    speed?: number; // harflar orasidagi kechikish (ms)
    cursor?: boolean;
}

const Typing: React.FC<TypingProps> = ({ children, speed = 50, cursor = true }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + children[i]);
            i++;

            if (i >= children.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [children, speed]);

    return (
        <span>
            {displayedText}
            {cursor && <span className="blinking-cursor">|</span>}
        </span>
    );
};

export default Typing;
