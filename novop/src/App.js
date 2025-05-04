import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Home from "./components/Home";
import About from "./components/About";
import Program from "./components/Program";
import Contact from "./components/Contact";
import './index.css';

const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar && mainRef.current) {
      const height = navbar.offsetHeight;
      mainRef.current.style.paddingTop = `${height}px`;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <main ref={mainRef} className="flex-grow flex flex-col">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Home />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
