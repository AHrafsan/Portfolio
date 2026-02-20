"use client"

import { motion } from "framer-motion"
import { Code, Layout, Smartphone, Search } from "lucide-react"

const services = [
    {
        title: "WordPress Development",
        description: "Custom theme development, plugin customization, and performance optimization.",
        icon: Code,
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing user interfaces using Figma and Adobe XD.",
        icon: Layout,
    },
    {
        title: "Responsive Web Design",
        description: "Ensuring your website looks amazing and functions perfectly on all devices.",
        icon: Smartphone,
    },
    {
        title: "Website Redesign",
        description: "Giving your existing website a modern facelift and improved user experience.",
        icon: Search,
    },
]

export function Services() {
    return (
        <section id="services" className="container py-12 md:py-24 mx-auto px-4 md:px-6 bg-zinc-50 dark:bg-zinc-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services</h2>
                    <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                        What I can do for you.
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
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            className="group rounded-xl border border-zinc-200 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/50"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">{service.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
