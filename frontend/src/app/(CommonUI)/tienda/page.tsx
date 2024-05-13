import { Container } from "@/components/ui/Container"
import { BannerStore } from "./components/BannerStore"
import { FiltersStore } from "./components/FiltersStore"
import { ProductCard } from "./components/ProductCard"

import { products } from "@/app/(CommonUI)/tienda/mockProducts"

export default function page() {
	return (
		<div>
			<BannerStore></BannerStore>
			<Container>
				<FiltersStore></FiltersStore>
				<div className="relative grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6">
					{products.length > 0 ? (
						products.map(product => <ProductCard key={product.id} product={product} />)
					) : (
						<h3>No hay productos disponibles.</h3>
					)}
				</div>
			</Container>
		</div>
	)
}
