import React from "react";
import { FaInstagram, FaLinkedinIn, FaStream } from "react-icons/fa";

import About from "./About/About";
import { Blogs } from "./Blogs/Blogs";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import { Works } from "./Works/Works";

const Main = () => {
  return (
    <>
      <div className="top-section container">
        <div className="info">
          <p>Nitisha Bhattarai</p>
        </div>
        <div className="hamburger">
          <FaStream style={{ color: "wheat" }} />
        </div>
      </div>
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      {/* <Blogs /> */}
      {/* <Contact />
      <Footer /> */}
    </>
  );
};

export default Main;
