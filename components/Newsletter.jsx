import React from 'react'
import Image from 'next/image'
import image1 from '../public/assets/newsletter.png'

const Newsletter = () => {
  return (
        <div className="w-full h-1/2 flex flex-col justify-center items-center bg-white mb-11">
          <div className="w-full flex md:flex-row flex-col">
            <div className="flex-1 flex flex-col justify-center bg-primary-green px-8 py-4">
                <h1 className="text-white text-3xl md:text-[2.5rem] font-semibold">Subscribe to our monthly newsletter</h1>
                <p className="text-[#F7F7F7] text-[1.125rem] mt-4">Get updates on our latest listings</p>
                <div className="flex mt-4 bg-white rounded-md p-4">
                    <input type="text" className="w-full h-10 bg-white rounded-l-md px-4 placeholder:text-gray-400 placeholder:text-xs outline-none" placeholder='Enter your email address' />
                    <button className="w-[200px] h-12 rounded-md bg-primary-green rounded-r-md text-white">Subscribe</button>
                </div>
            </div>
            <div className="flex-1">
                <Image src={image1} alt="pic1" className="w-full h-full" />
            </div>
          </div>
        </div>
  )
}

export default Newsletter