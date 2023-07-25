import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

import img1 from '../assets/pexels-janitor-cleaning-window-resized (1).png';
import img2 from '../assets/crystal-de-passille-chabot-9gzU1mtTzWM-unsplash (1).png';
import img3 from '../assets/kelly-sikkema-xp-ND7NjWaA-unsplash (1).png';
import clientPicture from '../assets/Avatar Image.png';
import star from '../assets/Vector.png';

export default function CarouselComponent() {
  return (
    <div className="h-[600px] ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '25px'
        }}>
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
                  Make a Booking
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export const textData = [
  {
    id: 1,
    text: 'Jobzy Services Solution has been a lifesaver for me and my family! Their team, led by Mr. Adeolu, consistently delivers exceptional service. They pay attention to every detail and leave our home looking immaculate. I highly recommend their services.',
    img: clientPicture,
    name: 'Ibrahim S.',
    position: 'HR',
    companyName: 'Data Networks Inc'
  },
  {
    id: 2,
    text: "I recently moved into a new apartment and needed a deep cleaning. Jobzy Services Solution, under the guidance of Mr. Ibrahim, came to my rescue. I'm thoroughly impressed with their professionalism and would recommend them to anyone in need of top-notch cleaning services.",
    img: clientPicture,
    name: 'Sarah.J',
    position: 'HR',
    companyName: 'Intercontinental Services'
  },
  {
    id: 1,
    text: 'Jobzy Services Solution has been a lifesaver for me and my family! Their team, led by Mr. Adeolu, consistently delivers exceptional service. They pay attention to every detail and leave our home looking immaculate. I highly recommend their services.',
    img: clientPicture,
    name: 'Ibrahim S.',
    position: 'HR',
    companyName: 'Data Networks Inc'
  },
  {
    id: 2,
    text: "I recently moved into a new apartment and needed a deep cleaning. Jobzy Services Solution, under the guidance of Mr. Ibrahim, came to my rescue. I'm thoroughly impressed with their professionalism and would recommend them to anyone in need of top-notch cleaning services.",
    img: clientPicture,
    name: 'Sarah.J',
    position: 'HR',
    companyName: 'Intercontinental Services'
  }
];

export function CarouselCards() {
  return (
    <>
    <div className='h-[800px]'>
      
            <Swiper
            slidesPerView={2}
              effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
        style={{
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '25px'
        }}
       
              >
              <SwiperSlide>
                <div className="flex flex-col h-[200px] bg-[#5F6564] rounded-md  p-6  px-10 md:p-10 text-start gap-2 text-white">
                  <p className='md:text-base text-xs'>Jobzy Services Solution has been a lifesaver for me and my family! Their team, led by Mr. Adeolu, consistently delivers exceptional service. They pay attention to every detail and leave our home looking immaculate. I highly recommend their services.</p>
                  <div className='flex flex-row'>
                    <div className='text-xs'>
                      <img src={clientPicture} className='w-[40px]'></img>
                      
                      <p className='md:hidden'> Ibrahim S.</p>
                      <p className='md:block hidden'> Ibrahim S.</p>
                  
                    <div className=' hidden  md:gap-[950px] md:flex md:h-[20px] md:justify-between '>
                
                
                    <p> HR, Services</p>
                   
                    <p className=' flex  '>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    </p>
                    </div>
                    </div> 
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col h-[200px] bg-[#5F6564] rounded-md  p-6  px-10 md:p-10 text-start gap-2 text-white">
                  <p className='md:text-base text-xs'> I recently moved into a new apartment and needed a deep cleaning. Jobzy Services Solution, under the guidance of Mr. Ibrahim, came to my rescue. I am thoroughly impressed with their professionalism and would recommend them to anyone in need of top-notch cleaning services.</p>
                  <div className='flex flex-row'>
                    <div className='text-xs'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2S_qCF4y8hAuM9Q6hU744HVomfvzdjhhWyq_oAWb2A&s' className='w-[40px] rounded-full'></img>
                      
                      <p className='md:hidden'> Sarah.J</p>
                      <p className='md:block hidden'> Sarah.J</p>
                  
                    <div className=' hidden  md:gap-[950px] md:flex md:h-[20px] md:justify-between '>
                
                
                    <p> Data Networks Inc</p>
                   
                    <p className=' flex  '>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    </p>
                    </div>
                    </div> 
                  </div>
                </div>
              </SwiperSlide>
             
            </Swiper>
            </div>
    </>
  );
}
