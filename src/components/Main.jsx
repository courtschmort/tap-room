import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  const mainStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 64px',
  }
  const buttonStyle = {
    margin: '64px 0',
  }
  return (
    <div className='background' style={mainStyle}>
      <h1>When life gives us lemons, we make kombucha—lots of it.</h1>
      <div style={buttonStyle}>
        <Link className='button' to='/products'>Show me the buch!</Link>
      </div>
    </div>
  );
}

export default Main;
