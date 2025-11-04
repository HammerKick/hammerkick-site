import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopNavbar from "./navbar/TopNavbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import FooterSite from "./footer/FooterSite";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/projets" element={<Projects />} />
        </Routes>
        <FooterSite />
      </BrowserRouter>
    </>
  );
}

export default App;
