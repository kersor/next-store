import { Container } from "@/components/shared/container/Container"
import { NAVIGATION_ITEM } from "@/constants/navigation"
import clsx from "clsx"

interface Props {
    className?: string
}

export const BottomNavigation = ({
    className
}: Props) => {
    return (
        <div style={{boxShadow: "0 -2px 8px #00000026"}} className={clsx("fixed w-full h-[70px] bottom-0 left-0 border-t shadow-lg shadow-black-500/50", className)}>
            <Container className="flex items-center justify-around h-full text-[14px]">
                {NAVIGATION_ITEM.map(item => (
                    <div className="flex flex-col items-center">
                        <item.icon size={20} strokeWidth={1.8} />
                        <div>{item.name}</div>
                    </div>
                ))}
            </Container>
        </div>
    )
}