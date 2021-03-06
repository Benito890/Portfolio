import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logoBenito.png';

function Header () {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 1024) {
        setToggleMenu(false);
      }
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
      <nav id="navbar">
        {(toggleMenu || largeur > 992) && (
          <>
        <a href='#home'><img id="logo" src={logo}></img></a>
          <ul className="nav-list">
            <li><a href='#propos'>À propos</a></li>
            <li><a href='#section-2'>Compétences</a></li>
            <li><a href='#projet-container'>Mes projets</a></li>
            <li><a href='#section-4'>Contact</a></li>
          </ul>
          </>
        )}
        <img id="logo2" src={logo}></img>
        <button className="btn" onClick={toggleNavSmallScreen}>
          |||
        </button>
      </nav>
  );
}

export default Header;
