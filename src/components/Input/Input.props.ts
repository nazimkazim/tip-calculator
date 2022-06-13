import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label:string
    logoPath:string
}