import clsx from "clsx"
import { MobileSidebarDefault } from "../header/device/mobile/sidebar/MobileSidebarDefault"
import { PropsWithChildren } from "react"

interface Props {
    className?: string
    isVisibleSidebarMenu: boolean
}

export const Sidebar = ({
    className,
    isVisibleSidebarMenu,
    children
}: PropsWithChildren<Props>) => {

    const postion = isVisibleSidebarMenu
    ? "left-0 opacity-100 visible z-[100]"
    : "left-[-100%] opacity-0 invisible -z-[100]"

    return (
        <div className={clsx(
            "absolute top-0 w-[50%] h-screen bg-white border-l px-[15px] py-[20px] transition-all",
            postion,
            className)}
        >
            {children}
        </div>
    )
}