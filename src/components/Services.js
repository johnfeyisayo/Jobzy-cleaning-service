import React from 'react';
// import cardImage from '../assets/pexels-tima-miroshnichenko-6195125 (3).png';
import Navbar from './Navbar';
import { CardData } from './Cards';

function Services() {
  return (
    <div className=" bg-[#E5E4E2]">
      <Navbar />
      <div className="text-white text-center" id="services-bg">
        <h1 className="font-inter font-bold text-2xl py-8 border h-10 md:text-4xl">Our Services</h1>
        <p className="font-Roboto text-xs border md:text-xl ">
          Get in touch with us to learn how we can help or support you
        </p>
      </div>
      <div className="m-8 mt-12 font-Roboto bg-[#E5E4E2] sm:grid grid-cols-2 gap-10 gap-x-10 md:gap-x-2 lg:grid-cols-3 gap-x-0 mt-16 ">
        {CardData.map((card) => {
          return (
            <div
              key={card.id}
              className="cursor-pointer hover:scale-110 duration-500  bg-white rounded-md shadow-lg mb-10 sm:w-72 lg:w-96 mx-8 ">
              <img src={card.img} alt={card.title} className="rounded-t-md w-full font-bold"  id='card-image'/>
              <div className="flex flex-col gap-3 p-5">
                <h3 className="uppercase text-lg ">{card.title}</h3>
                <p className="text-xs text-[#828181]">{card.description}</p>
                <h3 className="uppercase text-sm font-bold">{card.subtitle}</h3>
                <p className="text-xs text-[#828181]">{card.services}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
