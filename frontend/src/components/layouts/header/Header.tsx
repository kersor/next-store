"use client"

import { Container } from "@/components/shared/container/Container"
import Link from "next/link"
import HeaderMenu from "./device/desktop/HeaderMenuDesktop"
import { InputCustom } from "@/components/ui/InputCustom"
import { useEffect, useState } from "react"
import { ArrowLeft, Search, ShoppingBag, ShoppingBasket, User2, X } from "lucide-react"
import clsx from "clsx"
import HeaderMenuDesktop from "./device/desktop/HeaderMenuDesktop"
import { HeaderDesktop } from "./device/desktop/HeaderDesktop"
import { HeaderMobile } from "./device/mobile/HeaderMobile"
import style from './style.module.scss'

interface Props {
    className?: string
}


export default function Header ({
    className
}: Props) {
    const [productValue, setProductValue] = useState("")

    return (
        <div className="h-[60px] relative w-full">
            <HeaderDesktop 
                className={style.d} 
                value={productValue} 
                setProductValue={setProductValue}
            /> 
            <HeaderMobile 
                className={style.m} 
                value={productValue} 
                setProductValue={setProductValue}
            />            
        </div>
    )
}