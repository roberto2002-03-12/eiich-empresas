import { ReactNode } from "react"

interface Props {
	children: ReactNode
	className?: string
}

export const Container = ({ children, className = "" }: Props) => {
	return <div className={`mx-auto px-3 ${className}`}>{children}</div>
}