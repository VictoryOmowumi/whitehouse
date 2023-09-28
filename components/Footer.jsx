import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import {GrFacebookOption, GrTwitter} from "react-icons/gr"
import {IoLogoInstagram} from "react-icons/io"
import {BiLogoLinkedin} from "react-icons/bi"
import {LuMapPin} from "react-icons/lu"
import {BsPhone} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import Link from 'next/link'
const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <div className="w-full md:h-[55vh] p-4 flex flex-col justify-between items-center bg-[#f7f7f7]">
     <div className="flex flex-col md:flex-row w-full md:w-4/5 p-4 h-11/12 justify-between ">
        <div className="flex flex-col justify-between gap-8">
            <div className="flex gap-4 flex-col text-black">
            <Image className="relative w-[78px] h-[61px]" alt="White house chosen" src={logo} />
            <p className="">
                Your Home Away From Home
            </p>
            </div>
            <div className='flex gap-4'>
                    <GrFacebookOption className='w-10 h-10 bg-primary-green text-white p-2 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out'/>
                    <GrTwitter className='w-10 h-10 bg-primary-green text-white p-2 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out'/>
                    <IoLogoInstagram className='w-10 h-10 bg-primary-green text-white p-2 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out'/>
                    <BiLogoLinkedin className='w-10 h-10 bg-primary-green text-white p-2 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out'/>
            </div>
        </div>
        <div className="flex flex-row justify-between gap-12 md:gap-32 mt-8 md:mt-0 ">
            <div className="flex flex-col ">
                <h4 className="text-[1.125rem] font-medium">Quick Links</h4>

                <div className="flex flex-col gap-4 mt-4">
                    <Link href='/' className="text-[#484848] text-[1rem]">
                       Home
                    </Link>
                    <Link href='/about' className="text-[#484848] text-[1rem]">
                       About Us
                    </Link>
                    <Link href='/explore' className="text-[#484848] text-[1rem]">
                       Explore
                    </Link>
                    <Link href='/contact' className="text-[#484848] text-[1rem]">
                       Contact Us
                    </Link>
                </div>

            </div>
            <div className="">
                <h4 className="text-[1.125rem] font-medium">Contact Us</h4>
                <div className="flex flex-col gap-8 mt-4">
                    <div className="flex items-center gap-2">
                        <LuMapPin className="w-4 h-4 text-primary-green" />
                        <p className="text-[#484848] text-[1rem]">Lekki Phase 1, Lagos, Nigeria</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsPhone className="w-4 h-4 text-primary-green" />
                        <p className="text-[#484848] text-[1rem]">+234 902 000 0000</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdEmail className="w-4 h-4 text-primary-green" />
                        <p className="text-[#484848] text-[1rem]">
                            info@whitehousevilla.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div className="flex flex-col md:w-4/5 mx-auto w-full">
        <div className="  h-[1px] bg-[#bababa] mt-8"></div>
        <div className="flex justify-between items-center ">
            <p className="text-[#484848] text-[14px]">© {year} White House Villa. All rights reserved</p>
           <div className="flex items-center  gap-6">
            <Link href='/terms' className="text-[#484848] text-[14px] mt-2"> Terms of Service</Link>
            <Link href='/privacy' className="text-[#484848] text-[14px] mt-2"> Privacy Policy</Link>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Footer