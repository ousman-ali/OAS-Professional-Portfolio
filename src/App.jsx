import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Project from "./pages/projectPage/Project";
import { useState } from "react";

function App() {
  const [ menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />} />
        <Route path="/project/:id" element={<Project menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
      </Routes>
    </Router>
  );
}

export default App; 
