"use client"

import { ArrowRight } from 'lucide-react'
import { Flex } from '../Flex'
import styles from './Footer.module.scss'
import { Container } from '../Container'
import { SocialIcon } from 'react-social-icons'

export function Footer () {
    return (
        <Container className='mt-[250px] mb-[90px] text-[#707070] border-t border-[#D8D8D8] pt-[37px] max-[1200px]:mt-[150px] max-[950px]:mb-[40px] max-[600px]:mt-[80px] max-[600px]:mb-[15px]'>
            <Flex className="justify-between items-center gap-5 max-[600px]:flex-col-reverse max-[600px]:items-start">
                <Flex className='uppercase gap-5 max-[600px]:flex-col max-[600px]:mt-[40px] max-[600px]:gap-2'>
                    <div>Контакты</div>
                    <div>доставка</div>
                </Flex>
                <Flex className='max-w-[400px] justify-between w-full border-b border-[#707070] pb-[13px] max-[800px]:max-w-[300px] max-[600px]:max-w-[none]'>
                    <input 
                        className='w-full outline-0 max-[800px]:placeholder:text-[12px]'
                        type="email" 
                        placeholder='Введите ваш Email, для рассылки акций и скидок'
                    />
                    <button className="transition-all duration-300 hover:scale-125">
                        <ArrowRight className='ml-[10px]' size={20} strokeWidth={1} />
                    </button>
                </Flex>
            </Flex>
            <Flex className='mt-[60px] items-center justify-between gap-5 max-[600px]:flex-col-reverse max-[600px]:items-start max-[600px]:mt-[32px]'>
                <div>© 2024 KERSOR. Условия использования и политика конфиденциальности</div>
                <Flex className='items-center '>
                    <div className='uppercase font-medium pr-[50px] mr-[10px] relative after:absolute after:top-[50%] after:right-1 after:w-[20%] after:h-[1px] after:bg-[#000]'>подпишись</div>
                    <Flex className='gap-[5px]'>
                        <SocialIcon target="_blank" url="https://vk.com" style={{width: 30, height: 30}} />
                        <SocialIcon target="_blank" url="https://web.telegram.org" style={{width: 30, height: 30}} />
                        <SocialIcon target="_blank" url="https://youtube.com" style={{width: 30, height: 30}} />
                        <SocialIcon target="_blank" url="https://x.com" style={{width: 30, height: 30}} />
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}