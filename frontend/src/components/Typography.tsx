import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props {
	children: ReactNode
	className?: string
	text?: string
}

export const Typography = ({ children, text = "", className = "" }: Props) => {
	return <h2 className={twMerge("font-poppins font-bold text-5xl", text, className)}>{children}</h2>
}
