import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import About from "./About/About";
import { Blogs } from "./Blogs/Blogs";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import { Works } from "./Works/Works";

const Main = () => {
  return (
    <div className="container">
      <div className="row top-section">
        <div className="col-sm info">
          <p>Nitisha Bhattarai</p>
        </div>
        {/* <div className="col-sm social">
          <a
            href="https://www.instagram.com/nitisha.bhattarai/"
            target="_blank"
            className="insta"
          >
            {" "}
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/nitisha-bhattarai-45ab2619a/"
            target="_blank"
            className="linkedin"
          >
            <FaLinkedinIn />
          </a>
        </div> */}
      </div>
      <Home />
      <About />
      <Skills />
      <Works />
      {/* <Blogs /> */}
      {/* <Contact />
      <Footer /> */}
    </div>
  );
};

export default Main;
