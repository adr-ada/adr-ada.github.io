
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react"
import { ModeToggle } from "./mode-toggle";

import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    const openGithub = () => {
        window.open("https://github.com/adr-ada", "_blank");
    }
    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/adriel-adasa/", "_blank");
    }
    return (
        <>
            <div className="border-grid w-screen border-b px-60 border-neutral-700 dark:border-neutral-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-1 h-14 items-center justify-between">
                    <h1 className="text-3xl font-bold">Adriel Adasa</h1>
                    <nav className="flex items-center gap-0.5">
                        <Link to="/">
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`h-8 w-16 px-0 border border-transparent hover:border-transparent bg-transparent hover:bg-zinc-200 focus-visible:bg-transparent ${location.pathname === "/"
                                    ? "text-black dark:text-white"
                                    : "text-neutral-400"
                                    }`}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to="/projects">
                            <Button variant="ghost" size="icon" className={`h-8 w-16 px-0 border border-transparent hover:border-transparent bg-transparent hover:bg-zinc-200 focus-visible:bg-transparent ${location.pathname === "/projects"
                                ? "text-black dark:text-white"
                                : "text-neutral-400"
                                }`}
                            >
                                Projects
                            </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="h-8 w-8 px-0 border border-transparent hover:border-transparent bg-transparent hover:bg-zinc-200 focus-visible:bg-transparent" onClick={openGithub}>
                            <Github />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 px-0 border border-transparent hover:border-transparent bg-transparent hover:bg-zinc-200 focus-visible:bg-transparent" onClick={openLinkedin}>
                            <Linkedin />
                        </Button>
                        <ModeToggle />
                    </nav>
                </div>
            </div >
        </>
    )
}

export default Header;