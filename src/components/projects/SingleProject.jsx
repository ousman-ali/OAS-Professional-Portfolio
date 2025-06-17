import React from 'react'
import "./singleProject.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLocation } from 'react-router-dom';

export default function SingleProject() {
    const location = useLocation(null);
    const { project } = location.state || {};

  return (
    <div className='singleProject'>
      { project ?
        <div className="wrapper">
          <div className="imgContainer">
            <img src={project.img} alt="" />
          </div>
          <div className="infoContainer">
            <h1>{project.title}</h1>
            <div className="title-break" />
            <div className="descContainer">
              <h3>Description</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Nobis, ex maxime ducimus labore hic tempore possimus nisi et cum ratione 
                at molestiae consequatur in, harum quod odit ab est! Tempora?
              </p>
            </div>
            <div className="technologies">
              <div className="main-title">
                <h3>Technologies Used:</h3>
              </div>
              <div className="lists">
                <div className="tech-list">
                  <h4>For Front End</h4>
                   <ul>
                    <li>React JS</li>
                    <li>styled components</li>
                    <li>redux for state management</li>
                   </ul>
                </div>
                <div className="tech-list">
                  <h4>For Back End</h4>
                   <ul>
                    <li>Node.js with express js</li>
                    <li>JWT for user authentication</li>
                    <li>mongoDB as a data base</li>
                   </ul>
                </div>
              </div>
            </div>
            <div className="title-break" />
            <div className="links">
            <div className="icon">
              <GitHubIcon />
            </div>
            <div className="icon">
              <LinkedInIcon />
            </div>
          </div>
          </div>
      </div> :
      <div className="notfound">
        <span>Project Not Found !</span>
      </div>
      }
    </div>
  )
}
