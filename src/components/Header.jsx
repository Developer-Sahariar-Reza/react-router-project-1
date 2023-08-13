import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { XMarkIcon, Bars4Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header-container">
      {/* logo container */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
          <p className="brand-title">Dress Code Chic</p>
        </Link>
      </div>

      {/* menu container  */}
      <nav>
        <ul
          className={`menu-container ${
            open ? "responsive-position-1" : "responsive-position-2"
          }`}
        >
          <li className="menu">
            <NavLink
              to="/"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              Home
            </NavLink>
          </li>
          <li className="menu">
            <NavLink
              to="/shop"
              title="Shop"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              Shop
            </NavLink>
          </li>
          <li className="menu">
            <NavLink
              to="/cart"
              title="Cart"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              Your Cart
            </NavLink>
          </li>
          <li className="menu">
            <NavLink
              to="about"
              title="About"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* responsive btn  */}
      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <XMarkIcon className="w-8 h-8 text-[#5394cf]"></XMarkIcon>
        ) : (
          <Bars4Icon className="w-8 h-8 text-[#5394cf]"></Bars4Icon>
        )}
      </button>
    </header>
  );
};

export default Header;
