import clsx from "clsx"
import { InputSearch } from "../../inputSearch"
import { Dispatch, SetStateAction, useState } from "react"

interface Props {
    className?: string
    isVisibleSearchProduct: boolean
    setIsVisibleSearchProduct: () => void
}

export const SearchProduct = ({
    className,
    isVisibleSearchProduct,
    setIsVisibleSearchProduct
}: Props) => {
    const [productValue, setProductValue] = useState("")

    const funcBackPath = () => {
        setIsVisibleSearchProduct()
        setProductValue("")
    }

    const position = isVisibleSearchProduct 
        ? "opacity-100 visible z-[1000] left-0"
        : "opacity-0 invisible -z-[1000] left-[100%]"

    return (
        <div className={clsx("absolute top-0 w-full h-screen bg-white transition-all duration-500", position, className)}>
            <div className="flex gap-2 justify-between p-[30px]">
                <InputSearch setValue={setProductValue} value={productValue} placeholder="Поиск товара..."/> 
                <button onClick={funcBackPath} className="bg-[#000] text-[#FFF] px-[10px] rounded-[5px]">Отменить</button>
            </div>
            <div className="px-[30px] pb-[30px]">
                <div className="bg-[rgba(142,142,142,0.1)] w-full h-full rounded-md p-[10px] flex flex-col gap-5">
                    <div className="flex gap-3">
                        <div className="w-20 h-20 bg-[#d1c0dc]"></div>
                        <div>
                            <div>Название 1</div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-20 h-20 bg-[#d1c0dc]"></div>
                        <div>
                            <div>Название 1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}