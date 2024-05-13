import { Nunito, Poppins } from "next/font/google"

export const nunito = Nunito({
    subsets: ["latin"],
    weight: "600",
    variable: "--font-nunito"
})

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700", "800"], //700 (default) bold, 800 extrabold
    variable: "--font-poppins"
})