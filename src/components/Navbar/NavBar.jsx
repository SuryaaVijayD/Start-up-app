import React, { useEffect, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { AiFillThunderbolt } from "react-icons/ai";
import AOS from "aos"
import 'aos/dist/aos.css'

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className='w-screen md:px-14 py-7 fixed z-50' style={{ backgroundColor: '#FCFCFC' }} data-aos="fade-down">
      <nav id='WebView' className='hidden md:flex md:flex-row md:justify-between'>
        <div className='self-center'>
          <h2 className='font-base text-xl cursor-pointer'>
            <a href="#Home">AI<span><AiFillThunderbolt /></span>NTEL</a>
          </h2>
        </div>
        <div className='self-center'>
          <ul className='flex'>
            <li className='mx-10 text-base font-light cursor-pointer px-5 py-2 hover:text-white hover:bg-black rounded-full transition duration-200'>
              <a href="#Revolution">Revolution</a>
            </li>
            <li className='mx-10 text-base font-light cursor-pointer px-5 py-2 hover:text-white hover:bg-black rounded-full transition duration-200'>
              <a href="#">How we work</a>
            </li>
            <li className='mx-10 text-base font-light cursor-pointer px-5 py-2 hover:text-white hover:bg-black rounded-full transition duration-200'>
              <a href="#Service">Service</a>
            </li>
            <li className='mx-10 text-base font-light cursor-pointer px-5 py-2 hover:text-white hover:bg-black rounded-full transition duration-200'>
              <a href="#Contact">About us</a>
            </li>
          </ul>
        </div>
        <div>
          <button type='button' className='px-8 text-lg rounded-full py-2 bg-black text-white'>
            Contact
          </button>
        </div>
      </nav>

      <nav id="MobileView" className='md:hidden'>
        <div className='px-8 flex justify-between items-center'>
          <div>
            <h2 className='font-normal text-xl cursor-pointer'>LOGO</h2>
          </div>
          <div>
            <CiMenuFries className='text-2xl cursor-pointer' onClick={handleClick} />
          </div>
        </div>
        {toggle && (
          <div className='px-8 mt-4 transition-transform transform ease-in-out duration-300'>
            <ul>
              <li className='py-3 mt-3'><a href="#Revolution" onClick={handleLinkClick}>Revolution</a></li>
              <li className='py-3'><a href="#" onClick={handleLinkClick}>How we work</a></li>
              <li className='py-3'><a href="#Service" onClick={handleLinkClick}>Service</a></li>
              <li className='py-3'><a href="#Contact" onClick={handleLinkClick}>About us</a></li>
              <li className='py-3'><a href="#" onClick={handleLinkClick}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
