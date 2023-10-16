import React from "react";
import HomePage from "./pages/HomePage.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Output from "./pages/Output.jsx";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/output" element={<Output />}></Route>


      </Routes>
    </Router>
  );
}

export default App;
