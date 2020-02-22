import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import lemon from '../assets/images/lemon-solid-lemon-yellow.svg';

function Header() {

  const styleHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '64px',
    backgroundColor: '#4ECDC4',
    padding: '0 16px',
    borderTop: '4px solid #8EDFD9',
    borderBottom: '4px solid #40A8A1'
  }

  const styleLogo = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  }

  const styleLogoType = {
    margin: '0',
    padding: '0 8px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '32px',
    fontWeight: '500',
    textTransform: 'lowercase',
    color: 'white'
  }

  const styleNav = {
    display: 'flex',
    alignItems: 'center'
  }

  return (
    <div style={styleHeader}>
      <div style={styleNav}>
        <Link className='left-link' to='/productlist'>Tap room</Link>
        <Link className='left-link' to='/newproductform'>New tap</Link>
      </div>
      <Link style={styleLogo} to='/'>
        <img src={lemon} alt='logo' height='32px'/>
        <p style={styleLogoType}>mucha</p>
      </Link>
      <div style={styleNav}>
        <Link className='right-link' to='/'>Sign Up</Link>
        <Link className='right-link' to='/'>Sign In</Link>
      </div>
    </div>
  );

}

export default Header;
