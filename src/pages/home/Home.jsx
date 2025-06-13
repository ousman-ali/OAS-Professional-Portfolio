import { useState } from "react";
import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonials from "../../components/testimonials/Testimonials";
import Works from "../../components/works/Works";
import Menu from "../../components/menu/Menu"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"

function Home() {
    const [menuOpen, setMenuOpen]=useState(false);

    return ( 
        <div className="home">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                  <div className="sections">
                    <Intro/>
                    <Portfolio />
                    <Works />
                    <Testimonials/>
                    <Contact />
                  </div>
        </div>
     );
}

export default Home;