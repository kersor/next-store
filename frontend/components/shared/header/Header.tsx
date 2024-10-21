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
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(prev => window.innerWidth);
        handleResize(); 
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return ( 
        <Container className="h-[42px] mt-[64px] max-[1200px]:mt-[20px] max-[500px]:mb-[34px]">
            {/* >800px */}
            {windowWidth > 800 && <DeviceBig />}
            {/* 800px */}
            {windowWidth <= 800 && windowWidth >= 500 && <DeviceMiddle />}
            {/* 500px */}
            {windowWidth < 500 && <DeviceSmall />}
        </Container>
    )
}