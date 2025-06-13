import React from 'react'
import './navbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active") }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">OAS.</a>
          <div className="itemContainer">
            <PersonIcon className='icon'/>
            <span>+251963649826</span>
          </div>
           <div className="itemContainer">
             <EmailIcon className='icon'/>
            <span>oasgerbalhl@gmail.com</span>
          </div>
        </div>
        <div className="right">
         <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
         </div>
        </div>
      </div>
    </div>
  )
}
