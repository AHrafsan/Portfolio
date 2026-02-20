export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 bg-white py-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} Abu Hasan. All rights reserved.
                </p>

            </div>
        </footer>
    )
}
