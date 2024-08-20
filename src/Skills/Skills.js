import React from "react";
import './Skills.css';
import HTML from '../images/html-r.png';
import CSS from '../images/css-r.png';
import JS from '../images/js-r.png';
import Python from '../images/python-r.png';
import Node from '../images/node-r.png';
import react from '../images/react-r.png';
import SQL from '../images/sql-r.png'
import WordPress from '../images/wordpress-r.png';
import CriticalThinking from '../images/criticalThinking.png';
import EffectiveCommunication from '../images/effectiveCommunication.png';
import MultiTasking from '../images/multiTasking.png';
import TeamWork from '../images/teamWork.png';
import TimeManagement from '../images/TimeManagement.png';

const Skills = () =>{
    const images = [ HTML,CSS,JS,Python,Node,react,SQL,WordPress ];
    const images1 = [CriticalThinking, EffectiveCommunication,MultiTasking,TeamWork, TimeManagement];

    return(
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="technical-skills">
                    <div className="circle-container">
                        {images.map((src, index) => (
                            
                                <div key={index} className="circle-image">
                                    <img src={src} alt={`Circle ${index + 1}`} />
                                </div>
                        ))}
                        <span className="rotate-ball"></span>
                        <h1>Technical <br/>skills</h1>
                    </div>
                </div>
                <div>
                <p className="html-skill">HTML</p>
                <p className="css-skill">CSS</p>
                <p className="js-skill">JS</p>
                <p className="python-skill">Python</p>
                <p className="node-skill">Node</p>
                <p className="react-skill">React</p>
                <p className="sql-skill">SQL</p>
                <p className="wordpress-skill">WordPress</p>
                </div>
              



                <div className="soft-skills">
                <div className="circle-container1">
                        {images1.map((src, index) => (
                                <div key={index} className="circle-image1">
                                    <img src={src} alt={`Circle ${index + 1}`} />
                                </div>
                        ))}
                        <span className="rotate-ball1"></span>
                        <h1 style={{fontSize:'50px'}}>Soft <br/>skills</h1>
                    </div>
                </div>
                <div>
                    <p className="criticalThink">Critical Thinking</p>
                    <p className="communication">Effective <br/>Communication</p>
                    <p className="multiTasking">Multi Tasking</p>
                    <p className="teamWork">Team Work</p>
                    <p className="timeMgmt">Time Management</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;