import { Heart, Home, ShoppingBag, TextSearch, UserRound } from "lucide-react";

export const NAVIGATION_ITEM = [
    {
        name: "Главная",
        link: "/",
        icon: Home
    },
    {
        name: "Каталог",
        link: "",
        icon: TextSearch
    },
    {
        name: "Корзина",
        link: "/cart",
        icon: ShoppingBag
    },
    {
        name: "Избранное",
        link: "/favorites",
        icon: Heart
    },
    {
        name: "Войти",
        link: "/auth",
        icon: UserRound
    }
]