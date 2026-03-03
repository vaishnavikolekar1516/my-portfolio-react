import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo_img.png";
import ComingSoon from "../Comingsoon/ComingSoon.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleOpen = (title) => {
    setModalTitle(title);
    setShowModal(true);
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer">

          {/* TOP */}
          <div className="footer-top">
            <div className="footer-left">
              <img src={logo} alt="Logo" />
              <p>
                Creating meaningful and user-centric web experiences as a
                MERN Stack Developer — driven by curiosity and passion
                for continuous growth.
              </p>
            </div>

            <div className="footer-right">
              <h4>Stay Updated</h4>

              <div className="footer-input-group">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <hr />

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p>© 2025 Vaishnavi Kolekar. All rights reserved.</p>

            <div className="footer-links">
              <span onClick={() => handleOpen("Terms of Services")}>
                Terms of Services
              </span>

              <span onClick={() => handleOpen("Privacy Policy")}>
                Privacy Policy
              </span>

              <AnchorLink offset={50} href="#contact">
                Connect with me
              </AnchorLink>
            </div>
          </div>

        </div>
      </div>

      {showModal && (
        <ComingSoon
          title={modalTitle}
          onClose={() => setShowModal(false)}
        />
      )}
    </footer>
  );
};

export default Footer;