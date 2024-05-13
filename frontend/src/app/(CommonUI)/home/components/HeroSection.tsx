import { Typography } from "@/components/Typography"
import { Container } from "@/components/ui/Container"
import hero from "../../../../../public/hero.webp"
import { Buttom } from "@/components/ui/Buttom"

export const HeroSection = () => {
	return (
		<section
			className="bg-jacksons-purple-900 w-full h-[60vh] text-white"
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,), rgba(0,0,0,0.5)), url(${hero.src})`,
				backgroundColor: "#262084",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Container>
				<div className="flex flex-col justify-center text-left h-[60vh]">
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
						<Buttom className="bg-picton-blue-500 py-4 px-8">Más información</Buttom>
					</div>
				</div>
			</Container>
		</section>
	)
}
