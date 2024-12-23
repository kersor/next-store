import { Container } from "@/components/shared/container/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="w-full h-[300px] relative flex items-center rounded-[10px]">
        <div className="z-[1] ml-[100px]">
          <div className="text-[45px] uppercase max-w-[600px] font-StolzlBold leading-[45px] pb-[20px] text-[#0c480c]">Хватай до 50% на некоторые наушники</div>
          <Link className="px-10 py-3 bg-[#b3be62] rounded-full text-[#FFF] text-[14px]" href="/">Купить</Link>
        </div>
        <img className="rounded-[10px] absolute top-0 left-0 w-full h-full object-cover -z-[1000]" src="/photos/photo_banner.png" alt="" />
      </div>
    </Container>
  );
}
