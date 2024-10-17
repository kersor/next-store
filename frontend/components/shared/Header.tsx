import Link from "next/link";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { menu } from "@/config/menu.config";
import { Flex } from "./Flex";
import { Heart, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

import Profile from '@/public/icon/profile.svg'
import Bag from '@/public/icon/bag.png'
import Favorite from '@/public/icon/favorite.svg'


interface IHeader {
    className?: string
}

export function Header ({
    className
}: IHeader) {
    return (
        <header className={cn("absolute w-full z-10 bg-[#FFF]", className)} >
            <Container className="flex items-center justify-between h-[90px]">
                <Flex className="items-center gap-[30px]">
                    {menu.map(item => 
                        <Link 
                            key={item.link}
                            className={cn("text-[14px]", item.main && "uppercase text-[20px] font-bold mr-[50px]")} 
                            href={item.link}
                        >
                            {item.title}
                        </Link>
                    )}
                </Flex>
                <Flex className="gap-[8px]">
                    <Link className="relative" href="/favorites">
                        <Heart size={20} strokeWidth={1.2} />
                        <Flex className="absolute w-[15px] h-[15px] top-[-5px] right-[-5px] text-[12px] rounded-[50%] border border-[#000] bg-[#ffffff] justify-center items-center">0</Flex>
                    </Link>
                    <Link className="relative" href="/bag">
                        <ShoppingBag size={20} strokeWidth={1.2} />
                        <Flex className="absolute w-[15px] h-[15px] top-[-5px] right-[-5px] text-[12px] rounded-[50%] border border-[#000] bg-[#ffffff] justify-center items-center">0</Flex>
                    </Link>
                    <Link className="relative" href="/profile">
                        <User size={20} strokeWidth={1.2} />
                    </Link>
                </Flex>
            </Container>
        </header>
    )
}