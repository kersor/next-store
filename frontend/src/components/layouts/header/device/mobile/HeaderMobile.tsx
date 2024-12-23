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
import { MobileSidebarCategories } from "./sidebar/MobileSidebarCategories"

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
    const [isVisibleHeaderSidebar, setIsVisibleHeaderSidebar] = useState({
        isVisibleSidebarMenu: false,
        isVisibleSearchProduct: false,
        isVisibleСategories: false
    })


    const funcSetIsVisibleSidebarMenu = () => {
        if(!isVisibleHeaderSidebar.isVisibleSidebarMenu) {
            setIsVisibleHeaderSidebar(prev => ({
                isVisibleSearchProduct: false,
                isVisibleSidebarMenu: true,
                isVisibleСategories: false
            }))
        }
        else {
            setIsVisibleHeaderSidebar(prev => ({
                isVisibleSearchProduct: false,
                isVisibleSidebarMenu: false,
                isVisibleСategories: false
            }))
        }
    }

    const funcSetIsVisibleSearchProduct = () => {
        if(!isVisibleHeaderSidebar.isVisibleSearchProduct) {
            setIsVisibleHeaderSidebar(prev => ({
                isVisibleSearchProduct: true,
                isVisibleSidebarMenu: false,
                isVisibleСategories: false
            }))
        }
        else {
            setIsVisibleHeaderSidebar(prev => ({
                isVisibleSearchProduct: false,
                isVisibleSidebarMenu: false,
                isVisibleСategories: false
            }))
        }
    }

    const funcSetIsVisibleCategories = () => {
        if(!isVisibleHeaderSidebar.isVisibleСategories) {
            setIsVisibleHeaderSidebar(prev => ({
                isVisibleSearchProduct: false,
                isVisibleSidebarMenu: false,
                isVisibleСategories: true
            }))
        }
        else {
            setIsVisibleHeaderSidebar(prev => ({
                isVisibleSearchProduct: false,
                isVisibleSidebarMenu: false,
                isVisibleСategories: false
            }))
        }
    }

    return (
        <>
            <Container className={clsx("flex items-center justify-between", className)}>
                <Link className="uppercase text-[30px] " href="/"><img src="/logo-name.svg" alt="Logo" /></Link>
                <div className="flex gap-5">
                    <button onClick={funcSetIsVisibleSearchProduct}><Search strokeWidth={2} width={20} /></button>
                    <Menu onClick={funcSetIsVisibleSidebarMenu} width={20} strokeWidth={2}/>
                </div>
            </Container>
            <Sidebar width="w-[50%]" funcSetIsVisibleSidebar={funcSetIsVisibleSidebarMenu} isVisibleSidebar={isVisibleHeaderSidebar.isVisibleSidebarMenu}  >
                <MobileSidebarDefault 
                    funcSetIsVisibleSidebarMenu={funcSetIsVisibleSidebarMenu} 
                    funcSetIsVisibleCategories={funcSetIsVisibleCategories}
                />
            </Sidebar>
            <SearchProduct isVisibleSearchProduct={isVisibleHeaderSidebar.isVisibleSearchProduct} setIsVisibleSearchProduct={funcSetIsVisibleSearchProduct} />
            <Sidebar width="w-[100%]" funcSetIsVisibleSidebar={funcSetIsVisibleCategories} isVisibleSidebar={isVisibleHeaderSidebar.isVisibleСategories}  >
                <MobileSidebarCategories 
                    funcSetIsVisibleCategories={funcSetIsVisibleCategories} 
                />
            </Sidebar>
        </>
    )
}