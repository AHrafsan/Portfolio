"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center md:py-24 mx-auto px-4 md:px-6">
            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                >
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Hi, I&apos;m <span className="text-indigo-500">Abu Hasan </span>
                        <br />
                        <span className="text-gradient">
                            WordPress Developer & UI Designer
                        </span>
                    </h1>
                    <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                        A passionate Computer Science student building scalable websites and crafting intuitive user experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4"
                >
                    <Button asChild size="lg" className="gap-2">
                        <Link href="#projects">
                            View Projects <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2">
                        <Link href="#contact">
                            Contact Me
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Decorative Background Elements could go here */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </section>
    )
}
