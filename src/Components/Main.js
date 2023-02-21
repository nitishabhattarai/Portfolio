import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaStream } from "react-icons/fa";

// responsive menu toggle icon
import { FaAlignRight } from "react-icons/fa";
import About from "./About/About";
import { Blogs } from "./Blogs/Blogs";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import { Works } from "./Works/Works";
import pageLinks from "../assets/constants/links";
import { Link } from "react-router-dom";

const Main = () => {
  const [navbar, setNavbar] = useState(false);
  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="nav-center">
          <div className="nav-header">
            <button type="button" className="toggle-btn">
              <FaAlignRight />
            </button>
          </div>
          <div className="nav-links">
            {pageLinks.map((links) => {
              return (
                <Link key={links.id} to={links.url}>
                  {links.text}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
};

export default Main;
