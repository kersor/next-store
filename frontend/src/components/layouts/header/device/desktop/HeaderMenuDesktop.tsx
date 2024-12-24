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
                        </div>
                    </div>
                ))
            }
        </div>
    )
}