import { Dispatch, SetStateAction } from "react"

export interface TipProps {
    tipNumber:number | string
    setTip?:Dispatch<SetStateAction<number>>
    tip?:number
    customTipEnabled?:boolean
    setCustomTip?:Dispatch<SetStateAction<number>>
}