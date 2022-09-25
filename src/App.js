import './index.css';
import {Route, Navigate, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProjectPage from './Pages/ProjectPage';
import Nav from "./Components/Nav.js";




function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path='/projects' element={<ProjectPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </main>
  );
}


export default App;
