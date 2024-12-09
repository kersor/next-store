import { IMenuItem } from "@/types/menuItems.types";

export const menuItems: IMenuItem[] = [
    {
        name: "Категории",
        link: "",
        children: [
            {
              name: "Смартфоны и аксессуары",
              link: "/smartphones"
            },
            {
              name: "Ноутбуки и ПК",
              link: "/laptops"
            },
            {
              name: "Телевизоры и аудио",
              link: "/televisions"
            },
            {
              name: "Фото и видеокамеры",
              link: "/cameras"
            },
            {
              name: "Компьютерные аксессуары",
              link: "/computer-accessories"
            },
            {
              name: "Игровые приставки и игры",
              link: "/gaming"
            },
            {
              name: "Умные устройства",
              link: "/smart-devices"
            },
            {
              name: "Бытовая техника",
              link: "/home-appliances"
            },
            {
              name: "Автотовары",
              link: "/car-accessories"
            },
            {
              name: "Мелкая бытовая техника",
              link: "/small-appliances"
            },
            {
              name: "Печатная техника",
              link: "/printers"
            }
        ]          
    },
    {
        name: "Доставка",
        link: "/delivery",
        children: []
    },
    {
        name: "Акции",
        link: "/sales",
        children: []
    },
    {
        name: "Блог",
        link: "/blog",
        children: []
    },
]