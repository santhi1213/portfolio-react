import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from '../Home/Home';
import About from '../About/About';
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact Me/Contact";
import Footer from '../Footer/Footer'


const Index = () =>{
    return(
        <>
            <Navbar/>
            <Home />
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>
            <Footer/>
          
        </>
    )
}

export default Index;