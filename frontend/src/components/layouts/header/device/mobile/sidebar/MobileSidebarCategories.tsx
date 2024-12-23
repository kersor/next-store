import { MENU_CATEGORIES } from "@/constants/menuItems"
import clsx from "clsx"
import { X } from "lucide-react"
import { PropsWithChildren, useState } from "react"
import { InputSearch } from "../../../inputSearch"

interface Props {
    className?: string,
    funcSetIsVisibleCategories: () => void
}

export const MobileSidebarCategories = ({
    className,
    funcSetIsVisibleCategories
}: Props) => {
    const [valueCategory, setValueCategory] = useState("")

    const funcCloseSidebarCategories = () => {
        funcSetIsVisibleCategories()
        setValueCategory("")
    }

    return (
        <div className={clsx("", className)}>
            <div className="flex gap-5">
                <button onClick={funcCloseSidebarCategories} className="w-[20px]">
                    <X width={20} strokeWidth={2} />
                </button>
                <InputSearch classNameBox="my-[10px]" value={valueCategory} setValue={setValueCategory} placeholder="Поиск категории" />
            </div>
            <div className="text-[30px] mb-[20px]">Каталог</div>
            <div className="flex flex-col text-[#5d5d64]">
                {
                    MENU_CATEGORIES.map((item, index) => (
                        <div  className={clsx("border-t py-[15px] pl-[5px] text-[14px]")} key={item.name}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}