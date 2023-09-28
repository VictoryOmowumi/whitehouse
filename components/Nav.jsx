'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo.svg';
import { usePathname } from 'next/navigation';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop - 100,
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'explore',
        'how-it-works',
        'why-us',
        'contact',
      ];
      let currentSection = '';

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && window.scrollY >= section.offsetTop - 200) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center py-4 px-12 bg-white fixed w-full z-50">
      <div className="flex items-center md:ml-12">
        <Image src={logo} alt="logo" width={70} height={40} />
      </div>
      <div className="hidden md:flex items-center gap-4 md:ml-12">
        <a
          href="#home"
          onClick={() => scrollToSection('home')}
          className={`${
            activeSection === 'home' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => scrollToSection('about')}
          className={`${
            activeSection === 'about' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
          }`}
        >
          About Us
        </a>
        <a
          href="#explore"
          onClick={() => scrollToSection('explore')}
          className={`${
            activeSection === 'explore' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
          }`}
        >
          Explore Property
        </a>
        <a
          href="#how-it-works"
          onClick={() => scrollToSection('how-it-works')}
          className={`${
            activeSection === 'how-it-works' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
          }`}
        >
          How It Works
        </a>
        <a
          href="#contact"
          onClick={() => scrollToSection('contact')}
          className={`${
            activeSection === 'contact' ? 'text-primary-green' : 'text-white bg-primary-green px-4 py-2 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out'
          }`}
        >
          Contact Us
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
          {isOpen ? (
            <AiOutlineMenuUnfold className="w-6 h-6" />
          ) : (
            <AiOutlineMenuFold className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className={isOpen ? 'md:hidden flex flex-col gap-4 bg-white absolute top-0 right-0 h-screen w-3/4 transition duration-700 ease-in-out' : 'hidden'}>
        <button onClick={() => setIsOpen(!isOpen)} className="outline-none p-4 bg-green-300 rounded-full ml-auto mt-4 mr-4 text-white">
          {isOpen ? (
            <AiOutlineMenuUnfold className="w-6 h-6" />
          ) : (
            <AiOutlineMenuFold className="w-6 h-6" />
          )}
        </button>
        <a
          href="#home"
          onClick={() => scrollToSection('home')}
          className={`${
            activeSection === 'home' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => scrollToSection('about')}
          className={`${
            activeSection === 'about' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
          }`}
        >
          About Us
        </a>
        <a
          href="#explore"
          onClick={() => scrollToSection('explore')}
          className={`${
            activeSection === 'explore' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
          }`}
        >
          Explore Property
        </a>
        <a
          href="#how-it-works"
          onClick={() => scrollToSection('how-it-works')}
          className={`${
            activeSection === 'how-it-works' ? 'text-primary-green' : 'text-black hover:text-primary-green px-4'
          }`}
        >
          How It Works
        </a>
        <a
          href="#contact"
          onClick={() => scrollToSection('contact')}
          className={`${
            activeSection === 'contact' ? 'text-primary-green' : 'text-white bg-primary-green px-4 py-2 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out'
          }`}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Nav;
