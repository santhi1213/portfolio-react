import "./Navbar.css";
import React, {useEffect} from "react";
import Logo from "../logos/logo.png";
import profile from "../logos/mine.png";
import { motion } from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css'
import Hamburger from '../images/hamburger-icon.png';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(){
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    return(
      <header>
			  <img src={Logo}/>
        <nav ref={navRef}>
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="/#">Resume</a>
          <a href="#contact">Contact Me</a>
          <a href="#about">About me</a>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
		  </header>
    )
}

export default Navbar;