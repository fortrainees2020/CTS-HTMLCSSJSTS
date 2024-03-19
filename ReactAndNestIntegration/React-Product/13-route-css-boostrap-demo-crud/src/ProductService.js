import axios from 'axios'

//const Product_BASE_REST_API_URL = 'http://localhost:8000/products';
const Product_BASE_REST_API_URL = 'http://localhost:8100/api/products';

export const listProducts = () => {
    return axios.get(Product_BASE_REST_API_URL )
};

export const createProduct  = (product) => {
    return axios.post(Product_BASE_REST_API_URL , product)
}

export const getProductsById = (productId) => {
    return axios.get(Product_BASE_REST_API_URL  + '/' + productId);
}

export const updateProduct = (productId, product) => {
    console.log(" INside service: "+ product.pname +"-"+product.price);
    return axios.put(Product_BASE_REST_API_URL  + '/' +productId, product);
}

export const deleteProduct = (productId) => {
    console.log('Delete Called')
     return axios.delete(Product_BASE_REST_API_URL  + '/' + productId);
    
}