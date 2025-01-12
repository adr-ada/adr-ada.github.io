import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

        <>{/*<DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
                    <Button variant="outline" size="icon" onClick={toggleTheme}>
                {theme === "dark" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
                ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
                )}
                <span className="sr-only">Toggle theme</span>
            </Button>*/}

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
