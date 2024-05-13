interface Props {
	title: string
	icon: React.ReactNode
	content: string
}

export const ServiceCard = ({ title, icon, content }: Props) => {
	return (
		<div className="border border-solid border-jacksons-purple-900 py-6 px-16 flex flex-col justify-center items-center rounded-xl">
			<p className="font-extrabold texdt-2xl ">{title}</p>
			<div className="my-4">{icon}</div>
			<p className="text-xs md:text-sm">{content}</p>
		</div>
	)
}
