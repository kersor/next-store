import { Container } from "@/components/shared/container/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="w-full h-[400px] relative flex items-center">
        <div className="z-[1] ml-[100px]">
          <div className="text-[45px] uppercase max-w-[600px] font-StolzlMedium leading-[45px]">Хватай до 50% на некоторые наушники</div>
          <Link className="mt-[30px] px-10 py-3 bg-[#37434f] rounded-full text-[#FFF] text-[14px]" href="/">Купить</Link>
        </div>
        <img className="absolute top-0 left-0 w-full h-full object-cover -z-[1000]" src="/photos/photo_banner.png" alt="" />
      </div>
    </Container>
  );
}
