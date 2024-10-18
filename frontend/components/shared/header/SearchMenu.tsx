import { cn } from '@/lib/utils'
import styles from './Header.module.scss'
import { Flex } from '../Flex'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ISearchMenu {
    className?: string
    activeSearch: boolean,
    setActiveSearch: (item: boolean) => void,
    inputValue: string,
    setInputValue: (val: string) => void
}

export function SearchMenuBig ({
    activeSearch,
    setActiveSearch,
    inputValue,
    setInputValue,
}: ISearchMenu) {
    return (
        <Flex className={cn(styles.header_searchDesktop, activeSearch ? styles.header_searchDesktop_active : "")}>
            <Search className={cn("cursor-pointer transition-all duration-500", activeSearch ? "opacity-0" : "opacity-100")} onClick={() => setActiveSearch(true)} size={20} strokeWidth={1} />
            <Flex className={cn(styles.header_searchDesktopBody, activeSearch ? styles.header_searchDesktopBody_active : "")}>
                <input disabled={!activeSearch} placeholder="Поиск..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <X cursor={'pointer'} onClick={() => setInputValue("")} size={20} strokeWidth={1} />
                <Button  onClick={() => setActiveSearch(false)} className="text-[12px] ml-[5px]" size={"smal"}>Закрыть</Button>
            </Flex>
        </Flex>
    )
}

export function SearchMenuMiddle ({
    activeSearch,
    setActiveSearch,
    inputValue,
    setInputValue,
}: ISearchMenu) {
    return (
        <Flex className="bg-[#EFEFEF] items-center text-[14px] px-[10px] py-[6px] rounded-[4px] w-[300px] max-[600px]:w-[250px]">
            <Search onClick={() => setActiveSearch(true)} size={17} strokeWidth={1} />
            <Flex className={"pl-[8px] justify-between items-center w-full"}>
                <input className='bg-inherit outline-0 w-full' placeholder="Поиск..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <X cursor={'pointer'} onClick={() => setInputValue("")} size={17} strokeWidth={1} />
            </Flex>
        </Flex>
    )
}

export function SearchMenuSmall ({
    activeSearch,
    setActiveSearch,
    inputValue,
    setInputValue,
}: ISearchMenu) {
    return (
        <Flex className="bg-[#EFEFEF] items-center text-[14px] px-[10px] py-[6px] rounded-[4px] w-full h-[40px]">
            <Search onClick={() => setActiveSearch(true)} size={20} strokeWidth={1} />
            <Flex className={"pl-[8px] items-center justify-between w-full"}>
                <input className='bg-inherit outline-0 w-full h-[30px]' placeholder="Поиск..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <X cursor={'pointer'} onClick={() => setInputValue("")} size={20} strokeWidth={1} />
            </Flex>
        </Flex>
    )
}