import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
 //fixed top-0 left-0 right-0 p-3 for fixed positioning
    <div className=" flex   bg-black ">
   
      <img src={logo} className=""></img>
      <RxHamburgerMenu
        className="text-white w-10 items-center mt-5 md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <ul className="font-bold bg-[#E5E4E2] hover:bg-white absolute top-[10%] right-0 bottom-[270px] w-[60%] p-[10%] text-white flex flex-col gap-[30px]">
          
          <Link to="/">
            <li className="">Home</li>
          </Link>
          <Link to="/#about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
        </ul>
        
      )}
      <ul className="hidden lg:flex   md:h-20 md:gap-[30px] md:mr-[2%] text-white  items-center md:ml-10 ">
          <div className='md:flex md:gap-[20px] whitespace-nowrap'>
          <Link to="/">
            <li className=" ">Home</li>
          </Link>
          <Link to="/#about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          </div>
          <Link to="/booking">
       <button className="border md:block md:w-36 md:h-12  md:ml-[820px] md:border-slate-300 md:rounded md:hover:bg-white md:hover:text-black space-x-6 md:text-white md:hover:border-slate-400  "> Make a Booking  </button>
        </Link>
      
        </ul>
        <Link to="/booking">
        <button className="md:hidden border mt-[15px] ml-[150px] w-28 h-8 border-slate-300 rounded space-x-6 text-white  text-xs  hover:text-black hover:bg-white"> Make a Booking  </button>
        </Link>
        
        
    </div>
  );
}

