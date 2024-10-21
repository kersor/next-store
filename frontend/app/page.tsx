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
  },
  {
    id: 5,
    title: 'Hair Pin Set of 3',
    price: 19,
    photo: '5.jpg'
  },
  {
    id: 6,
    title: 'Hair Pin Set of 3',
    price: 29,
    photo: '6.jpg'
  }
]

export default function Home() {
  return (
      <Container className="pt-[16px] relative" >
        <CarouselComponent />
        <Flex className="mt-[70px] justify-between max-[700px]:mt-[40px] max-[600px]:mt-[25px]">
          <div className="text-[20px] max-[600px]:text-[16px]">Новинки</div><Link className="text-[#A18A68] text-[16px] max-[600px]:text-[14px]" href='/shop'>Все</Link>
        </Flex>
        {/* <Flex className="gap-[10px] mt-[150px] max-[1200px]:mt-[100px] max-[950px]:mt-[50px] max-[600px]:mt-[14px] max-[600px]:grid max-[600px]:grid-cols-2">
          {
            newProducts.map((item, index) => (
              <Product key={item.id} item={item} />
            ))
          }
        </Flex> */}
        <div className="grid grid-cols-4 gap-[10px] max-[600px]:grid-cols-2">
          {
            newProducts.map((item, index) => (
              <Product key={item.id} item={item} />
            ))
          }
        </div>
      </Container>
  );
}


