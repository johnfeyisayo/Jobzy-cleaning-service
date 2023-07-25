import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import icon1 from '../assets/Frame 1.png';
import icon2 from '../assets/Frame 2.png';
import icon3 from '../assets/Frame 3.png';
import gloves from '../assets/pexels-putting-on-gloves-resized (1).png';
import { Filtered } from './Cards';
import cleaningItems from '../assets/anton-SnKfmC1I9fU-unsplash (1).png';
import { CarouselCards } from './Carousel';
import cleaningitem from '../assets/crystal-de-passille-chabot-9gzU1mtTzWM-unsplash (1).png';
import Carousel from './Carousel';
import logo from '../assets/logo.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
      <section className="bg-[#E5E4E2] h-auto md:p-[100px] text-center p-10   flex flex-col gap-5">
        <div className=" pb-10">
          <h2 className="font-bold font-inter text-[25px] md:text-[40px] mx-auto  md:my-[0px]  ">
            Our Services
          </h2>
          <p className=" text-sm md:text-base  ">
            We offer a wide range of cleaning services to cater to residential and commercial
            clients.
            <br /> Our services include:
          </p>
        </div>
        <Filtered />
        <Link to="/services ">
          <button className=" hover:bg-white  md:text-base text-sm md:mt-[30px] h-6 w-20 md:ml-[550px] text-[14px]  md:block md:w-36 md:h-12  border-black  text-black border-2 md:border-black-300 md:rounded  md:hover:bg-black md:hover:text-white space-x-6 md:text-black md:hover:border-slate-400  ">
            View all
          </button>
        </Link>
      </section>

      <section className="h-auto ">
        <div className="relative w-[100%] gap-5 ">
          <img src={cleaningItems} className="overflow-hidden h-[600px] w-[100%]" />
          <div className="flex  flex-col gap-6 absolute font-inter text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h2 className=" font-inter text-[22px] md:text-[40px] mx-auto  px-3 ">
              Why Choose Jobzy Services Solution?
            </h2>
            <h3 className="  text-xs md:text-base text-white md:w-[800px] p:[10px]">
              We are committed to delivering exceptional cleaning services consistently. Our team is
              trained to maintain the highest standards of quality and reliability. We prioritize
              the health and well-being of our clients and the environment.
            </h3>
            <div className="flex md:flex-row  flex-col md:gap-24 gap-2    md:p-6">
              <div className="">
                <h2 className="font-inter text-[25px] md:text-[40px] mx-auto   md:px-3">100+</h2>
                <p className="text-xs ">Happy Customers</p>
              </div>
              <div className="">
                <h2 className="font-inter text-[25px] md:text-[40px] mx-auto   md:px-3">200+</h2>
                <p className="text-xs">Cleans Completed</p>
              </div>
              <div className="">
                <h2 className="font-inter text-[25px] md:text-[40px] mx-auto   md:px-3">100+</h2>
                <p className="text-xs">Cleaners Employed</p>
              </div>
              <div className="">
                <h2 className="font-inter text-[25px] md:text-[40px] mx-auto  md:px-3">100%</h2>
                <p className="text-xs   whitespace-nowrap ">Customers Satisfaction</p>
              </div>
            </div>
            <Link to="/booking ">
              <button className=" hover:bg-white hover:text-black  md:text-base text-xs md:mt-[20px] h-6 md:ml-[350px] text-[14px] border md:block md:w-40 md:h-12  bg-black  md:border-slate-300 md:rounded  md:hover:bg-black md:hover:text-white space-x-6 md:text-white md:hover:border-slate-400  ">
                Make a Booking
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#E5E4E2] h-[500px] md:p-[100px] text-center p-10   flex flex-col gap-5">
        <div className=" pb-10">
          <h2 className="font-bold font-inter text-[25px] md:text-[40px] mx-auto  md:my-[0px]  ">
            What Our Customers Say About Us
          </h2>
          <p className=" text-sm md:text-base  ">
            Testimonials from our esteemed and loyal customers
          </p>
        </div>
        <CarouselCards />
      </section>
      <section className="h-auto ">
        <div className="relative w-[100%] gap-5 ">
          <img src={cleaningitem} className="overflow-hidden h-[400px] w-[100%]" />
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
      {/* footer */}

      <section className="h-auto  bg-[#E5E4E2] text-center  p-10">
        <div className=" p-10">
          <h2 className="font-bold font-inter text-[25px] md:text-[40px] mx-auto  md:my-[0px]  ">
            FAQs
          </h2>
          <p className=" text-sm md:text-base  ">
            Here are some frequently asked questions (FAQs) for your cleaning service website:
          </p>
        </div>
        <div className="  border border-cyan-950  text-left">
          <div className="flex flex-row  border-y-2 border-black-500">
            <p>What cleaning services do you offer?</p>
            <ArrowDropDownIcon />
          </div>
          <div className="flex flex-row h[40px]md:w-[150px]">
            <p>Are your cleaners experienced and trustworthy?</p>
            <ArrowDropDownIcon />
          </div>
          <div className="flex flex-row h[40px]md:w-[150px]">
            <p>Do I need to provide cleaning supplies?</p>
            <ArrowDropDownIcon />
          </div>
          <div className="flex flex-row h[40px]md:w-[150px]">
            <p>How do I schedule a cleaning service?</p>
            <ArrowDropDownIcon />
          </div>
          <div className="flex flex-row h[40px]md:w-[150px]">
            <p>AIs your cleaning service insured?</p>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className=" p-10 flex flex-col gap-2">
          <h2 className="font-bold font-inter text-[18px] md:text-[20px] mx-auto  md:my-[0px]  ">
            Still have a question?
          </h2>
          <p className=" text-sm md:text-base  ">
          If you have any lingering questions or concerns, do not hesitate to reach out to us.
          </p>
          <Link to="/services ">
          <button className=" hover:bg-white  md:text-base text-sm md:mt-[30px] h-6 w-20 md:ml-[550px] text-[14px]  md:block md:w-36 md:h-12  border-black  text-black border-2 md:border-black-300 md:rounded  md:hover:bg-black md:hover:text-white space-x-6 md:text-black md:hover:border-slate-400  ">
            Contact Us
          </button>
        </Link>
        </div>
      </section>
      <div className="  bg-[black]  h-auto p-10 text-white text-center md:text-left text-xs md:text-base">
        <section className="  md:flex md:flex-row relative container mx-auto md:gap-[350px]  ">
          <div className="p-4 md:flex md:flex-col  md:text-sm">
            <img src={logo} className="hidden md:block h-[50px] w-[50px] "></img>
            <p className="text-base md:mt-[40px] md:text-base">Address:</p>
            <p className="md:mt-[10px] text-xs ">Lagos, Ogun, Nigeria</p>
            <p className="mt-[30px] text-base md:text-base">Contact:</p>

            <p className="mt-[10px]">08134667015</p>
            <p className="mt-[10px]">09129466346</p>
            <p className="mt-[10px]">Jobzyservicessolution@gmail.com</p>
          </div>

          <div className="flex flex-col  text-xs text-white  md:text-base">
            <ul className=" md:w-28  md:mt-[20px] flex flex-col gap-4 md:text-sm ">
              <p className="text-base">Quick Links</p>
              <Link>
                <li className="text-white">About Us</li>
              </Link>
              <Link>
                <li className="] hover:text-orange">Contact Us</li>
              </Link>
              <Link>
                <li className="  hover:text-orange">Services</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col  text-xs text-white md:text-sm">
            <Link>
              <p className="md:text-base text-base hover:text-orange my-[20px]">FAQs</p>
            </Link>
            <ul className="   flex flex-col gap-4">
              <p className="">Cleaning Services</p>

              <li className="text-white">Janitorial/ Commercial</li>
              <li className="text-white">Home/ Residentials</li>
              <li className="text-white">Fumigation & Pest Control</li>
              <li className="text-white">Post Construction, Pre-moving & End of Tenancy</li>
              <li className="text-white">Hotel/ Restaurant</li>
              <li className="text-white">Carpet, Rug & Upholstery</li>
              <li className="text-white">Event/ Pre & After Party</li>
              <li className="text-white">Marble & Floor Restoration</li>
              <li className="text-white">Facade/ Window</li>

              <li className=" hover:text-orange">Contact Us</li>
            </ul>
          </div>
        </section>
        <div className="border-b-2 border-[white] mt-[30px]"></div>
        <div className="flex flex-row  items-center justify-between">
          <div>
            <p className="text-[white] mt-[23px]">© 2023 All rights reserved.</p>
          </div>
          <div className="flex flex-row gap-[20px]">
            <Link to="https://www.instagram.com/jobzyservices/">
              <InstagramIcon />
            </Link>
            <Link to="">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// border-4 border-indigo-500/100
