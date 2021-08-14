import React from "react";
import Photo from "../../assets/images/Professional.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section id="home-page">
      <div className="container">
        <div className="top-section">
          <div className="info">
            <img src={Photo} alt="pp" />
            <p>Nitisha Bhattarai</p>
          </div>
        </div>
        <div className="mid-page">
          <span>HELLO! I'M</span>
          {/* <span className="name">NITISHA BHATTARAI</span> */}
          <span className="name">A WEB DEVELOPER</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
