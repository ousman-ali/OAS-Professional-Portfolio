import React from 'react'
import "./singleProject.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SingleProject() {
  return (
    <div className='singleProject'>
      <div className="wrapper">
          <div className="imgContainer">
            <img src="" alt="" />
          </div>
          <div className="infoContainer">
            <h1>Title</h1>
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
                   <ul>
                    <h4>For Front End</h4>
                    <li>React JS</li>
                    <li>styled components</li>
                    <li>redux for state management</li>
                   </ul>
                </div>
                <div className="tech-list">
                   <ul>
                    <h4>For Back End</h4>
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
      </div>
    </div>
  )
}
