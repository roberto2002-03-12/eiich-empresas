import { Container } from "@/components/ui/Container"
import banner from "../../../../../public/bannerTienda.webp"

export const BannerStore = () => {
	return (
		<div className="object-cover h-[350px]">
			<div
				className="w-full h-full relative overflow-hidden object-cover"
				style={{
					backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${banner})`,
				}}
			>
				<div
					className="h-full left-0 w-full "
					style={{
						backgroundImage:
							"linear-gradient(-90deg, transparent 20%, rgb(38, 32, 132) 50%)",
					}}
				></div>
				<Container>
					<div
						className=" absolute leading-none  top-1/2 left-auto -translate-y-1/2 text-xl md:text-2xl lg:text-4xl drop-shadow-sm tracking-tight font-poppins font-bold"
						style={{ color: "rgb(250, 244, 255)" }}
					>
						Merch<br></br>{" "}
						<span style={{ color: "rgb(233, 208, 255)" }}>
							exclusivo<br></br>
						</span>{" "}
						Eiich{" "}
					</div>
				</Container>
			</div>
		</div>
	)
}
