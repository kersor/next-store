import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

interface IContainer extends PropsWithChildren{
    className?: string
}

export function Container ({
    className,
    children
}: IContainer) {
    return (
        <div className={cn("max-w-[1430px] px-[15px] mx-auto", className)}>{children}</div>
    )
}