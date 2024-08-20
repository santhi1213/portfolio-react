import React from "react";
import about_img from '../images/about_image.jpg';
import './About.css';

const About = () =>{
    return(
        <div className='about_page' id="about">
                <div>
                    <h1>About Me</h1>
                    <p>Hello,
                        Myself Mr. Santhi Raju and I've recently graduated from DNR College of Engineering and Technology with a degree in CSE, achieving a 7.77CGPA.
                        I've always been passionate about web development, and I'm proficient in Python, JavaScript, Java, React JS, HTML, CSS and WordPress. These skills have been developed through course work and personal projects.
                        In addition to my technical skills, I've developed soft skills including effective communication and multi-tasking,teamwork, time management and creativity.
                    </p>
                </div>
                <div>
                    <img className='about_img' src={about_img} alt=""/>
                </div>
            </div>
    )
}

export default About;