import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Project from "./pages/projectPage/Project";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App; 
