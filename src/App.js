import { BrowserRouter, Routes, Route } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
