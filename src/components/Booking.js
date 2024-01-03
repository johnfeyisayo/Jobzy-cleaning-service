import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Booking() {
  return (
    <div className=" bg-#505050">
      <Navbar />
      <div className="text-white text-center" id="services-bg">
        <h1 className="font-inter font-bold text-2xl h-0 py-8 md:text-6xl lg:pt-32">
          Make A Booking
        </h1>
        <p className="font-Roboto text-xs md:text-xl lg:mt-10">
          You&apos;re on the right track to get your space looking beautiful again
        </p>
      </div>
      {/* <section className="text-white text-center" id="services-bg">
        <h1 className=" sm:font-inter font-bold text-2xl h-0 py-8 md:text-6xl">
        Make A Booking
        </h1>
        <p className="font-Roboto text-xs md:text-xl">
        You’re on the right track to get your space looking beautiful again
        </p>
      </section> */}
      <section className="h-auto  text-gray-700 font-inter md:py-[100px] bg-[#E5E4E2]  ">
        <div className="text-left flex flex-col gap-7 md:gap-[40px] h-auto md:w-[800px] justify-center   md:ml-[300px] md:p-[60px] md:mt-0 p-[10px] bg-white rounded">
          <p className="font-bold  text-[25px] md:text-[40px]   md:my-[0px] text-center ">
            Book a cleaning service
          </p>
          <hr className="w-full"></hr>
          <p className="font-bold text-sm">CONTACT INFORMATION</p>
          <p className="text-xs -mt-6 ">This information will be used to contact you about your services</p>
          <div className="md:flex border justify-between">
          <div>
            <p className="text-xs pb-[4px]">FIRST NAME</p>
            <input
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none md:w-96"
              placeholder="First Name"
            />
          </div>
          <div className="my-7 md:mt-0">
            <p className="text-xs pb-[4px]">LAST NAME</p>
            <input
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
              placeholder="Last Name"
            />
          </div>
          </div>
          <div className=" -mt-5 md:flex">
          <div>
            <p className="text-xs pb-[4px]">EMAIL</p>
            <input
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
              placeholder="Email"
            />
          </div>
          <div className="my-7 md:mt-0">
            <p className="text-xs pb-[4px]">PHONE</p>
            <input
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
              placeholder="Phone Number"
            />
          </div>
          </div>
          <div>
            <p className="text-xs pb-[4px]">MESSAGE</p>
            <textarea
              className="h-[200px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base   "
              placeholder="Type your message..."
            />
          </div>
          <div>
            <button
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none placeholder:text-brightness-50 text-white bg-black hover:text-black hover:bg-[#E5E4E2]"
              placeholder="Type your message...">
              Send Message
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
