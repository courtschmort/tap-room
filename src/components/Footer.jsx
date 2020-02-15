import React from 'react';
import './Footer.css';

function Footer() {
  const footerStyle = {
    height: '128px',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#4ECDC4',
  }
  return (
    <div style={footerStyle}>
      <a className='social-media' href='https://www.instagram.com/' target='_blank'><i class="fab fa-instagram"></i></a>
      <p className='brand-paragraph'>Copyright &copy; 2020 All rights reserved</p>
    </div>
  );
}

export default Footer;
