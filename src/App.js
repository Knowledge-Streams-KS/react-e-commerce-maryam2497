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

function App() {
  return (
    <div className="App">
        <Routes>
        <Route  path='/' element={<NavBar />}>
        <Route path='home' element={<Home />}></Route>
          <Route path='/categories' element={<Categories/>}></Route>
          <Route path='/product/:category?' element={<Product/>}></Route>
          <Route path='/productDetails/:id' element={<ProductDetails/>}></Route>
          <Route path='/checkout' element={<Cart/>}>
          <Route path='userDetailForm' element={<UserDetailForm/>}></Route>
          <Route path='orderConfirmation' element={<OrderConfirmation/>}></Route>
          </Route>
          <Route path='/loginForm' element={<LoginForm/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Route></Routes>
    </div>
  );
}

export default App;
