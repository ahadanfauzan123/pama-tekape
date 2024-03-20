"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';
import Project1 from "../../public/img/project/project1.png"
import Project2 from "../../public/img/project/project2.png"
import Project3 from "../../public/img/project/project3.png"
import Project4 from "../../public/img/project/project4.png"
import Project5 from "../../public/img/project/project5.png"
import Project6 from "../../public/img/project/project6.png"
import Project7 from "../../public/img/project/project7.png"
import Project8 from "../../public/img/project/project8.png"
import Project9 from "../../public/img/project/project9.png"
import Project10 from "../../public/img/project/project10.png"


function Projects() {
      return (
    <div id='projects' className='mt-[120px] bg-red-700 w-screen h-auto py-12 flex flex-col items-center justify-start space-y-12'>
      <h1 className="text-5xl z-20 font-bold text-white leading-[50px]"><span className="">PROJECTS</span></h1>
          
      {/* <div className='w-[80%] mx-auto flex items-start justify-center space-x-5'> */}
      <div className='w-[80%] mx-auto'>
      <Swiper
      navigation={true}
      loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project1} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project2} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project3} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project4} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project5} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project6} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project7} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project8} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project9} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[450px] rounded-2xl bg-red-400'>
                  <Image quality={90} src={Project10} alt="project" width={800} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}

export default Projects