import { FC } from "react"
import c from "./button.module.css"

type ButtonProp = {
    children: string,
    type?: any,
}

export const Button: FC<ButtonProp> = ({ children, type }) => {
    return (
        <button type={type} className={c.btn}>{children}</button>
    )
}
