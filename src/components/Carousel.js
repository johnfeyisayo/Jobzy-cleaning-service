
import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/pexels-janitor-cleaning-window-resized (1).png';
import img2  from "../assets/crystal-de-passille-chabot-9gzU1mtTzWM-unsplash (1).png";
import img3  from "../assets/kelly-sikkema-xp-ND7NjWaA-unsplash (1).png";

export default function CarouselComponent() {
  return (
    <div className="h-[600px] ">
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
    "--swiper-pagination-color": "#fff",
    "--swiper-navigation-color": "#fff",
    "--swiper-navigation-size": "25px",
  }}
      >
        <SwiperSlide>
        <div className="relative">
          <img src={img1} className="md:h-[750px] md:w-[100%] h-[500px] "></img>
          <div className="0 flex flex-col gap-6 absolute font-inter text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h1 className="md:font-bold  text-[20px] md:text-[60px] whitespace-nowrap">
              Welcome to Jobzy Services Solution
              <br />
              Your Trusted Cleaning Partner
            </h1>
            <p className="text-[12px] md:text-[18px]">
              We are passionate about creating spotless environments that inspire. Trust us to
              deliver an unmatched cleaning experience that exceeds your expectations.
            </p>

            <Link to="/booking ">
              <button className=" hover:bg-white hover:text-black  md:text-base text-xs md:mt-[20px] h-6 md:ml-[450px] text-[14px] border md:block md:w-40 md:h-12  bg-black  md:border-slate-300 md:rounded  md:hover:bg-black md:hover:text-white space-x-6 md:text-white md:hover:border-slate-400  ">
             
                Make a Booking
              </button>
            </Link>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
          <img src={img2} className="md:h-[750px] md:w-[100%] h-[500px] "></img>
          <div className="0 flex flex-col gap-6 absolute font-inter text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h1 className="md:font-bold  text-[20px] md:text-[60px] whitespace-nowrap">
              Welcome to Jobzy Services Solution
              <br />
              Your Trusted Cleaning Partner
            </h1>
            <p className="text-[12px] md:text-[18px]">
              We are passionate about creating spotless environments that inspire. Trust us to
              deliver an unmatched cleaning experience that exceeds your expectations.
            </p>

            <Link to="/booking ">
              <button className=" hover:bg-white hover:text-black  md:text-base text-xs md:mt-[20px] h-6 md:ml-[450px] text-[14px] border md:block md:w-40 md:h-12  bg-black  md:border-slate-300 md:rounded  md:hover:bg-black md:hover:text-white space-x-6 md:text-white md:hover:border-slate-400  ">
                {' '}
                Make a Booking{' '}
              </button>
            </Link>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
          <img src={img3} className="md:h-[750px] md:w-[100%] h-[500px] "></img>
          <div className="0 flex flex-col gap-6 absolute font-inter text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h1 className="md:font-bold  text-[20px] md:text-[60px] whitespace-nowrap">
              Welcome to Jobzy Services Solution
              <br />
              Your Trusted Cleaning Partner
            </h1>
            <p className="text-[12px] md:text-[18px]">
              We are passionate about creating spotless environments that inspire. Trust us to
              deliver an unmatched cleaning experience that exceeds your expectations.
            </p>

            <Link to="/booking ">
              <button className=" hover:bg-white hover:text-black  md:text-base text-xs md:mt-[20px] h-6 md:ml-[450px] text-[14px] border md:block md:w-40 md:h-12  bg-black  md:border-slate-300 md:rounded  md:hover:bg-black md:hover:text-white space-x-6 md:text-white md:hover:border-slate-400  ">
                {' '}
                Make a Booking{' '}
              </button>
            </Link>
          </div>
        </div>
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
}

