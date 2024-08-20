import "./Navbar.css";
import React, {useEffect} from "react";
import Logo from "../logos/logo.png";
import profile from "../logos/mine.png";
import { motion } from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css'

function Navbar(){
  useEffect(()=>{
    Aos.init()
  })
    return(
    <div className="Navbar" data-aos= 'fade-down'>
        <a href="#"><img src={Logo} className="logo" alt=""/></a>
       <ul data-aos = 'fade-left'>
        <motion.button whileTap={{ scale: 0.85 }} className="nav-items">
          <li><a href="#home" style={{textDecoration:'none', color:'black'}}>Home</a></li>
        </motion.button>
        <motion.button whileTap={{ scale: 0.85 }} className="nav-items">
          <li><a href="#projects" style={{textDecoration:'none', color:'black'}}>Projects</a></li>
        </motion.button>
        <motion.button whileTap={{ scale: 0.85 }} className="nav-items">
          <li><a href="#skills" style={{textDecoration:'none', color:'black'}}>Skills</a></li>
        </motion.button>
        <motion.button whileTap={{ scale: 0.85 }} className="nav-items">
          <li><a href="https://drive.google.com/file/d/1ixc-GbNPxabQv81KQJj_IjysbrIzIPBY/view?usp=drive_link" style={{textDecoration:'none', color:'black'}}>Resume</a></li>
        </motion.button>
        <motion.button whileTap={{ scale: 0.85 }} className="nav-items">
          <li><a href="#contact" style={{textDecoration:'none', color:'black'}}>Contact Me</a></li>
        </motion.button>
        <motion.button whileTap={{ scale: 0.85 }} className="nav-items">
          <li><a href="#about" style={{textDecoration:'none', color:'black'}}>About Me</a></li>
        </motion.button>
        </ul>
        <img src={profile} className="profile" alt=""/>
    </div>
    )
}

export default Navbar;