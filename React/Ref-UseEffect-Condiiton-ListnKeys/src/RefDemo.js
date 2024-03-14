// Set the focus on text box based on load of component
import React  from "react"
class RefDemo extends React.Component{
    constructor(props)
    { super(props)
      this.iElement = React.createRef(); //const iElement = useRef(null);
    }
    componentDidMount() // Set focus while mounting 
    {this.iElement.focus()}
render(){
    return(
        <>
        <div>
            Username : <input type ="text" ref= {(elem)=> this.iElement=elem}/>
        </div>
        </>
    )}}
export default RefDemo;