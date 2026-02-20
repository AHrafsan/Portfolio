"use client"

import { useEffect, useRef } from "react"

export function BackgroundGradient() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event
            const x = Math.round((clientX / window.innerWidth) * 100)
            const y = Math.round((clientY / window.innerHeight) * 100)

            container.style.setProperty("--x", `${x}%`)
            container.style.setProperty("--y", `${y}%`)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-white dark:bg-black"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            <div className="absolute top-[-50%] left-[-50%] h-[200%] w-[200%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,rgba(120,119,198,0.1)_180deg,transparent_360deg)] opacity-30 blur-3xl dark:opacity-20" />
            <div className="absolute top-0 right-[-20%] h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[100px] dark:bg-indigo-500/10" />
            <div className="absolute bottom-0 left-[-20%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-500/10" />
        </div>
    )
}
