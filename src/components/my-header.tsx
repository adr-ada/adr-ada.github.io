import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react"
import ThemeSwitcher from "./theme-switcher"
import { ModeSwitcher } from "./mode-switch";
const Header = () => {
    return (
        <>
            <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <h1 className="text-5xl">Adriel Adasa</h1>
                    <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <p>test</p>
                        </div>
                        <nav className="flex items-center gap-0.5">
                            <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                                <Github />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                                <Linkedin />
                            </Button>
                            <ModeSwitcher />
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header;