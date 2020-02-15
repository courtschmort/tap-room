import React from 'react';
import logo from '../assets/images/logo512.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    height: '64px',
    backgroundColor: '#4ECDC4',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px',
  }
  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  }
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
  }
  return (
    <div style={headerStyle}>
      <div style={navStyle}>
        <Link className='left-link' to="/">Home</Link>
        <Link className='left-link' to="/products">Products</Link>
      </div>
      <Link style={brandStyle} to="/">
        <img src={logo} alt='logo' height='32px'/>
        <p className='brand-header'>mucha</p>
      </Link>
      <div style={navStyle}>
        <Link className='right-link' to="/signup">Sign Up</Link>
        <Link className='right-link' to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default Header;
