import React from 'react';
import './Product.css';
import PropTypes from "prop-types";

function Product(props) {

  function handleSellPints() {
    props.onSellPints(props.id);
  }

  const styleProduct = {
    display: 'flex',
    borderTop: '1px solid white',
    borderBottom: '1px solid lightgrey',
    padding: '0 32px'
  }

  const styleLeftColumn = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    padding: '32px 32px'
  }

  const styleRightColumn = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '20%',
    padding: '32px 32px'
  }

  const styleName = {
    margin: '0',
    paddingBottom: '16px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '2em',
    fontWeight: '500',
    textTransform: 'lowercase',
    color: '#FF6663'
  }

  const styleBrand = {
    margin: '0',
    paddingBottom: '16px',
    fontFamily: "'Roboto', ",
    fontSize: '1em',
    fontWeight: '300',
    letterSpacing: '0.03125em',
    color: 'grey'
  }

  const stylePrice = {
    color: 'lightgrey'
  }

  const styleDescription = {
    margin: '0',
    fontFamily: "'Roboto', ",
    fontSize: '1.5em',
    fontWeight: '300',
    lineHeight: '1.5',
    letterSpacing: '0.03125em'
  }

  const stylePints = {
    margin: '0',
    paddingTop: '16px',
    fontFamily: "'Roboto', ",
    fontSize: '1em',
    fontWeight: '300',
    letterSpacing: '0.03125em',
    color: 'grey'
  }

  return (
    <div style={styleProduct}>
      <div style={styleLeftColumn}>
        <p style={styleBrand}>{props.brand}</p>
        <p style={styleName}><span style={stylePrice}>${props.price}</span> {props.name}</p>
        <p style={styleDescription}>{props.description}</p>
      </div>
      <div style={styleRightColumn}>
        <div>
          <button className='button' onClick={handleSellPints}>Sell a pint</button>
        </div>
        <p style={stylePints}>{props.pints} pints available</p>
      </div>
    </div>
  );

}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  pints: PropTypes.number,
  onSoldPints: PropTypes.func
}

export default Product;
