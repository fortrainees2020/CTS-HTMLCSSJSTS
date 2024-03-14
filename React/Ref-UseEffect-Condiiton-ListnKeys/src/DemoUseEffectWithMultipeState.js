import React, { useState, useEffect } from "react";
//It shows the timer 
const DemoUseEffect=()=>{
  const [cnt, setCount] = useState(0); // state1// cnt=0
  const [flag, setFlag] = useState(true);// state2 // flag = true

   //Use effect will ONLY work for cnt
   useEffect(()=> { console.log("Use Effect called")},[cnt]) 
   
   //Useffect will work for ct anf flag both.
   //useEffect(()=> { console.log("Use Effect called")}) 

 return (
    <div> <h3>{cnt} - {flag.toString()}</h3>
    <button onClick={()=>setCount(cnt+1)}> Increment</button>
    <button onClick={()=>setFlag(!flag)}> Toggle</button>
     </div>
 )}
export default DemoUseEffect;


 