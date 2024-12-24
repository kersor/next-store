import { Container } from "@/components/shared/container/Container";
import Link from "next/link";
import style from './style.module.scss'
import clsx from "clsx";
import { SubTitlePage } from "@/components/ui/SubTitlePage";
import { CATEGORIES } from "@/constants/menuItems";
import { ChevronRightIcon } from "lucide-react";

export default function Home() {
  return (
    <Container>
      <div className={clsx("w-full h-[300px] relative flex items-center rounded-[10px]", style.banner)}>
        <div className={clsx("z-[1] ml-[100px]", style.banner_description)}>
          <div className={clsx("text-[45px] uppercase max-w-[600px] font-StolzlBold leading-[45px] pb-[20px] text-[#0c480c]", style.banner_description__title)}>Хватай до 50% на некоторые наушники</div>
          <Link className={clsx("px-10 py-3 bg-[#b3be62] rounded-full text-[#FFF] text-[14px]", style.banner_description__btnBuy)} href="/">Купить</Link>
        </div>
        <img className="rounded-[10px] absolute top-0 left-0 w-full h-full object-cover -z-[1000]" src="/photos/photo_banner.png" alt="" />
      </div>

      <div className="mt-20"> 
        <SubTitlePage title="Хиты продаж" />
        <div className="flex items-center font-StolzlRegular text-[14px] mt-[10px] w-full">
          <div className="w-[90%] flex gap-5">
            <div className={clsx("flex justify-center border shadow rounded-md p-3 cursor-pointer transition-all hover:scale-105", "")}>Все категории</div>
            <div className={clsx("flex justify-center border rounded-md p-3 cursor-pointer", "bg-[#b3be62] text-[#FFF]")}>Процессоры</div>
            <div className="flex justify-center border shadow rounded-md p-3 cursor-pointer">Ноутбуки</div>
            <div className="flex justify-center border shadow rounded-md p-3 cursor-pointer">Мониторы</div>
            <div className="flex justify-center border shadow rounded-md p-3 cursor-pointer">Оперативная память</div>
            <div className="flex justify-center border shadow rounded-md p-3 cursor-pointer">Техника для дома</div>
            <div className="flex justify-center border shadow rounded-md p-3 cursor-pointer">Игровые консоли</div>
          </div>
          <button className={style.hits_btnAll}>Все хиты</button>
        </div>
      </div>

    </Container>
  );
}
