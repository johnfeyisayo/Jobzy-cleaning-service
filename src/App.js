import React, { useState }  from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Services from './components/Services';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Test from './components/Test';
import emailjs from '@emailjs/browser';

function App() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setEmailSent] = useState('');

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
        console.error('Error sending email:', error);
    });
};

  const getFirstName = (e) => {
    setFirstName(e.target.value);         
  }

  const getLastName = (e) => {
    setLastName(e.target.value);         
  }

  const getEmail = (e) => {
    setEmail(e.target.value);         
  }

  const getPhoneNumber = (e) => {
    setPhone(e.target.value);         
  }

  const getLocation = (e) => {
    setLocation(e.target.value);         
  }
  const getMessage = (e) => {
    setMessage(e.target.value);         
  }

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="booking" element={<Booking firstname={firstname} getFirstName={getFirstName} lastname={lastname} 
            getLastName={getLastName} email={email} getEmail={getEmail} phone={phone} getPhoneNumber={getPhoneNumber} 
            location={location} getLocation={getLocation} handleSubmit={handleSubmit} setEmailSent={setEmailSent} sent={sent} message={message} getMessage={getMessage} 
            />}>
          </Route>
          <Route path="contact" element={<Contact  />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="test" element={<Test />}></Route>
        </Routes>
      </LocalizationProvider>
    </div>
  );
}

export default App;
