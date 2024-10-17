import { IFilterCategory } from "@/types/filterCategory.type"

export const FILTER_CATEGORY: IFilterCategory = {
    placeholder: 'Категория',
    data: [
        {
            title: 'Все',
            value: 'all_category',
        },
        {
            title: 'Смартфоны',
            value: 'phone',
        },
        {
            title: 'Ноутбуки',
            value: 'laptops',
        },
        {
            title: 'Телевизоры',
            value: 'tvs',
        },
        {
            title: 'Аудио',
            value: 'audio',
        },
        {
            title: 'Фото и видеокамеры',
            value: 'photo_video',
        },
        {
            title: 'Игровые консоли',
            value: 'game_consoles',
        },
        {
            title: 'Умные часы',
            value: 'smartwatches',
        },
        {
            title: 'Бытовая техника',
            value: 'household_appliances',
        }
    ]
}

export const FILTER_BRANDS = {
    placeholder: 'Бренды',
    data: [
        {
            title: 'Все бренды',
            value: 'all_brands',
        },
        {
            title: 'Apple',
            value: 'apple',
        },
        {
            title: 'Xiaomi',
            value: 'xiaomi',
        },
    ]
}

export const FILTER_COLORS = {
    placeholder: 'Цвет',
    data: [
        {
            title: 'Все цвета',
            value: 'all_colors',
        },
        {
            title: 'Красный',
            value: 'red',
        },
        {
            title: 'Синий',
            value: 'blue',
        },
    ]
}