import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { Video } from '@/Components/Video';
import { Video as VideoModel } from '@/Models';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.css';

interface SliderProps {
    items: VideoModel[][];
}

export const Slider: FC<SliderProps> = React.memo((props): React.JSX.Element | null => {
    const { items } = props;

    return (
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {items.map((item, index) => (
              <SwiperSlide key={item[0].id} virtualIndex={index} className={styles.swiperSlide}> 
                {item.map((video) =>
                    <Video 
                        key={video.id} 
                        id={video.id}
                        imageSource={video.image} 
                        description={video.text} 
                        title={video.title} 
                        subtitle={video.description} />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
    )
})
