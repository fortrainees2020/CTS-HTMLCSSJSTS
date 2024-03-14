import React from 'react'
import { useState } from "react";
// How to render the each product name from product object array
export default function Product() {
    //1. Create array of object
    let products=[
        {id:100, pName: "Laptop" , price: 50000},
        {id:200, pName: "Mobile" , price: 40000},
        {id:300, pName: "Mouse" , price: 500}
    ]
    //Map is used in real world application to loop  through array to display the data.
    //Returns an array of product name
    //2. Fetch the product name from product array.
    let pNames= products.map(element=> element.pName);
    console.log(pNames);
    

    //3.set the state of productNames with pNames as useState
   const [productNames, setProducts] = useState(pNames);
  return (
    <div>
        { // Fetch the each pname one by one  from productNames and display
        productNames.map((pname,i)=>{ 
            return (
                <li key={i} >{pname}</li>
            ) })
        }
    </div>
  )
}
