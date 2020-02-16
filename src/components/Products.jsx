import React from 'react';
import './Products.css';
import ProductFilter from './ProductFilter.jsx';
import ProductDetails from './ProductDetails.jsx';
import SocialMedia from './SocialMedia.jsx';
import pizza from '../assets/images/pizza-slice-solid-white.svg';
import bacon from '../assets/images/bacon-solid-white.svg';
import cheese from '../assets/images/cheese-solid-white.svg';
import pepper from '../assets/images/pepper-hot-solid-white.svg';
import iceCream from '../assets/images/ice-cream-solid-white.svg';
import candyCane from '../assets/images/candy-cane-solid-white.svg';

const masterProducts = [
  {
    name: 'A Pizza Our Heart',
    brand: 'mucha',
    price: 6,
    description: 'Gentrify chambray art party lomo, hella normcore biodiesel tumeric banjo wayfarers celiac aesthetic kogi.',
    img: pizza,
    alt: 'pizza',
  },
  {
    name: "Achin' for Bacon",
    brand: 'mucha',
    price: 6,
    description: 'Gentrify chambray art party lomo, hella normcore biodiesel tumeric banjo wayfarers celiac aesthetic kogi.',
    img: bacon,
    alt: 'bacon',
  },
  {
    name: 'Get That Chedda',
    brand: 'mucha',
    price: 6,
    description: 'Gentrify chambray art party lomo, hella normcore biodiesel tumeric banjo wayfarers celiac aesthetic kogi.',
    img: cheese,
    alt: 'cheese',
  },
  {
    name: "Fire'n'Ice",
    brand: 'mucha',
    price: 6,
    description: 'Gentrify chambray art party lomo, hella normcore biodiesel tumeric banjo wayfarers celiac aesthetic kogi.',
    img: pepper,
    alt: 'pepper',
  },
  {
    name: 'You Scream, We Scream',
    brand: 'mucha',
    price: 6,
    description: 'Gentrify chambray art party lomo, hella normcore biodiesel tumeric banjo wayfarers celiac aesthetic kogi.',
    img: iceCream,
    alt: 'ice cream',
  },
  {
    name: 'Winter Wonderland',
    brand: 'mucha',
    price: 3,
    description: 'Gentrify chambray art party lomo, hella normcore biodiesel tumeric banjo wayfarers celiac aesthetic kogi.',
    img: candyCane,
    alt: 'seasonal',
  },
];

function Products() {
  return (
    <div>
      <ProductFilter/>
      {masterProducts.map((product, index) =>
        <ProductDetails name={product.name}
          brand={product.brand}
          price={product.price}
          description={product.description}
          img={product.img}
          alt={product.alt}
          key={index}/>
      )}
      <SocialMedia/>
    </div>
  );
}

export default Products;
