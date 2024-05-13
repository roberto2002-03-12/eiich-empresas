import { FC } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { BsShop } from "react-icons/bs"
import { IoTrophyOutline } from "react-icons/io5"
import { FaGg } from "react-icons/fa6"
import { FaAward } from "react-icons/fa"
import Link from "next/link"

interface Props {
	isMovil?: boolean
}

export const NavLinks: FC<Props> = ({ isMovil = false }) => {

	const links =
            [
				{ id: "1", path: "/", title: "Inicio", icon: <AiOutlineHome /> },
				{ id: "2", path: "/beneficios", title: "Beneficios", icon: <FaGg /> },
				{ id: "3", path: "/premios", title: "Premios", icon: <IoTrophyOutline /> },
				{ id: "4", path: "/ganadores", title: "Ganadores", icon: <FaAward /> },
				{ id: "5", path: "/tienda", title: "Tienda", icon: <BsShop /> },
			]

	if (isMovil) {
		return (
			<ul className="flex flex-col gap-2 font-semibold text-sm">
				{links.map(link => (
					<Link
						href={link.path}
						key={link.id}
					>
						{link.icon}
						<li className="px-4">{link.title}</li>
					</Link>
				))}
				<div className="h-[2px] bg-gray-200 mx-2"></div>
				
                <Link href="/iniciar-sesion" className="" key="logout">
                    <li className="px-2">Iniciar sesión</li>
                </Link>
			</ul>
		)
	} else {
		return (
			<u
				className="relative hidden lg:flex gap-7 font-semibold text-sm h-11 items-center"
			>
				{links.map(link => (
					<li key={link.id}>
						<Link
							href={link.path}
							className={"relative cursor-pointer hover:text-vividIndigo p-1"}
						>
							<span className="relative z-10">{link.title}</span>
						</Link>
					</li>
				))}
			</u>
		)
	}
}