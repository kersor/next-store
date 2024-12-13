import { Container } from "@/components/shared/container/Container"
import { InputCustom } from "@/components/ui/InputCustom"
import clsx from "clsx"
import { Menu, Search, ShoppingBag, User2, X } from "lucide-react"
import Link from "next/link"
import { InputSearch } from "../../inputSearch"
import { useState } from "react"
import { Sidebar } from "@/components/layouts/sidebar/Sidebar"
import { MobileSidebarDefault } from "./sidebar/MobileSidebarDefault"
import { SearchProduct } from "./SearchProduct"

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
    const [isVisibleSearchProduct, setIsVisibleSearchProduct] = useState(false)

    const funcSetIsVisibleSidebarMenu = () => {
        setIsVisibleSidebarMenu(prev => !prev)
    }

    const funcSetIsVisibleSearchProduct = () => {
        setIsVisibleSearchProduct(prev => !prev)
    }

    return (
        <>
            <Container className={clsx("flex items-center justify-between", className)}>
                <Menu onClick={funcSetIsVisibleSidebarMenu} width={20} strokeWidth={2}/>
                <Link className="uppercase text-[30px] font-semibold" href="/">kersor</Link>
                <button onClick={funcSetIsVisibleSearchProduct}><Search strokeWidth={2} width={20} /></button>
            </Container>
            <Sidebar funcSetIsVisibleSidebarMenu={funcSetIsVisibleSidebarMenu} isVisibleSidebarMenu={isVisibleSidebarMenu}  >
                <MobileSidebarDefault funcSetIsVisibleSidebarMenu={funcSetIsVisibleSidebarMenu} />
            </Sidebar>
            <SearchProduct isVisibleSearchProduct={isVisibleSearchProduct} setIsVisibleSearchProduct={funcSetIsVisibleSearchProduct} />
        </>
    )
}