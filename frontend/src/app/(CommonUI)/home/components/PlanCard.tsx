import { Buttom } from "@/components/ui/Buttom"

interface Props {
	name: string
	price: string
	content: string
}

export const PlanCard = ({ name, price, content }: Props) => {
	return (
		<div>
			<div>
				<h3 className="text-3xl py-8 px-12 bg-jacksons-purple-900 text-white font-poppins font-semibold">
					{name}
				</h3>
			</div>
			<div className="px-4 md:px-20 pt-8 pb-16 bg-picton-blue-100">
				<p className="text-3xl font-poppins font-semibold text-jacksons-purple-600">{`$ ${price} dólares`}</p>
				<p className="my-8 text-black text-justify">{content}</p>
				<Buttom>Adquirir plan</Buttom>
			</div>
		</div>
	)
}
