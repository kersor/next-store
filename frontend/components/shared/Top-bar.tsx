import { cn } from "@/lib/utils"
import { Flex } from "./Flex"

import { SelectCustom } from "../ui/select-custom"

export const DATA_TYPE = [
    {
        title: 'Телевизоры',
        value: '1'
    },
    {
        title: 'Аудио',
        value: '2'
    }
]
  

interface ITopBar {
    className?: string
}

export function TopBar ({
    className
}: ITopBar) {
    return (
        <Flex className={cn("mt-[20px]", className)}> 
            <SelectCustom 
                data={DATA_TYPE}
            />
        </Flex>
    )
}