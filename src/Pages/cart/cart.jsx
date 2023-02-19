import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Counter from "../../Components/counter/counter";
import { removeFromCart } from "../../redux/cart/action";
import { REMOVE_FROM_CART } from "../../redux/cart/cartType";
import { updateCount } from "../../redux/cart/action";
import './cart.css'
const Cart=()=>{
    const dispatch= useDispatch();
    const data= useSelector(store=>store);
    const [count,setCount]= useState();
    console.log(data)
    
 
    
      const handCountChange = (count, id) => {
        dispatch(updateCount(id, count));
      };
    
    

    return(
      
    <div className="cart-container">
       <h1 className="cart title">Cart </h1>
       <Link to='/checkout/userDetailForm'>User Detail Form</Link>
       <table>
       {data.product.map((product)=>(
          <div>
         
          <tr className="cart-title">{product.title}</tr>
          <td className="cart-total">TOTAL</td>
          <td className="cart-price">${product.price * product.count}</td>
          <td className="cart-image"><img src={product.image} alt={product.title} /></td>
          <td className="cart-counter"><Counter props={product.count} onCountChange={(count) => handCountChange(count, product.id)}></Counter></td>
          {/* <td className="cart-count">{product.count}</td> */}
          </div>
        ))}
         </table>
       
         <div className="cart-checkout">
  <Outlet />
</div>
    

    </div>)
}
export default Cart;