"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A fully functional e-commerce site with cart, checkout, and payment integration.",
        image: "/E-commerce.png",
        tags: ["WooCommerce", "Elementor"],
        liveUrl: "https://demo1.designodev.com/",
        repoUrl: "#",
    },
    {
        title: "Custom Website",
        description: "A high-converting landing page for Ignite Lab focused on video content services.",
        image: "/ignitelab.png",
        tags: ["Elementor"],
        liveUrl: "https://ignitelabbd.com/",
        repoUrl: "#",
    },
    {
        title: "NGO Website",
        description: "A professional platform for an International NGO to showcase their mission, manage events, and facilitate community outreach.",
        image: "/Iasdle.png",
        tags: ["WordPress", "PHP", "MySQL"],
        liveUrl: "https://iasdle.com/",
        repoUrl: "#",
    },
]

export function Projects() {
    return (
        <section id="projects" className="container py-12 md:py-24 mx-auto px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                    <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                        Here are some of the projects I&apos;ve worked on.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white/50 shadow-sm backdrop-blur-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50"
                        >
                            <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                {/* Placeholder for project image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
                                <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">{project.description}</p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <Button asChild variant="outline" size="sm" className="w-full">
                                        <Link href={project.liveUrl} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="sm" className="w-full">
                                        <Link href={project.repoUrl} target="_blank">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
