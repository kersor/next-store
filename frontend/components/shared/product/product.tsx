"use client"

import * as React from "react"

import { IProductItem } from "@/types/product.type"
import Image from "next/image"
import Link from "next/link"
import { usePrice } from "@/hooks/usePrice"
import styles from './product.module.scss'

import Favorites from '@/../../public/icon/favorite.svg'
import Bag from '@/../../public/icon/bag.svg'
import { Flex } from "../Flex"
import { Eye, Heart, ShoppingBag } from "lucide-react"
import { useRouter } from 'next/navigation'



type size = 'small' | 'medium'

interface IProduct {
  item: IProductItem,
  size?: size
}

export function Product({
  item,
  size = 'small'
}: IProduct) {
  const price = usePrice(item.price)
  const {push} = useRouter()

  const photoSize = {
    small: ''
  }



  const funcToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Favorite')    
    e.preventDefault()
  }

  const funcToggleBag = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Bag')
    e.preventDefault()
  }

  const funcLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
    push(`/product/${item.id}`)
    e.preventDefault()
  }

  return (
    <div className={styles.product}>
      <div className={styles.product_photo}>
        <Image 
          className="rounded-[8px]"
          src={`/${item.photo}`}
          layout="fill"
          objectFit="cover"
          alt={item.photo}
        />
        <div className={styles.product_photo__hover}>
          <Flex className="gap-[30px] absolute left-[50%] top-[50%] translate-x-[-50%]">
            <button onClick={funcToggleFavorite}>
              <Heart strokeWidth={1} size={25} />
            </button>
            <button onClick={funcToggleBag}>
              <ShoppingBag strokeWidth={1} size={25} />
            </button>
            <button onClick={funcLocation}>
              <Eye strokeWidth={1} size={25} />
            </button>
          </Flex>
        </div>
      </div>
      <div className="mt-[10px] text-[14px]">
        <div className="font-semibold">{item.title}</div>
        <div className="">{price}</div>
      </div>
    </div>
  )
}
