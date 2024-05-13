import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import Link from "next/link"

interface Props {
	children: ReactNode
	className?: string
	href?: string
	type?: "submit" | "reset" | "button"
	onClick?: () => void
}

export const Buttom = ({ children, className = "", href = "#", type, onClick }: Props) => {
	if (!type) {
		return (
			<Link
				href={href}
				className={twMerge(
					"py-3 px-8 bg-jacksons-purple-900 text-white rounded-xl relative w-fit font-[600] text-base text-center inline-block",
					className,
				)}
			>
				{children}
			</Link>
		)
	} else {
		return (
			<button
				type={type}
				onClick={onClick}
				className={twMerge(
					"py-3 px-8 bg-jacksons-purple-900 text-white rounded-xl relative w-fit  font-medium text-base text-center inline-block",
					className,
				)}
			>
				{children}
			</button>
		)
	}
}
