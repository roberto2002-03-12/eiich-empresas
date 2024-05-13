import type { Metadata } from "next"
import { nunito, poppins } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
	title: "Eiich",
	description: "Eiich-empresas: Contrata nuestros distintos servicios a bajo costo.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`${nunito.className} ${poppins.variable}`}>{children}</body>
		</html>
	)
}
