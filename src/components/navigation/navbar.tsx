import "@/styles/navigation/navbar.css";
import React from "react";
import { useState } from "react";
import ThemeSwitcher from "../themeSwitcher";
import LanguageSelector from "../languaje";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <ThemeSwitcher/>
      <LanguageSelector />
      <a href="#" className="navbar-brand">
        Sample Warehouse
      </a>
      <button 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        id="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul 
        className={`nav-links ${isOpen ? "active" : ""}`} 
        id="navLinks"
        onClick={() => setIsOpen(false)}
      >
        <li>
        <i className="fa-house"></i>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <a href="#portafolio">Portafolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#experience">Experiencie</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
