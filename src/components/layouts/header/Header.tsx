import { Container } from "@/components/shared/container/Container"
import { menuItems } from "@/constants/menuItems"
import Link from "next/link"
import HeaderMenu from "./HeaderMenu"

interface Props {
    className?: string
}

export default function Header ({
    className
}: Props) {
    return (
        <div className="h-[60px]">
            <Container className="flex justify-between items-center h-full">
                <Link className="uppercase text-[30px] font-semibold" href="/">kersor</Link>
                <HeaderMenu />
            </Container>
        </div>
    )
}