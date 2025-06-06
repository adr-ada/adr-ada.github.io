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
            {<TooltipProvider>
                <Tooltip >
                    <TooltipTrigger className="border border-transparent hover:border-transparent bg-transparent hover:bg-transparent focus-visible:bg-transparent">
                        <Button
                            variant="ghost"
                            className="group/toggle h-8 w-8 px-0 hover:bg-zinc-200 border border-transparent hover:border-transparent"
                            onClick={toggleTheme}
                        >
                            <Sun className="hidden [html.dark_&]:block" />
                            <Moon className="hidden [html.light_&]:block" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        {theme === "dark" ? <p>Let there be light!</p> : <p>Turn it off!</p>}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>}
        </>
    )
}
