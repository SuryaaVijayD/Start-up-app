import React, { useEffect } from 'react'
import "./Homecss.css"
import { MdOutlineArrowOutward } from "react-icons/md";
import AOS from "aos"
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div id='Home' className='flex flex-col justify-center px-4 md:px-20 containers relative' data-aos="fade-right" data-aos-delay="350">
      <div className='flex flex-col gap-5 w-full justify-center'>
        <h3 className='hidden md:block mt-56'>Lorem Ipsun standard dummy text</h3>
        <h1 className='md:text-6xl text-3xl font-medium md:w-3/4 leading-relaxed md:mt-0 mt-28'>Lorem Ipsun is simply dummy text of the printing and scrambled</h1>
        <p className='md:w-3/4 leading-loose'>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book.
        </p>
        <div className='mt-4'>
          <button type='button' className='flex px-5 text-lg rounded-full py-3 bg-black text-white'>Learn more <MdOutlineArrowOutward className='self-center ml-1' /></button>
        </div>
      </div>
      <div className='hidden md:flex flex-row mt-20 ml-12' data-aos-delay="550" data-aos="fade-up">
        <div className='text-center mx-6 my-2'><h3 className='text-4xl'>3+</h3><p className='my-2'>Projects</p></div>
        <div className='vertical-bar mx-4'></div>
        <div className='text-center mx-6 my-2'><h3 className='text-4xl'>5+</h3><p className='my-2'>Coverage</p></div>
        <div className='vertical-bar mx-4'></div>
        <div className='text-center mx-6 my-2'><h3 className='text-4xl'>10+</h3><p className='my-2'>Partners</p></div>
      </div>
      <h1 className='dancing-styles  absolute text-shadow large-web-text-3'>AI</h1>
    </div>
  )
}

export default Home
