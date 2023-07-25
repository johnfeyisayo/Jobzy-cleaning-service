import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Footer() {
  return (
    <div>
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
}
