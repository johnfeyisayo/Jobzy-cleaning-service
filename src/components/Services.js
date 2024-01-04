import React from 'react';
// import cardImage from '../assets/pexels-tima-miroshnichenko-6195125 (3).png';
import Navbar from './Navbar';
import { CardData } from './Cards';
import cleaningitem from '../assets/crystal-de-passille-chabot-9gzU1mtTzWM-unsplash (1).png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Services() {
  return (
    <div className=" bg-[#E5E4E2]">
      <Navbar />
      <div className="text-white text-center" id="services-bg">
        <h1 className="font-inter font-bold text-2xl h-0 py-8 md:text-6xl lg:pt-32">
          Our Services
        </h1>
        <p className="font-Roboto text-xs md:text-xl lg:mt-10">
          Get in touch with us to learn how we can help or support you
        </p>
      </div>
      <div className="mt-12 font-inter bg-[#E5E4E2] sm:grid grid-cols-2 gap-10 gap-x-10 lg:grid-cols-3 ">
        {CardData.map((card) => {
          return (
            <div
              key={card.id}
              className="cursor-pointer hover:scale-110 duration-500  bg-white rounded-md shadow-lg mb-10 mx-8 ">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-t-md w-full font-bold"
                id="card-image"
              />
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
      <section className="h-auto mt-10 ">
        <div className="relative w-[100%] gap-5 ">
          <img src={cleaningitem} className="overflow-hidden h-[400px] w-[100%] brightness-75" />
          <div className="flex  flex-col gap-6 absolute font-inter text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h2 className=" font-inter text-[22px] md:text-[40px] mx-auto  px-3 ">
              We clean so you don’t have to.
              <br />
              Let’s work together
            </h2>
            <h3 className="  text-xs md:text-base text-white md:w-[800px] p:[10px]">
              Take charge, you’re one step away from having a clean space.
            </h3>

            <Link to="/booking ">
              <button className=" hover:bg-white hover:text-black  md:text-base text-xs md:mt-[20px] h-6 md:ml-[300px] text-[14px] border md:block md:w-40 md:h-12  bg-black  md:border-slate-300 md:rounded  md:hover:bg-black md:hover:text-white space-x-6 md:text-white md:hover:border-slate-400  ">
                Make a Booking
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
