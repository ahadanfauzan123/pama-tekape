import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneOutgoing } from "react-icons/lu";
import { TbBrandGmail } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

function Contact() {
  return (
      <div id="contact" className='mt-[120px] w-screen mx-auto flex flex-col items-center justify-start space-y-12'>
        {/* title */}
        <div className='sm:w-[100%] lg:w-[60%] mt-[30px]'>
            <h1 className='sm:text-3xl lg:text-5xl font-bold text-gray-600 text-center'>CONTACT US</h1>
        </div>
        <div className="w-[80%] mx-auto">
            {/* cards */}
            <div className='flex flex-col items-center justify-start space-y-4 w-full'>
                {/* segment 1 */}
                <div className='w-full flex items-center justify-between'>
                  <Link href={"https://wa.me/6281386899449"} className='lg:w-[48%] h-[80px] lg:h-[100px] bg-white rounded-xl flex items-center px-8 space-x-8 hover:bg-gray-100 transition-all ease-linear duration-300 cursor-pointer'>
                        <h1 className='text-green-400'>
                              <FaWhatsapp className='h-12 w-12' />
                        </h1>
                        <div className='flex flex-col space-y-2'>
                        <h1 className='text-lg font-semibold '>WhatsApp</h1>
                        <h1 className='text-md text-gray-400 font-semibold '>+0813-8689-9449 </h1>

                        </div>
                  </Link> 
                  <Link href={"mailto:pamakaroseri@yahoo.com"} className='lg:w-[48%] h-[80px] lg:h-[100px] bg-white rounded-xl flex items-center px-8 space-x-8 hover:bg-gray-100 transition-all ease-linear duration-300 cursor-pointer'>
                        <h1 className='text-orange-400'>
                              <TbBrandGmail className='h-12 w-12' />
                        </h1>
                        <div className='flex flex-col space-y-2'>
                        <h1 className='text-lg font-semibold '>Email</h1>
                        <h1 className='text-md text-gray-400 font-semibold '>pamakaroseri@yahoo.com</h1>

                        </div>
                  </Link> 
                </div>
                {/* segment 2 */}
                <div className='w-full flex items-center justify-between'>
                  <div className='lg:w-[48%] h-[80px] lg:h-[100px] bg-white rounded-xl flex items-center px-8 space-x-8 hover:bg-gray-100 transition-all ease-linear duration-300 cursor-pointer'>
                        <h1 className='text-gray-400'>
                              <LuPhoneOutgoing className='h-10 w-10' />
                        </h1>
                        <div className='flex flex-col space-y-2'>
                        <h1 className='text-lg font-semibold '>Phone</h1>
                        <h1 className='text-md text-gray-400 font-semibold '>021 8250 8555</h1>

                        </div>
                  </div> 
                  <div className='lg:w-[48%] h-[80px] lg:h-[100px] bg-white rounded-xl flex items-center px-8 space-x-8 hover:bg-gray-100 transition-all ease-linear duration-300 cursor-pointer'>
                        <h1 className='text-red-400'>
                              <FaInstagram className='h-10 w-10' />
                        </h1>
                        <div className='flex flex-col space-y-2'>
                        <h1 className='text-lg font-semibold '>Instagram</h1>
                        <h1 className='text-md text-gray-400 font-semibold '>@pamagroup</h1>

                        </div>
                  </div> 
                </div>
            </div>

        </div>
        {/* contact box */}
        
    </div>
  )
}

export default Contact