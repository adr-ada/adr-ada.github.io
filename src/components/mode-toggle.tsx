import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (

        <>

            <TooltipProvider>
                <Tooltip >
                    <TooltipTrigger asChild>
                        <Button onClick={toggleTheme} variant="ghost" size="icon" className="border border-transparent hover:border-transparent bg-transparent hover:bg-transparent focus-visible:bg-transparent">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        {theme === "dark" ? <p>Let there be light!</p> : <p>Turn it off!</p>}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}