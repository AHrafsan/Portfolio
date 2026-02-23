"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/75">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
                >
                    Abu Hasan's <span className="text-indigo-500">Portfolio</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
                    >
                        <div className="flex flex-col space-y-4 p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
