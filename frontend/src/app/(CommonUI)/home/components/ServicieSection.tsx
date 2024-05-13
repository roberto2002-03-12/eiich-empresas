import { Typography } from "@/components/Typography"
import { Container } from "@/components/ui/Container"
import { ServiceCard } from "./ServicieCard"
import { HiMiniWrenchScrewdriver } from "react-icons/hi2"
import { FaCalendarDays, FaCoins, FaComputer, FaPeopleGroup, FaRankingStar } from "react-icons/fa6"

export const ServicesSection = () => {
	return (
		<section className="py-12 text-center text-jacksons-purple-900">
			<Container>
				<Typography>
					Todos los servicios que necesitas para mejorar tu empresa, están aquí
				</Typography>
				<div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-12">
					<ServiceCard
						title="Servicios Profesionales y Consultoría"
						icon={<FaRankingStar className="w-[80px] h-[80px]" />}
						content="We implement a reliable network. A reliable network is important for a small business because it helps keep."
					></ServiceCard>
					<ServiceCard
						title="Servicios Técnicos y Mantenimiento"
						icon={<HiMiniWrenchScrewdriver className="w-[80px] h-[80px]" />}
						content="We implement a reliable network. A reliable network is important for a small business because it helps keep."
					></ServiceCard>
					<ServiceCard
						title="Tecnología y Desarrollo Web"
						icon={<FaComputer className="w-[80px] h-[80px]" />}
						content="We implement a reliable network. A reliable network is important for a small business because it helps keep."
					></ServiceCard>
					<ServiceCard
						title="Financieros"
						icon={<FaCoins className="w-[80px] h-[80px]" />}
						content="We implement a reliable network. A reliable network is important for a small business because it helps keep."
					></ServiceCard>
					<ServiceCard
						title="Recursos Humanos y Empleo"
						icon={<FaPeopleGroup className="w-[80px] h-[80px]" />}
						content="We implement a reliable network. A reliable network is important for a small business because it helps keep."
					></ServiceCard>
					<ServiceCard
						title="Espacios para Eventos y Reuniones"
						icon={<FaCalendarDays className="w-[80px] h-[80px]" />}
						content="We implement a reliable network. A reliable network is important for a small business because it helps keep."
					></ServiceCard>
				</div>
			</Container>
		</section>
	)
}
