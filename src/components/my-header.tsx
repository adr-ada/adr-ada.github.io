
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react"
import { ModeToggle } from "./mode-toggle";
import { Link } from 'react-router-dom'

const Header = () => {
    const openGithub = () => {
        window.open("https://github.com/adr-ada", "_blank");
    }
    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/adriel-adasa/", "_blank");
    }
    const openProjects = () => {

    }
    return (
        <>
            <header className="sticky top-0 border-grid z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    {/* Align the text to the left */}
                    <h1 className="text-5xl flex-shrink-0">Adriel Adasa</h1>
                    <nav className="flex items-center gap-2">
                        <Link to="/main">
                            <Button variant="ghost" size="icon" className="h-8 w-16 px-0 border border-transparent hover:border-transparent bg-transparent hover:bg-zinc-200 focus-visible:bg-transparent">
                                Home
                            </Button>
                        </Link>
                        <Link to="/projects">
                            <Button variant="ghost" size="icon" className="h-8 w-16 px-0 border border-transparent hover:border-transparent bg-transparent hover:bg-zinc-200 focus-visible:bg-transparent">
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
            </header >
        </>
    )
}

export default Header;