// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cities from "./pages/Index/Cities";
import ButtonCities from "./pages/Index/ButtonCities"; 
import UnderConstruccion from "./pages/Index/UnderConstruccion";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/city/:id" element={<ButtonCities />} />
          <Route path="/under-construction" element={<UnderConstruccion />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


