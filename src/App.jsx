// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cities from "./pages/Index/Cities";
import CityDetails from "./pages/Index/CitiesDetails"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/citiesdetails/:id" element={< CityDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



