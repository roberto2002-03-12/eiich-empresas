import { Footer } from "@/components/Layout/Footer"
import { NavBar } from "@/components/Layout/NavBar"

export default function CommonLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<NavBar/>
			<div className="mt-16">
				{children}
			</div>
			<Footer />
		</div>
	)
}
