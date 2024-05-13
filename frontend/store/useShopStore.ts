import { create }  from "zustand"
import { Product } from "../types/shop/shop.types"
import { getItem, setItem } from "../utils/localStorage"

interface TotalPrice {
    subTotal: number
    discount: number
    totalAmount: number
}

interface shopStore {
    products: Product[]
    product: Product | null
    loading: boolean
    isOpen: boolean
    totalPrice: TotalPrice
    carShop: Product[] | []
    UpdateTotalPrice: (subTotal: number, discount: number,totalAmount:number) => void
    openShopCar: (statebtn: boolean) => void
    removeProduct: (index: number) => void
    plusProductQuantity: (id: string) => void //add
    minusProductQuantity: (id: string) => void //remove
    cleanShopCar: () => void //removeAll

}

export const useShopStore = create<shopStore>((set, get)=> ({
    products: [],
    product: null,
    loading: false,
    isOpen: false,
    carShop: getItem("carShop") || [],
    totalPrice: { subTotal: 0, discount: 0, totalAmount: 0 },
    UpdateTotalPrice: (subTotal, discount, totalAmount) => {
        set({
            totalPrice: {
                subTotal,
                discount,
                totalAmount
            },
        })},
    openShopCar: statebtn => {
        set({ isOpen: statebtn })
    },
    removeProduct: index => {
		const updatedCarShop = get().carShop.filter((_, i) => i !== index)
		set({ carShop: updatedCarShop })
		setItem("carShop", updatedCarShop)
	},
    plusProductQuantity: (id: string) => {
		const currentProducts = get().carShop
		const product = currentProducts.find(item => item.id === id)
		const price = product && product.quantity && product?.price / product?.quantity
		const plusProducts = currentProducts?.map(item => {
			if (item.id === id && item.quantity && price) {
				item.quantity += 1
				item.price = price * item.quantity
			}
			return item
		})
		set({ carShop: plusProducts })
		setItem("carShop", plusProducts)
	},
    minusProductQuantity: (id: string) => {
		const currentProducts = get().carShop
		const product = currentProducts.find(item => item.id === id)
		const price = product && product.quantity && product?.price / product?.quantity
		const plusProducts = currentProducts?.map(item => {
			if (item.id === id && item.quantity && price) {
				item.quantity -= 1
				item.price = price * item.quantity
			}
			return item
		})
		set({ carShop: plusProducts })
		setItem("carShop", plusProducts)
	},
    cleanShopCar: () => {
		set({ carShop: [] })
		setItem("carShop", [])
	},
    }))
