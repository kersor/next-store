import { MENU_ITEMS_MOBILE } from "@/constants/menuItems"
import clsx from "clsx"
import { ChevronDown, X } from "lucide-react"
import React from "react"

interface Props {
    className?: string
    funcSetIsVisibleSidebarMenu: () => void
    funcSetIsVisibleCategories: () => void
}

export const MobileSidebarDefault = ({
    className,
    funcSetIsVisibleSidebarMenu,
    funcSetIsVisibleCategories
}: Props) => {
    const funcOnClickSidebarLink = (item: any) => {
        if(item.name === 'Категории') funcSetIsVisibleCategories()
    }
    
    return (
        <div className={clsx("px-[15px]", className)}>
            <div className="flex justify-end">
                <button onClick={funcSetIsVisibleSidebarMenu} className="w-[20px]">
                    <X width={20} strokeWidth={2} />
                </button>
            </div>

            <div className="mt-10">
                <div className="flex flex-col text-[#5d5d64]">
                    {
                        MENU_ITEMS_MOBILE.map((item, index) => (
                            <div onClick={() => funcOnClickSidebarLink(item)} className={clsx("border-t py-[15px] pl-[5px] text-[17px]", MENU_ITEMS_MOBILE.length === ++index && "border-b")} key={item.name}>{item.name}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}