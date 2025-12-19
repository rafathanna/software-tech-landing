import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../../Styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">TECH</div>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#hero" className="active">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
      </div>
    </nav>
  );
}
