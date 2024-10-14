import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface ISelectCustom {
    className?: string,
    data: any
}

export function SelectCustom ({
    className,
    data
}: ISelectCustom) {
    return (
        <div className={cn("", className)}>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Тип" />
                </SelectTrigger>
                <SelectContent>
                    {
                        data.map((item: any) => <SelectItem value={item.value}>{item.title}</SelectItem>)
                    }
                </SelectContent>
            </Select>
        </div>
    )
}