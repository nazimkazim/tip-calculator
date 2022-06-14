import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label:string
    logoPath:string
    setValue:Dispatch<SetStateAction<number>>
}