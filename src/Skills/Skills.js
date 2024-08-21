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
   

    return(
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="technical-skills">
                    <div className="circle-container">
                        <div className="circle-item">
                            <img src={HTML} alt="Image 1" />
                            <p>HTML</p>
                        </div>
                        <div className="circle-item">
                            <img src={CSS} alt="Image 2" />
                            <p>CSS</p>
                        </div>
                        <div className="circle-item">
                            <img src={JS} alt="Image 3" />
                            <p>JS</p>
                        </div>
                        <div className="circle-item">
                            <img src={Python} alt="Image 4" />
                            <p>Python</p>
                        </div>
                        <div className="circle-item">
                            <img src={Node} alt="Image 5" />
                            <p>Node JS</p>
                        </div>
                        <div className="circle-item">
                            <img src={react} alt="Image 6" />
                            <p>React</p>
                        </div>
                        <div className="circle-item">
                            <img src={SQL} alt="Image 7" />
                            <p>SQL</p>
                        </div>
                        <div className="circle-item">
                            <img src={WordPress} alt="Image 8" />
                            <p>WordPress</p>
                        </div>
                        <h1 style={{textAlign:'center',justifyContent:'center',marginTop:'45%'}}>Technical<br/> Skills</h1>
                        <div className="rotate-ball"></div>
                    </div>
                </div>
              


                <div className="soft-skills">
                    <div className="circle-container1">
                        <div className="circle-item1" >
                            <img src={CriticalThinking} alt="Image 1" />
                            <p className="caption">Critical <br/>Thinking</p>
                        </div>
                        <div className="circle-item1">
                            <img src={EffectiveCommunication} alt="Image 2" />
                            <p className="caption">Effective<br/> Communication</p>
                        </div>
                        <div className="circle-item1" >
                            <img src={MultiTasking} alt="Image 3" />
                            <p className="caption">Multi<br/> Tasking</p>
                        </div>
                        <div className="circle-item1" >
                            <img src={TeamWork} alt="Image 4" />
                            <p className="caption">Team Work</p>
                        </div>
                        <div className="circle-item1" >
                            <img src={TimeManagement} alt="Image 5" />
                            <p className="caption">Time <br/>Management</p>
                        </div>
                        <h1 style={{textAlign:'center',justifyContent:'center',marginTop:'45%'}}>Soft<br/> Skills</h1>
                        <div className="rotate-ball1"></div>
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default Skills;