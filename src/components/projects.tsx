"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
SwiperCore.use([Thumbs]);


function Projects() {
      const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <div className='w-screen h-auto'>
      <div className='w-[80%] mx-auto flex items-start justify-center space-x-5'>
      <Swiper
      //   style={{
      //     '--swiper-navigation-color': '#fff',
      //     '--swiper-pagination-color': '#fff',
      //   }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        <SwiperSlide>
            <div className='w-full h-[500px] rounded-2xl bg-red-400'>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[500px] rounded-2xl bg-green-400'>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[500px] rounded-2xl bg-blue-400'>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[500px] rounded-2xl bg-yellow-400'>

            </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        <SwiperSlide>
          </SwiperSlide>
        <SwiperSlide>
          </SwiperSlide>
        <SwiperSlide>
          </SwiperSlide>
        <SwiperSlide>
          </SwiperSlide>
        <SwiperSlide>
          </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Projects