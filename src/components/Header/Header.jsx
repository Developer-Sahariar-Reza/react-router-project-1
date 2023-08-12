import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="header-container">
      {/* logo container  */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="" />
          <span>The Fashion Vault</span>
        </Link>
      </div>

      {/* nav container  */}
      <nav className="nav-container">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Your Cart
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          About Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
