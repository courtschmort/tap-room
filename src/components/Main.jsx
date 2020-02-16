import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia.jsx';

function Main() {
  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    padding: '0 64px',
  }
  const h1Style = {
    margin: '0',
    paddingBottom: '32px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '4em',
    textShadow: '-4px 4px 4px rgba(0, 0, 0, 0.2)',
    color: 'white',
  }
  const subStyle = {
    margin: '0',
    fontFamily: "'Lato', sans-serif",
    fontSize: '1.5em',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#333',
  }
  const buttonStyle = {
    margin: '64px 0',
  }
  return (
    <div className='background-photo'>
      <div style={mainStyle}>
        <h1 style={h1Style}>When life gives us lemons, we make kombucha—lots of it.</h1>
        <p style={subStyle}>Migas unicorn la croix gentrify chillwave bitters dreamcatcher raclette retro. Marfa iceland man bun, man braid meggings kombucha wolf salvia post-ironic. Gentrify fam narwhal forage. Wolf cloud bread semiotics neutra. Ennui wolf normcore iceland man braid tbh neutra beard bitters bespoke truffaut marfa wayfarers cloud bread green juice. Four dollar toast meditation direct trade tousled fashion axe small batch air plant sartorial enamel pin godard.</p>
        <div style={buttonStyle}>
          <Link className='button' to='/products'>Show me the buch!</Link>
        </div>
      </div>
      <SocialMedia/>
    </div>
  );
}

export default Main;
