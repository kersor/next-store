import Link from "next/link";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface IHeader {
    className?: string
}

export function Header ({
    className
}: IHeader) {
    return (
        <header className={cn("", className)} >
            <Container>
                <div>
                    
                </div>
            </Container>
        </header>
    )
}