import React from 'react'
import image1 from '../../public/assets/house.png'
import Image from 'next/image'
import pin from '../../public/assets/pin.png'
import money from '../../public/assets/money.png'
import cleaning from '../../public/assets/cleaning.png'
import deal from '../../public/assets/deal.png'
import security from '../../public/assets/home-security.png'
import location from '../../public/assets/location.png'
const WhyUs = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-white mt-[120px] md:mt-0'>
    <div className='md:w-4/5 mx-auto h-screen flex flex-col justify-center items-center  bg-white'>
        <div className="flex md:flex-row flex-col gap-4 w-full mx-auto h-4/5 items-center justify-center">
                <div className="w-full md:w-4/5 h-full flex flex-1 justify-center">
                    <div className="w-4/5 md:w-3/4 h-full relative">
                        <Image src={image1} alt="pic1" className="w-full h-full rounded-2xl" />
                        {/*  two neomorphic cards  on the top left and bottom right using absolute positioning */}
                        <div className="flex gap-4 absolute left-[-50px] w-[200px] h-[50px] top-14 bg-[#F3FBF7] backdrop-blur-sm rounded-md shadow-sm justify-center items-center">
                            <div className="bg-[#FFF0F0] bg-opacity-60 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                                <Image src={pin} alt="pic1" className="w-4 h-4" />
                            </div>
                            <p className="text-black text-[0.875rem] ">Apartment booked</p> 
                        </div>
                        <div className="absolute right-[-30px] md:right-[-50px] w-[200px] h-[50px] bottom-14 bg-[#F3FBF7] bg-opacity-50 backdrop-blur-sm rounded-md shadow-sm flex gap-4 justify-center items-center">
                            <div className="bg-gray-200 bg-opacity-60 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                                <Image src={money} alt="pic1" className="w-4 h-4" />
                            </div>
                            <p className="text-black text-[0.875rem]">Payment Successful</p>
                        </div>
                    </div>
                   
                </div>
                <div className="md:w-4/5 h-full flex flex-1 flex-col justify-center items-center">
                    <div className="w-full ml-32">
                        <h4 className="text-[2.5rem] font-semibold">Why Choose Us</h4>
                    </div>
                    <div className="relative grid grid-cols-2   gap-4 mt-4">
                        <div className=" w-[170px] h-[250px] md:w-[260px] md:h-[250px] rounded-md z-10 bg-white bg-opacity-50 border border-white flex flex-col  justify-center gap-3 px-2 py-4">
                            <Image src={location} alt="pic1" className="  md:w-16 md:h-16" />
                            <p className="text-black text-[1rem] font-medium">Prime Locations</p>
                            <p className="text-black text-[0.875rem]">Conveniently located near shopping, dining, and entertainment options.</p>
                        </div>
                        <div className=" w-[170px] h-[250px] md:w-[260px] md:h-[250px] rounded-md z-10 bg-white bg-opacity-50 border border-white flex flex-col justify-center  gap-3 px-2 py-4">
                            <Image src={cleaning} alt="pic1" className="  md:w-16 md:h-16" />
                            <p className="text-black text-[1rem] font-medium">Responsive Maintenance</p>
                            <p className="text-black text-[0.875rem]">Our team ensures prompt and efficient maintenance service.</p>
                        </div>
                        <div className=" w-[170px] h-[250px] md:w-[260px] md:h-[250px] rounded-md z-10 bg-white bg-opacity-50 border border-white flex flex-col justify-center  gap-3 px-2 py-4">
                            <Image src={security} alt="pic1" className="  md:w-16 md:h-16" />
                            <p className="text-black text-[1rem] font-medium">Safety and Security</p>
                            <p className="text-black text-[0.875rem]">Our properties are safe and secure, with 24-hour security.</p>
                        </div>
                        <div className=" w-[170px] h-[250px] md:w-[260px] md:h-[250px] rounded-md z-10 bg-white bg-opacity-50 border border-white flex flex-col justify-center  gap-3 px-2 py-4">
                            <Image src={deal} alt="pic1" className="  md:w-16 md:h-16" />
                            <p className="text-black text-[1rem] font-medium">Flexible Lease Terms</p>
                            <p className="text-black text-[0.875rem]">We offer flexible lease terms to suit your needs.</p>
                        </div>
                        
                        {/*  a circle behind the cards using absolute positioning */}
                        <div className="absolute w-[335px] h-[335px] bg-gradient-to-tr from-primary-green to-[#226e46]
                         bg-opacity-10 blur-[205px] rounded-full -z-0 flex justify-center items-center top-24 left-20"></div>
                    </div>
                </div>
        </div>
    </div>

    </div>

  )
}

export default WhyUs