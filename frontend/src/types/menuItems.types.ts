export interface IMenuItem {
    name: string,
    link: string,
    children?: IMenuItemsChildren[]
}

export interface IMenuItemsChildren {
    name: string,
    link: string
}