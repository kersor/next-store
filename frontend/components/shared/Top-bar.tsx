import { cn } from "@/lib/utils"
import { Flex } from "./Flex"

import { SelectCustom } from "../ui/select-custom"
import { FILTER_BRANDS, FILTER_CATEGORY, FILTER_COLORS } from "@/config/filters.config"
  

interface ITopBar {
    className?: string
}

export function TopBar ({
    className
}: ITopBar) {
    return (
        <Flex className={cn("mt-[20px] gap-[10px]", className)}> 
            <SelectCustom 
                data={FILTER_CATEGORY.data}
                placeholder={FILTER_CATEGORY.placeholder}
            />
            <SelectCustom 
                data={FILTER_BRANDS.data}
                placeholder={FILTER_BRANDS.placeholder}
            />
            <SelectCustom 
                data={FILTER_COLORS.data}
                placeholder={FILTER_COLORS.placeholder}
            />
        </Flex>
    )
}