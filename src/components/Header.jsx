import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import lemon from '../assets/images/lemon-solid-lemon-yellow.svg';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '64px',
    backgroundColor: '#4ECDC4',
    padding: '0 16px',
    borderTop: '4px solid #8EDFD9',
    borderBottom: '4px solid #40A8A1',
  }
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  }
  const logotypeStyle = {
    margin: '0',
    padding: '0 8px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '32px',
    fontWeight: '500',
    textTransform: 'lowercase',
    color: 'white',
  }
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
  }
  return (
    <div style={headerStyle}>
      <div style={navStyle}>
        <Link className='left-link' to='/products'>Products</Link>
        <Link className='left-link' to='/contact'>Contact</Link>
      </div>
      <Link style={logoStyle} to='/'>
        <img src={lemon} alt='logo' height='32px'/>
        <p style={logotypeStyle}>mucha</p>
      </Link>
      <div style={navStyle}>
        <Link className='right-link' to='/signup'>Sign Up</Link>
        <Link className='right-link' to='/signin'>Sign In</Link>
      </div>
    </div>
  );
}

export default Header;
