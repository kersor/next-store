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
    data: any,
    placeholder: string
}

export function SelectCustom ({
    className,
    data,
    placeholder
}: ISelectCustom) {
    return (
        <div className={cn("", className)}>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {
                        data.map((item: any) => <SelectItem key={item.value} value={item.value}>{item.title}</SelectItem>)
                    }
                </SelectContent>
            </Select>
        </div>
    )
}