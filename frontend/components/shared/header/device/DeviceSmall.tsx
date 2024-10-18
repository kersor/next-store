import Link from "next/link";
import { Flex } from "../../Flex";
import { SearchMenuBig, SearchMenuSmall } from "../SearchMenu";
import { Menu, ShoppingBag, User } from "lucide-react";
import { useState } from "react";

export function DeviceSmall () {
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")

    return (
        <Flex className="flex-col gap-[10px]">
            <Flex className="items-center justify-between">
                <Link className="text-[22px] uppercase" href="/">all once</Link>
                <Flex className="items-center gap-[10px]">
                    <Link href="/bag">
                        <ShoppingBag size={20} strokeWidth={1} />
                    </Link>
                    <Menu size={20} strokeWidth={1} />
                </Flex>
            </Flex>
            <SearchMenuSmall 
                activeSearch={activeSearch}
                setActiveSearch={setActiveSearch}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </Flex>
    )
}