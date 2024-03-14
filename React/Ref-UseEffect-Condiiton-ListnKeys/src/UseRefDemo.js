import { useRef,useEffect } from "react";
// Set the Focus to textbox on Load
const UseRefDemo=()=>{
    const iElement = useRef(null);
    useEffect(()=>
    { iElement.current.focus(); })

    return(
        <><div>
            <input type ="text" ref= {iElement}/>
            <button onClick={()=> iElement.current.focus()}>SetFocus</button>
        </div></>
    )}
export default UseRefDemo;