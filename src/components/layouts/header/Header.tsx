"use client"

import { Container } from "@/components/shared/container/Container"
import { menuItems } from "@/constants/menuItems"
import Link from "next/link"
import HeaderMenu from "./HeaderMenu"
import { InputCustom } from "@/components/ui/InputCustom"
import { useState } from "react"
import { ArrowLeft, Search, ShoppingBag, ShoppingBasket, User2, X } from "lucide-react"
import clsx from "clsx"

interface Props {
    className?: string
}

export default function Header ({
    className
}: Props) {
    const [productValue, setProductValue] = useState("")
    
    const funcCloseInput = () => {
        setProductValue("")
    }

    return (
        <div className="h-[60px]">
            <Container className="flex justify-between items-center h-full">
                <Link className="uppercase text-[30px] font-semibold" href="/">kersor</Link>

                <div className="flex items-center relative gap-10"> 
                    <HeaderMenu />
                    <InputCustom
                        classNameInput="w-[200px] text-[#707070] bg-[#f0f0f0]"
                        classNameBox='gap-[5px] bg-[#f0f0f0] px-[10px] py-[5px] rounded-[10px]'
                        placeholder="Поиск товара..."
                        onChangeHandler={(value: string) => setProductValue(value)}
                        value={productValue}
                    >
                        <button onClick={funcCloseInput}>{!!productValue.length ? <X strokeWidth={1} width={17} /> : <Search strokeWidth={1} width={17} />}</button>
                    </InputCustom>

                    <div className="flex items-center gap-2">
                        <Link href="/shoppingbag"><ShoppingBag strokeWidth={1} width={18} /></Link>
                        <Link href="/user"><User2 strokeWidth={1} width={18} /></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}