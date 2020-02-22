import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia.jsx';

function Home() {

  const styleHome = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    padding: '0 64px'
  }

  const styleHeader = {
    margin: '0 0 32px 0',
    paddingBottom: '32px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '4em',
    textShadow: '-4px 4px 4px rgba(0, 0, 0, 0.2)',
    color: 'white'
  }

  return (
    <div className='background-photo'>
      <div style={styleHome}>
        <h1 style={styleHeader}>When life gives us lemons, we drink kombucha—lots of it.</h1>
        <div>
          <Link className='button button-margin' to='/productlist'>Show me the buch</Link>
          <Link className='button' to='/newproductform'>Add to the buch</Link>
        </div>
      </div>
      <SocialMedia />
    </div>
  );

}

export default Home;
