import clsx from "clsx"
import { MobileSidebarDefault } from "../header/device/mobile/sidebar/MobileSidebarDefault"
import { PropsWithChildren } from "react"

interface Props {
    className?: string
    isVisibleSidebarMenu: boolean
    funcSetIsVisibleSidebarMenu: () => void
}

export const Sidebar = ({
    className,
    isVisibleSidebarMenu,
    children,
    funcSetIsVisibleSidebarMenu
}: PropsWithChildren<Props>) => {

    const funcOnClickNotSidebar = (e: any) => {
        if(e.target.dataset.id !== undefined) funcSetIsVisibleSidebarMenu()
    }

    const postionSidebar = isVisibleSidebarMenu
    ? "left-0 opacity-100 visible z-[100]"
    : "left-[-100%] opacity-0 invisible -z-[100]"

    const positionBody = isVisibleSidebarMenu
    ? "opacity-100 visible z-[100]"
    : "opacity-0 invisible -z-[100]"

    return (
        <div onClick={(e) => funcOnClickNotSidebar(e)} className={clsx(
            "absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.46)] transition-all duration-500",
            positionBody
        )} data-id={true}>
            <div className={clsx(
                "absolute top-0 w-[50%] h-screen bg-white border-l px-[15px] py-[20px] transition-all duration-500",
                postionSidebar,
                className)}
            >
                {children}
            </div>
        </div>
    )
}