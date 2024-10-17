"use client"

import { Container } from "@/components/shared/Container";
import { Flex } from "@/components/shared/Flex";
import { Header } from "@/components/shared/Header";
import { TopBar } from "@/components/shared/Top-bar";
import { Button } from "@/components/ui/button";
import { FILTER_CATEGORY } from "@/config/filters.config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";



export default function Home() {
  const [activeCategory, setActiveCategory] = useState<number>(0)

  return (
      <Container className="pt-[90px]" >
        {/* <TopBar /> */}
        <Flex className="justify-between">
          <Flex 
            className="gap-[5px] items-center">
            {
              FILTER_CATEGORY.data.map((item, index) => (
                index < 5 && 
                <Button 
                    key={item.value}
                    onClick={() => setActiveCategory(index)} 
                    variant="outline" 
                    size="smal" 
                    className={cn("rounded-[50px] text-[12px] ", activeCategory === index ? "bg-[#000] text-[#FFF]" : "")}
                  >
                  {item.title}
                </Button>
              ))
            }
          </Flex>
          <Link className="relative after:absolute after:bottom-[0] after:left-[50%] after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-none hover:after:bg-[#000] " href="/shop">Смотреть все</Link>
        </Flex>
      </Container>
  );
}


