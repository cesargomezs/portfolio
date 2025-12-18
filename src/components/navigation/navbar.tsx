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
        <a href="#home"><i className="fa-solid fa-house"></i> {t[locale].navbar.home}</a>
        </li>
        <li>
          <a href="#about"><i className="fa-solid fa-laptop-code"></i> {t[locale].navbar.about}</a>
        </li>
        <li>
          <a href="#portafolioSection"><i className="fa-solid fa-briefcase"></i> {t[locale].navbar.portfolio}</a>
        </li>
        <li>
          <a href="#contact"><i className="fa-regular fa-address-card"></i> {t[locale].navbar.contact}</a>
        </li>
        <li>
          <a href="#experience"><i className="fa-regular fa-building"></i> {t[locale].navbar.experience}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
