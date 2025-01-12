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
import { ModeToggle } from "./mode-toggle";
const Header = () => {
    const openGithub = () => {
        window.open("https://github.com/adr-ada", "_blank");
    }
    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/adriel-adasa/", "_blank");
    }
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
                            <Button variant="ghost" size="icon" className="h-8 w-8 px-0 border border-transparent hover:border-transparent bg-transparent hover:bg-zinc-200 focus-visible:bg-transparent" onClick={openGithub}>
                                <Github />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 px-0 border border-transparent hover:border-transparent bg-transparent hover:bg-zinc-200 focus-visible:bg-transparent" onClick={openLinkedin}>
                                <Linkedin />
                            </Button>
                            <ModeToggle />
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header;