//import logo from './logo.svg';

//import ProductCardShow from './ProductList';
//----Setup Route------
/*1. Install react-router-dom 
2. Add browser router to index.js
3. Create Home component
4. Create ProductList component
5. Add <link >  tag in navbasr component
6. Set route path in app.js*/

//-----Setup React Bootstrap 
/* 1. Install the npm install bootstrap react-bootstrap
2. in index.js - import 'bootstrap/dist/css/bootstrap.min.css';
3. Apply in productlist compoent on table 
*/

//-----Apply CSS on navbar and logo 
/* 1. Create a navbar component
   2.  Create navbar css 
   3. Load the image in src/assests/shoplogo..js*/
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import Home from './Home';
import NavBar from './NavBar';
import ProductCardShow from './ProductCardShow'
import ProductCreate from './ProductCreate';


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
      <Routes>
          <Route path='/home' element={<Home/>} />  
          <Route path='/products' element={<ProductList/>} />
          <Route path='/productsoncard' element={<ProductCardShow/>} />
          <Route path='/' element={<Home/>} />  
          <Route path='/product/:id' element={<ProductCreate/>} />
          <Route path='/product/create' element={<ProductCreate/>} />
       </Routes>
      
   
      
     
    </div>
  );
}

export default App;
