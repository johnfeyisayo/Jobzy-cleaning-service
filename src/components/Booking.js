import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,

  // FormLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { TextField } from '@mui/material';
// const today = dayjs();
// const tomorrow = dayjs().add(1, 'day');
// const todayEndOfTheDay = today.endOf('day');

export default function Booking() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setEmailSent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
    }

    emailjs.send(serviceId, templateId, temlateParams, publicKey)
    .then((response) => {
        setEmailSent('Email sent successfully!', response);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setLocation('');
        setMessage('');
    })
    .catch((error) => {
      setErrorMessage('Error sending email:', error);
    });
};


  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().optional(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    location: Yup.string().required('Location is required'),
    checked: Yup.array().required(''),
    message: Yup.string().optional()
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      checked: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        //input the correct send codes for the emial js
        .send('service_t6exg8s', 'template_lfjbgap', values, '3Ap5vY4h11rvt8C3m')
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          resetForm();
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
        });
      console.log('Form submitted:', values);
    }
  });
  console.log(formik);
 

  return (
    <div className=" bg-#505050">
      <Navbar />
      <div className="text-white text-center" id="services-bg">
        <h1 className="font-inter  text-2xl h-0 py-8 md:text-6xl lg:pt-32">Make A Booking</h1>
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
        <form onSubmit={handleSubmit} className="text-left flex flex-col gap-7 md:gap-[40px] h-auto md:w-[800px] justify-center   md:ml-[300px]  md:mt-0 p-[10px] bg-white rounded">
          <p className="font-bold text-black  md:pt-[30px] pt-4 md:text-[40px]   md:my-[0px] text-center ">
            Book a cleaning service
          </p>
          <hr />
          <div className=" px-10  flex flex-col gap-3">
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
                  // onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.firstName}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
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
                  // onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.lastName}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
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
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
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
                  // onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.phone}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
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
                // onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // value={formik.values.location}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
                required
              />
            </div>

            {/* <div className=" mt-5 md:flex">
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
            </div> */}
          </div>
          <hr />
          <div className="px-10  flex flex-col gap-3">
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
              {/* <Form>
                <div id="checkbox-group">Checked</div>
                <div role="group" aria-labelledby="checkbox-group">
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="One"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.checked && Boolean(formik.errors.checked)}
                      helperText={formik.touched.checked && formik.errors.checked}
                    />
                    One
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="Two" />
                    Two
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="Three" />
                    Three
                  </label>
                </div>
              </Form> */}

              <button type="submit">Submit</button>
            </div>
            <div className="  flex flex-col md:flex-row gap-2 mt-5">
              <div>
                <p className="text-xs pb-[4px]">PICK REQUIRED DAY</p>
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
              {/* <DemoContainer
              components={['DatePicker', 'DateTimePicker', 'TimePicker', 'DateRangePicker']}>
              <DemoItem label="DatePicker">
                <DatePicker
                  // defaultValue={tomorrow}
                  disableFuture
                  views={['year', 'month', 'day']}
                />
              </DemoItem>
              <DemoItem label="TimePicker">
                <TimePicker disableFuture />
              </DemoItem>
              <DemoItem label="DateTimePicker">
                <DateTimePicker
                  disableFuture
                  views={['year', 'month', 'day', 'hours', 'minutes']}
                />
              </DemoItem>
              <DemoItem label="DateRangePicker" component="DateRangePicker">
                <DateRangePicker disableFuture />
              </DemoItem>
            </DemoContainer> */}
            </div>
          </div>
          <div className="px-10">
            <FormControl>
              <p className="text-xs pb-[4px]">HOW DO YOU WANT OUR SERVICE?</p>
              <div></div>
              <RadioGroup
                row
                cl
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ots"
                name="radio-buttons-group"
                className="gap-2 ">
                <FormControlLabel value="ots" control={<Radio />} label="One-Time Service" />
                <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
                <FormControlLabel value="bw" control={<Radio />} label="Bi-Weekly" />
                <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
              </RadioGroup>
            </FormControl>
          </div>

          <hr />

          <div className="px-10 ">
            <p className="text-xs pb-[4px]">ADDITIONAL INFORMATION</p>
            <TextField
              className="h-[200px] w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-sm "
              placeholder="Type your message..."
              multiline={true}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              // onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.message}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              required
            />
          </div>
          <h1 className='m-auto text-lg text-[#1A9447]  p-4 '>{sent}</h1>
          <h1 className='m-auto text-lg text-[#F54F59]  p-4 '>{errorMessage}</h1>

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



{
  /* <div className="flex  w-full ">
                <div className="flex flex-col  w-full">
                  <p className="text-xs pb-[8px]">FIRST NAME</p>
                  <TextField placeholder="First Name"></TextField>
                
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-xs pb-[4px]">FIRST NAME</p>
                  <TextField></TextField>
                </div>
              </div> */
}