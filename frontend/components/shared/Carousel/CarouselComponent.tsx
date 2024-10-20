import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import styles from './CarouselComponent.module.scss';
import Link from 'next/link';
import { CarouselComponentInfo } from './CarouselComponentInfo';

export function CarouselComponent() {
    const images = [
        {
            photo: '01.jpg',
            title: 'Gold big hoops',
            price: '68',
            link: '/7923923'
        },
        {
            photo: '02.jpg',
            title: 'Gold big hoops',
            price: '61',
            link: '/7123923'
        }
    ];

    return (
        <div className={styles.carousel} style={{ width: '100%', overflow: 'hidden' }}> 
            <Swiper
                style={{ width: '100%' }} 
                spaceBetween={0}                
                pagination={{
                    clickable: true,
                    bulletClass: styles.swiperPaginationBullet, 
                    bulletActiveClass: styles.swiperPaginationBulletActive, 
                }} 
                navigation
                modules={[Pagination]} 
                className='h-[630px] max-[1200px]:h-[500px] max-[900px]:h-[400px] max-[700px]:h-[354px]'
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CarouselComponentInfo item={item} index={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
