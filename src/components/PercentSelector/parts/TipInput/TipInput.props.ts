import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface TipInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    setCustomTip:Dispatch<SetStateAction<number>>
}