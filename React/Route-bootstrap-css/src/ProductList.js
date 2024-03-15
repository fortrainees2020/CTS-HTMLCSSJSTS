
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

/*const ProductList = () => {
  // Define state for the products array
  const [products, setProducts] = useState([
    { id: 100, pName: "Laptop", price: 50000 },
    { id: 200, pName: "Mobile", price: 40000 },
    { id: 300, pName: "Mouse", price: 500 }
  ]);
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.id}-{product.pName}</span> - <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;*/

const ProductList = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    { id: 100, pName: "Laptop", price: 50000 },
    { id: 200, pName: "Mobile", price: 40000 },
    { id: 300, pName: "Mouse", price: 500 }
  ]);
  return (
    <div>
      <h2>Products</h2>
      
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.pName}</td>
              <td>{product.price}</td>  
              <Button variant="primary">Add To Cart</Button>{' '}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ProductList;




