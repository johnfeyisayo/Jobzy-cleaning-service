import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import cleaningItem from '../assets/kelly-sikkema-xp-ND7NjWaA-unsplash (1).png';
import icon1 from '../assets/phone.png';
import icon2 from '../assets/contact.png';
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export default function Contact() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_stsnrqw';
    const templateId = 'template_f735ylr';
    const publicKey = 'BRJxKiVOY5wD6fLO9';

    const temlateParams = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      location: location,
      to_name: 'Jobzy Services',
      message: message
    };

    emailjs
      .send(serviceId, templateId, temlateParams, publicKey)
      .then(() => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setLocation('');
        setMessage('');
      })
      .catch((error) => {
        toast.error('Could not send email');
        console.error('Error sending email:', error);
      });
    toast.success('Email sent successfully');
  };

  return (
    <div>
      <Navbar />
      <section className="h-auto font-inter ">
        <div className="relative w-[100%] gap-5 ">
          <img src={cleaningItem} className="overflow-hidden md:h-[400px] w-full brightness-75 " />
          <div className="flex  flex-col gap-6 absolute font-inter text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h2 className=" font-inter  text-bold text-[22px] md:text-[60px] mx-auto  px-3 ">
              Contact Us
            </h2>
            <h3 className="  text-xs md:text-base text-white md:w-[800px] p:[10px]">
              Get in touch with us to learn how we can help or support you
            </h3>
          </div>
        </div>
      </section>
      <section className="h-auto md:py-[100px]   md:bg-[#E5E4E2]  ">
        <form
          onSubmit={handleSubmit}
          className="text-left flex flex-col gap-7 md:gap-[40px]  md:w-[800px] justify-center  lg:ml-72  md:p-[60px] md:mt-0 p-[10px] bg-white rounded">
          <p className="font-bold   font-inter text-[25px] md:text-[40px] mx-auto  md:my-[0px] text-center ">
            Let&#39;s Talk
          </p>
          <div>
            <p className="text-xs pb-[4px]">FIRST NAME</p>
            <TextField
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <p className="text-xs pb-[4px]">LAST NAME</p>
            <TextField
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <p className="text-xs pb-[4px]">EMAIL</p>
            <TextField
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <p className="text-xs pb-[4px]">MESSAGE</p>
            <TextField
              className="h-[200px] w-full border border-[#6D6D6D] rounded  placeholder:text-base   "
              placeholder="Type your message..."
              multiline={true}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none placeholder:text-brightness-50 text-white bg-black hover:text-black hover:bg-[#E5E4E2]">
              Send Message
            </button>
          </div>
        </form>
      </section>
      <section className=" md:items-center text-center h-auto mt-[0px] md:p-[100px]  p-[20px] md:h-auto      ">
        <div className="md:flex  justify-evenly text-center  md:items-center0">
          <div className=" items-center  p-5  md:mx-[50px]  ">
            <img src={icon1} className=" ml-[90px]  p-3"></img>
            <p className=" font-inter text-[18px] font-semibold p-2">Call</p>
            <p className="md:h-[48px] md:w-[300px] font-inter text-[12px] font-small p-1">
              08134667015, 08133475062
            </p>
            <p className="md:h-[48px] md:w-[300px] font-inter text-[12px] font-small p-1 text-[#6D6D6D]">
              Our team is always available for a call between 8:00am - 5:00pm, 7 days a week
            </p>
          </div>
          <div className=" items-center   p-5  md:mx-[50px]">
            <img src={icon2} className=" ml-[90px] p-3"></img>
            <p className=" font-inter text-[18px] font-semibold p-2">Email</p>
            <p className=" md:h-[48px] md:w-[300px] font-inter text-[12px] font-small p-1">
              jobzyservicessolution@gmail.com
            </p>
            <p className="md:h-[48px] md:w-[300px] font-inter text-[12px] font-small p-1 text-[#6D6D6D]">
              Drop us an email and a member of our team will get back to you as soon as possible
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

//border-4 border-indigo-500/100
