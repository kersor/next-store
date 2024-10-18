import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import styles from './CarouselComponent.module.scss';

export function CarouselComponent() {
    const images = [
        '/carousel/01.jpg',
        '/carousel/02.jpg',
    ];

    return (
        <div className={styles.carousel} style={{ width: '100%', overflow: 'hidden' }}> {/* Обертка для предотвращения переполнения */}
            <Swiper
                style={{ height: '630px', width: '100%' }} // Задайте высоту и ширину
                spaceBetween={0}
                // slidesPerView={1}
                pagination={{
                    clickable: true,
                    bulletClass: styles.swiperPaginationBullet, // Используйте класс из модуля
                    bulletActiveClass: styles.swiperPaginationBulletActive, // Используйте активный класс
                }} // Включите точки
                navigation
                modules={[Pagination]} // Убедитесь, что модули указаны
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                layout="fill"
                                objectFit="cover"
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
