import React, { useEffect } from 'react';
import AOS from "aos"
import 'aos/dist/aos.css'
import "./Contactcss.css";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div id='Contact' className='relative'>
            <div className='h-72 px-6 text-center mt-60 mb-20 flex justify-center items-center flex-col' data-aos="fade-up">
                <h1 className='text-3xl font-semibold md:text-5xl mb-5'>To Have Conversation to Collaborate</h1>
                <p className='text-md md:text-xl mb-5 lg:max-w-[75%]'>Ready to Embrace AI? Let’s Get Started!
Discover how AI can drive innovation in your organization. Schedule a consultation with our AI experts and explore the endless possibilities that AI Ntel can offer.</p>
                <button type='button' className='flex mt-2 px-7 text-xl py-3 text-white bg-black rounded-full'>Reach out</button>
            </div>
            <div className='flex md:justify-between md:flex-row flex-col mb-9 md:px-32 px-6'>
                <div>
                    <h1 className='text-md md:text-xl font-medium text-center mb-4'>© 2024</h1>
                </div>
                <div className='flex mb-4 justify-center'>
                    <FaFacebookF className="text-2xl md:text-3xl mr-4" />
                    <FaInstagram className="text-2xl md:text-3xl mr-4" />
                    <FaXTwitter className="text-2xl md:text-3xl mr-4" />
                    <FaLinkedin className="text-2xl md:text-3xl mr-4" />
                </div>
            </div>
            {/* Dancing letters */}
            <div className='dancing-style text-shadow absolute large-web-text-contact1'>u</div>
            <div className='hidden lg:block dancing-style dancing-style text-shadow absolute large-web-text-contact2'>K</div>
        </div>
    );
}

export default Contact;
