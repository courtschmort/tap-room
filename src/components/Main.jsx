import React from 'react';
import './Main.css';

function Main() {
  const mainStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '0 64px',
  }
  return (
    <div className='background' style={mainStyle}>
      <h1>When life gives us lemons, we make kombucha—lots of it.</h1>
    </div>
  );
}

export default Main;
