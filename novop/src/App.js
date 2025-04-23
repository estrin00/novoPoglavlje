import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Program from "./components/Program";
import Contact from "./components/Contact";
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <NavBar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
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
