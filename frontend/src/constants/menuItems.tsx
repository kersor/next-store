import { IMenuItem } from "@/types/menuItems.types";

export const MENU_ITEMS_DESKTOP: IMenuItem[] = [
    {
        name: "Категории",
        link: "",
        children: [
            {
              name: "Смартфоны и аксессуары",
              link: "smartphones"
            },
            {
              name: "Ноутбуки и ПК",
              link: "laptops"
            },
            {
              name: "Телевизоры и аудио",
              link: "televisions"
            },
            {
              name: "Фото и видеокамеры",
              link: "cameras"
            },
            {
              name: "Компьютерные аксессуары",
              link: "computer-accessories"
            },
            {
              name: "Игровые приставки и игры",
              link: "gaming"
            },
            {
              name: "Умные устройства",
              link: "smart-devices"
            },
            {
              name: "Бытовая техника",
              link: "home-appliances"
            },
            {
              name: "Автотовары",
              link: "car-accessories"
            },
            {
              name: "Мелкая бытовая техника",
              link: "small-appliances"
            },
            {
              name: "Печатная техника",
              link: "printers"
            }
        ]          
    },
    {
        name: "Доставка",
        link: "delivery",
        children: []
    },
    {
        name: "Акции",
        link: "sales",
        children: []
    },
    {
        name: "Блог",
        link: "blog",
        children: []
    },
]

export const MENU_ITEMS_MOBILE: IMenuItem[] = [
  {
      name: "Категории",
      link: "",
      children: []      
  },
  {
      name: "Корзина",
      link: "/cart",
      children: []
  },
  {
      name: "Избранное",
      link: "/favorites",
      children: []
  },
  {
      name: "Доставка",
      link: "delivery",
      children: []
  },
  {
      name: "Акции",
      link: "sales",
      children: []
  },
  {
      name: "Блог",
      link: "blog",
      children: []
  },
  {
      name: "Войти",
      link: "/auth",
      children: []
  }
]

export const MENU_CATEGORIES = [
  {
    name: "Смартфоны и аксессуары",
    link: "smartphones"
  },
  {
    name: "Ноутбуки и ПК",
    link: "laptops"
  },
  {
    name: "Телевизоры и аудио",
    link: "televisions"
  },
  {
    name: "Фото и видеокамеры",
    link: "cameras"
  },
  {
    name: "Компьютерные аксессуары",
    link: "computer-accessories"
  },
  {
    name: "Игровые приставки и игры",
    link: "gaming"
  },
  {
    name: "Умные устройства",
    link: "smart-devices"
  },
  {
    name: "Бытовая техника",
    link: "home-appliances"
  },
  {
    name: "Автотовары",
    link: "car-accessories"
  },
  {
    name: "Мелкая бытовая техника",
    link: "small-appliances"
  },
  {
    name: "Печатная техника",
    link: "printers"
  }
]