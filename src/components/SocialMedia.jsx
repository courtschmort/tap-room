import React from 'react';
import './SocialMedia.css';

function SocialMedia() {
  const smStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px',
  }
  return (
    <div style={smStyle}>
      <a className='social-media' href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook"></i></a>
      <a className='social-media' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-instagram"></i></a>
      <a className='social-media' href='https://twitter.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a>
    </div>
  );
}

export default SocialMedia;
