import { ReactNode } from "react"
import styles from "../styles/container.module.css"

interface Props {
	children: ReactNode
	className?: string
}

export const Container = ({ children, className = "" }: Props) => {
	return <div className={`${styles["e_container"]} mx-auto px-3 ${className}`}>{children}</div>
}
