"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimation, Variants, useScroll } from "framer-motion"
import { FaFireAlt, FaRegLightbulb  } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GiGreenhouse } from "react-icons/gi";



function Profile2() {
      const titleVariant1: Variants = {
            offscreen: {
              x: -80,
              opacity: 0
            },
            onscreen: {
              x: 0,
              opacity: 1,
              // rotate: -10,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
              }
            }
          };
          const titleVariant2: Variants = {
            offscreen: {
              x: 80,
              opacity: 0
            },
            onscreen: {
              x: 0,
              opacity: 1,
              // rotate: -10,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
              }
            }
          };
  return (
      <div className="w-full flex flex-col space-y-8">
      {/* kegiatan pertama */}
      <div className="relative w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[65vh]">
        <Image alt="svg" src="" width={100} height={100} className="absolute left-[50px] top-[40%]" />
        <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">Reputasi Terpercaya</motion.h1>
        <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] z-20 text-justify text-lg">
            Berpengalaman 
bertahun-tahun dalam industri karoseri mobil di Indonesia. Dengan dedikasi yang 
tinggi dan tim profesional yang berpengalaman, kami telah berhasil membangun 
reputasi yang kuat sebagai salah satu produsen karoseri terkemuka di negara 
ini.
      
      </motion.h3>

      </div>
      {/* kegiatan kedua */}
      <div className="w-screen bg-red-700">
      <div className="relative flex flex-col lg:flex-row space-y-8 items-end lg:items-center justify-between lg:justify-between w-[80%] mx-auto left-0 p-6 h-[70vh] lg:h-[55vh]">
      <Image alt="svg" src="" width={100} height={100} className="absolute right-[50px] top-[40%]" />
        
      <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] z-20 text-justify text-lg text-white">
          Berbagai macam layanan 
berkualitas untuk memenuhi kebutuhan transportasi Anda. Mulai dari pembuatan 
kendaraan bermotor komersial seperti bus dan truk, hingga modifikasi mobil 
penumpang dan kendaraan khusus lainnya, kami siap membantu Anda 
mewujudkan visi dan misi bisnis Anda.
</motion.h3>
        <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] text-end lg:flex-[0.35] font-bold text-gray-200 leading-[50px]">Solusi Transportasi Terpadu</motion.h1>
        

      </div>
      </div>
      {/* kegiatan ketiga */}
      <div className="relative w-[80vw] mx-auto flex flex-col space-y-16 items-center justify-start min-h-screen lg:h-[65vh]">
      {/* <Image alt="svg" src="" width={100} height={100} className="absolute left-[50px] top-[40%]" /> */}
        <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 font-bold text-gray-600 leading-[50px]">Mengapa Memilih Kami</motion.h1>
        <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex items-center justify-center flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-center space-x-2 w-full z-20 text-justify text-lg">
                      <div className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full h-[160px] lg:w-[23%] lg:h-[240px] flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center flex-col space-y-2">
                          <h1 className='z-20 text-xl font-bold absolute top-0 w-full h-full flex items-center justify-center'>
                            Kualitas Terbaik

                          </h1>
                          <FaFireAlt className='z-10 h-24 w-24 text-opacity-65 text-red-600'/>
                        </div>
                      </div>
                      <div className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full h-[160px] lg:w-[23%] lg:h-[240px] flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center flex-col space-y-2">
                          <h1 className='z-20 text-xl font-bold absolute top-0 w-full h-full flex items-center justify-center'>
                            Inovasi Berkelanjutan

                          </h1>
                          
                          <FaRegLightbulb  className='z-10 h-24 w-24 text-opacity-65 text-yellow-600'/>
                        </div>
                      </div>
                      <div className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full h-[160px] lg:w-[23%] lg:h-[240px] flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center flex-col space-y-2">
                          <h1 className='z-20 text-xl font-bold absolute top-0 w-full h-full flex items-center justify-center'>
                            Pelayanan Pelanggan

                          </h1>
                          <MdOutlinePhoneInTalk  className='z-10 h-24 w-24 text-opacity-65 text-orange-600'/>
                          
                        </div>
                      </div>
                      <div className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full h-[160px] lg:w-[23%] lg:h-[240px] flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center flex-col space-y-2">
                          <h1 className='z-20 text-xl font-bold absolute top-0 w-full h-full flex items-center justify-center'>
                            Komitmen Lingkungan

                          </h1>
                          <GiGreenhouse  className='z-10 h-24 w-24 text-opacity-65 text-green-600'/>
                          
                        </div>
                      </div>
                      

      </motion.div>

      </div>
    </div>
  )
}

export default Profile2