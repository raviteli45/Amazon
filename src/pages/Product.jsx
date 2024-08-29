// src/ProductGrid.js

import React from 'react';
import products from './ProductData';
import './Product.css';
import CompLoad from './CompLoad';
const ProductGrid = () => {
  return (
    <>
    <div><CompLoad /></div>
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.img} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default ProductGrid;
