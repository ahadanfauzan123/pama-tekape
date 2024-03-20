"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Logo2 from "../../public/img/logo2.png"
import { CiHome, CiUser, CiPhone } from "react-icons/ci";
import { FaBorderAll, FaBorderNone } from "react-icons/fa6";
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
                  <Image src={Logo2} alt="logo" width={800} height={200} className="w-[220px] h-auto" />
            </div>
            {/* deskripsi */}
            <div className='hidden lg:flex text-md font-semi-bold items-center justify-end space-x-3'>
                <Link href={"#home"} className='flex items-center justify-start space-x-2'>
                  <CiHome className='h-5 w-5' />
                  <h1>home</h1>  
                </Link> 
                <Link href={"#profile"} className='flex items-center justify-start space-x-2'>
                  <CiUser className='h-5 w-5' />
                  <h1>profile</h1>  
                </Link> 
                <Link href={"#projects"} className='flex items-center justify-start space-x-2'>
                  <FaBorderNone className='h-5 w-5' />
                  <h1>projects</h1>  
                </Link> 
                <Link href={"#contact"} className='flex items-center justify-start space-x-2'>
                  <CiPhone className='h-5 w-5' />
                  <h1>contact</h1>  
                </Link> 
            </div>
            {/* deskripsi sm */}
                <div className='inline-flex lg:hidden'>
                  <Sheet>
                          <SheetTrigger>
                            <FaBars className='h-5 w-5' />
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetDescription>
                              <div className='flex text-lg flex-col text-md font-semi-bold items-start justify-start space-y-8 mt-[100px]'>
                                  <Link href={"#home"} className='flex items-center justify-start space-x-2'>
                                    <CiHome className='h-5 w-5' />
                                    <h1>home</h1>  
                                  </Link> 
                                  <Link href={"#profile"} className='flex items-center justify-start space-x-2'>
                                    <CiUser className='h-5 w-5' />
                                    <h1>profile</h1>  
                                  </Link> 
                                  <Link href={"#projects"} className='flex items-center justify-start space-x-2'>
                                    <FaBorderNone className='h-5 w-5' />
                                    <h1>projects</h1>  
                                  </Link> 
                                  <Link href={"#contact"} className='flex items-center justify-start space-x-2'>
                                    <CiPhone className='h-5 w-5' />
                                    <h1>contact</h1>  
                                  </Link> 
                              </div>
                              </SheetDescription>
                            </SheetHeader>
                          </SheetContent>
                  </Sheet>
                </div>
      </div>
    </div>
  )
}

export default Navbar