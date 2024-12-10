import clsx from "clsx"

interface Props {
    className?: string
}

export const HeaderMenuMobile = ({
    className
}: Props) => {
    return (
        <div className={clsx("", className)}></div>
    )
}