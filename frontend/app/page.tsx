"use client"

import { CarouselComponent } from "@/components/shared/CarouselComponent";
import { Container } from "@/components/shared/Container";
import { Flex } from "@/components/shared/Flex";
import { Header } from "@/components/shared/header/Header";
import { TopBar } from "@/components/shared/Top-bar";
import { Button } from "@/components/ui/button";
import { FILTER_CATEGORY } from "@/config/filters.config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";



export default function Home() {
  return (
      <Container className="pt-[16px] relative" >
        <CarouselComponent />
      </Container>
  );
}


