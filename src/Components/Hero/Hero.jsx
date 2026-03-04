// import React from "react";
// import "./Hero.css";
// import profileImg from "../../assets/profile_img2.png";

// const Hero = () => {
//   return (
//     <section className="hero-section" id="home">
//       <div className="hero-bg-text">DEVELOPER</div>

//       <div className="hero-container">

//         <div className="hero-content">
//           <p className="hero-greeting">Hello, I'm</p>

//           <h1 className="hero-title">
//             <span>Vaishnavi</span>
//             <br />
//             Kolekar
//           </h1>

//           <h2 className="hero-role">Creative MERN Developer</h2>

//           <p className="hero-description">
//             Crafting elegant, scalable and modern web experiences.
//             I turn ideas into interactive digital products with clean
//             architecture and beautiful UI.
//           </p>

//           <div className="hero-buttons">
//             <a href="#contact" className="btn-primary">
//               Let's Connect
//             </a>
//             <a href="/resume.pdf" className="btn-secondary">
//               Resume
//             </a>
//           </div>
//         </div>

//         <div className="hero-image-card">
//           <img src={profileImg} alt="Vaishnavi" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;




import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profile_img2.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      
      <div className="hero-bg-text">DEVELOPER</div>

      <div className="hero-container">

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image-card">
          <img src={profileImg} alt="Vaishnavi Kolekar" />
        </div>

        {/* LEFT SIDE CONTENT */}
        <div className="hero-content">

          <div className="hero-availability">
            <span className="dot"></span>
            Open to Opportunities
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-title">
            <span>Vaishnavi</span>
            <br />
            Kolekar
          </h1>

          <h2 className="hero-role">
            MERN Stack Developer based in Maharashtra
          </h2>

          <p className="hero-description">
            I build responsive, user-friendly, and scalable web applications 
            using modern full-stack technologies. Passionate about turning ideas 
            into impactful digital solutions.
          </p>

          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/Vaishnavi-kolekar-998931367"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Let's Connect
            </a>

            <a
              href="/Vaishnavi_Kolekar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              My Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;