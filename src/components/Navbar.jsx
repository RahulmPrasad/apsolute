"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/images/main-logo.png" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <button className="nav-btn">Contact</button>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Side Drawer */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        <ul>
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
