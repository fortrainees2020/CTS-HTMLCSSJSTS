import React, { useState, useEffect } from "react";
//It shows the timer 
const DemoUseEffect=()=>{
  const [cTime, setTime] = useState(()=>new Date().toLocaleString);
 
  useEffect(()=> {
    setInterval(()=>{
                setTime(new Date().toLocaleString());
                } ,1000);  });
 return (
    <div> <h3>{cTime}</h3>
        {/*<button onClick={()=> setTime(new Date().toLocaleString())}> Time</button>*/}
     </div>
 )
}
export default DemoUseEffect;