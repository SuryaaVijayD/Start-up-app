import React from 'react'
import "./Contactcss.css"
import { MdOutlineArrowOutward } from "react-icons/md";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div id='Contact' className='relative'>
        <div className='h-72 px-6 text-center mt-60 mb-20 flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-semibold md:text-5xl mb-5'>To Have Conversation to collabrate</h1>
            <p className='text-md md:text-xl mb-5'>Lorem ipsum dolor sit amet, concenter</p>
            <button type='button' className='flex mt-2 px-7 text-xl py-3 text-white bg-black rounded-full'>Reach out <MdOutlineArrowOutward className='ml-2 self-center'/></button>        
        </div>
        <div className='flex md:justify-between md:flex-row flex-col mb-9 md:px-32 px-6'>
            <div>
                <h1 className='text-md md:text-xl font-medium text-center mb-4'>@copyright 2024</h1>
            </div>
            <div className='flex mb-4 justify-center'>
                <FaFacebookF className="text-2xl md:text-3xl mr-4"/>
                <FaInstagram className="text-2xl md:text-3xl mr-4"/>
                <FaXTwitter className="text-2xl md:text-3xl mr-4"/>
                <FaLinkedin className="text-2xl md:text-3xl mr-4"/>
            </div>
        </div>
        <div className='hidden md:block dancing-style text-shadow absolute large-web-text-contact1'>u</div>
        <div className='hidden md:block dancing-style text-shadow absolute large-web-text-contact2'>K</div>
    </div>
  )
}

export default Contact