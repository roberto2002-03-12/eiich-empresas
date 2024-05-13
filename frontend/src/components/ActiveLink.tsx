"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props{
    path: string
    text: string
}

export const ActiveLink = ({ path, text }: Props) => {
    const pathName = usePathname()
    return (
        <Link 
            href={path}
        >
            <span className={` hover:text-white hover:bg-jacksons-purple-900 py-3 px-5 rounded-xl ${(pathName === path) && "bg-jacksons-purple-900 border-0 rounded-xl text-white"}`}>{text}</span>
        </Link>
    )
}
