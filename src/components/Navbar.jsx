import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header>
      <div className="navbar sticky w-full h-full flex justify-between items-center p-4 bg-darkgrey">
        <div className="logo">
          <Link to={"/"}>
            <img className="w-20" src={logoImg} alt="logo" />
          </Link>
        </div>

        <ul className={click ? "nav-menu flex active" : "nav-menu flex"}>
          <li className="nav-item p-4">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hamburger hidden cursor-pointer" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#f8f8f8" }} />
          ) : (
            <FaBars size={30} style={{ color: "#f8f8f8" }} />
          )}
        </div>
      </div>
    </header>
  );
};
