import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef();
  const isInitialized = useRef(false); // Using useRef to track initialization

  useEffect(() => {
    if (!isInitialized.current) {
      init(textRef.current, {
        showCursor: true,
        strings: [
          'Electrical Engineer',
          'Web Developer',
          'Mobile App Developer',
          'Fluent in both',
          'Front and Back'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true
      });
      isInitialized.current = true; // Mark as initialized
    }
  }, []);

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/ousman.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ousman Ali</h1>
          <h3>Freelancer: <span ref={textRef}/></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
