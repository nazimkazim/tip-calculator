import { ReactNode } from "react";

export interface TypographyProps {
    children: ReactNode
    tag: 'big' | 'normal'
    color?: 'white' | 'gray'
    spacing?: boolean
    bolded?: boolean
}