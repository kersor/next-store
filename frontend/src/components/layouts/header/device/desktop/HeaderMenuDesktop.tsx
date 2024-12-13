"use client"

import { Container } from "@/components/shared/container/Container"
import { MENU_ITEMS_DESKTOP } from "@/constants/menuItems"
import { IMenuItem, IMenuItemsChildren } from "@/types/menuItems.types"
import clsx from "clsx"
import { ChevronUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Props {
    className?: string
}

export default function HeaderMenuDesktop ({
    className
}: Props) {
    const [isActiveMenuChildren, setIsActiveMenuChildren] = useState(false)
    const router = useRouter()

    const funcPushLink = (item: IMenuItem) => {
        if(!item.children?.length) router.push(`/${item.link}`)
        else setIsActiveMenuChildren(prev => !prev)
    }
    
    const funcPushSubLink = (link: string) => {
        router.push(link)
    }

    return (
        <div className="flex gap-7">
            {
                MENU_ITEMS_DESKTOP.map(item => (
                    <div onClick={() => funcPushLink(item)} key={item.name} className="relative">
                        <div className="flex gap-1 items-center cursor-pointer">
                            <span>{item.name}</span>
                            {!!item.children?.length && <ChevronUp className={clsx("transition-all duration-300", isActiveMenuChildren && 'rotate-180')} width={15} strokeWidth={1}/>}
                        </div>
                        {
                            !!item.children &&
                            <div 
                            className={clsx(
                                "absolute left-[-110%] translate-x-[50%] min-w-full mt-[40px] transition-all duration-300 top-0", 
                                isActiveMenuChildren 
                                ? "translate-y-[0%] opacity-100 z-[1] visible" 
                                : "translate-y-[-50%] opacity-0 -z-[100] invisible"
                            )}>
                                {
                                    item.children.map(subitem => (
                                        <div onClick={() => funcPushSubLink(`/${subitem.link}`)} key={subitem.link} className={clsx("min-w-full cursor-pointer mb-[5px] transition-all", "hover:translate-x-[10px]")}>{subitem.name}</div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}