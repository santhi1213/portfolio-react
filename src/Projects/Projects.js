import React from "react";
import './Projects.css';
import Data from '../data/Data';

const Projects = () =>{
    return(
        <>
          <div className="project-title" id="projects">
            <h1>Projects</h1>
            <hr/>
          </div>
          <div className="whole">
            {
              Data.map((data)=>{

                const handleURL = ()=>{
                  const url = data.link;
                  window.location.href = url;
                }

                  return(
                          <div className="project-container">
                              <img src={data.img} alt="" className="project-img"/>
                              <h2 className="project-title">{data.title}</h2>
                              <p className="project-tech">{data.technologies}<hr/></p>
                              <button onClick={()=>{handleURL()}} className="project-link">Link</button>
                              
                          </div>
                  )
              })
            }
          </div>
        </>
    )
}

export default Projects;