import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="burger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#formacion" onClick={closeMenu}>Formación</a>
          <a href="#stack" onClick={closeMenu}>Stack</a>
          <a href="#about" onClick={closeMenu}>Sobre mí</a>
          <a href="#contacto" onClick={closeMenu}>Contactame</a>
        </div>
      </div>
    </nav>
  );
}
