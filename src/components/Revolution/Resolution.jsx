import React from 'react';
import { ImQuotesLeft } from "react-icons/im";
import "./Resolutioncss.css"

const cardList = [
  {
    id: 1,
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    order: 1,
    imgurl: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1722534182/group_usqrbc.jpg"
  },
  {
    id: 2,
    title: "Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    order: 2,
    imgurl: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1722534182/group_usqrbc.jpg"
  },
  {
    id: 3,
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    order: 3,
    imgurl: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1722534182/group_usqrbc.jpg"
  },
];

const Resolution = () => {
  return (
    <div id='Revolution' className='mt-8 md:px-24 px-7 relative'>
      <div>
        <h2 className='text-center text-4xl mt-10 mb-14'>Revolution</h2>
        {cardList.map((card, index) => (
          <div 
            key={card.id} 
            className={`flex flex-col md:flex-row mb-10 shadow-2xl rounded-lg ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className='w-full md:w-2/4'>
              <img 
                src={card.imgurl} 
                alt={card.title} 
                className='w-full height-img object-cover' 
              />
            </div>
            <div className='w-full md:w-2/4 px-4 py-6 flex flex-col justify-center gap-4'>
              <ImQuotesLeft className='text-3xl text-black'/>
              <h1 className='text-2xl md:text-4xl font-semibold px-3'>{card.title}</h1>
              <p className='text-gray-700 px-3'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='hidden md:block dancing-style text-shadow absolute large-web-text '>B</div>
      <div className='hidden md:block dancing-style text-shadow absolute large-web-text-2 '>R</div>
    </div>
  );
};

export default Resolution;
