import { usePrice } from "@/hooks/usePrice";
import Image from "next/image";
import Link from "next/link";

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
        <div className="relative w-full h-full">
            <Image
                src={`/carousel/${item.photo}`}
                layout="fill"
                objectFit="cover"
                alt={`Image ${index + 1}`}
            />
            <div className='absolute top-[50%] translate-y-[-50%] ml-10 text-[#FFF]'>
                <div className="mb-[30px]">
                    <div className='tracking-wide text-[25px] font-semibold'>{item.title}</div>
                    <div className="text-[20px]">{price}</div>
                </div>
                <Link className='py-[13px] px-[30px] border-2 border-[#FFF] rounded-[6px] font-bold' href="/">Смотреть</Link>
            </div>
        </div>
    )
}