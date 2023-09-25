'use client'
import Image from "next/image"
import logo from "../public/assets/logo.svg"
import Link from "next/link"
import { useState } from "react"

import {usePathname} from 'next/navigation'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai"
const Nav = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
// if pathName is equal to the current path, then set activeLink to the current path, else set it to an empty string
    const activeLink = (pathName) => {
        return pathname === pathName ? 'text-primary-green' : ''
    }

  return (
    <nav className="flex justify-between items-center py-4 px-12 bg-white  fixed w-full z-50">
        <div className="flex items-center md:ml-12">
            <Image src={logo} alt="logo" width={70} height={40} />
        </div>
        <div className="hidden md:flex items-center gap-4 md:ml-12">
            <Link href="/"
            className={
                pathname === '/' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
            }
            >
                Home
            </Link>
            <Link href="/about" 
            className={
                pathname === '/about' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
            }
            >
               About Us
            </Link>
            <Link href="/explore" 
            className={
                pathname === '/explore' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
            }
            >
                    Explore Property
            </Link>
            <Link href="/how-it-works" 
            className={
                pathname === '/how-it-works' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
            }
            >
                    How It Works
            </Link>
            <Link href="/contact" 
            className={
                pathname === '/contact' ? 'text-primary-green' : 'text-white bg-primary-green px-4 py-2 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out'
            }
            >
                Contact Us
            </Link>
        </div>

{/* mobile */}

        <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
                {isOpen ? (
                    <AiOutlineMenuUnfold className="w-6 h-6" />
                ) : (
                    <AiOutlineMenuFold className="w-6 h-6" />
                )}
            </button>
        </div>
        <div className={isOpen ? 'md:hidden flex flex-col gap-4 bg-white absolute top-0 right-0 h-screen w-3/4 transition duration-700 ease-in-out'
        : 'hidden'}
        >
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none p-4 bg-green-300 rounded-full ml-auto mt-4 mr-4 text-white">
                {isOpen ? (
                    <AiOutlineMenuUnfold className="w-6 h-6" />
                ) : (
                    <AiOutlineMenuFold className="w-6 h-6" />
                )}
            </button>

            <Link href="/"
            className={
                pathname === '/' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
            }
            >
                Home
            </Link>
            <Link href="/about" 
            className={
                pathname === '/about' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
            }
            >
               About Us
            </Link>
            <Link href="/explore" 
            className={
                pathname === '/explore' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
            }
            >
                    Explore Property
            </Link>
            <Link href="/how-it-works" 
            className={
                pathname === '/how-it-works' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
            }
            >
                    How It Works
            </Link>
            <Link href="/contact" 
            className={
                pathname === '/contact' ? 'text-primary-green' : 'text-white bg-primary-green px-4 py-2 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out'
            }
            >
                Contact Us
            </Link>
        </div>
    </nav>
  )
}

export default Nav