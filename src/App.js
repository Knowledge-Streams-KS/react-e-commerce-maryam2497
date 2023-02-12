import logo from './logo.svg';
import './App.css';
import Product from './Pages/product/product';
import axios from 'axios';
function App() {
  return (
    <div className="App">
       <Routetes>
        <Route  path='/' element={<NavBar />}>
        <Route path='home' element={<Home />}></Route>
          <Route path='/categories' element={<Categories/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/productDetails' element={<ProductDetails/>}></Route>
          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Route></Routetes>
    </div>
  );
}

export default App;
