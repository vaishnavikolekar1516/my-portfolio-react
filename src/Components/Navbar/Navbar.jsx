import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right = "-100%";
  }

  return (
    <header className='navbar-wrapper'>

      <div className='container navbar'>

        <img className='logo-img' src={logo} alt='Logo'/>

        <img 
          src={menu_open} 
          onClick={openMenu} 
          alt='' 
          className='nav-mob-open'
        />

        <ul ref={menuRef} className='nav-menu'>

          <img 
            src={menu_close} 
            onClick={closeMenu} 
            alt="" 
            className="nav-mob-close" 
          />

          <li>
            <AnchorLink offset={50} href='#home'>Home</AnchorLink>
          </li>

          <li>
            <AnchorLink offset={50} href='#about'>About</AnchorLink>
          </li>

          <li>
            <AnchorLink offset={50} href='#work'>Projects</AnchorLink>
          </li>

          <li>
            <AnchorLink offset={50} href='#contact'>Contact</AnchorLink>
          </li>

        </ul>

        <AnchorLink 
          offset={50} 
          href='#contact' 
          className="nav-btn"
        >
          Connect
        </AnchorLink>

      </div>

    </header>
  )
}

export default Navbar