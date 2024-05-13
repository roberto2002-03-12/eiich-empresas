import { FC } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { BsShop } from "react-icons/bs"
import { IoTrophyOutline } from "react-icons/io5"
import { FaGg } from "react-icons/fa6"
import { FaAward } from "react-icons/fa"
import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import { Buttom } from "./ui/Buttom"

interface Props {
	isMovil?: boolean
}

export const NavLinks: FC<Props> = ({ isMovil = false }) => {
	const links = [
		{ id: "1", path: "/home", title: "Inicio", icon: <AiOutlineHome /> },
		{ id: "2", path: "/#", title: "Quiénes somos", icon: <FaGg /> },
		{ id: "3", path: "/tienda", title: "Tienda", icon: <IoTrophyOutline /> },
		{ id: "4", path: "/#", title: "Empleos", icon: <FaAward /> },
		{ id: "5", path: "/#", title: "Contacto", icon: <BsShop /> },
	]

	if (isMovil) {
		return (
			<ul className="flex flex-col gap-2 font-semibold text-sm list-none">
				{links.map(link => (
					<Link href={link.path} key={link.id}>
						{link.icon}
						<li className="px-4">{link.title}</li>
					</Link>
				))}
				<div className="h-[2px] bg-gray-200 mx-2"></div>

				<Buttom type="button" className="">
					Iniciar sesión
				</Buttom>
			</ul>
		)
	} else {
		return (
			<ul className="relative hidden lg:flex gap-7 font-semibold text-sm h-11 items-center list-none">
				{links.map(link => (
					<li key={link.id}>
						<ActiveLink path={link.path} text={link.title} />
					</li>
				))}
			</ul>
		)
	}
}
