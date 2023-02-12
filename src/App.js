import logo from './logo.svg';
import './App.css';
import Product from './Pages/product/product';
import Home from './Pages/home/home';
import Error from './Pages/error/error';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Categories from './Pages/categories/categories';
function App() {
  return (
    <div className="App">
        {/* <Product/> */}
        <Routes>
        <Route path='/home' element={<Home />}></Route>
          <Route path='/categories' element={<Categories/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
