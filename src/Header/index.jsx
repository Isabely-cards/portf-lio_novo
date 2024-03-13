import { useEffect, useState } from 'react';
import './style.css';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY >= 200) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='header'>
      <a href="#" className="logo">
        Isabely
      </a>
      <div className="icon-menu" id="menu-icon">
        <span></span>
        <i></i>
      </div>
      <nav className='navBar'>
        <a href="#home" id="NavBar" className="active">
          Home
        </a>
        <a href="#about">Sobre</a>
        <a href="#education">Educação</a>
        <a href="#skills">Habilidades</a>
      </nav>
    </header>
  );
}
