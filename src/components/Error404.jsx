import React from 'react';
import './Error404.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){

  const styleError404 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1A535C',
    padding: '0 64px'
  }

  const styleHeader = {
    margin: '0',
    paddingBottom: '16px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '3em',
    fontWeight: '500',
    color: 'white'
  }

  return (
    <div style={styleError404}>
      <h1 style={styleHeader}>Oops! It seems the page {props.location.pathname} does not exist. You should probably just go <Link className='link' to="/">home</Link>.</h1>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
}

export default Error404;
