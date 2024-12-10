import { InputCustom } from "@/components/ui/InputCustom"
import { Search, X } from "lucide-react"

interface Props {
    setProductValue: (value: string) => void
    value: string
}

export const InputSearch = ({
    setProductValue,
    value
}: Props) => {
    return (
        <InputCustom
            classNameInput="w-[200px] text-[#707070] bg-[#f0f0f0]"
            classNameBox='gap-[5px] bg-[#f0f0f0] px-[10px] py-[5px] rounded-[10px]'
            placeholder="Поиск товара..."
            onChangeHandler={(value: string) => setProductValue(value)}
            value={value}
        >
            <button onClick={() => setProductValue("")}>{!!value.length ? <X strokeWidth={1} width={17} /> : <Search strokeWidth={1} width={17} />}</button>
        </InputCustom>
    )
}