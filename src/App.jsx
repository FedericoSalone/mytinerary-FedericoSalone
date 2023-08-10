// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cities from "./pages/Index/Cities";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Hero />
        <Footer />
      </>
    ),
  },

  {
    path: '/cities',
    element: (
      <>
        <Navbar />
        <Cities />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


