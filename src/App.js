import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import './components/Navbar.css';
import './components/HeroSection.css';
import './components/pages/Home.css';
import "./components/Footer.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Home />
      <Footer />
    </>
  )
}

export default App;
