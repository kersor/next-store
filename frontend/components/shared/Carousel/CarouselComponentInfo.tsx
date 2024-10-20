import { usePrice } from "@/hooks/usePrice";
import Image from "next/image";
import Link from "next/link";
import styles from './CarouselComponent.module.scss'
import { Flex } from "../Flex";

interface ICarouselComponentInfo {
    item: any,
    index: number
}

export function CarouselComponentInfo ({
    item,
    index
}: ICarouselComponentInfo) {
    const price = usePrice(item.price)

    return (
        <div className="relative w-full h-[630px] max-[1200px]:h-[500px] max-[900px]:h-[400px] max-[700px]:h-[354px]">
            <Image
                src={`/carousel/${item.photo}`}
                layout="fill"
                objectFit="cover"
                alt={`Image ${index + 1}`}
            />
            <Flex className={styles.carousel_info}>
                <div className="">
                    <div className='tracking-wide text-[25px] font-semibold max-[900px]:text-[20px]'>{item.title}</div>
                    <div className="text-[20px] max-[900px]:text-[14px]">{price}</div>
                </div>
                <Link className='w-[100px] h-[40px] border-2 border-[#FFF] rounded-[6px] font-bold block max-[900px]:w-[80px] max-[900px]:h-[30px] ' href="/">
                    <Flex className="flex justify-center items-center w-full h-full max-[900px]:text-[12px]">Смотреть</Flex>
                </Link>
            </Flex>
        </div>
    )
}