import React from "react";
import "./Contact.css";
import mail from '../images/mail.png';
import call from '../images/call.jpg';


const Contact = () =>{
    return(
        <div className="contact" id="contact">
            <h1 className="contact-title">Contact Page</h1>
            <div className="contact-container">
                <div className="contact-left">
                    <h1>Let's <span style={{color:'orange'}}>Chat</span>..</h1>
                    <h1>Tell me about your <br/>Requirement.</h1>
                    <p>Let's create something together..🤘</p>
                    <div className="contact-mail-phone">
                        <div className="contact-mail">
                            <img src={mail} alt=""/>
                            <h4>Mail me at<br/><span style={{color:'orange'}}>santhiraju32@gmail.com</span></h4>
                        </div>
                        <div className="contact-phone">
                            <img src={call} alt=""/>
                            <h4>Call me at<br/><span style={{color:'orange'}}>+91 9705675817</span></h4>
                        </div>
                    </div>
                </div>
                
                <div className="contact-right">
                    <form className="form">
                        <h3>Send Me a message.</h3>
                        <input type="text" name="name" placeholder="Enter your Full Name"/>
                        <input type="email" name="email" placeholder="Email ID"/>
                        <input type="text" name="subject" placeholder="Subject"/>
                        <input type="text" name="message" className="message-field" placeholder="Enter your message" />
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;