"use client"

import Link from "next/link";
import { Container } from "../Container";
import { cn } from "@/lib/utils";
import { menu } from "@/config/menu.config";
import { Flex } from "../Flex";
import { Heart, Search, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";

import Profile from '@/public/icon/profile.svg'
import Bag from '@/../../public/icon/bag.svg'
import Favorite from '@/public/icon/favorite.svg'
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import styles from './Header.module.scss'
import { DeviceBig } from "./device/DeviceBig";
import { DeviceMiddle } from "./device/DeviceMiddle";
import { DeviceSmall } from "./device/DeviceSmall";


interface IHeader {
    className?: string
}

export function Header ({
    className
}: IHeader) {
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        const updateWidth = () => {
            if (typeof window !== 'undefined') {
                setWidth(window.innerWidth);
            }
        };

        updateWidth(); 
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);



    return (
        <Container className="h-[42px] mt-[64px] max-[1200px]:mt-[20px] max-[500px]:mb-[34px]">
            {/* >800px */}
            {width !== undefined && width > 800 && <DeviceBig />}
            {/* 800px */}
            {width !== undefined && width <= 800 && width >= 500 && <DeviceMiddle />}
            {/* 500px */}
            {width !== undefined && width < 500 && <DeviceSmall />}
        </Container>
    )
}