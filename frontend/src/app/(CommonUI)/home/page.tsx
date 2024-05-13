import { HeroSection } from "./components/HeroSection"
import { PlansSection } from "./components/PlansSection"
import { ServicesSection } from "./components/ServicieSection"
import { VideoSection } from "./components/VideoSection"

export default function page() {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<VideoSection />
			<PlansSection />
		</>
	)
}
