import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { Video } from '@/Components/Video';
import { Video as VideoModel } from '@/Models';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProps {
    items: VideoModel[][];
}

export const Slider: FC<SliderProps> = (props): React.JSX.Element | null => {
    const { items } = props;

    return (
        <Swiper
          spaceBetween={50}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {items.map((item, index) => (
              <SwiperSlide key={item[0].id} virtualIndex={index}>
                {item.map((video) => <Video imageSource={video.image} description={video.text} />)}
              </SwiperSlide>
            ))}
        </Swiper>
    )
}
