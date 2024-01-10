//Navbar component for the site header 
import Link from "next/link"
import React from "react"
import { FaGithub, FaUniversity } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
                <Link href="/home">
                    <FaUniversity size={24} className="text-blue-600"/>
                </Link>
                <Link href="/home" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                    UniScheduler.io
                </Link>
            </div>
            <div className="flex-grow">
                <div className="flex justify-end space-x-4 items-center">
                    <Link href="/generator" className="text-gray-600 hover:text-gray-800 cursor-pointer">Generator</Link>
                    <Link href="/docs" className="text-gray-600 hover:text-gray-800 cursor-pointer">Docs</Link>
                    <Link href="/showcase" className="text-gray-600 hover:text-gray-800 cursor-pointer">Showcase</Link>
                    <Link href="/blog" className="text-gray-600 hover:text-gray-800 cursor-pointer">About</Link>
                    <Link href="https://github.com/gldkhoward/UniScheduler.io" className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        <FaGithub  />
                    </Link>
                </div>
            </div>
        </nav>
        )
}