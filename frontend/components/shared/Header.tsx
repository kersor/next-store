"use client"

import Link from "next/link";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { menu } from "@/config/menu.config";
import { Flex } from "./Flex";
import { Heart, Search, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";

import Profile from '@/public/icon/profile.svg'
import Bag from '@/../../public/icon/bag.svg'
import Favorite from '@/public/icon/favorite.svg'
import { Button } from "../ui/button";
import { useState } from "react";
import styles from './shared.module.scss'


interface IHeader {
    className?: string
}

export function Header ({
    className
}: IHeader) {
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")
    const funcSearch = () => {
        setActiveSearch(true)
    }

    return (
        <Container className="h-[42px] mt-[64px]">
            <Flex className="items-center justify-between">
                <Link className="text-[22px] uppercase" href="/">all once</Link>
                <Flex className="items-center gap-[30px]">
                    <Link href="/shop">Каталог</Link>
                    <Link href="/blog">Блог</Link>
                    <Link href="/about">О нас</Link>
                    <span className="w-[1px] h-[17px] bg-[#707070]"></span>
                    <Flex className={cn(styles.header_search, activeSearch ? styles.header_search_active : "")}>
                        <Search className={cn("cursor-pointer transition-all duration-500", activeSearch ? "opacity-0" : "opacity-100")} onClick={() => setActiveSearch(true)} size={20} strokeWidth={1} />
                        <Flex className={cn(styles.header_searchBody, activeSearch ? styles.header_searchBody_active : "")}>
                            <input disabled={!activeSearch} placeholder="Поиск..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                            <X cursor={'pointer'} onClick={() => setInputValue("")} size={20} strokeWidth={1} />
                            <Button  onClick={() => setActiveSearch(false)} className="text-[12px] ml-[5px]" size={"smal"}>Закрыть</Button>
                        </Flex>
                    </Flex>
                    <Link href="/bag">
                        <ShoppingBag size={20} strokeWidth={1} />
                    </Link>
                    <Link href="/bag">
                        <User size={20} strokeWidth={1} />
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}