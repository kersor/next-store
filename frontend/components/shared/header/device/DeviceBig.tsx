import Link from "next/link";
import { Flex } from "../../Flex";
import { SearchMenuBig } from "../SearchMenu";
import { ShoppingBag, User } from "lucide-react";
import { useState } from "react";

export function DeviceBig () {
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")

    return (
        <Flex className="items-center justify-between">
            <Link className="text-[22px] uppercase" href="/">all once</Link>
            <Flex className="items-center gap-[30px]">
                <Link href="/shop">Каталог</Link>
                <Link href="/blog">Блог</Link>
                <Link href="/about">О нас</Link>
                <span className="w-[1px] h-[17px] bg-[#707070]"></span>
                <SearchMenuBig
                    activeSearch={activeSearch}
                    setActiveSearch={setActiveSearch}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <Link href="/bag">
                    <ShoppingBag size={20} strokeWidth={1} />
                </Link>
                <Link href="/profile">
                    <User size={20} strokeWidth={1} />
                </Link>
            </Flex>
        </Flex>
    )
}