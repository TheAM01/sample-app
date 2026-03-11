"use client";


import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function Navigation() {
    const [hooksOpen, setHooksOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setHooksOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="w-full flex justify-center border-b">
            <div className="flex flex-1 justify-between w-full lg:max-w-7xl p-4">

                <div className="text-3xl font-mono">MYNEXTAPP</div>

                <div className="flex gap-3 items-center">
                    <Link href={"/"} className="text-foreground hover:underline p-2 duration-200">Home</Link>
                    {/* <Link href={"/profile"} className="text-foreground hover:underline p-2 duration-200">Profile</Link> */}
                    {/* <Link href={"/login"} className="text-foreground hover:underline p-2 duration-200">Login</Link> */}
                    {/* <Link href={"/example"} className="text-foreground hover:underline p-2 duration-200">Example</Link> */}
                    <Link href={"/users"} className="text-foreground hover:underline p-2 duration-200">Add a user to the database</Link>
                    <Link href={"/users/johndoe"} className="text-foreground hover:underline p-2 duration-200">John Doe</Link>

                    {/* Hooks Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setHooksOpen(!hooksOpen)}
                            className="flex items-center gap-1 text-foreground hover:underline p-2 duration-200"
                        >
                            React Hooks Examples
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${hooksOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {hooksOpen && (
                            <div className="absolute right-0 mt-1 w-40 bg-background border rounded-md shadow-md z-50">
                                {[
                                    { label: "useRef", href: "/ref" },
                                    { label: "useMemo", href: "/memo" },
                                    { label: "useCallback", href: "/callback" },
                                    { label: "useReducer", href: "/reducer" },
                                ].map(({ label, href }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setHooksOpen(false)}
                                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted duration-150"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}