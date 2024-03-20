"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Logo2 from "../../public/img/logo2.png"
import { CiHome, CiUser } from "react-icons/ci";
import { FaBorderAll, FaBorderNone } from "react-icons/fa6";

function Navbar() {
      const [showNavbar, setShowNavbar] = useState<boolean>(false);
      useEffect(() => {
        const scrollHeader = () => {
          if(window.scrollY >= 20) {
            setShowNavbar(true)
          } else {
            setShowNavbar(false)
          }
        }
        window.addEventListener('scroll', scrollHeader);
        return () => {
          window.removeEventListener('scroll', scrollHeader);
        }
    
      }, []);
  return (
    <div className={`${showNavbar===true? "bg-white transition-all ease-in duration-300 shadow-md shadow-gray-300" : "bg-transparent"} z-50 text-gray-600 w-screen h-[90px] fixed top-0 left-0 flex items-center justify-center`}>
      <div className='flex items-center justify-between mx-auto w-[90%]'>
            {/* logo */}
            <div className='flex items-center justify-start'>
                  <Image src={Logo2} alt="logo" width={120} height={40} className="w-[220px] h-auto" />
            </div>
            {/* deskripsi */}
            <div className='text-md font-semi-bold flex items-center justify-end space-x-3'>
                <div className='flex items-center justify-start space-x-2'>
                  <CiHome className='h-5 w-5' />
                  <h1>home</h1>  
                </div> 
                <div className='flex items-center justify-start space-x-2'>
                  <CiUser className='h-5 w-5' />
                  <h1>profile</h1>  
                </div> 
                <div className='flex items-center justify-start space-x-2'>
                  <FaBorderNone className='h-5 w-5' />
                  <h1>projects</h1>  
                </div> 
            </div>
      </div>
    </div>
  )
}

export default Navbar