import React from 'react';
import Navbar from './components/Navbar'; // Importando el Navbar
import Footer from './components/Footer'; // Importando el Navbar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar Routes y Route


// // Aquí puedes importar las páginas
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import Passenger from './pages/Passenger';
import Driver from './pages/Driver';
import Faq from './pages/Faq';
import Suggestions from './pages/Suggestions'
import Policy from './pages/Policy'
// import Services from './pages/Services';
// import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/policy" element={<Policy />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
