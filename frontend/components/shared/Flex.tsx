import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

interface IFlex extends PropsWithChildren {
    className?: string
}

export function Flex ({
    className,
    children
}: IFlex) {
    return (
        <div className={cn("flex", className)}>
            {children}
        </div>
    )
}