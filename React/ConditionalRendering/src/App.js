
import React,{useState} from 'react';
import Products from './Products';
 
export default function App() {
const [isAdmin,setIsAdmin]=useState(false);
const inputChangeHandler=(e)=>{
   setIsAdmin(e.target.checked);
}
 return (
   <div className="App">
      <input type="checkbox"
       onChange={inputChangeHandler}
      />Is Admin
      <hr/>
      <Products isAdmin={isAdmin}/>       
   </div>
 );
}