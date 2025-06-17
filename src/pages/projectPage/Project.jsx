import "./project.scss"
import Contact from "../../components/contact/Contact";
import Navbar from "../../components/navbar/Navbar";
import SingleProject from "../../components/projects/SingleProject";

function Project() {
    return ( 
        <div className="project">
            <Navbar project />
           <div className="sections"> 
                <SingleProject />
                <Contact />
            </div>
        </div>
     );
}

export default Project;