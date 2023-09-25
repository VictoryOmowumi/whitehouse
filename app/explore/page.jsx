import React from "react";
import pic1 from "../../public/assets/pic1.png";
import pic2 from "../../public/assets/pic2.png";
import pic3 from "../../public/assets/pic3.png";
import pic4 from "../../public/assets/pic4.png";
import pic5 from "../../public/assets/pic5.png";
import pic6 from "../../public/assets/pic6.png";
import pic7 from "../../public/assets/pic7.png";
import {LuBedDouble, LuMicrowave} from "react-icons/lu"
import {MdOutlineSoupKitchen, MdOutlineBathtub} from "react-icons/md"
import {PiTelevisionBold} from "react-icons/pi"
import {RiFridgeLine} from "react-icons/ri"
import {BsPersonWorkspace} from "react-icons/bs"
import {RxDimensions} from "react-icons/rx"
import {GiCctvCamera} from "react-icons/gi"

import Image from "next/image";
import { BsFillEyeFill, BsFillStarFill } from "react-icons/bs";
const Explore = () => {

const features = [
  {
    id: 1,
    title: "4 Beds",
    icon: <LuBedDouble className="w-6 h-6 text-primary-green" />,
    description: "3"
  },
  {
    id: 2,
    title: "Kitchen",
    icon: <MdOutlineSoupKitchen className="w-6 h-6 text-primary-green" />,
    description: "1"
  },
  {
    id: 4,
    title: "Bathroom",
    icon: <MdOutlineBathtub className="w-6 h-6 text-primary-green" />,
    description: "2"
  },
  {
    id: 3,
    title: "TV",
    icon: <PiTelevisionBold className="w-6 h-6 text-primary-green" />,
    description: "1"
  },
  {
    id: 5,
    title: "Refrigerator",
    icon: <RiFridgeLine className="w-6 h-6 text-primary-green" />,
    description: "1"
  },
  {
    id: 6,
    title: "Dedicated Workspace",
    icon: <BsPersonWorkspace className="w-6 h-6 text-primary-green" />,
    description: "1"
  },
  {
    id: 7,
    title: "6x8m2",
    icon: <RxDimensions className="w-6 h-6 text-primary-green" />,
    description: "1"
  },
  {
    id: 8,
    title: "Security Cameras",
    icon: <GiCctvCamera className="w-6 h-6 text-primary-green" />,
    description: "1"
  }, 
  {
    id: 9,
    title: "Microwave",
    icon: <LuMicrowave className="w-6 h-6 text-primary-green" />,
    description: "1"
  },
  {
    id: 10,
    title: "Hair Dryer",
    icon: <svg xmlns="http://www.w3.org/2000/svg" 
    className="w-6 h-6 text-primary-green" fill="#226e46"
     viewBox="0 0 24 24"><title>hair-dryer</title><path d="M22 9A4.32 4.32 0 0 1 19.78 8.45A3.4 3.4 0 0 0 18 8V7A4.32 4.32 0 0 1 20.22 7.55A3.4 3.4 0 0 0 22 8M22 6A3.4 3.4 0 0 1 20.22 5.55A4.32 4.32 0 0 0 18 5V6A3.4 3.4 0 0 1 19.78 6.45A4.32 4.32 0 0 0 22 7M22 10A3.4 3.4 0 0 1 20.22 9.55A4.32 4.32 0 0 0 18 9V10A3.4 3.4 0 0 1 19.78 10.45A4.32 4.32 0 0 0 22 11M10 12.73A70.39 70.39 0 0 0 17 11V4S10.5 2 7.5 2A5.5 5.5 0 0 0 6.12 12.82L7 19H8A3 3 0 0 0 9.46 21.33A3.15 3.15 0 0 1 11 24H12A4.12 4.12 0 0 0 10.09 20.55C9.39 20 9 19.63 9 19H10M7.5 10A2.5 2.5 0 1 1 10 7.5A2.5 2.5 0 0 1 7.5 10Z" /></svg>,
    description: "1"
  }

]

  return (
    <div className=" flex flex-col w-full mb-24 min-h-screen items-center justify-start bg-white">
      {/*  Headline text */}
      <div className=" flex flex-2 md:px-20 px-4 flex-col md:w-4/6 gap-6 items-center justify-start text-center text-black mt-12">
        <h3 className="text-[2.5rem] font-semibold leading-none text-black">
          Book Now
        </h3>
        <p className="text-[1.125rem] w-11/12">
          We offer a variety of spacious and stylish apartments to suit your
          needs. Whether you're a single professional, a couple, or a family, we
          have the ideal apartment for you. Explore our apartments:
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-4 flex-1 px-4 md:w-11/12 w-full mt-12 ">
        <div className="grid grid-cols-2 gap-4 w-full">
          {/*  4 small cards with the images as the background */}
          <div className=" w-full rounded-2xl">
            <Image src={pic1} alt="pic1" className="w-full rounded-2xl" />
          </div>
          <div className=" w-full rounded-2xl">
            <Image src={pic2} alt="pic1" className="w-full rounded-2xl" />
          </div>
          <div className=" w-full rounded-2xl">
            <Image src={pic3} alt="pic1" className="w-full" />
          </div>

          <div className=" w-full rounded-2xl">
            <Image src={pic4} alt="pic1" className="w-full" />
          </div>
        </div>
        <div className=" w-full rounded-2xl">
          <Image src={pic5} alt="pic1" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col w-11/12 mt-8">
        <div className="">
          <h4 className="text-[2.5rem] font-semibold">Studio Villa</h4>
          <div className="flex justify-between items-center">
            <p className="text-[#484848] text-[1.125rem]">
              Lekki Phase 1, Lagos, Nigeria
            </p>
            <p className="flex items-center gap-1">
              <span className="text-primary-green">
                {" "}
                <BsFillEyeFill className="w-4 h-4" />{" "}
              </span>
              2k
            </p>
          </div>
          <div className="flex items-center gap-1 mt-4">
            <BsFillStarFill className="w-4 h-4 text-yellow-500" />
            <BsFillStarFill className="w-4 h-4 text-yellow-500" />
            <BsFillStarFill className="w-4 h-4 text-yellow-500" />
            <BsFillStarFill className="w-4 h-4 text-yellow-500" />
            <BsFillStarFill className="w-4 h-4 text-slate-400" />
            <span>4.5</span>
          </div>
        </div>
        <hr className="my-4" />
        <h4 className="text-[1.5rem] font-semibold">What this place offers</h4>
        <div className="flex justify-between items-center my-4">
          <div className="grid grid-cols-2 items-center gap-7">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-2">
                {feature.icon}
                <p className="text-[#484848] text-[1rem]">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
              <div className="w-[420px] h-[300px] bg-[#F7F7F7] p-4 rounded-md">
                <p className="text-[#484848] text-[1rem]">
                  Starting from <span className="text-primary-green">NGN 140,000</span>/month
                </p>
                <p className="text-black text-[1rem] mt-4">
                  Number of Guests
                </p>
                <select className="w-full h-10 bg-white rounded-md mt-2 text-sm">
                    <option value="">Select</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <p className="text-black text-[1rem] mt-8">
                  Book on
                </p>
                <div className="flex gap-4">
                    <button className="w-2/4 h-10 bg-white rounded-md mt-2 text-sm">
                        <Image src={pic6} alt="pic1" className="w-full object-contain" />
                    </button>
                    <button className="w-2/4 h-10 bg-white rounded-md mt-2 text-sm">
                        <Image src={pic7} alt="pic1" className="w-full object-contain" />
                    </button>

                </div>
              </div>
          </div>


      </div>
    </div>
  );
};

export default Explore;
