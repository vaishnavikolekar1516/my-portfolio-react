import React from "react";
import "./About.css";
import profile_img1 from "../../assets/profile_img1.png";
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="about-section">

      {/* Big Background Text */}
      <h1 className="bg-text">ABOUT</h1>

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">

          <h2>
            MERN <span>Developer</span>
          </h2>

          <p>
            I am a MERN Stack Developer skilled in building responsive, scalable, and performance-driven web applications. My expertise includes React.js for front-end development and Node.js with Express for backend architecture, along with MongoDB for database management.
          </p>

          <p>
            I focus on writing clean, maintainable code and creating user-friendly interfaces with modern design principles. My goal is to deliver efficient digital solutions that align with business and user needs.
          </p>

          {/* SKILL CARDS */}
          <div className="skills-grid">
            <div className="skill-card"><FaHtml5 /> HTML</div>
            <div className="skill-card"><FaJsSquare /> JavaScript</div>
            <div className="skill-card"><FaReact /> React</div>
            <div className="skill-card"><SiMongodb /> MongoDB</div>
            <div className="skill-card"><SiExpress /> Express</div>
            <div className="skill-card"><FaNodeJs /> Node.js</div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <div className="image-wrapper">
            <img src={profile_img1} alt="Vaishnavi" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

// import React from "react";
// import "./About.css";
// import profile_img1 from "../../assets/profile_img1.png";
// import { FaHtml5, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
// import { SiMongodb, SiExpress } from "react-icons/si";

// <div className="about-content">

//   <div className="about-badge">
//     ✨ Passionate MERN Developer
//   </div>

//   <h2>
//     MERN <span>Developer</span>
//   </h2>

//   <p>
//    I am a MERN Stack Developer skilled in building responsive, scalable, and performance-driven web applications. My expertise includes React.js for front-end development and Node.js with Express for backend architecture, along with MongoDB for database management.
//   </p>

//   <p>
//     I focus on writing clean, maintainable code and creating user-friendly interfaces with modern design principles. My goal is to deliver efficient digital solutions that align with business and user needs.
//   </p>

//   {/* MINI HIGHLIGHT LINE */}
//   <div className="about-highlight">
//     Building responsive • User-friendly • Scalable web apps
//   </div>

//   {/* SKILL CARDS */}
//   <div className="skills-grid">
//     <div className="skill-card"><FaHtml5 /> HTML</div>
//     <div className="skill-card"><FaJsSquare /> JavaScript</div>
//     <div className="skill-card"><FaReact /> React</div>
//     <div className="skill-card"><SiMongodb /> MongoDB</div>
//     <div className="skill-card"><SiExpress /> Express</div>
//     <div className="skill-card"><FaNodeJs /> Node.js</div>
//   </div>

// </div>