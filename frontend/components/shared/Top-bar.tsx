import { cn } from "@/lib/utils"
import { Flex } from "./Flex"

import { SelectCustom } from "../ui/select-custom"
import { FILTER_BRANDS, FILTER_CATEGORY, FILTER_COLORS } from "@/config/filters.config"
import { useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"
  

interface ITopBar {
    className?: string
}

export function TopBar ({
    className
}: ITopBar) {
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const data = FILTER_CATEGORY.data.slice(0, 5)
    
    return (
        <Flex className={cn("mt-[20px] gap-[10px] justify-between", className)}> 
          <Flex 
            className="gap-[5px] items-center">
            {
              data.map((item, index) => (
                <Button
                    key={item.value}
                    onClick={() => setActiveCategory(index)} 
                    variant="outline" 
                    size="smal" 
                    className={cn("rounded-[50px] text-[12px] ", activeCategory === index ? "bg-[#000] text-[#FFF]" : "")}
                  >
                  {item.title}
                </Button>
              ))
            }
          </Flex>
          <Link className="relative after:absolute after:bottom-[0] after:left-[50%] after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-none hover:after:bg-[#000]" href="/shop">Смотреть все</Link>
        </Flex>
    )
}