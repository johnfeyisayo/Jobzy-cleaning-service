import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Booking from './components/Booking';
import Contact from './components/Contact';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path='booking' element={<Booking />}></Route> */}
        <Route path="contact" element={<Contact />}></Route>
        <Route path="services" element={<Services />}></Route>
      </Routes>
    </div>
  );
}

export default App;
