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

interface ILongName {
    className?: string,
    title: string
}

export default function LongName({
    title,
    className
}: ILongName) {
  return (
    <div className={cn("whitespace-nowrap overflow-hidden text-ellipsis", className)}>{title}</div>
  );
}


