import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from  './assests/images/shoplogo.jpg'

const NavBar = () => {
 return (
      <>
      <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" width ="100px" />
    </div>
   <nav className="navbar"> 
   
       <ul>
          <li><Link to="/home">Home</Link></li>
          <li> <Link to="/products">Products</Link> </li>
          <li> <Link to="/productsoncard">Product Show</Link> </li>
         
       </ul>
 </nav>
 </>
 );
};
export default NavBar;