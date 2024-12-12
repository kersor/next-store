import clsx from "clsx"
import { LucideIcon, LucideProps } from "lucide-react"
import React, { PropsWithChildren } from "react"

interface Props {
    classNameInput?: string
    classNameBox?: string
    type?: string
    placeholder?: string
    onChangeHandler: (value: string) => void
    value: string
    icon?: React.ElementType
}

export const InputCustom = ({
    classNameInput,
    classNameBox,
    type = "text",
    placeholder = "",
    onChangeHandler,
    value,
    icon: Icon,
    children
}: PropsWithChildren<Props>) => {
    return (
        <div className={clsx("flex items-center w-full", classNameBox)}>
            {Icon && <Icon width='18'strokeWidth='1' />}
            <input 
                type={type}
                className={clsx("w-full outline-0", classNameInput)}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChangeHandler(e.target.value)}
            />
            { children }
        </div>
    )
}