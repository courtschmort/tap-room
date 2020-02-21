import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia.jsx';

function Home() {
  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    padding: '0 64px',
  }
  const h1Style = {
    margin: '0 0 64px 0',
    paddingBottom: '32px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '4em',
    textShadow: '-4px 4px 4px rgba(0, 0, 0, 0.2)',
    color: 'white',
  }
  const subStyle = {
    margin: '0',
    fontFamily: "'Roboto', ",
    fontSize: '2em',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#333',
  }
  return (
    <div className='background-photo'>
      <div style={mainStyle}>
        <h1 style={h1Style}>When life gives us lemons, we drink kombucha—lots of it.</h1>
        <div>
          <Link className='button' to='/products'>Show me the buch</Link>
          <Link className='button' to='/newproduct'>Add to the buch</Link>
        </div>
      </div>
      <SocialMedia/>
    </div>
  );
}

export default Home;
