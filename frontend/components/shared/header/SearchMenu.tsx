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
    const active_iconSearch = activeSearch ? styles.header_search__iconSearch_active : "" 
    const active_body = activeSearch ? styles.header_search__body_active : "" 
    const active_search = activeSearch ? styles.header_search__active : ""
    return (
        // <Flex className={cn(styles.header_searchDesktop, searchDesktop_active)}>
            // <Search 
            //     className={cn("cursor-pointer transition-all duration-500", activeSearch ? "opacity-0" : "opacity-100")} 
            //     onClick={() => setActiveSearch(true)} 
            //     size={20} 
            //     strokeWidth={1} 
            // />
        //     <Flex className={cn(styles.header_searchDesktopBody, searchDesktopBody_active)}>
                // <input 
                //     disabled={!activeSearch} 
                //     placeholder="Поиск..." 
                //     value={inputValue} 
                //     onChange={(e) => setInputValue(e.target.value)} 
                // />
                // <X 
                //     cursor={'pointer'} 
                //     onClick={() => setInputValue("")} 
                //     size={20} 
                //     strokeWidth={1} 
                // />
        //         <Button  
        //             onClick={() => setActiveSearch(false)} 
        //             className="text-[12px] ml-[5px]" 
        //             size={"smal"}
        //         >
        //             Закрыть
        //         </Button>
        //     </Flex>
        // </Flex>
        <Flex className={cn(styles.header_search, active_search)}>
            <Search 
                className={cn(styles.header_search__iconSearch, active_iconSearch)} 
                onClick={() => setActiveSearch(true)} 
                size={20} 
                strokeWidth={1} 
            />
            <Flex className={cn(styles.header_search__body, active_body)}>
                <Flex className={cn(styles.header_search__bodyInput)}>
                    <input 
                        className={cn(styles.header_search__bodyInput_input)}
                        // disabled={!activeSearch} 
                        placeholder="Поиск..." 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
                    <X 
                        className={cn(styles.header_search__bodyInput_remove)}
                        onClick={() => setInputValue("")} 
                        size={20} 
                        strokeWidth={1} 
                    />
                </Flex>
                <Button 
                    className={`text-[12px] h-[30px] cursor-pointer`} 
                    onClick={() => {
                        setInputValue("")
                        setActiveSearch(false)
                    }} 
                    size={"small"}
                >
                    Закрыть
                </Button>
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
    const active_iconSearch = activeSearch ? styles.header_search__iconSearch_active : "" 
    const active_body = activeSearch ? styles.header_search__body_active : "" 
    const active_search = activeSearch ? styles.header_search__active : ""
    
    return (
        <Flex className={cn(styles.header_search, active_search)}>
            <Search 
                className={cn(styles.header_search__iconSearch, active_iconSearch)} 
                onClick={() => setActiveSearch(true)} 
                size={20} 
                strokeWidth={1} 
            />
            <Flex className={cn(styles.header_search__body, active_body)}>
                <Flex className={cn(styles.header_search__bodyInput)}>
                    <input 
                        className={cn(styles.header_search__bodyInput_input)}
                        // disabled={!activeSearch} 
                        placeholder="Поиск..." 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
                    <X 
                        className={cn(styles.header_search__bodyInput_remove)}
                        onClick={() => setInputValue("")} 
                        size={20} 
                        strokeWidth={1} 
                    />
                </Flex>
                <Button 
                    className={`text-[12px] h-[30px] cursor-pointer`} 
                    onClick={() => {
                        setInputValue("")
                        setActiveSearch(false)
                    }} 
                    size={"small"}
                >
                    Закрыть
                </Button>
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