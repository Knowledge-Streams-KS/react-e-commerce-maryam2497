import logo from './logo.svg';
import './App.css';
import Product from './Pages/product/product';
import Home from './Pages/home/home';
import Error from './Pages/error/error';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Categories from './Pages/categories/categories';
import ProductDetails from './Pages/productDetails/productDetails';
import NavBar from './Components/navBar/navBar';
import Cart from './Pages/cart/cart';
import Checkout from './Pages/checkout/checkout';
import UserDetailForm from './Pages/userDetailForm/userDetailForm';
import OrderConfirmation from './Pages/orderConfirmation/orderConfirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Pages/loginForm/loginForm';
import SignUpForm from './Pages/signUpForm/signUpForm';
import MyRoutes from './myRoutes/myRoutes';


function App() {


  return (
    <div className="App">
       <MyRoutes/>
    </div>
  );
}

export default App;
