import { NavLinks } from "@/components/NavLinks"
import { Container } from "@/components/ui/Container"
import { FaUserCircle } from "react-icons/fa"
import Link from "next/link"
import logo from "../../../public/logoCompletoCorporation.webp"
import Image from "next/image"

export const NavBar = () => {

	return (
		<header
			className={`fixed w-full z-[999] top-0 left-0 transition-all duration-300 ${"bg-transparent"} transform-style-preserve-3d lg:overflow-hidden`}
		>
			<Container>
				<nav className="relative flex items-center justify-between py-4 text-electric-violet-950">
					<div>
						<Link href={"/"}>
							<Image src={logo} alt="logo" className="w-[115px]" />
						</Link>
					</div>

					<NavLinks />
					<div className="flex gap-6">
						<div className="flex items-center gap-6">
							<Link href="/perfil" className="bg-transparent">
								<FaUserCircle size={30} className="fill-vividIndigo" />
							</Link>
							<button type="button" className="hidden lg:block px-6 py-3">
								Cerrar sesion
							</button>
						</div>
					</div>
				</nav>
			</Container>
		</header>
	)
}
