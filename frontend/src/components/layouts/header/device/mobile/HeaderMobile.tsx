import { Container } from "@/components/shared/container/Container"
import { InputCustom } from "@/components/ui/InputCustom"
import clsx from "clsx"
import { Menu, Search, ShoppingBag, User2, X } from "lucide-react"
import Link from "next/link"
import { InputSearch } from "../../inputSearch"
import { useState } from "react"
import { Sidebar } from "@/components/layouts/sidebar/Sidebar"
import { MobileSidebarDefault } from "./MobileSidebarDefault"
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

    return (
        <>
            <Container className={clsx("flex items-center justify-between", className)}>
                <Link className="uppercase text-[30px] " href="/"><img src="/logo-name.svg" alt="Logo" /></Link>
                <div className="flex gap-5">
                    <button onClick={funcSetIsVisibleSearchProduct}><Search strokeWidth={2} width={20} /></button>
                    <Menu onClick={funcSetIsVisibleSidebarMenu} width={20} strokeWidth={2}/>
                </div>
            </Container>
            <Sidebar width="w-[75%] max-[600px]:w-full" funcSetIsVisibleSidebar={funcSetIsVisibleSidebarMenu} isVisibleSidebar={isVisibleHeaderSidebar.isVisibleSidebarMenu}  >
                <MobileSidebarDefault 
                    funcSetIsVisibleSidebarMenu={funcSetIsVisibleSidebarMenu} 

                />
            </Sidebar>
            <SearchProduct isVisibleSearchProduct={isVisibleHeaderSidebar.isVisibleSearchProduct} setIsVisibleSearchProduct={funcSetIsVisibleSearchProduct} />
        </>
    )
}