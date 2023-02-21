import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Photo from "../../assets/images/Professional.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about-page">
      <div className="row">
        <div className=" col-lg-6" data-scrollax-parent="true">
          <img src={Photo} style={{ height: "500px", marginBottom: "20px" }} />
        </div>
        <div className="col-lg-6">
          <h2>Hi! I'm Nitisha Bhattarai</h2>
          {/* <p>Check Out My Resume</p> */}
          <div className="social-icons">
            <a className="outer" href="https://www.instagram.com/nitisha.bhattarai/" target="_blank">
              <FaInstagram />
            </a>
            <a className="outer" href="https://www.linkedin.com/in/nitisha-bhattarai-45ab2619a/" target="_blank">
              <FaLinkedinIn />
            </a>
            <a className="outer" href="https://www.facebook.com/nitisha.bhattarai.3/" target="_blank">
              <FaFacebookF />
            </a>
          </div>

          <div className="contact">
            <h5>Reach me out!</h5>
            <div>
              <span className="email">Email: </span>
              <span className="address">nitishaabhattarai@gmail.com</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
