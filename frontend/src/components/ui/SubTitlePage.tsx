import clsx from "clsx"

interface Props {
    className?: string
    title: string
}

export const SubTitlePage = ({
    className,
    title
}: Props) => {
    return (
        <div className={clsx("text-[23px] font-StolzlMedium", className)}>{title}</div>
    )
}