import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";
import SingleProject from "./pages/Project/SingleProject";


function App() {
  const [menuOpen, setMenuOpen]=useState(false);
  const [clicked, setClicked]=useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {!clicked ?
      <div className="sections">
        <Intro/>
        <Portfolio clicked={clicked} setClicked={setClicked}/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div> :
      <>
        <SingleProject />
        <Contact />
      </>
      }
    </div>

  );
}

export default App; 
