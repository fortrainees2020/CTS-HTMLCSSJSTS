/*import React, { useState } from 'react';
const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 100, pName: "Laptop", price: 50000, sold: false },
    { id: 200, pName: "Mobile", price: 40000, sold: false },
    { id: 300, pName: "Mouse", price: 500, sold: false }
  ]);

  const handleSoldClick = () => {
    // Toggle the sold status of each product
    setProducts(prevProducts =>
      prevProducts.map(product => ({ ...product, sold: !product.sold }))
    );
  };
  return (
    <div>
      <h2>Products</h2>
      <button onClick={handleSoldClick}>Toggle Sold</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.pName}</td>
              <td>{product.price}</td>
              <td>{product.sold ? 'SOLD' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;
*/

import React, { useState } from 'react';
const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 100, pName: "Laptop", price: 50000, sold: false },
    { id: 200, pName: "Mobile", price: 40000, sold: false },
    { id: 300, pName: "Mouse", price: 500, sold: false }
  ]);

  const handleSoldClick = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === productId) {
          return { ...product, sold: !product.sold };
        }
        return product;
      })
    );
  }
  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.pName}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleSoldClick(product.id)}>
                  {product.sold ?  'SOLD':'Available'}
                
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

