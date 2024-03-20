"use client"
import React, { useEffect, useState } from 'react'

function Navbar() {
      // interface UseDisclosure {
      //       isOpen: boolean;
      //       onOpen: () => void;
      //       onClose: () => void;
      // }
      const [showNavbar, setShowNavbar] = useState<boolean>(false);
      // const btnRef = React.useRef()
    
      
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
            <div className='flex items-center justify-start'>logo</div>
            {/* deskripsi */}
            <div className='text-md font-semi-bold flex items-center justify-end space-x-3'>
                <div className='flex items-center justify-start space-x-2'>
                  <span>:</span>
                  <h1>list</h1>  
                </div> 
                <div className='flex items-center justify-start space-x-2'>
                  <span>:</span>
                  <h1>list</h1>  
                </div> 
                <div className='flex items-center justify-start space-x-2'>
                  <span>:</span>
                  <h1>list</h1>  
                </div> 
            </div>
      </div>
    </div>
  )
}

export default Navbar