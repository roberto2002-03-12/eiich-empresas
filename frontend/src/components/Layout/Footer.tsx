import { Container } from "@/components/ui/Container"
import Link from "next/link"
// import { FaPhoneAlt } from "react-icons/fa"
import { FaHeadphones } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { ComplaintsBook } from "../ComplaintsBook"
import Image from "next/image"
import logoCorporation from "../../../public/logoCorporation.webp"
export const Footer = () => {
	return (
		<footer className="bg-[#000] text-white text-sm mt-20">
			<Container>
				<div className="flex flex-col md:flex-row gap-12 justify-between py-12">
					<div>
						<Link href={"/"}>
							<Image src={logoCorporation} alt="logo" className="w-[110px]" />
						</Link>
					</div>
					<div>
						<h4 className="text-vividIndigo mb-3 text-[17px] font-semibold text-jacksons-purple-500">
							Acerca de Eiich
						</h4>
						<ul>
							<li className="mb-2 hover:text-vividIndigo transition-colors">
								<Link href="#">Términos y condiciones</Link>
							</li>
							<li className="mb-2 hover:text-vividIndigo transition-colors">
								<Link href="#">Políticas de privacidad</Link>
							</li>
							<li className="hover:text-vividIndigo transition-colors">
								<Link href="#">Preguntas frecuentes</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-vividIndigo mb-3 text-[17px] font-semibold text-jacksons-purple-500">
							Contáctanos
						</h4>
						<ul className="flex flex-col">
							<li className="flex flex-col gap-2 mb-2 transition-colors">
								<p className="flex gap-2 items-center">
									<FaHeadphones />
									Soporte
								</p>
								{/* <p className="flex gap-2 items-center">
									<FaPhoneAlt />
									999911282
								</p> */}
								<p className="flex gap-2 items-center">
									<MdEmail />
									informes@eiich.com
								</p>
							</li>
							<span className="text-[12px] font-semibold leading-4">
								Horario de atención
							</span>
							<span className="text-[11px] leading-3">Lunes a viernes</span>
							<span className="text-[11px] leading-4">9:00 AM - 6:00 PM</span>
						</ul>
					</div>
					<div>
						<Link href="/" className="flex flex-col md:items-center group">
							<ComplaintsBook
								className="fill-white group-hover:fill-vividIndigo transition-colors"
								secondColor="yellow"
								height={35}
								width={35}
							/>
							<span className="md:text-center group-hover:text-vividIndigo transition-colors">
								Libro de <br /> reclamaciones{" "}
							</span>
						</Link>
						<div className="mt-3">
							<p>FREIICORP S.A.C</p>
							<p>
								<span className="font-semibold">RUC:</span> 20612095192
							</p>
						</div>
					</div>
				</div>
				<hr className="border-none h-[1px] bg-vividIndigo/30" />
			</Container>
			{/* <div className="bg-[#1e1252] py-3">
				<Container>
					<p className="text-center">
						&copy; {new Date().getFullYear()} Eiich Empresas. Todos los derechos
						reservados.
					</p>
				</Container>
			</div> */}
		</footer>
	)
}
