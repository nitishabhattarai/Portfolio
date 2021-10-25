import React from "react";
import { FaRegFolder, FaRegListAlt, FaReact } from "react-icons/fa";
import "./Works.css";

export const Works = () => {
  return (
    <section id="works-page">
      <div className="page-title">
        <h1>PROJECTS INVOLVED</h1>
        {/* <span>What I do?</span> */}
      </div>
      <div className="container">
        <div className="works">
          <ul>
            <li>AVARTAN's WEBSITE</li>
            <li>WALL-G's WEBSITE</li>
            <li>COLLEGE BUS TRACKING SYSTEM</li>
            <li>SMART IRRIGATION</li>
            <li>BASOBAAS</li>
            <li>TANYGER</li>
            <li>TULIKAA</li>
            <li>RESTROB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
