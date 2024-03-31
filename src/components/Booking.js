import React, { useState } from 'react';
import Navbar from './Navbar';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';

import emailjs from '@emailjs/browser';
import Footer from './Footer';
import { toast } from 'sonner';

export default function Booking() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_stsnrqw';
    const templateId = 'template_2hs7z0o';
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
        toast.error('Error sending email:', error);
      });
    toast.success('Booking secured!');
  };

  return (
    <div className=" bg-#505050">
      <Navbar />
      <div className="text-white text-center" id="services-bg">
        <h1 className="font-inter  text-2xl h-0 py-8 md:text-6xl lg:pt-32">Make A Booking</h1>
        <p className="font-Roboto text-xs md:text-xl md:mt-10">
          You&apos;re on the right track to get your space looking beautiful again
        </p>
      </div>
      <section className="h-auto  text-gray-700 font-inter md:py-20 md:px-60 bg-[#E5E4E2]  ">
        <form onSubmit={handleSubmit} className="text-left flex flex-col gap-7  bg-white rounded">
          <p className="font-bold text-black  md:pt-[30px] pt-4 md:text-[40px]   md:my-[0px] text-center ">
            Book a cleaning service
          </p>
          <hr />
          <div className=" md:px-16 px-10 flex flex-col gap-3">
            <div className="flex flex-col ">
              <p className="font-bold text-md">CONTACT INFORMATION</p>
              <p className="text-xs mb-5  ">
                This information will be used to contact you about your bookings
              </p>
            </div>

            <div className="md:flex  w-full gap-6 ">
              <div className=" w-full">
                <p className="text-xs pb-[4px]">FIRST NAME</p>
                <TextField
                  className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none  md:w-full"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="my-7 md:mt-0 w-full">
                <p className="text-xs pb-[4px]">LAST NAME</p>
                <TextField
                  className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="md:flex  w-full gap-6 ">
              <div className=" w-full">
                <p className="text-xs pb-[4px]">EMAIL</p>
                <TextField
                  className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none  md:w-full"
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-7 md:mt-0 w-full">
                <p className="text-xs pb-[4px]">PHONE</p>
                <TextField
                  className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <p className="text-xs pb-[4px]">LOCATION</p>
              <TextField
                className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <hr />
          <div className="md:px-16 px-10  flex flex-col gap-3">
            <div className="flex flex-col ">
              <p className="font-bold text-md">SERVICE REQUESTED</p>
              <p className="text-xs mb-5  ">
                Select the service you want (you can select multiple services)
              </p>
            </div>
            <div>
              <FormGroup className=" gap-2">
                <div className=" grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-1">
                  <FormControlLabel
                    className="text-sm"
                    control={<Checkbox size="small" />}
                    label=" Janitorial/Commercial Cleaning"
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label=" Home/Residential Cleaning"
                  />{' '}
                </div>
                <div className=" grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-1">
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label=" Fumigation & Pest Control"
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="   Post Construction, Pre-moving/ End of Tenancy Cleaning"
                  />{' '}
                </div>
                <div className=" grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-1">
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label=" Hotel/ Restaurant Cleaning"
                  />{' '}
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label=" Carpet, Rug & Upholstery Cleaning"
                  />
                </div>
                <div className=" grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-1">
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label=" Event/ Pre & After Party Cleaning"
                  />{' '}
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label=" Marble & Floor Restoration"
                  />{' '}
                </div>

                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label=" Facade/ Window Cleaning"
                />
              </FormGroup>
            </div>
            <div className="  flex flex-col md:flex-row gap-10 mt-5">
              <div>
                <p className="text-xs pb-[4px] whitespace-nowrap">PICK REQUIRED DAY</p>
                <DatePicker label="Pick Date" />
              </div>
              <div>
                <p className="text-xs pb-[4px]">TIME IN</p>
                <TimePicker />
              </div>{' '}
              <div>
                <p className="text-xs pb-[4px]">TIME OUT</p>
                <TimePicker />
              </div>
            </div>
          </div>
          <div className="md:px-16 px-10 ">
            <FormControl>
              <p className="text-xs pb-[4px]">HOW DO YOU WANT OUR SERVICE?</p>
              <div></div>
              <RadioGroup
                row
                cl
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ots"
                name="radio-buttons-group"
                className=" md:flex md:flex-col  ">
                <FormControlLabel value="ots" control={<Radio />} label="One-Time Service" />
                <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
                <FormControlLabel value="bw" control={<Radio />} label="Bi-Weekly" />
                <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
              </RadioGroup>
            </FormControl>
          </div>

          <hr />

          <div className="md:px-16 px-10 ">
            <p className="text-xs pb-[4px]">ADDITIONAL INFORMATION</p>
            <TextField
              className="h-[200px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-sm "
              placeholder="Type your message..."
              multiline={true}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="px-10 mb-10">
            <button
              className="h-[48px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base outline-none placeholder:text-brightness-50 text-white bg-black hover:text-black hover:bg-[#E5E4E2]"
              placeholder="Type your message...">
              Send Message
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}
