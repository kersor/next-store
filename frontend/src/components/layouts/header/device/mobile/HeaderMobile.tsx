import { Container } from "@/components/shared/container/Container"
import { InputCustom } from "@/components/ui/InputCustom"
import clsx from "clsx"
import { Menu, Search, ShoppingBag, User2, X } from "lucide-react"
import Link from "next/link"
import { HeaderMenuMobile } from "./HeaderMenuMobile"
import { InputSearch } from "../../inputSearch"

interface Props {
    className?: string
    setProductValue: (value: string) => void
    value: string
}

export const HeaderMobile = ({
    className,
    setProductValue,
    value
}: Props) => {
    return (
        <Container className={clsx("flex flex-col", className)}>
            <div className="flex justify-between items-center">
                <Link className="uppercase text-[30px] font-semibold" href="/">kersor</Link>
                <Menu width={20} strokeWidth={2}/>
            </div>
            <InputSearch setProductValue={setProductValue} value={value} />
        </Container>
    )
}