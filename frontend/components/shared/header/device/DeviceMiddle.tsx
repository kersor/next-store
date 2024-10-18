import { Menu, ShoppingBag, User } from "lucide-react";
import { Flex } from "../../Flex";
import { SearchMenuMiddle } from "../SearchMenu";
import { useState } from "react";
import Link from "next/link";

export function DeviceMiddle () {
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")

    return (
        <Flex className="items-center justify-between">
            <Link className="text-[22px] uppercase" href="/">all once</Link>
            <Flex className="items-center gap-[10px]">
                <SearchMenuMiddle
                    activeSearch={activeSearch}
                    setActiveSearch={setActiveSearch}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <Link href="/bag">
                    <ShoppingBag size={20} strokeWidth={1} />
                </Link>
                <Menu size={20} strokeWidth={1} />
            </Flex>
        </Flex>
    )
}