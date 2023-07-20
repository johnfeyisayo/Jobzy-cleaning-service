import React from 'react';
import Navbar from './Navbar';
import icon1 from '../assets/Frame 1.png';
import icon2 from '../assets/Frame 2.png';
import icon3 from '../assets/Frame 3.png';
import gloves from '../assets/pexels-putting-on-gloves-resized (1).png';
import {Filtered} from "./Cards"
// import cleaningitems  from "../assets/anton-SnKfmC1I9fU-unsplash (1).png"
// import cleaningitem  from "../assets/crystal-de-passille-chabot-9gzU1mtTzWM-unsplash (1).png";
import Carousel from './Carousel';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel className="" />
      {/* h-[600px] w-full bg-red-50 */}
      <div className=" md:items-center text-center h-auto md:mt-[100px] mt-[0px]  p-[20px] md:h-auto md:bg-[#E5E4E2] md:py-[70px] ">
        <h2 className="font-bold font-inter text-[25px] md:text-[40px] mx-auto  md:my-[0px] p-3 ">
          How it Works
        </h2>

        <section className="md:flex  text-center md:w-[1240px] md:h-[222px] md:items-center  md:pt-[40px] md:ml-[40px] md:mt-[40px]">
          <div className=" items-center  justify-center  p-5  md:mx-[50px] ">
            <img src={icon1} className=" ml-[80px] p-3"></img>
            <p className=" font-inter text-[18px] font-semibold p-2">Place a booking</p>
            <p className="md:h-[48px] md:w-[300px] font-inter text-[12px] font-small p-1">
              Choose a convenient date and time for your cleaning service.{' '}
            </p>
          </div>
          <div className=" items-center  justify-center  p-5  md:mx-[50px]">
            <img src={icon2} className=" ml-[80px] p-3"></img>
            <p className=" font-inter text-[18px] font-semibold p-2">We do the cleaning</p>
            <p className=" md:h-[48px] md:w-[300px] font-inter text-[12px] font-small p-1">
              We will transform your space into a fresh and welcoming environment.{' '}
            </p>
          </div>{' '}
          <div className=" items-center  justify-center  p-5  md:mx-[50px]">
            <img src={icon3} className=" ml-[80px] p-3"></img>
            <p className=" font-inter text-[18px] font-semibold p-2">You’re happy</p>
            <p className=" md:h-[48px] md:w-[300px] font-inter text-[12px]  p-1">
              Your satisfaction is our top priority and we value your feedback.{' '}
            </p>
          </div>
        </section>
      </div>
      <section className="h-auto opacity-100 ">
        <div className="relative w-[100%] ">
          <img src={gloves} className="overflow-hidden h-[300px] w-[100%]" />
          <div className="flex flex-col gap-2 absolute font-inter text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h2 className=" font-inter text-[25px] md:text-[40px] mx-auto   px-3">Who We Are</h2>
            <h3 className=" font-inter text-[18px] md:text-[25px] mx-auto  md:my-[0px] p-3">
              #1 Cleaning Service in Nigeria
            </h3>
            <p className=" text-xs md:text-sm text-white">
              We are passionate about cleanliness. With years of experience in the industry, we have
              built a reputation for delivering top-notch cleaning services tailored to our clients
              needs. Our dedicated team of cleaning experts is committed to providing a thorough and
              reliable cleaning experience.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-[#E5E4E2] h-auto md:p-[100px] text-center p-10   flex flex-col gap-5'>
      <div  className=' '>
      <h2 className="font-bold font-inter text-[25px] md:text-[40px] mx-auto  md:my-[0px]  ">
          Our Services
        </h2>
        <p className=" text-sm md:text-sm ">We offer a wide range of cleaning services to cater to residential and commercial clients.
        <br/> Our services include</p>
      </div>
      <Filtered/>
      </section>
    
    </div>
  );
};

export default Home;

// border-4 border-indigo-500/100
