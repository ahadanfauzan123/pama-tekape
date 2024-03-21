"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Banner1 from "../../public/img/banner/banner1.png"
import Banner2 from "../../public/img/banner/banner2.png"
import Banner3 from "../../public/img/banner/banner3.png"
import Banner4 from "../../public/img/banner/banner4.png"
import Banner5 from "../../public/img/banner/banner5.png"
function Banner() {
  return (
    <div id="home" className=' z-20 h-[48vh] lg:h-screen w-screen relative flex items-center justify-center'>
      <Swiper
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image quality={90} src={Banner1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image quality={90} src={Banner2} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image quality={90} src={Banner3} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image quality={90} src={Banner4} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image quality={90} src={Banner5} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
      </Swiper>
      {/* <h1 className='text-5xl text-gray-800 font-extrabold absolute m-auto z-40 uppercase'>Selamat Datang di PAMA</h1> */}
    </div>
  )
}

export default Banner