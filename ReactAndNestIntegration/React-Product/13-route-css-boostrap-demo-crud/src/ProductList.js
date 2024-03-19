//import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import {deleteProduct, listProducts} from './ProductService'
import {Link, useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
 // You need to replace 'your-api-module' with the actual module that contains listProducts and deleteProduct functions.
//Step 1: Create a ProductService compnent to call endpoints
//Step2: Call those endpoint in ProductList component

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    listProducts()
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteProducts = (id) => {
    deleteProduct(id)
      .then(() => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  const updateProduct = (id) => {
    console.log("Id captured as: " + id);
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h2>Products</h2>
      <Link to='/product/create' className='btn btn-warning'>New Product</Link>
      <Table striped bordered hover size="sm">
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
              <td>{product.pname}</td>
              <td>{product.price}</td>
              <td>
                <Button variant="success" onClick={() => updateProduct(product.id)}>Edit</Button>
                <Button variant="danger" onClick={() => deleteProducts(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Product;
 /* const [productdata, productdatachange]= useState(null);
    useEffect(() => {
        fetch(" http://localhost:8000/products").then((res) => {
            return res.json();
        }).then ((resp) => {
            console.log(resp);
            productdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })  
    }, [])*/