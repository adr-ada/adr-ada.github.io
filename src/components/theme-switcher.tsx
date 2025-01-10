import { Button } from "./ui/button";
import { useDarkMode } from "@/hooks/ui-hooks";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <>
            <Button
                onClick={() => {
                    console.log("Dark mode button clicked");
                    toggleDarkMode();
                }}
                variant="secondary"
                className="ml-auto flex items-center"
            >
                {isDarkMode ? <Moon /> : <Sun />}
            </Button>
        </>
    )
}

export default ThemeSwitcher;