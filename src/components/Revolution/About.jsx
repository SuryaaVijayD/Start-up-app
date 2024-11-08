import React, { useEffect } from 'react';
import AOS from "aos"
import 'aos/dist/aos.css'
import "./Aboutcss.css"


function About() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    let url1 = "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1731053358/ai_thread_rr3zui.webp";
    let url2 = "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1731053356/ai_image_b5p2ev.webp";
    let url3 = "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1731053356/const_monitoring_tsjkfc.webp";
    const cardData = [
        {
            id: 'collapseCard1',
            imgSrc: url1,
            title: 'Constant Monitoring',
            description: 'Our team constantly monitors websites, apps, and more.',
        },
        {
            id: 'collapseCard2',
            imgSrc: url2,
            title: 'Automatic Triage',
            description: 'Neutralize threats without human intervention.',
        },
        {
            id: 'collapseCard3',
            imgSrc: url3,
            title: 'AI-based Solutions',
            description: 'We provide AI-based solutions to improve society.',
        },
    ];
    return (
        <div id="About" className='mx-4 lg:mx-24 my-24'>
            <div className='flex gap-4 text-lg my-6' data-aos="fade-right">
                <span className='text-2xl'>02</span>
                <h3 className='h-8 w-40 bg-black text-white text-center rounded-md'>About</h3>
            </div>
            <h1 className='text-4xl lg:text-6xl my-6' data-aos="fade-up">Our Team has been creating a unique and powerful product for 2 years.</h1>
            <h1 className='text-2xl lg:text-5xl text-gray-700 my-4' data-aos="fade-up">A team of 10+ People.</h1>


            <div className='my-16 w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {cardData.map((card) => (
                        <div
                            key={card.id}

                            className='rounded-2xl shadow-lg flex flex-col items-center p-6 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl transition-all duration-300'
                        >
                            <img src={card.imgSrc} alt={card.title} className='w-full img rounded-2xl' />
                            <div>
                                <h2 className='text-xl font-semibold my-3 text-center'>{card.title}</h2>
                                <p className='text-gray-700 text-center'>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    )
}

export default About
