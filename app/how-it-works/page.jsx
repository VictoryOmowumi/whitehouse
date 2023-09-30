import React from 'react'
import image1 from '../../public/assets/manbed.png'
import Image from 'next/image'
import {LuBookUp} from 'react-icons/lu'
import {IoNavigateCircleOutline} from 'react-icons/io5'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
const HowItWorks = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center mt-[120px] md:mt-0  bg-white'>
        <div className=' md:w-11/12 md:h-[90vh] mx-auto md:p-8 p-4 flex flex-col md:flex-row justify-center items-center bg-[#F3FBF7] rounded-md'> 
              <div className="flex flex-1 flex-col gap-3">
              <div className="md:mx-8 md:px-8">
                <h1 className="text-[2.5rem] font-semibold">How it works</h1>
                <p className="text-black text-[1.125rem] ">
                We've designed our process to be straightforward and user-friendly,
                 ensuring a seamless experience for our customers. Here's how it all works:
                </p>
              </div>
                <div className="grid grid-cols-2 mt-4 md:mx-12 mx-2">
                  <div className="flex flex-col items-start justify-center mb-4">
                    <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                      <IoNavigateCircleOutline className="w-12 h-12 text-primary-green" />
                    </div>
                    <p className="text-black text-[0.875rem] mt-4">1. Explore Our Products</p>
                  </div>
                  <div className="flex flex-col items-start justify-center mb-4">
                    <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                      <LuBookUp className="w-12 h-12 text-primary-green" />
                    </div>
                    <p className="text-black text-[0.875rem] mt-4">2. Book on any platform</p>
                  </div>
                  <div className="flex flex-col items-start justify-center mb-4">
                    <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                      <RiSecurePaymentLine className="w-12 h-12 text-primary-green" />
                    </div>
                    <p className="text-black text-[0.875rem] mt-4">3. Review and make payments </p>
                  </div>
                  <div className="flex flex-col items-start justify-center mb-4">
                    <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                      <AiOutlineHome className="w-12 h-12 text-primary-green" />
                    </div>
                    <p className="text-black text-[0.875rem] mt-4">4. Enjoy the benefits</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full h-full ">
                <Image src={image1} alt="pic1" className="w-full h-full rounded-2xl" />
              </div>
        </div>
    </div>
  )
}

export default HowItWorks