import { Buttom } from "@/components/ui/Buttom"
import Image from "next/image"

export const ProductCard = () => {
	return (
		<div className="text-center">
			<Image
				src={
					"https://res.cloudinary.com/dao54tzzc/image/upload/v1715178604/media/1715178603941_gorro_vz4oct.webp"
				}
				alt="gorro"
				width={0}
				height={0}
                sizes="100vw"
				style={{ width: "100%", height: "auto" }}
				className=""
			></Image>
			<p className="my-4 text-xl font-semibold">Gorro</p>
			<p className="mb-4">Gorro de lona, ideal para protegerte del sol con estilo. </p>
			<Buttom className="w-full">$ 3.99</Buttom>
		</div>
	)
}
