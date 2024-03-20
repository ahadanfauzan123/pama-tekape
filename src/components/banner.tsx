"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Banner1 from "../../public/img/banner1.png"
import Banner2 from "../../public/img/banner2.png"
import Banner3 from "../../public/img/banner3.png"
import Banner4 from "../../public/img/banner4.png"
import Banner5 from "../../public/img/banner5.png"

function Banner() {
  return (
    <div id="home" className=' z-20 h-screen w-screen relative flex items-center justify-center'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image src={Banner1} alt="banner" width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image src={Banner2} alt="banner" width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image src={Banner3} alt="banner" width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image src={Banner4} alt="banner" width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image src={Banner5} alt="banner" width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
      </Swiper>
      {/* <h1 className='text-5xl text-gray-800 font-extrabold absolute m-auto z-40 uppercase'>Selamat Datang di PAMA</h1> */}
    </div>
  )
}

export default Banner