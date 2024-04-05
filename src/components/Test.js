import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Test = () => {

    
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
        }

        emailjs.send(serviceId, templateId, temlateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!', response);
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

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
      <label> Last Name</label>
      <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label>Phone Number</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <label>Location</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      <label>Message</label>
      <textarea value={message}  onChange={(e) => setMessage(e.target.value)}/>
      <input type="submit" value="Send" />
    </form>
  )
}

export default Test
