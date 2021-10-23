import React from "react";
// import Slider from '@material-ui/core/Slider'
// import Cropper from 'react-easy-crop'
import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <section id="skills">
        <h1 className="page-title">SKILLS</h1>

        <div className="skills-listing">
          <h4>TECHNICAL SKILLS</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>REACTJS</li>
            <li>TYPESCRIPT</li>
            <li>.NET</li>
            <li>PYTHON</li>
          </ul>
        </div>
        <div className="skills-listing">
          <h4>SOFT SKILLS</h4>
          <ul>
            <li>CREATIVITY</li>
            <li>Problem Solving </li>
            <li>COMMUNICATION</li>
            <li>Team work & Collaboration</li>
          </ul>
        </div>
      </section>
    );
  }
}
export default Skills;
