"use client"

import { CarouselComponent } from "@/components/shared/carousel/CarouselComponent";
import { Container } from "@/components/shared/Container";
import { Flex } from "@/components/shared/Flex";
import { Header } from "@/components/shared/header/Header";
import { Product } from "@/components/shared/product/product";
import { TopBar } from "@/components/shared/Top-bar";
import { Button } from "@/components/ui/button";
import { FILTER_CATEGORY } from "@/config/filters.config";
import { cn } from "@/lib/utils";
import { IProductItem } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const newProducts: IProductItem[] = [
  {
    id: 1,
    title: 'Lira Earrings',
    price: 20,
    photo: '1.jpg'
  },
  {
    id: 2,
    title: 'Hal Earrings',
    price: 25,
    photo: '2.jpg'
  },
  {
    id: 3,
    title: 'Kaede Hair Pin Set Of 3 ',
    price: 30,
    photo: '3.jpg'
  },
  {
    id: 4,
    title: 'Hair Pin Set of 3',
    price: 30,
    photo: '4.jpg'
  }
]

export default function Home() {
  return (
      <Container className="pt-[16px] relative" >
        <CarouselComponent />
        <Flex className="mt-[70px] justify-end">
          <Link className="text-[#A18A68] text-[16px]" href='/shop'>Смотреть все</Link>
        </Flex>
        <Flex className="gap-[10px] flex-wrap mt-[150px]">
          {
            newProducts.map((item, index) => (
              <Product key={item.id} item={item} />
            ))
          }
        </Flex>
        <div className="h-[1000px]"></div>
      </Container>
  );
}


