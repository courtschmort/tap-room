import React from 'react';
import './SocialMedia.css';

function SocialMedia() {

  const styleSocialMedia = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px'
  }

  return (
    <div style={styleSocialMedia}>
      <a className='social-media' href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook"></i></a>
      <a className='social-media' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-instagram"></i></a>
      <a className='social-media' href='https://twitter.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a>
    </div>
  );
  
}

export default SocialMedia;
