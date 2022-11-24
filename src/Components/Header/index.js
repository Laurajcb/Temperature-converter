import React from 'react';
import Logo from './../../assets/Temperature-icon.png';
import './Header.css';

function Header() {
  return (
    <header className='main-container'>
      <img src={Logo} className='main-img logo' alt="Logo" ></img>
      <h2 className='main-title'>Temperature converter:</h2>
    </header>
  )

}



export { Header };
