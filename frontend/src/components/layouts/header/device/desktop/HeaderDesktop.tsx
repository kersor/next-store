import { Container } from "@/components/shared/container/Container"
import Link from "next/link"
import { InputCustom } from "@/components/ui/InputCustom"
import { useState } from "react"
import { ArrowLeft, Search, ShoppingBag, ShoppingBasket, User2, X } from "lucide-react"
import clsx from "clsx"
import HeaderMenuDesktop from "./HeaderMenuDesktop"
import { InputSearch } from "../../inputSearch"


interface Props {
    className?: string
    setProductValue: (value: string) => void
    value: string
}

export const HeaderDesktop = ({
    className,
    setProductValue,
    value
}: Props) => {


    return (
        <Container className={clsx("flex justify-between items-center text-[14px] ", className)}>
            <Link className="uppercase text-[30px] " href="/"><img src="/logo-name.svg" alt="Logo" /></Link>

            <div className="flex items-center relative gap-10"> 
                <HeaderMenuDesktop />
                <InputSearch 
                    setValue={(val: string) => setProductValue(val)}
                    value={value}
                    placeholder="Поиск товара..."
                />

                <div className="flex items-center gap-2">
                    <Link href="/shoppingbag"><ShoppingBag strokeWidth={1} width={18} /></Link>
                    <Link href="/user"><User2 strokeWidth={1} width={18} /></Link>
                </div>
            </div>
        </Container>
    )
}