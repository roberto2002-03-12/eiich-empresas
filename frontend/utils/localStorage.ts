import { Product } from "../types/shop/shop.types"

export const getItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key)!)
}

export const setItem = (key: string, data: Product[]) => {
	return localStorage.setItem(key, JSON.stringify(data))
}
