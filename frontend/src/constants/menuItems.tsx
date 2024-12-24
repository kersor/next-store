import { IMenuItem } from "@/types/menuItems.types";

export const MENU_ITEMS_DESKTOP: IMenuItem[] = [
    {
        name: "Каталог",
        link: "catalog",        
    },
    {
        name: "Доставка",
        link: "delivery",
    },
    {
        name: "Акции",
        link: "sales",
    },
    {
        name: "Блог",
        link: "blog",
    },
]

export const MENU_ITEMS_MOBILE: IMenuItem[] = [
  {
    name: "Каталог",
    link: "catalog",        
},
  {
      name: "Корзина",
      link: "cart",
  },
  {
      name: "Избранное",
      link: "favorites",
  },
  {
      name: "Доставка",
      link: "delivery",
  },
  {
      name: "Акции",
      link: "sales",
  },
  {
      name: "Блог",
      link: "blog",
  },
  {
      name: "Войти",
      link: "auth",
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