import { useState } from "react";

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        document.body.classList.toggle("dark", !isDarkMode);
    };

    return { isDarkMode, toggleDarkMode };
};