import React from 'react';
import './ProductDetails.css';
import PropTypes from "prop-types";

function ProductDetails(props) {
  const detailsStyle = {
    display: 'flex',
    margin: '16px',
    height: 'auto',
    boxShadow: '-4px 4px 8px rgba(0, 0, 0, 0.2)',
  }
  const imageStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#EEE',
    padding: '64px',
  }
  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '64px',
  }
  const h2Style = {
    margin: '0',
    paddingBottom: '16px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '2em',
    fontWeight: '500',
    textTransform: 'lowercase',
    color: '#FF6663',
  }
  const priceStyle = {
    color: '#333',
  }
  const descriptionStyle = {
    margin: '0',
    fontFamily: "'Lato', sans-serif",
    fontSize: '1.25em',
    lineHeight: '1.5',
  }
  return (
    <div style={detailsStyle}>
      <div style={imageStyle}>
        <img className='flavor' width='128px' height='auto' src={props.img} alt={props.alt}/>
      </div>
      <div style={textStyle}>
        <h2 style={h2Style}>{props.name}<span style={priceStyle}> ${props.price}</span></h2>
        <p style={descriptionStyle}>{props.description}</p>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}

export default ProductDetails;
