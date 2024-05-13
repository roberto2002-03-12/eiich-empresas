import { NavLinks } from "@/components/NavLinks"
import { Container } from "@/components/ui/Container"
// import { FaUserCircle } from "react-icons/fa"
import Link from "next/link"
import logo from "../../../public/logoCompletoCorporation.webp"
import Image from "next/image"
import { FaCartShopping } from "react-icons/fa6"
import { Hamburger } from "./components/Hamburger"

export const NavBar = () => {
	return (
		<header
			className={`fixed w-full z-[999] top-0 left-0 ${"bg-transparent"}  lg:overflow-hidden bg-white`}
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
							<button className="relative focus:outline-none">
								<div className="absolute flex justify-center items-center rounded-full bg-chetwode-blue-600 text-white w-[19px] lg:w-[22px] text-[11px] lg:text-[13px] -top-[10px] lg:-top-3 -right-3 lg:-right-3 z- mx-auto border border-white">
									{1}
								</div>
								<FaCartShopping className="text-2xl fill-jacksons-purple-900" />
							</button>
							<button type="button" className="hidden lg:block px-6 py-3">
								Cerrar sesion
							</button>
						</div>
						<Hamburger isOpened={false} />
					</div>
				</nav>
			</Container>
		</header>
	)
}
