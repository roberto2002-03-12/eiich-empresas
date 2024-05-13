interface Props{
    isOpened: boolean
}

export const Hamburger = ({ isOpened = false }:Props) => {
	return (
		<button
			className={`relative h-4 ${
				isOpened ? "" : ""
			} mt-2 flex flex-col gap-1 justify-center items-center lg:hidden aspect-square transition-all`}
			id="hamburger"
		>
			<span
				className={`${
					isOpened && "rotate-[45deg] w-[16.5px]"
				} origin-left bg-jacksons-purple-900 block w-4 h-[2px] rounded-full transition-transform`}
			></span>
			<span
				className={`bg-jacksons-purple-900 block ${
					isOpened ? "w-[1px] mr-[9px]" : "w-full"
				} h-[2px] rounded-full mx-auto transition-all`}
			></span>
			<span
				className={`${
					isOpened && "-rotate-[45deg] w-[16.5px]"
				}  origin-left bg-jacksons-purple-900 block w-4 h-[2px] rounded-full transition-transform`}
			></span>
		</button>
	)
}
