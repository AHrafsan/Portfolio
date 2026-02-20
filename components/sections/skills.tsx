"use client"

import { motion } from "framer-motion"
import { Badge } from "lucide-react"
// Note: We might want a custom Badge component or just styled divs.
// I'll use styled divs for badges to avoid dependency on a specific UI library's Badge if not strictly needed, 
// but since I have 'components/ui' I could make one. 
// For now, I'll just style them directly or use a simple functional component here.

const skills = {
    "WordPress Development": [
        "Theme Development",
        "Plugin Customization",
        "Elementor Pro",
        "WooCommerce",
        "Speed Optimization",
    ],
    "UI/UX Design": [
        "Figma",
        "Adobe XD",
        "Wireframing",
        "Prototyping",
        "User Research",

    ],
    "Front-End Development": [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
    ],
    "Backend & Tools": [
        "PHP (Basic)",
        "MySQL",
        "Git & GitHub",
        "VS Code",
    ]
}

export function Skills() {
    return (
        <section id="skills" className="container py-12 md:py-24 mx-auto px-4 md:px-6 bg-zinc-50 dark:bg-zinc-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                    <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                        A combination of technical expertise and creative design thinking.
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
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            className="rounded-xl border border-zinc-200 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/50"
                        >
                            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-0.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
