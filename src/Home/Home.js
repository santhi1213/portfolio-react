import landing_img from '../images/image.png';
import './Home.css'
import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Typewriter } from 'react-simple-typewriter';

function Home(){
    const {text} = useTypewriter({
        words : ['WEB Developer', 'UI Developer', 'REACT Developer'],
        loop : {},
    });

    useEffect(()=>{
        Aos.init()
    })
    return(
        <>  
            <div className='landing_image' id='home'>
                <img src={landing_img} className='image_me' alt=''/>
                <div className='title'>
                    <h3>
                        I'm a 
                        <span style={{color:'green'}}> 
                            <Typewriter words={[' WEB Developer', ' UI Devloper',' REACT Developer', ' WordPress Developer']} loop={500}  typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
                        </span>
                        <span style={{color:'green'}}>
                            <Cursor/> 
                        </span> 
                        
                        <i id='comp_icon' class="fa-solid fa-computer"></i>
                    </h3>

                    <h1>Santhi Raju</h1>
                    <div className='vertical_line'></div>
                    <p>I'm a Full Stack Developer<br/>and very passionate in <br/>developing.</p>
                </div>
            </div>
            <div className='social_icons' data-aos = 'zoom-in'>
                <div id='whatsapp'><a href='https://api.whatsapp.com/send?phone=9705675817'><i class="fa-brands fa-whatsapp"></i></a></div>
                <div id='instagram'><a href='https://www.instagram.com/get._my__name/'><i class="fa-brands fa-instagram"></i></a></div>
                <div id='linkedin'><a href='https://www.linkedin.com/in/santhi-raju-0364ba248'><i class="fa-brands fa-linkedin"></i></a></div>
                <div id='telegram'><a href='https://t.me/[santhi_raju]/start'><i class="fa-brands fa-telegram"></i></a></div>
                <div id='youtube'><a href=''><i class="fa-brands fa-youtube"></i></a></div>
            </div>

        </>
    )
}

export default Home;