import { useAtom } from "jotai"
import { euroAtom, usdAtom } from "../_atoms/currency"

export const priceFormat = (pricing) => {
    const [usd] = useAtom(usdAtom)
    const [eur] = useAtom(euroAtom)

    let price = pricing.price / 100
    price = price

    if(pricing.priceUnit === "dolar"){
        price = price*usd
    }

    if(pricing.priceUnit === "euro"){
        if(eur === null) return ""
        price = price*eur
    }

    // return (numberFormat(price.toFixed(2)) + " TL")
    return (numberFormat(Math.round(price)) + " TL")
}
   
export const numberFormat = number => {
    let format = ''
    if(number){
        format = number.toString();
    }

    return format.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}