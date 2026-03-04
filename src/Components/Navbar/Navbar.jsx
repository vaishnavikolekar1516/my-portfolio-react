// import React, { useRef } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo_img.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'

// const Navbar = () => {

//   const menuRef = useRef();

//   const openMenu = () =>{
//     menuRef.current.style.right = "0";
//   }

//   const closeMenu = () =>{
//     menuRef.current.style.right = "-100%";
//   }

//   return (
//     <header className='navbar-wrapper'>

//       <div className='container navbar'>

//         <img className='logo-img' src={logo} alt='Logo'/>

//         <img 
//           src={menu_open} 
//           onClick={openMenu} 
//           alt='' 
//           className='nav-mob-open'
//         />

//         <ul ref={menuRef} className='nav-menu'>

//           <img 
//             src={menu_close} 
//             onClick={closeMenu} 
//             alt="" 
//             className="nav-mob-close" 
//           />

//           <li>
//             <AnchorLink offset={50} href='#home'>Home</AnchorLink>
//           </li>

//           <li>
//             <AnchorLink offset={50} href='#about'>About</AnchorLink>
//           </li>

//           <li>
//             <AnchorLink offset={50} href='#work'>Projects</AnchorLink>
//           </li>

//           <li>
//             <AnchorLink offset={50} href='#contact'>Contact</AnchorLink>
//           </li>

//         </ul>

//         <AnchorLink 
//           offset={50} 
//           href='#contact' 
//           className="nav-btn"
//         >
//           Connect
//         </AnchorLink>

//       </div>

//     </header>
//   )
// }

// export default Navbar




import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.png";
import menu_close from "../../assets/menu_close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrapper">
      <div className="container navbar">

        <img className="logo-img" src={logo} alt="Logo" />

        {/* Mobile Open Icon */}
        <img
          src={menu_open}
          alt="menu"
          className="nav-mob-open"
          onClick={() => setIsOpen(true)}
        />

        {/* Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <img
            src={menu_close}
            alt="close"
            className="nav-mob-close"
            onClick={closeMenu}
          />

          <li>
            <AnchorLink offset={70} href="#home" onClick={closeMenu}>
              Home
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={70} href="#about" onClick={closeMenu}>
              About
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={70} href="#work" onClick={closeMenu}>
              Projects
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={70} href="#contact" onClick={closeMenu}>
              Contact
            </AnchorLink>
          </li>
        </ul>

        <AnchorLink offset={70} href="#contact" className="nav-btn">
          Connect With Me
        </AnchorLink>
      </div>
    </header>
  );
};

export default Navbar;