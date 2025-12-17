import "@/styles/navigation/navbar.css";
import React from "react";
import { useState } from "react";
import ThemeSwitcher from "../themeSwitcher";
import LanguageSelector from "../languaje";
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const Navbar: React.FC<LocalizerProps>=({ locale }) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="wrapper">
        <ThemeSwitcher/>
        <LanguageSelector />
      </div>

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
          <a href="#home">{t[locale].navbar.home}</a>
        </li>
        <li>
          <a href="#about">{t[locale].navbar.about}</a>
        </li>
        <li>
          <a href="#portafolioSection">{t[locale].navbar.portfolio}</a>
        </li>
        <li>
          <a href="#contact">{t[locale].navbar.contact}</a>
        </li>
        <li>
          <a href="#experience">{t[locale].navbar.experience}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
