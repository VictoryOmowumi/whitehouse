import React from 'react'
import guest from "../../public/assets/tourist.png"
import Image from 'next/image'
const About = () => {
  return (
    <div className=' flex flex-col  mb-14 h-screen items-center justify-start bg-[#F7F7F7]'>
        {/*  Headline text */}
        <div className=' flex flex-1 md:w-4/5 h-max md:px-20 px-4 flex-col gap-6 items-center justify-center text-center text-black'>
            <h3 className='text-[2.5rem] font-semibold leading-none text-black'>
                About Us
            </h3>
            <p className='text-[1.125rem] w-full md:w-11/12'>
            At White House Villa dedicated to helping you find the perfect place to call home. Whether you're searching for a cozy apartment, a spacious family house, 
            or a luxury villa, we have a wide range of properties that cater to all your needs.
            </p>
           
          </div>
          <div className=" flex flex-1 flex-col gap-8 md:w-4/5 mt-[-50px] justify-center items-center text-center bg-white rounded-md py-4 px-8">
            <Image src={guest} alt="guest" width={50} height={50} />
            <h4 className='text-[1.5rem] font-semibold'>For Guests</h4>
            <p className='home-text text-[1.125rem]  mt-[-30px]'>
            Explore a diverse range of accommodations, from cozy apartments in bustling cities to remote cabins nestled in nature. Our user-friendly search and filter options make finding your dream stay a breeze.
            </p>

            <button className='bg-primary-green text-white px-8 py-3 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out'>
                View Property
            </button>

          </div>
    </div>
  )
}

export default About