import React from 'react';
import laptopImage from './assests/images/laptop.jpeg';
import mobile from './assests/images/mobile.jpg';
import watch from './assests/images/watch.jpg';
import ProductCard from './ProductCard'
  function ProductCardList() {
    const products = [
      { id: 1, name: 'Apple Mac', price: 10.99, imageUrl: laptopImage },
      { id: 2, name: 'i-Phone', price: 19.99, imageUrl: mobile },
      { id: 3, name: 'Watch', price: 29.99, imageUrl: watch },
      // Add more products as needed
    ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default ProductCardList;