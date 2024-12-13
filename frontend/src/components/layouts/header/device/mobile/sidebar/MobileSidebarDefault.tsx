import { MENU_ITEMS_MOBILE } from "@/constants/menuItems"
import clsx from "clsx"
import { X } from "lucide-react"
import React from "react"

interface Props {
    className?: string
    isVisibleSidebarMenu: boolean
    funcSetIsVisibleSidebarMenu: () => void
}

export const MobileSidebarDefault = ({
    className,
    isVisibleSidebarMenu,
    funcSetIsVisibleSidebarMenu
}: Props) => {
    return (
        <div className={clsx("", className)}>
            <button onClick={funcSetIsVisibleSidebarMenu} className="w-[20px]">
                <X width={20} strokeWidth={2} />
            </button>
            

            <div className="flex flex-col mt-[50px] text-[#5d5d64]">
                {
                    MENU_ITEMS_MOBILE.map((item, index) => (
                        <div className={clsx("text-[18px] border-t py-[15px] pl-[5px]", MENU_ITEMS_MOBILE.length === ++index && "border-b")} key={item.name}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}