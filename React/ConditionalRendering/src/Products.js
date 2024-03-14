import React, { useState } from "react";
 //1. Condition rendering with IF 
/*const Products = (props) => {
 // eslint-disable-next-line no-unused-vars
 const [items, setItems] = useState([
   { pCode: 1, pName: "Apple" },
   { pCode: 2, pName: "Banana" },
   { pCode: 3, pName: "Grapes" },
   { pCode: 4, pName: "Oranges" }
 ]);
 if(props.isAdmin){
   return(
     items.map((item)=>{
       return(
         <li>{item.pName}</li>
       )
     })
     )
 }else{
   return(
     <h1>No Data Found</h1>
   )
 }
 };
export default Products 


//2. Condition Rendering with Switch
 
const Products = (props) => {
 // eslint-disable-next-line no-unused-vars
 const [items, setItems] = useState([
   { pCode: 1, pName: "Apple" },
   { pCode: 2, pName: "Banana" },
   { pCode: 3, pName: "Grapes" },
   { pCode: 4, pName: "Oranges" }
 ]);
 const prodItems=(
   items.map((item)=>{
     return(
       <li>{item.pName}</li>
     )
   })
 )
 switch(props.isAdmin){
   case true:
     return prodItems
   case false:
     return   <h1>No Data Found using Switch </h1>
   default:
     return null    
 }
 };
export default Products;
*/
 
const Products = (props) => {
 // eslint-disable-next-line no-unused-vars
 const [items, setItems] = useState([
   { pCode: 1, pName: "Apple" },
   { pCode: 2, pName: "Banana" },
   { pCode: 3, pName: "Grapes" },
   { pCode: 4, pName: "Oranges" }
 ]);
  return(
   props.isAdmin ?
   items.map((item)=>{
     return(
       <li>{item.pName}</li>
     )
   })
  :
  <h1>No Data Found using Ternary Operator</h1>
 )
 };
export default Products;