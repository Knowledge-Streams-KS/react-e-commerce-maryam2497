import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/navBar/navBar';
import Home from '../Pages/home/home';
import Categories from '../Pages/categories/categories';
import Product from '../Pages/product/product';
import ProductDetails from '../Pages/productDetails/productDetails';
import Cart from '../Pages/cart/cart';
import UserDetailForm from '../Pages/userDetailForm/userDetailForm';
import LoginForm from '../Pages/loginForm/loginForm';
import SignUpForm from '../Pages/signUpForm/signUpForm';
import Error from '../Pages/error/error';
import OrderConfirmation from '../Pages/orderConfirmation/orderConfirmation';
import CheckOut from '../Pages/checkout/checkout';
import PrivateRoutes from './privateRoutes';
const MyRoutes = () => {
  
  // const userLoggedIn = localStorage.getItem("token");
  return (
       <Routes>
        <Route  path='/' element={<NavBar />}>
        <Route path='home' element={<Home />}></Route>
          <Route path='/categories' element={<Categories/>}></Route>
          <Route path='/product/:category?' element={<Product/>}></Route>
          <Route path='/productDetails/:id' element={<ProductDetails/>}></Route>
          <Route path='/checkout' element={
          <PrivateRoutes>
            <Cart/>
           </PrivateRoutes>}>
          <Route path='userDetailForm' element={
          <privateRoutes>
            <UserDetailForm/>
           </privateRoutes>
          }></Route>
          <Route path='orderConfirmation' element={
            <PrivateRoutes>
          <OrderConfirmation/>
           </PrivateRoutes>
          }></Route>
          </Route>
          <Route path='/loginForm' element={<LoginForm/>}></Route>
          <Route path='/signUpForm' element={<SignUpForm/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Route></Routes>
)}
export default MyRoutes;
