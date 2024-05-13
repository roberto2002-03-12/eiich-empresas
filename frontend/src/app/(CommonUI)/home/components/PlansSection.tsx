import { Typography } from "@/components/Typography"
import { Container } from "@/components/ui/Container"
import { PlanCard } from "./PlanCard"

export const PlansSection = () => {
	return (
		<section className="py-12 text-center text-jacksons-purple-900">
			<Container>
				<Typography>¡Empieza ya! Escoge tu plan</Typography>
				<div className="mt-10 grid md:grid-cols-2 gap-4 md:gap-28">
					<PlanCard
						name="Plan Mensual"
						price="50"
						content="-We implement a reliable network. A reliable network is important for a small business because it helps keep the.-We implement a reliable network. A reliable network is important for a small business because it helps keep the.-We implement a reliable network. A reliable network is important for a small business because it helps keep the"
					></PlanCard>
					<PlanCard
						name="Plan Anual"
						price="500"
						content="-We implement a reliable network. A reliable network is important for a small business because it helps keep the.-We implement a reliable network. A reliable network is important for a small business because it helps keep the.-We implement a reliable network. A reliable network is important for a small business because it helps keep the"
					></PlanCard>
				</div>
			</Container>
		</section>
	)
}
