import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { updateProduct, createProduct, getProductsById} from './ProductService';

const ProductCreate = () => {
   
    const [pname, setPname] = useState('')
    const [price, setPrice] = useState('')
    

    const navigate = useNavigate();
    const {id} = useParams(); //@PathVarable like that
        console.log("id from useParamas: "+{id});

    const saveOrUpdateProduct = (e) => {
        e.preventDefault();

        const product = {pname, price} //pname=book price 23
        console.log("Product object is:" +product.pname +product.price);
        if(id){
            console.log('Update called');
            updateProduct(id, product).then((response) => {
                navigate('/products')
            }).catch(error => {
                console.log(error)
            })
        }else{
            createProduct(product).then((response) =>{
                console.log("repsonse Data:"+response.data.pname)
                navigate('/products');
            }).catch(error => {
                console.log(error)
            })
        }
   }

    useEffect(() => {
        if(id){
            console.log("Id is :"+id);
            getProductsById(id).then((response) =>{
                console.log(" getProductBYId called")
                setPname(response.data.pname)
                setPrice(response.data.price)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    const pageTitle = () => {
        if(id){
            return <h2 className = "text-center">Update Product</h2>
        }else{
            return <h2 className = "text-center">Add Product</h2>
        }
    }
    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "pname"
                                        className = "form-control"
                                        value = {pname}
                                        onChange = {(e) => setPname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateProduct(e)} >Submit </button>
                                {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default ProductCreate;