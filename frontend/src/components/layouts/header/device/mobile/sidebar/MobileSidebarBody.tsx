import clsx from "clsx"
import { X } from "lucide-react"
import { MobileSidebarDefault } from "./MobileSidebarDefault"

interface Props {
    className?: string
    isVisibleSidebarMenu: boolean
    funcSetIsVisibleSidebarMenu: () => void
}

export const MobileSidebarBody = ({
    className,
    isVisibleSidebarMenu,
    funcSetIsVisibleSidebarMenu
}: Props) => {

    const postion = isVisibleSidebarMenu
    ? "left-0 opacity-100 visible z-[100]"
    : "left-[-100%] opacity-0 invisible -z-[100]"

    return (
        <div className={clsx(
            "absolute top-0 w-[50%] h-screen bg-white border-l px-[15px] py-[20px] transition-all",
            postion,
            className)}
        >
            <MobileSidebarDefault
                isVisibleSidebarMenu={isVisibleSidebarMenu}
                funcSetIsVisibleSidebarMenu={funcSetIsVisibleSidebarMenu}
            />
        </div>
    )
}