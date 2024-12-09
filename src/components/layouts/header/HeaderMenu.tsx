"use client"

import { Container } from "@/components/shared/container/Container"
import { menuItems } from "@/constants/menuItems"
import { IMenuItem } from "@/types/menuItems.types"
import clsx from "clsx"
import { ChevronUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
    className?: string
}

export default function HeaderMenu ({
    className
}: Props) {
    const [isActiveMenuChildren, setIsActiveMenuChildren] = useState(false)
    const {push} = useRouter()

    const funcPushLink = (item: IMenuItem) => {
        if(!item.children?.length) push(item.link)
        else setIsActiveMenuChildren(prev => !prev)
    }

    return (
        <div className="flex gap-5">
            {
                menuItems.map(item => (
                    <div onClick={() => funcPushLink(item)} key={item.name} className="flex gap-1 items-center cursor-pointer">
                        <span>{item.name}</span>
                        {!!item.children?.length && <ChevronUp className={clsx("transition-all duration-300", isActiveMenuChildren && 'rotate-180')} size={20} strokeWidth={1}/>}
                    </div>
                ))
            }
        </div>
    )
}