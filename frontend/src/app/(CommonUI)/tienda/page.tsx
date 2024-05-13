import { Container } from "@/components/ui/Container"
import { BannerStore } from "./components/BannerStore"
import { FiltersStore } from "./components/FiltersStore"
import { ProductCard } from "./components/ProductCard"

export default function page() {
	return (
		<div>
			<BannerStore></BannerStore>
			<Container>
				<FiltersStore></FiltersStore>
				<div className="relative grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6">
					<ProductCard></ProductCard>
					<ProductCard></ProductCard>
					<ProductCard></ProductCard>
                    <ProductCard></ProductCard>
				</div>
			</Container>
		</div>
	)
}
