import React from 'react'
import AnimatedCounter from './animatedCounter'

function Profile() {
  return (
      <div className="w-full flex py-[60px] flex-col ">
      <div className=" w-[80vw] mx-auto min-h-[80vh] lg:h-[80vh] flex flex-col space-y-8 lg:space-y-0 items-center justify-center">
        <div
        className="flex flex-col items-center justify-center space-y-12">
          <h1 className="text-6xl font-bold text-gray-600 "><span className="text-red-600">PACA ARMADA ANDALAN</span></h1>
          <p className=" text-gray-600 w-[80%] mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odit. Odit obcaecati repellendus cum tenetur id, vitae iste magni aperiam libero necessitatibus dicta eaque pariatur similique non nobis alias ullam sapiente animi! Corrupti expedita, inventore, voluptatibus, perspiciatis blanditiis id fuga totam eaque assumenda veritatis unde at rem ipsum quisquam ut repellendus. Eos quaerat culpa praesentium rem, aut voluptatum aperiam vero.</p>
          
            <div className="flex items-center justify-center space-x-[120px] py-5 rounded-xl  w-full bg-gray-800 text-white">
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