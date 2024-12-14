import { InputCustom } from "@/components/ui/InputCustom"
import clsx from "clsx"
import { Search, X } from "lucide-react"

interface Props {
    setValue: (value: string) => void
    value: string
    placeholder: string
    classNameInput?: string
    classNameBox?: string
}

export const InputSearch = ({
    setValue,
    value,
    placeholder,
    classNameInput,
    classNameBox
}: Props) => {
    return (
        <InputCustom
            classNameInput={clsx("w-full text-[#707070] bg-[#f0f0f0]", classNameInput)}
            classNameBox={clsx('w-full gap-[5px] bg-[#f0f0f0] px-[10px] py-[5px] rounded-[5px]', classNameBox)}
            placeholder={placeholder}
            onChangeHandler={(value: string) => setValue(value)}
            value={value}
        >
            <button onClick={() => setValue("")}>{!!value.length ? <X strokeWidth={1} width={17} /> : <Search strokeWidth={1} width={17} />}</button>
        </InputCustom>
    )
}