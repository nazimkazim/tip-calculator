import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface PercentSelectorProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    setTip?:Dispatch<SetStateAction<number>>
    tip?:number
    setCustomTip?:Dispatch<SetStateAction<number>>
    customTipEnabled?:boolean
}