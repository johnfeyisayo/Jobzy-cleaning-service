import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-black justify-between items-center pl-4">
      <div className="ml-3">
        <img src={logo} className="h-12 md:hidden" alt="Logo" />
        <img src={logo} className="hidden md:block h-16" alt="Logo" />
      </div>
      <RxHamburgerMenu
        className="text-white w-10 items-center mt-5 md:hidden mr-3"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <ul className="font-bold bg-black hover:bg-white absolute top-[10%] right-0 bottom-[270px] w-[60%] p-[10%] text-white flex flex-col gap-[30px] z-50">
          <Link to="/">
            <li className="">Home</li>
          </Link>

          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/booking">
            <li>Booking</li>
          </Link>
        </ul>
      )}
      <ul className="hidden lg:flex mx-auto md:h-20 md:gap-[30px] md:mr-[2%] text-white items-center md:ml-10 ">
        <div className="md:flex md:gap-[20px] whitespace-nowrap">
          <Link to="/">
            <li className="">Home</li>
          </Link>

          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
        </div>
        <li>
          <Link to="/booking">
            <button className="border border-slate-300 rounded md:hover:bg-white md:hover:text-black text-xl  h-10 px-2 text-white md:text-sm hover:border-slate-400">
              Make a Booking
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
