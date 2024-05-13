import { Typography } from "@/components/Typography"
import { RiMenu3Line, RiSearchLine } from "react-icons/ri"

export const FiltersStore = () => {
	return (
		<div>
			<div className="text-center my-12">
				<Typography>Productos populares</Typography>

				<div className="flex justify-between gap-20 my-8">
					<div className="bg-[#EBEBEB] text-black/90 rounded-lg flex justify-between items-center gap-4 ">
						<input
							className="bg-[#EBEBEB] ml-4 w-full h-10 outline-none focus:outline-none placeholder:text-black/80"
							placeholder="Buscar..."
						/>
						<RiSearchLine className="text-2xl font-semibold mr-3" />
					</div>
					<RiMenu3Line className="text-4xl font-bold cursor-pointer" />
				</div>
			</div>
		</div>
	)
}
