import TotalContext from "../store/total-context";
import React from 'react'
//const Total=(props)=>{
const Total=()=>{
    return (
        <TotalContext.Consumer>
            {(total) => {
                 return (
                    <div className="customDiv">
                    <h3>Total Component</h3>
                    <hr/>
                    <h2>Total : {total}</h2>
                    </div> 
                    )
           }}
        </TotalContext.Consumer>      
)
        }
        export default Total;