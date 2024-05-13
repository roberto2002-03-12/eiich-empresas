import { Typography } from "@/components/Typography"
import { Container } from "@/components/ui/Container"
import { FaPlay } from "react-icons/fa"

export const VideoSection = () => {
	return (
		<section className="bg-picton-blue-100 py-12">
			<Container>
				<div className="flex gap-10 items-center justify-center m-auto">
					<div className="bg-picton-blue-300 rounded-xl w-[800px] h-[500px] md:w-[2000px] md:h-[600px] flex items-center justify-center">
						<FaPlay className="text-8xl text-white" />
						{/* <video src="" className="aspect-video w-[550px]"></video> */}
					</div>
					<div>
						<Typography className="text-4xl">
							Generamos impacto real en la vida de millones de personas resolviendo
							retos
						</Typography>
					</div>
				</div>
			</Container>
		</section>
	)
}
