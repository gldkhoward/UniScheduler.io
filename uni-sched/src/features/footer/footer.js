//Footer for the site 
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-between w-full h-12 border-t align-middle mt-auto">
            <div className="flex flex-row items-center justify-start gap-2 ml-4 p-4">
                <FaGithub />
                <a href="https://github.com/gldkhoward" target="_blank" rel="noopener noreferrer" className="flex flex-row align-middle">
                    
                    gldkhoward
                </a>
            </div>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="flex flex-row align-middle">
                Powered by Next.js
            </a>
            <p className="mr-4">© 2024 UniScheduler.io</p>
        </footer>
    )
}