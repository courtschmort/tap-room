import React from 'react';
import './ProductList.css';
import PropTypes from 'prop-types';
import Product from './Product.jsx';

function ProductList(props) {

  const styleProductList = {
    height: '100vh'
  }

return (
    <div style={styleProductList}>
      {props.productList.map((product) =>
        <Product name={product.name}
          brand={product.brand}
          price={product.price}
          description={product.description}
          pints={product.pints}
          onSellPints={props.onSellPints}
          id={product.id}
          key={product.id}/>
      )}
    </div>
  );
  
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onSellPints: PropTypes.func
}

export default ProductList;
