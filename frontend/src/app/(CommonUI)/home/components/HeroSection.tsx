import { Typography } from "@/components/Typography"
import { Container } from "@/components/ui/Container"
import Link from "next/link"

export const HeroSection = () => {
	return (
		<section className="bg-jacksons-purple-900 w-full h-screen text-white">
			<Container>
				<div className="flex flex-col justify-center text-left h-screen">
					<h1 className="z-[1] absolute indent-0 opacity-0">Eiich-empresas</h1>
					<Typography className="max-w-[600px]">
						Construyendo marcas, impulsando sueños: <br /> Tu socio integral para el
						éxito empresarial
					</Typography>
					<p className="mt-8 max-w-[600px]">
						We implement a reliable network. A reliable network is important for a small
						business because it helps keep the business well organized.
					</p>
					<div className="mt-10">
						<Link href={"/"} className="py-4 px-8 bg-picton-blue-500">
							Más información
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}
