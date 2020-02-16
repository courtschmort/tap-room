import React from 'react';
import './ProductFilter.css';
import { Link } from 'react-router-dom';
import pizza from '../assets/images/pizza-slice-solid-white.svg';
import bacon from '../assets/images/bacon-solid-white.svg';
import cheese from '../assets/images/cheese-solid-white.svg';
import pepper from '../assets/images/pepper-hot-solid-white.svg';
import iceCream from '../assets/images/ice-cream-solid-white.svg';
import candyCane from '../assets/images/candy-cane-solid-white.svg';

function ProductFilter() {
  const filterStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '128px',
    backgroundColor: '#FF6663',
    padding: '0 16px',
    borderTop: '4px solid #FF9D9B',
    borderBottom: '4px solid #D15452',
  }
  return (
    <div style={filterStyle}>
      <Link className='arrow' to='/'><i className="fas fa-angle-left"></i></Link>
      <Link to='/'>
        <img src={pizza} alt='logo' height='48px'/>
      </Link>
      <Link to='/'>
        <img src={bacon} alt='logo' height='48px'/>
      </Link>
      <Link to='/'>
        <img src={cheese} alt='logo' height='48px'/>
      </Link>
      <Link to='/'>
        <img src={pepper} alt='logo' height='48px'/>
      </Link>
      <Link to='/'>
        <img src={iceCream} alt='logo' height='48px'/>
      </Link>
      <Link to='/'>
        <img src={candyCane} alt='logo' height='48px'/>
      </Link>
      <Link className='arrow' to='/'><i className="fas fa-angle-right"></i></Link>
    </div>
  );
}

export default ProductFilter;
