import React from 'react';
import './Footer.css';

function Footer() {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px',
    backgroundColor: '#4ECDC4',
    borderTop: '4px solid #8EDFD9',
    borderBottom: '4px solid #40A8A1',
    padding: '0 16px',
  }
  const copyrightStyle = {
    margin: '0',
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: '600',
    letterSpacing: '0.03125em',
    textTransform: 'lowercase',
    color: 'white',
  }
  return (
    <div style={footerStyle}>
      <p style={copyrightStyle}>Copyright &copy; 2020 All rights reserved</p>
    </div>
  );
}

export default Footer;
