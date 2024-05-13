import { Buttom } from "@/components/ui/Buttom"
import Image from "next/image"
import { Product } from "../../../../../types/shop/shop.types"

interface Props {
	product: Product
}

export const ProductCard = ({ product }: Props) => {
	return (
		<div className="text-center w-full">
			<Image
				src={product.imageProduct}
				alt="gorro"
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
				className=""
			></Image>
			<p className="my-4 text-xl font-semibold">{product.name}</p>
			<p className="mb-4 h-[70px]">{product.description}</p>
			<Buttom className="w-full">$ {product.price}</Buttom>
		</div>
	)
}
