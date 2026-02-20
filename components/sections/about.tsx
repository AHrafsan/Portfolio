"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
    return (
        <section id="about" className="container py-12 md:py-24 mx-auto px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid gap-12 lg:grid-cols-2 items-center"
            >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 shadow-xl border border-zinc-200 dark:border-zinc-800">
                    <Image
                        src="/portfolio-img.png"
                        alt="Abu Hasan - WordPress Developer & UI Designer"
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                    <p className="text-zinc-500 md:text-lg dark:text-zinc-400">
                        I am a Computer Science and Engineering (CSE) student with a deep passion for web development and UI design.
                        My journey started with a curiosity for how websites work, which led me to master WordPress and front-end technologies.
                    </p>
                    <p className="text-zinc-500 md:text-lg dark:text-zinc-400">
                        I specialize in creating custom WordPress themes, designing intuitive user interfaces using Figma, and building
                        responsive websites with modern tools like React and Tailwind CSS.
                    </p>
                    <p className="text-zinc-500 md:text-lg dark:text-zinc-400">
                        When I&apos;m not coding, I&apos;m exploring the latest design trends or learning about new technologies to keep my skills sharp.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
