import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { sublinks, links, social } from '../data/navbarData';
import './common.css';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="nav-btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        {/* <ul className="nav-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <li key={index}>
                <button className="nav-link-btn" onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul> */}

        <ul className="nav-links">
          <li>
            <button className="nav-link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="nav-link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="nav-link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <div>
          <button className="signin-btn">Log In</button>
          <button className="signin-btn signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
