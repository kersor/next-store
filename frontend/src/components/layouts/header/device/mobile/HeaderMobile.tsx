import { Container } from "@/components/shared/container/Container"
import { InputCustom } from "@/components/ui/InputCustom"
import clsx from "clsx"
import { Menu, Search, ShoppingBag, User2, X } from "lucide-react"
import Link from "next/link"
import { InputSearch } from "../../inputSearch"
import { MobileSidebarBody } from "./sidebar/MobileSidebarBody"
import { useState } from "react"

interface Props {
    className?: string
    setProductValue: (value: string) => void
    value: string
}

export const HeaderMobile = ({
    className,
    setProductValue,
    value
}: Props) => {
    const [isVisibleSidebarMenu, setIsVisibleSidebarMenu] = useState(false)

    const funcSetIsVisibleSidebarMenu = () => {
        setIsVisibleSidebarMenu(prev => !prev)
    }

    return (
        <>
            <Container className={clsx("flex items-center justify-between", className)}>
                <Menu onClick={funcSetIsVisibleSidebarMenu} width={20} strokeWidth={2}/>
                <Link className="uppercase text-[30px] font-semibold" href="/">kersor</Link>
                <button><Search strokeWidth={2} width={20} /></button>
                {/* <InputSearch setProductValue={setProductValue} value={value} /> */}
            </Container>
            <MobileSidebarBody 
                isVisibleSidebarMenu={isVisibleSidebarMenu}
                funcSetIsVisibleSidebarMenu={funcSetIsVisibleSidebarMenu}
            />
        </>
    )
}