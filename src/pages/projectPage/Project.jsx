import Contact from "../../components/contact/Contact";
import Navbar from "../../components/navbar/Navbar";
import SingleProject from "../../components/projects/SingleProject";

function Project() {
    return ( 
        <div className="project">
            <Navbar />
            <SingleProject />
            <Contact />
        </div>
     );
}

export default Project;