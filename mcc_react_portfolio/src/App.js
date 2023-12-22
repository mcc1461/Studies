import "./App.scss";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Errors from "./components/Error/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Errors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;