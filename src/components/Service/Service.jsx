import React, { useEffect } from 'react';
import AOS from "aos"
import 'aos/dist/aos.css'
import './Servicecss.css'; // Import the CSS file

const userFeedback = [
  { id: 1, name: "Customer", days: "10days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim veniam" },
  { id: 2, name: "Customer", days: "10days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim veniam" },
  { id: 3, name: "Customer", days: "10days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim veniam" },
  { id: 4, name: "Customer", days: "10days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim veniam" },
  { id: 5, name: "Customer", days: "10days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim veniam" },
  { id: 6, name: "Customer", days: "10days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim veniam" },
];
const MobileCard = [
  { id: 5, name: "Customer", days: "10days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim veniam" },
  { id: 6, name: "Customer", days: "10days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, minim veniam" },
];


const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id='Service' className='h-92 mt-24 bg-gray-100 py-8'>
      <h1 className='text-center text-3xl mb-20' data-aos="fade-up">Services & Feedback</h1>
      <div className='hidden md:block' data-aos="fade-left">
        <div className='scroll-container mb-11'>
          <div className='scroll-wrapper'>
            {userFeedback.map((card) => (
              <div key={card.id} className='card'>
                <div className='flex items-center justify-center'>
                  <div className='avatar'></div>
                  <div className='ml-4'>
                    <h1 className='text-lg'>{card.name}</h1>
                    <p className='text-gray-400'>{card.days}</p>
                  </div>
                </div>
                <div className='mt-2'>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
            {userFeedback.map((card) => (
              <div key={card.id + '-dup'} className='card'>
                <div className='flex items-center'>
                  <div className='avatar'></div>
                  <div className='ml-4'>
                    <h1 className='text-lg'>{card.name}</h1>
                    <p className='text-gray-400'>{card.days}</p>
                  </div>
                </div>
                <div className='mt-2 px-48'>
                  <p>{card.description}</p>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='scroll-container'>
          <div className='scroll-wrapper'>
            {userFeedback.map((card) => (
              <div key={card.id} className='card'>
                <div className='flex items-center justify-center'>
                  <div className='avatar'></div>
                  <div className='ml-4'>
                    <h1 className='text-lg'>{card.name}</h1>
                    <p className='text-gray-400'>{card.days}</p>
                  </div>
                </div>
                <div className='mt-2'>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
            {userFeedback.map((card) => (
              <div key={card.id + '-dup'} className='card'>
                <div className='flex items-center'>
                  <div className='avatar'></div>
                  <div className='ml-4'>
                    <h1 className='text-lg'>{card.name}</h1>
                    <p className='text-gray-400'>{card.days}</p>
                  </div>
                </div>
                <div className='mt-2 px-48'>
                  <p>{card.description}</p>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {MobileCard.map((card) => (
          <div key={card.id} className='mb-8 mx-6 p-4 rounded-md shadow-lg md:hidden'>
            <div className='flex items-center justify-center'>
              <div className='avatar'></div>
              <div className='ml-4'>
                <h1 className='text-lg'>{card.name}</h1>
                <p className='text-gray-400'>{card.days}</p>
              </div>
            </div>
            <div className='mt-2'>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
