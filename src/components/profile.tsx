import React from 'react'
import AnimatedCounter from './animatedCounter'
import Image from 'next/image'
import Logo from "../../public/img/logo1.jpg"

function Profile() {
  return (
      <div id="profile" className="w-full flex pt-[60px] flex-col bg-gray-800">
      <div className=" w-full min-h-[80vh] lg:h-[70vh] flex flex-col space-y-8 lg:space-y-0 items-center justify-center">
        <div
        className="flex w-full flex-col items-center justify-between">
          {/* about */}
          <div className='w-[80%] mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 items-center justify-between my-[48px]'>
            {/* left */}
            <div className='flex-[0.5] flex items-start justify-start flex-col space-y-9'>
              <h1 className="w-full lg:w-[80%] mx-auto text-justify text-6xl font-extrabold text-gray-50 "><span className="text-red-600">Tentang Kami</span></h1>
              <p className=" text-gray-50 w-full lg:w-[80%] mx-auto text-start">Selamat datang di PT Panca Armada Andalan, mitra terpercaya Anda dalam 
              dunia karoseri. Kami berkomitmen untuk memberikan solusi terbaik dalam 
              pembuatan dan modifikasi kendaraan bermotor sesuai dengan kebutuhan dan 
              standar kualitas tertinggi.
              </p>
            </div>
            {/* right */}
            <div className='w-[250px] h-[250px] rounded-2xl bg-gray-200'>
              <Image src={Logo} alt="logo" width={1000} height={1000} quality={90} className="w-full h-full rounded-2xl object-cover" />
            </div>
          </div>
          <div className="w-full mt-[80px] flex items-center justify-center space-x-[50px] lg:space-x-[120px] py-5 bg-red-600 text-white">
              <div className="text-5xl flex flex-col items-center justify-between h-[86px] space-y-2">
                <h1 className=" font-extrabold"><AnimatedCounter from={0} to={50} /><span>+</span></h1>
                <p className=" text-xs lg:text-[14px] font-light h-[30px]">Klien</p>
              </div>
              <div className="text-5xl flex flex-col items-center justify-between h-[86px] space-y-2">
                <h1 className=" font-extrabold"><AnimatedCounter from={0} to={120} /><span></span>+</h1>
                <p className=" text-xs lg:text-[14px] font-light h-[30px]">Pengadaan</p>
              </div>
              <div className="text-5xl flex flex-col items-center justify-between h-[86px] space-y-2">
                <h1 className=" font-extrabold"><AnimatedCounter from={0} to={10} /><span></span>+</h1>
                <p className=" text-xs lg:text-[14px] font-light h-[30px]">Distributor</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile