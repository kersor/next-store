import clsx from "clsx"
import { PropsWithChildren } from "react"

interface Props {
    className?: string
}

export const Container = ({
    className,
    children
}: PropsWithChildren<Props>) => {
    return (
        <div className={clsx("max-w-[1280px] px-[15px] mx-auto", className)}>{children}</div>
    )
} 