export interface IFilterCategoryItem {
    title: string,
    value: string
}

export interface IFilterCategory {
    placeholder: string,
    data: IFilterCategoryItem[]
}